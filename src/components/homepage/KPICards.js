export default function KPICards(data = {}) {
  const {
    pendentes = 0,
    processadas = 0,
    pagamentosPendentes = 0,
    alertas = 0
  } = data;

  return `
    <div class="kpi-cards">
      <div class="kpi-card kpi-orange">
        <div class="kpi-icon">
          <i class="bi bi-hourglass-split"></i>
        </div>
        <div class="kpi-content">
          <p class="kpi-label">Declarações Pendentes</p>
          <p class="kpi-value">${pendentes}</p>
        </div>
      </div>
      <div class="kpi-card kpi-blue">
        <div class="kpi-icon">
          <i class="bi bi-credit-card"></i>
        </div>
        <div class="kpi-content">
          <p class="kpi-label">Pagamentos Pendentes</p>
          <p class="kpi-value">${pagamentosPendentes}</p>
        </div>
      </div>
      <div class="kpi-card kpi-green">
        <div class="kpi-icon">
          <i class="bi bi-check-circle"></i>
        </div>
        <div class="kpi-content">
          <p class="kpi-label">Declarações Processadas</p>
          <p class="kpi-value">${processadas}</p>
        </div>
      </div>
      <div class="kpi-card kpi-red">
        <div class="kpi-icon">
          <i class="bi bi-exclamation-triangle"></i>
        </div>
        <div class="kpi-content">
          <p class="kpi-label">Alertas</p>
          <p class="kpi-value">${alertas}</p>
        </div>
      </div>
    </div>
  `;
}

