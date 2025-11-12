export default function TopNav() {
  return `
    <header class="topnav">
      <div class="topnav-left">
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i class="bi bi-list"></i>
        </button>
        <h2 class="page-title">Dashboard</h2>
      </div>
      <div class="topnav-right">
        <button class="topnav-btn notifications-btn" id="notificationsBtn">
          <i class="bi bi-bell"></i>
          <span class="badge">3</span>
        </button>
        <div class="language-selector">
          <i class="bi bi-globe"></i>
          <span>Português</span>
          <i class="bi bi-chevron-down"></i>
        </div>
        <button class="topnav-btn logout-btn" id="logoutBtn">
          <i class="bi bi-box-arrow-right"></i>
          <span>Sair</span>
        </button>
      </div>
    </header>
  `;
}

