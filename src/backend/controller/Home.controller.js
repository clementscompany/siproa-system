import Contas from "../database/offline/models/contas.model.js";

class Home {
  // Get dashboard statistics
  async getStats(req, res) {
    try {
      const statusCounts = await Contas.getStatusCount();
      
      // Map status to counts
      const stats = {
        pendentes: 0,
        processadas: 0,
        pagamentosPendentes: 0,
        alertas: 0
      };

      statusCounts.forEach(item => {
        if (item.status === 'pendente' || item.status === 'aberta') {
          stats.pendentes += item.count;
        } else if (item.status === 'processada') {
          stats.processadas += item.count;
        }
      });

      res.status(200).json({ 
        success: true, 
        data: stats 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar estatísticas!", 
        error: error.message 
      });
    }
  }

  // Get recent accounts
  async getRecentContas(req, res) {
    try {
      const limit = req.query.limit || 10;
      const contas = await Contas.getAll();
      
      // Get only the most recent
      const recentContas = contas.slice(0, limit);

      res.status(200).json({ 
        success: true, 
        data: recentContas 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar declarações!", 
        error: error.message 
      });
    }
  }
}

export default new Home();

