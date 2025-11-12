import { DB } from "../db.js";

class Importadores {
  // Get all importers
  async getAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM importadores ORDER BY nome`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get importer by ID
  async getById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM importadores WHERE id = ?`;
      DB.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Create new importer
  async create(data) {
    return new Promise((resolve, reject) => {
      const { codigo, nome, nif, morada, nacionalidade, telefone, email } = data;
      const query = `INSERT INTO importadores (codigo, nome, nif, morada, nacionalidade, telefone, email) VALUES (?, ?, ?, ?, ?, ?, ?)`;

      DB.run(query, [codigo, nome, nif, morada, nacionalidade, telefone, email], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Update importer
  async update(id, data) {
    return new Promise((resolve, reject) => {
      const { codigo, nome, nif, morada, nacionalidade, telefone, email } = data;
      const query = `UPDATE importadores SET codigo = ?, nome = ?, nif = ?, morada = ?, nacionalidade = ?, telefone = ?, email = ? WHERE id = ?`;

      DB.run(query, [codigo, nome, nif, morada, nacionalidade, telefone, email, id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete importer
  async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM importadores WHERE id = ?`;
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

export default new Importadores();

