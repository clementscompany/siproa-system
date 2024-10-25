import agruparPosicoes from "../../components/duPosicoes/posicoes.js";
import { Modal } from "../../components/modal/Modal.js";

class AgruparPosicoes {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.Init(mainContainer);
  }

  Init(mainContainer) {
    mainContainer.innerHTML = agruparPosicoes();
    this.Positions(mainContainer);
  }

  Positions(mainContainer) {
    const pautaAduaneira = [
      { artigo: 1001, descricao: "Cimento Cola", valorFOB: 100 },
      { artigo: 1002, descricao: "Arroz Uncle Sam", valorFOB: 20 },
      { artigo: 1003, descricao: "Feijão Preto", valorFOB: 30 },
      { artigo: 1004, descricao: "Tinta Industrial", valorFOB: 100 },
    ];

    const artigosInseridos = [];
    const artigosAgrupados = [];

    const tabelaInseridos = mainContainer.querySelector("#tabelaArtigos tbody");
    const tabelaAgrupados = mainContainer.querySelector("#tabelaAgrupados tbody");
    const modal = new Modal(mainContainer);

    const btnAddArtigo = mainContainer.querySelector("#adicionarArtigo");
    const btnAgrupar = mainContainer.querySelector("#agruparArtigos");
    const btnEnviar = mainContainer.querySelector("#enviarAgrupadas");

    btnAddArtigo.addEventListener("click", () => {
      const artigoInput = parseInt(mainContainer.querySelector("#artigoPautal").value);
      const valorFOBInput = parseFloat(mainContainer.querySelector("#valorFOB").value);
      const quantidadeInput = parseInt(mainContainer.querySelector("#quantidade").value);

      if (!artigoInput) {
        modal.showError("Informe o número do artigo pautal!");
        return;
      }

      const pauta = pautaAduaneira.find((p) => p.artigo === artigoInput);
      if (!pauta) {
        modal.showError("Artigo não encontrado na pauta aduaneira!");
        return;
      }

      const valorFOB = valorFOBInput || pauta.valorFOB;
      const totalFOB = valorFOB * quantidadeInput;

      const novoArtigo = {
        artigo: artigoInput,
        descricao: pauta.descricao,
        quantidade: quantidadeInput,
        valorFOB,
        totalFOB,
      };

      artigosInseridos.push(novoArtigo);
      atualizarTabela(tabelaInseridos, artigosInseridos, true);
    });

    btnAgrupar.addEventListener("click", () => {
      if (artigosInseridos.length === 0) {
        modal.showError("Nenhum artigo inserido para agrupar!");
        return;
      }

      const agrupados = {};

      artigosInseridos.forEach((item) => {
        if (!agrupados[item.artigo]) {
          agrupados[item.artigo] = { ...item };
        } else {
          agrupados[item.artigo].quantidade += item.quantidade;
          agrupados[item.artigo].totalFOB += item.totalFOB;
        }
      });

      artigosAgrupados.splice(0, artigosAgrupados.length, ...Object.values(agrupados));
      atualizarTabela(tabelaAgrupados, artigosAgrupados, false);
    });

    btnEnviar.addEventListener("click", () => {
      if (artigosAgrupados.length === 0) {
        modal.showError("Nenhum item agrupado para enviar.");
        return;
      }

      modal.showLoader();
      setTimeout(() => {
        modal.close();
        alert("Itens agrupados enviados com sucesso!");
      }, 1500);
    });

    function atualizarTabela(tbody, lista, podeRemover) {
      tbody.innerHTML = "";
      lista.forEach((item, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.artigo}</td>
          <td>${item.descricao}</td>
          <td>${item.quantidade}</td>
          <td>${item.valorFOB.toFixed(2)}</td>
          <td>${item.totalFOB.toFixed(2)}</td>
          <td>${podeRemover ? `<button class="btn-remove" data-index="${i}">Remover</button>` : "-"}</td>
        `;
        tbody.appendChild(row);
      });

      if (podeRemover) {
        tbody.querySelectorAll(".btn-remove").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            artigosInseridos.splice(index, 1);
            atualizarTabela(tabelaInseridos, artigosInseridos, true);
          });
        });
      }
    }
  }
}

export default AgruparPosicoes;
