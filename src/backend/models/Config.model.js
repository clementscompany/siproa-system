import { DB } from "../database/offline/db.js";
class Config {
  async create(data) {
    const {
      empresa_nome,
      empresa_nif,
      empresa_endereco,
      empresa_telefone,
      empresa_cedula,
      empresa_email,
      admin_usuario,
      admin_email,
      admin_senha,
      admin_confirmar,
      moeda_padrao,
      taxa_cambio,
      unidade_padrao,
      tema,
      idioma
    } = data;
    const config = `
    INSERT INTO config (empresa_nome, empresa_nif, empresa_endereco, empresa_telefone, empresa_cedula, empresa_email, admin_usuario, admin_email, admin_senha, admin_confirmar, moeda_padrao, taxa_cambio, unidade_padrao, tema, idioma) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;
    DB.run(config, [empresa_nome, empresa_nif, empresa_endereco, empresa_telefone, empresa_cedula, empresa_email, admin_usuario, admin_email, admin_senha, admin_confirmar, moeda_padrao, taxa_cambio, unidade_padrao, tema, idioma]);
  }

  async get() {
    const config = `SELECT * FROM config`;
    const result = await DB.all(config);
    return result;
  }
}

export default new Config();
