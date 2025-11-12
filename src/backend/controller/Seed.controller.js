import User from "../database/offline/models/users.model.js";
import Importadores from "../database/offline/models/importadores.model.js";
import Despachantes from "../database/offline/models/despachantes.model.js";
import Aduanas from "../database/offline/models/aduanas.model.js";
import Regimes from "../database/offline/models/regimes.model.js";
import Contas from "../database/offline/models/contas.model.js";

class Seed {
  // Seed all sample data
  async seedAll(req, res) {
    try {
      // Seed admins
      await this.seedAdmins();

      // Seed importers
      await this.seedImportadores();

      // Seed brokers
      await this.seedDespachantes();

      // Seed customs offices
      await this.seedAduanas();

      // Seed regimes
      await this.seedRegimes();

      // Seed accounts
      await this.seedContas();

      res.status(200).json({
        success: true,
        message: "Dados de exemplo cadastrados com sucesso!"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro ao cadastrar dados!",
        error: error.message
      });
    }
  }

  async seedAdmins() {
    try {
      const admins = [
        {
          nome: "Administrador Principal",
          username: "admin",
          senha: "admin123",
          perfil: "admin",
          email: "admin@sistema.com",
          telefone: "+244 923 456 789"
        },
        {
          nome: "Administrador 2",
          username: "admin2",
          senha: "admin456",
          perfil: "admin",
          email: "admin2@sistema.com",
          telefone: "+244 923 456 788"
        }
      ];

      for (const admin of admins) {
        const existing = await User.getByUsername(admin.username);
        if (!existing) {
          await User.create(admin);
          console.log(`Admin ${admin.username} criado!`);
        }
      }
    } catch (error) {
      console.error("Erro ao criar admins:", error);
    }
  }

  async seedImportadores() {
    try {
      const importadores = [
        {
          codigo: "IMP001",
          nome: "Importadora Angola Ltda",
          nif: "500123456LA048",
          morada: "Rua da Missão, Luanda",
          nacionalidade: "Angolana",
          telefone: "+244 222 111 222",
          email: "contato@importadoraangola.co.ao"
        },
        {
          codigo: "IMP002",
          nome: "Global Traders S.A.",
          nif: "500234567LA048",
          morada: "Avenida 4 de Fevereiro, Luanda",
          nacionalidade: "Angolana",
          telefone: "+244 222 222 333",
          email: "info@globaltraders.co.ao"
        },
        {
          codigo: "IMP003",
          nome: "Comercial Ferreira & Filhos",
          nif: "500345678LA048",
          morada: "Rua Direita do Bungo, Benguela",
          nacionalidade: "Angolana",
          telefone: "+244 272 333 444",
          email: "comercial@ferreira.co.ao"
        }
      ];

      for (const imp of importadores) {
        await Importadores.create(imp);
      }
      console.log("Importadores criados!");
    } catch (error) {
      console.error("Erro ao criar importadores:", error);
    }
  }

  async seedDespachantes() {
    try {
      const despachantes = [
        {
          nome: "José Silva - Despachante Oficial",
          nif: "123456789LA049",
          telefone: "+244 923 111 222",
          email: "jose.silva@despachante.co.ao",
          numero_licenca: "LIC001",
          morada: "Rua Amílcar Cabral, Luanda"
        },
        {
          nome: "Maria Santos Despachos",
          nif: "234567890LA049",
          telefone: "+244 923 222 333",
          email: "maria@despachos.co.ao",
          numero_licenca: "LIC002",
          morada: "Avenida Presidente Neto, Luanda"
        }
      ];

      for (const desp of despachantes) {
        await Despachantes.create(desp);
      }
      console.log("Despachantes criados!");
    } catch (error) {
      console.error("Erro ao criar despachantes:", error);
    }
  }

  async seedAduanas() {
    try {
      const aduanas = [
        {
          codigo: "ADU001",
          nome: "Aduana de Luanda",
          localizacao: "Porto de Luanda"
        },
        {
          codigo: "ADU002",
          nome: "Aduana de Lobito",
          localizacao: "Porto de Lobito, Benguela"
        },
        {
          codigo: "ADU003",
          nome: "Aduana do Dondo",
          localizacao: "Dondo, Cuanza Norte"
        }
      ];

      for (const adu of aduanas) {
        await Aduanas.create(adu);
      }
      console.log("Aduanas criadas!");
    } catch (error) {
      console.error("Erro ao criar aduanas:", error);
    }
  }

  async seedRegimes() {
    try {
      const regimes = [
        {
          codigo: "10",
          descricao: "Importação definitiva para consumo"
        },
        {
          codigo: "40",
          descricao: "Importação temporária"
        },
        {
          codigo: "90",
          descricao: "Reimportação"
        }
      ];

      for (const reg of regimes) {
        await Regimes.create(reg);
      }
      console.log("Regimes criados!");
    } catch (error) {
      console.error("Erro ao criar regimes:", error);
    }
  }

  async seedContas() {
    try {
      // Get IDs from seeded data
      const importadores = await Importadores.getAll();
      const despachantes = await Despachantes.getAll();
      const aduanas = await Aduanas.getAll();
      const regimes = await Regimes.getAll();

      if (importadores.length === 0 || despachantes.length === 0 ||
        aduanas.length === 0 || regimes.length === 0) {
        console.log("Aguardando criação de dados base...");
        return;
      }

      const contas = [
        {
          numero_conta: "DU-2024-001",
          importador_id: importadores[0].id,
          regime_id: regimes[0].id,
          aduana_id: aduanas[0].id,
          despachante_id: despachantes[0].id,
          exportador: "Global Industries Ltd",
          data_abertura: "2024-01-15",
          data_entrada: "2024-01-20",
          data_pagamento: null,
          fob: 50000,
          cif: 55000,
          frete: 3000,
          valor_aduaneiro: 55000,
          cambio: 832.5,
          moeda: "USD",
          manifest_numero: "MAN-2024-001",
          doc_transporte: "BL-12345",
          registo_transporte: "REG-12345",
          valor_a_pagar_du: 12500,
          subtotal: 12500,
          total: 12500,
          status: "pendente",
          observacoes: "Aguardando documentação complementar"
        },
        {
          numero_conta: "DU-2024-002",
          importador_id: importadores[1].id,
          regime_id: regimes[0].id,
          aduana_id: aduanas[0].id,
          despachante_id: despachantes[1].id,
          exportador: "Export Co. Inc.",
          data_abertura: "2024-01-20",
          data_entrada: "2024-01-25",
          data_pagamento: "2024-01-28",
          fob: 120000,
          cif: 135000,
          frete: 8000,
          valor_aduaneiro: 135000,
          cambio: 830.5,
          moeda: "USD",
          manifest_numero: "MAN-2024-002",
          doc_transporte: "BL-12346",
          registo_transporte: "REG-12346",
          valor_a_pagar_du: 30000,
          subtotal: 30000,
          total: 30000,
          status: "processada",
          observacoes: "Processo concluído com sucesso"
        },
        {
          numero_conta: "DU-2024-003",
          importador_id: importadores[2].id,
          regime_id: regimes[0].id,
          aduana_id: aduanas[1].id,
          despachante_id: despachantes[0].id,
          exportador: "Asia Trading Co.",
          data_abertura: "2024-02-01",
          data_entrada: "2024-02-05",
          data_pagamento: null,
          fob: 80000,
          cif: 88000,
          frete: 5000,
          valor_aduaneiro: 88000,
          cambio: 831.0,
          moeda: "USD",
          manifest_numero: "MAN-2024-003",
          doc_transporte: "BL-12347",
          registo_transporte: "REG-12347",
          valor_a_pagar_du: 18000,
          subtotal: 18000,
          total: 18000,
          status: "aberta",
          observacoes: "Em análise"
        },
        {
          numero_conta: "DU-2024-004",
          importador_id: importadores[0].id,
          regime_id: regimes[1].id,
          aduana_id: aduanas[0].id,
          despachante_id: despachantes[1].id,
          exportador: "Europe Exports Ltd",
          data_abertura: "2024-02-10",
          data_entrada: "2024-02-15",
          data_pagamento: null,
          fob: 95000,
          cif: 100000,
          frete: 6000,
          valor_aduaneiro: 100000,
          cambio: 833.0,
          moeda: "EUR",
          manifest_numero: "MAN-2024-004",
          doc_transporte: "BL-12348",
          registo_transporte: "REG-12348",
          valor_a_pagar_du: 21000,
          subtotal: 21000,
          total: 21000,
          status: "pendente",
          observacoes: "Aguardando inspeção física"
        },
        {
          numero_conta: "DU-2024-005",
          importador_id: importadores[1].id,
          regime_id: regimes[0].id,
          aduana_id: aduanas[2].id,
          despachante_id: despachantes[0].id,
          exportador: "African Import Export",
          data_abertura: "2024-02-12",
          data_entrada: "2024-02-18",
          data_pagamento: "2024-02-20",
          fob: 60000,
          cif: 65000,
          frete: 4000,
          valor_aduaneiro: 65000,
          cambio: 832.0,
          moeda: "USD",
          manifest_numero: "MAN-2024-005",
          doc_transporte: "BL-12349",
          registo_transporte: "REG-12349",
          valor_a_pagar_du: 14000,
          subtotal: 14000,
          total: 14000,
          status: "processada",
          observacoes: "Líquida e quitada"
        }
      ];

      for (const conta of contas) {
        await Contas.create(conta);
      }
      console.log("Contas criadas!");
    } catch (error) {
      console.error("Erro ao criar contas:", error);
    }
  }
}

export default new Seed();

