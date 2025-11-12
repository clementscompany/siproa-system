import { DB } from "../db.js";

class User {
  // Get user by username
  async getByUsername(username) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM usuarios WHERE username = ? AND ativo = 1`;
      DB.get(query, [username], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Create new user
  async create(data) {
    return new Promise((resolve, reject) => {
      const { nome, username, senha, perfil, email, telefone } = data;
      const query = `INSERT INTO usuarios (nome, username, senha, perfil, email, telefone) VALUES (?, ?, ?, ?, ?, ?)`;
      DB.run(query, [nome, username, senha, perfil, email, telefone], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Update user password
  async updatePassword(username, senha) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE usuarios SET senha = ? WHERE username = ?`;
      DB.run(query, [senha, username], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Check if user has password
  async hasPassword(username) {
    return new Promise((resolve, reject) => {
      const query = `SELECT senha FROM usuarios WHERE username = ? AND ativo = 1`;
      DB.get(query, [username], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row && row.senha && row.senha.length > 0);
        }
      });
    });
  }

  // Verify password
  async verifyPassword(username, senha) {
    return new Promise((resolve, reject) => {
      const query = `SELECT senha FROM usuarios WHERE username = ? AND ativo = 1`;
      DB.get(query, [username], (err, row) => {
        if (err) {
          reject(err);
        } else if (!row) {
          resolve(false);
        } else {
          resolve(row.senha === senha);
        }
      });
    });
  }

  // Get all admins
  async getAllAdmins() {
    return new Promise((resolve, reject) => {
      const query = `SELECT id, nome, username, perfil FROM usuarios WHERE perfil = 'admin' AND ativo = 1`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default new User();