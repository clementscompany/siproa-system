export default function RecentContas(contas = []) {
  if (contas.length === 0) {
    return `
      <div class="recent-contas">
        <div class="recent-contas-header">
          <h3>Declarações Recentes</h3>
          <div class="recent-contas-actions">
            <button class="btn-icon btn-add" id="addContaBtn">
              <i class="bi bi-plus"></i>
              <span>Adicionar</span>
            </button>
            <button class="btn-icon btn-export" id="exportBtn">
              <i class="bi bi-upload"></i>
              <span>Exportar</span>
            </button>
          </div>
        </div>
        <div class="empty-state">
          <i class="bi bi-folder-x"></i>
          <p>Nenhuma declaração encontrada</p>
        </div>
      </div>
    `;
  }

  const getStatusClass = (status) => {
    const statusMap = {
      'aberta': 'status-open',
      'em_andamento': 'status-progress',
      'processada': 'status-complete',
      'pendente': 'status-pending',
      'rejeitada': 'status-rejected'
    };
    return statusMap[status] || 'status-default';
  };

  const getStatusLabel = (status) => {
    const labelMap = {
      'aberta': 'Aberta',
      'em_andamento': 'Em Andamento',
      'processada': 'Processada',
      'pendente': 'Pendente',
      'rejeitada': 'Rejeitada'
    };
    return labelMap[status] || status;
  };

  return `
    <div class="recent-contas">
      <div class="recent-contas-header">
        <h3>Declarações Recentes</h3>
        <div class="recent-contas-actions">
          <button class="btn-icon btn-add" id="addContaBtn">
            <i class="bi bi-plus"></i>
            <span>Adicionar</span>
          </button>
          <button class="btn-icon btn-export" id="exportBtn">
            <i class="bi bi-upload"></i>
            <span>Exportar</span>
          </button>
        </div>
      </div>
      <div class="table-wrapper">
        <table class="contas-table">
          <thead>
            <tr>
              <th>ID da Declaração</th>
              <th>Data</th>
              <th>Status</th>
              <th>Valor Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${contas.map(conta => `
              <tr>
                <td class="font-medium">#${conta.numero_conta}</td>
                <td>${conta.data_abertura || 'N/A'}</td>
                <td>
                  <span class="status-badge ${getStatusClass(conta.status)}">
                    ${getStatusLabel(conta.status)}
                  </span>
                </td>
                <td>AKZ ${parseFloat(conta.total || 0).toLocaleString('pt-AO')}</td>
                <td class="actions">
                  <button class="btn-action btn-edit" data-id="${conta.id}">
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button class="btn-action btn-delete" data-id="${conta.id}">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

