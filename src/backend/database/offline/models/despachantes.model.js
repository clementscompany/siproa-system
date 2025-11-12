import { DB } from "../db.js";

class Despachantes {
  // Get all customs brokers
  async getAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM despachantes ORDER BY nome`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get broker by ID
  async getById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM despachantes WHERE id = ?`;
      DB.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Create new broker
  async create(data) {
    return new Promise((resolve, reject) => {
      const { nome, nif, telefone, email, numero_licenca, morada } = data;
      const query = `INSERT INTO despachantes (nome, nif, telefone, email, numero_licenca, morada) VALUES (?, ?, ?, ?, ?, ?)`;

      DB.run(query, [nome, nif, telefone, email, numero_licenca, morada], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Update broker
  async update(id, data) {
    return new Promise((resolve, reject) => {
      const { nome, nif, telefone, email, numero_licenca, morada } = data;
      const query = `UPDATE despachantes SET nome = ?, nif = ?, telefone = ?, email = ?, numero_licenca = ?, morada = ? WHERE id = ?`;

      DB.run(query, [nome, nif, telefone, email, numero_licenca, morada, id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete broker
  async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM despachantes WHERE id = ?`;
      DB.run(query, [id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }
}

export default new Despachantes();

