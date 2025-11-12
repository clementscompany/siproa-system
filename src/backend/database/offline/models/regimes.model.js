import { DB } from "../db.js";

class Regimes {
  // Get all regimes
  async getAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM regimes ORDER BY codigo`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get regime by ID
  async getById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM regimes WHERE id = ?`;
      DB.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Create new regime
  async create(data) {
    return new Promise((resolve, reject) => {
      const { codigo, descricao } = data;
      const query = `INSERT INTO regimes (codigo, descricao) VALUES (?, ?)`;

      DB.run(query, [codigo, descricao], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Update regime
  async update(id, data) {
    return new Promise((resolve, reject) => {
      const { codigo, descricao } = data;
      const query = `UPDATE regimes SET codigo = ?, descricao = ? WHERE id = ?`;

      DB.run(query, [codigo, descricao, id], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Delete regime
  async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM regimes WHERE id = ?`;
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

export default new Regimes();

