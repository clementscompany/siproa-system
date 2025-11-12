import { DB } from "../db.js";

class Contas {
  // Get all accounts
  async getAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM contas ORDER BY criado_em DESC`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get account by ID
  async getById(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM contas WHERE id = ?`;
      DB.get(query, [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Get account by number
  async getByNumber(numero_conta) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM contas WHERE numero_conta = ?`;
      DB.get(query, [numero_conta], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Create new account
  async create(data) {
    return new Promise((resolve, reject) => {
      const {
        numero_conta, importador_id, regime_id, aduana_id, despachante_id,
        exportador, data_abertura, data_entrada, data_pagamento, fob, cif, frete,
        valor_aduaneiro, cambio, moeda, manifest_numero, doc_transporte,
        registo_transporte, valor_a_pagar_du, subtotal, total, status, observacoes
      } = data;

      const query = `
        INSERT INTO contas (
          numero_conta, importador_id, regime_id, aduana_id, despachante_id,
          exportador, data_abertura, data_entrada, data_pagamento, fob, cif, frete,
          valor_aduaneiro, cambio, moeda, manifest_numero, doc_transporte,
          registo_transporte, valor_a_pagar_du, subtotal, total, status, observacoes
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      DB.run(query, [
        numero_conta, importador_id, regime_id, aduana_id, despachante_id,
        exportador, data_abertura, data_entrada, data_pagamento, fob, cif, frete,
        valor_aduaneiro, cambio, moeda, manifest_numero, doc_transporte,
        registo_transporte, valor_a_pagar_du, subtotal, total, status, observacoes
      ], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }

  // Update account
  async update(id, data) {
    return new Promise((resolve, reject) => {
      const {
        numero_conta, importador_id, regime_id, aduana_id, despachante_id,
        exportador, data_abertura, data_entrada, data_pagamento, fob, cif, frete,
        valor_aduaneiro, cambio, moeda, manifest_numero, doc_transporte,
        registo_transporte, valor_a_pagar_du, subtotal, total, status, observacoes
      } = data;

      const query = `
        UPDATE contas SET
          numero_conta = ?, importador_id = ?, regime_id = ?, aduana_id = ?, despachante_id = ?,
          exportador = ?, data_abertura = ?, data_entrada = ?, data_pagamento = ?, fob = ?, cif = ?, frete = ?,
          valor_aduaneiro = ?, cambio = ?, moeda = ?, manifest_numero = ?, doc_transporte = ?,
          registo_transporte = ?, valor_a_pagar_du = ?, subtotal = ?, total = ?, status = ?, observacoes = ?,
          atualizado_em = CURRENT_TIMESTAMP
        WHERE id = ?
      `;

      DB.run(query, [
        numero_conta, importador_id, regime_id, aduana_id, despachante_id,
        exportador, data_abertura, data_entrada, data_pagamento, fob, cif, frete,
        valor_aduaneiro, cambio, moeda, manifest_numero, doc_transporte,
        registo_transporte, valor_a_pagar_du, subtotal, total, status, observacoes, id
      ], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      });
    });
  }

  // Get accounts by status
  async getByStatus(status) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM contas WHERE status = ? ORDER BY criado_em DESC`;
      DB.all(query, [status], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Get accounts count by status
  async getStatusCount() {
    return new Promise((resolve, reject) => {
      const query = `SELECT status, COUNT(*) as count FROM contas GROUP BY status`;
      DB.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Delete account
  async delete(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM contas WHERE id = ?`;
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

export default new Contas();

