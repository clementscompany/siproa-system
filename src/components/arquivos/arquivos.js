export default function arquivosProcessos(){
    return`
        <div class="arquivos-container">
  <div class="title-adicoes">
    <h1><i class="bi bi-file-text"></i> Arquivos</h1>
    <button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>
  </div>

  <div class="top-bar-arq">
    <div class="btn-group-custom">
      <button class="btn btn-outline-primary"><i class="bi bi-box-arrow-in-down"></i> Emprestar</button>
      <button class="btn btn-outline-secondary"><i class="bi bi-box-arrow-up"></i> Devolver</button>
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
    <table>
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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>00NNAA</td>
          <td>Organizações Bete</td>
          <td>88/KK/987</td>
          <td>Arroz, Máquinas Cálculadoras</td>
          <td>20/10/2025</td>
          <td><span class="status concluido">Concluído</span></td>
          <td>60d 5h 46m</td>
          <td><i class="bi bi-file-earmark-text"></i> doc-bete.pdf</td>
          <td class="acoes">
            <i class="bi bi-bell" title="Notificar"></i>
            <i class="bi bi-eye" title="Ver detalhes"></i>
            <i class="bi bi-trash" title="Excluir"></i>
            <i class="bi bi-printer" title="Imprimir"></i>
          </td>
          <tr>
          <td>00NNAA</td>
          <td>Organizações Bete</td>
          <td>88/KK/987</td>
          <td>Arroz, Máquinas Cálculadoras</td>
          <td>20/10/2025</td>
          <td><span class="status concluido">Concluído</span></td>
          <td>60d 5h 46m</td>
          <td><i class="bi bi-file-earmark-text"></i> doc-bete.pdf</td>
          <td class="acoes">
            <i class="bi bi-bell" title="Notificar"></i>
            <i class="bi bi-eye" title="Ver detalhes"></i>
            <i class="bi bi-trash" title="Excluir"></i>
            <i class="bi bi-printer" title="Imprimir"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `;
}