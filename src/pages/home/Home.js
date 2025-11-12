import HomePage from "../../components/homepage/HomePage.js";
import KPICards from "../../components/homepage/KPICards.js";
import RecentContas from "../../components/homepage/RecentContas.js";
import { Api } from "../../api/Api.js";
import { AppUrl } from "../../config/env/env.js";

class Home {
  constructor(mainContainer) {
    this.mainContainer = mainContainer;
    this.api = new Api(AppUrl.server);
    this.user = this.getSessionUser();
    this.Init(mainContainer);
  }

  getSessionUser() {
    const userStr = sessionStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  async Init(mainContainer) {
    mainContainer.innerHTML = HomePage({ stats: {}, recentContas: [] });
    await this.loadDashboardData();
    this.initEventListeners();
  }

  async loadDashboardData() {
    try {
      const [statsResult, contasResult] = await Promise.all([
        this.api.get("/home/stats"),
        this.api.get("/home/recent-contas?limit=5")
      ]);

      const stats = statsResult.success ? statsResult.data : {};
      const recentContas = contasResult.success ? contasResult.data : [];

      // Update the dashboard with real data
      this.updateDashboard(stats, recentContas);
    } catch (error) {
      console.error("Erro ao carregar dados do dashboard:", error);
    }
  }

  updateDashboard(stats, recentContas) {
    // Update KPI cards
    const kpiCards = this.mainContainer.querySelector('.kpi-cards');
    if (kpiCards) {
      kpiCards.outerHTML = KPICards(stats);
    }

    // Update recent contas
    const recentContasSection = this.mainContainer.querySelector('.recent-contas');
    if (recentContasSection) {
      recentContasSection.outerHTML = RecentContas(recentContas);
    }
  }

  initEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = this.mainContainer.querySelector('#mobileMenuBtn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        const sidebar = this.mainContainer.querySelector('.sidebar');
        if (sidebar) {
          sidebar.classList.toggle('mobile-open');
        }
      });
    }

    // Logout button
    const logoutBtn = this.mainContainer.querySelector('#logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        // Clear session
        sessionStorage.removeItem('user');
        // Navigate to login
        window.location.hash = '/login';
      });
    }

    // Update user info in sidebar
    this.updateUserInfo();

    // Menu navigation
    const menuItems = this.mainContainer.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const route = item.getAttribute('data-route');
        if (route) {
          window.location.hash = route;
        }
      });
    });
  }

  updateUserInfo() {
    if (!this.user) return;

    // Update user name in sidebar
    const userNameElement = this.mainContainer.querySelector('.user-name');
    if (userNameElement) {
      userNameElement.textContent = this.user.nome;
    }

    // Update user role in sidebar
    const userRoleElement = this.mainContainer.querySelector('.user-role');
    if (userRoleElement) {
      const roleMap = {
        'admin': 'Administrador',
        'operador': 'Operador',
        'gestor': 'Gestor'
      };
      userRoleElement.textContent = roleMap[this.user.perfil] || this.user.perfil;
    }
  }
}

export default Home;

