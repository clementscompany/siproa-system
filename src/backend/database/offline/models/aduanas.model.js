import { DB } from "../db.js";

class Aduanas {
  // Get all customs
  async getAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM aduanas ORDER BY nome`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get customs by ID
  async getById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM aduanas WHERE id = ?`;
      DB.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Create new customs
  async create(data) {
    return new Promise((resolve, reject) => {
      const { codigo, nome, localizacao } = data;
      const query = `INSERT INTO aduanas (codigo, nome, localizacao) VALUES (?, ?, ?)`;

      DB.run(query, [codigo, nome, localizacao], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Update customs
  async update(id, data) {
    return new Promise((resolve, reject) => {
      const { codigo, nome, localizacao } = data;
      const query = `UPDATE aduanas SET codigo = ?, nome = ?, localizacao = ? WHERE id = ?`;

      DB.run(query, [codigo, nome, localizacao, id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete customs
  async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM aduanas WHERE id = ?`;
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

export default new Aduanas();

