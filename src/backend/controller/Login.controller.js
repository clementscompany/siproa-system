import User from "../database/offline/models/users.model.js";

class Login {
  // Check if admin has password
  async checkPassword(req, res) {
    try {
      const { username } = req.body;

      if (!username) {
        return res.status(400).json({
          success: false,
          message: "Username é obrigatório!"
        });
      }

      const hasPassword = await User.hasPassword(username);

      res.status(200).json({
        success: true,
        hasPassword
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao verificar senha!",
        error: error.message
      });
    }
  }

  // Create or update admin password
  async createPassword(req, res) {
    try {
      const { username, senha, senhaConfirmacao } = req.body;

      if (!username || !senha || !senhaConfirmacao) {
        return res.status(400).json({
          success: false,
          message: "Todos os campos são obrigatórios!"
        });
      }

      if (senha !== senhaConfirmacao) {
        return res.status(400).json({
          success: false,
          message: "As senhas não coincidem!"
        });
      }

      const result = await User.updatePassword(username, senha);

      if (result.changes === 0) {
        return res.status(404).json({
          success: false,
          message: "Usuário não encontrado!"
        });
      }

      res.status(200).json({
        success: true,
        message: "Senha cadastrada com sucesso!"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao cadastrar senha!",
        error: error.message
      });
    }
  }

  // Login admin
  async login(req, res) {
    try {
      const { username, senha } = req.body;

      if (!username || !senha) {
        return res.status(400).json({
          success: false,
          message: "Username e senha são obrigatórios!"
        });
      }

      const isValid = await User.verifyPassword(username, senha);

      if (!isValid) {
        return res.status(401).json({
          success: false,
          message: "Credenciais inválidas!"
        });
      }

      const user = await User.getByUsername(username);

      res.status(200).json({
        success: true,
        message: "Login realizado com sucesso!",
        data: {
          id: user.id,
          username: user.username,
          nome: user.nome,
          perfil: user.perfil
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao realizar login!",
        error: error.message
      });
    }
  }

  // Get all admins
  async getAdmins(req, res) {
    try {
      const admins = await User.getAllAdmins();

      res.status(200).json({
        success: true,
        data: admins
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao buscar admins!",
        error: error.message
      });
    }
  }
}

export default new Login();
