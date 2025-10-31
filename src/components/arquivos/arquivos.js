export default function arquivosProcessos(){
    return`
        <div class="arquivos-container">
  <div class="title-adicoes">
    <h1><i class="bi bi-file-text"></i> Arquivos</h1>
    <button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>
  </div>

  <div class="top-bar-arq">
    <div class="btn-group-custom">
      <button class="btn btn-outline-primary"> <i class="bi bi-box-arrow-up"></i> Emprestar</button>
      <button class="btn btn-outline-secondary"><i class="bi bi-box-arrow-in-down"></i>Devolver</button>
      <button class="btn btn-outline-success"><i class="bi bi-journal-plus"></i> Novo Processo</button>
    </div>

    <div class="search-part">
      <input type="text" id="searchprocess" placeholder="Procurar processo...">
      <button class="search-btn" id="btn-search"><i class="bi bi-search"></i></button>
    </div>

    <div class="btn-group-custom">
      <button class="btn btn-outline-warning"><i class="bi bi-arrow-clockwise"></i> Atualizar</button>
    </div>
  </div>

  <div class="container-arquivos-tab">
  <table class="tabela-arquivos">
    <thead>
      <tr>
        <th>Processo nº</th>
        <th>Nome do Cliente / Empresa</th>
        <th>DU nº</th>
        <th>Descrição da Mercadoria</th>
        <th>Data</th>
        <th>Situação</th>
        <th>Tempo</th>
        <th>Arquivos</th>
        <th>Processo nº</th>
        <th>Nome do Cliente / Empresa</th>
        <th>DU nº</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>CCA/DD/789</td>
        <td>Empresa ABC Lda</td>
        <td>DU/2024/0567</td>
        <td>Peças Automotivas</td>
        <td>25/10/2025</td>
        <td><span class="status ativo">Ativo</span></td>
        <td>12 dias</td>
        <td><i class="bi bi-folder2-open"></i></td>
        <td>PRC/456</td>
        <td>Importadora X</td>
        <td>DU/2024/1234</td>
        <td class="acoes">
          <button class="btn-acao visualizar" title="Visualizar">
            <i class="bi bi-eye"></i>
          </button>
          <button class="btn-acao imprimir" title="Imprimir">
            <i class="bi bi-printer"></i>
          </button>
          <button class="btn-acao editar" title="Editar">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn-acao excluir" title="Excluir">
            <i class="bi bi-trash3"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
    `;
}