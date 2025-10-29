import Config from "../models/Config.model.js";

class Settings {
  async start(req, res) {
    try {
      await Config.create(req.body);
      res.status(200).json({ success: true, message: "Configuração salva com sucesso!" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro ao salvar configuração!" });
    }
  }

  async getConfig(req, res) {
    try {
      const result = await Config.get();
      res.status(200).json({ success: true, message: "Configuração encontrada com sucesso!", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro ao buscar configuração!", error: error.message });
    }
  }
}

export default new Settings();
