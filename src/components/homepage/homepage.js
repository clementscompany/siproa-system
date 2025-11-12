import Sidebar from "./Sidebar.js";
import TopNav from "./TopNav.js";
import KPICards from "./KPICards.js";
import RecentContas from "./RecentContas.js";

export default function HomePage(data = {}) {
  return `
    <div class="home-layout">
      ${Sidebar()}
      <div class="home-content">
        ${TopNav()}
        <main class="home-main">
          ${KPICards(data.stats)}
          ${RecentContas(data.recentContas)}
        </main>
      </div>
    </div>
  `;
}
