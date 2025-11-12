export default function Sidebar() {
  return `
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <i class="bi bi-shield-check"></i>
          <h1>Gestão Aduaneira</h1>
        </div>
      </div>
      <div class="sidebar-menu">
        <a class="menu-item active" data-route="/home" href="#">
          <i class="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </a>
        <a class="menu-item" data-route="/contas" href="#">
          <i class="bi bi-folder"></i>
          <span>Declarações Aduaneiras</span>
        </a>
        <a class="menu-item" data-route="/importadores" href="#">
          <i class="bi bi-building"></i>
          <span>Importadores</span>
        </a>
        <a class="menu-item" data-route="/despachantes" href="#">
          <i class="bi bi-person-badge"></i>
          <span>Despachantes</span>
        </a>
        <a class="menu-item" href="#">
          <i class="bi bi-cash-stack"></i>
          <span>Pagamentos</span>
        </a>
        <a class="menu-item" href="#">
          <i class="bi bi-bar-chart"></i>
          <span>Relatórios</span>
        </a>
        <a class="menu-item" href="#">
          <i class="bi bi-gear"></i>
          <span>Configurações</span>
        </a>
        <a class="menu-item" href="#">
          <i class="bi bi-people"></i>
          <span>Usuários</span>
        </a>
      </div>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">
            <i class="bi bi-person-circle"></i>
          </div>
          <div class="user-details">
            <p class="user-name">Nome do Usuário</p>
            <p class="user-role">Administrador</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

