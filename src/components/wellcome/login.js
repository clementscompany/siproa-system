export default function Login() {
  return (
    `
    <div class="login-page" id="login">
      <form action="" class="form-login">
        <div class="icons">
          <span><i class="bi bi-person"></i></span>
          <h1>Login</h1>
        </div>
        <div class="fields">
          <label for="username">
            <i class="bi bi-person"></i> Usuario
          </label>
          <select id="username">
            <option value="">Selecione um utilizador </option>
            <option value="admin">admin</option>
          </select>
        </div>
        <div class="fields password-field">
          <label for="password">
            <i class="bi bi-lock"></i> Senha
          </label>
          <div class="password-wrapper">
            <input type="password" placeholder="Digite a sua senha" id="password" />
            <i class="bi bi-eye" id="togglePassword" aria-label="Mostrar senha" role="button"></i>
          </div>
        </div>
        <button class="btnlogin">Entrar</button>
        <div class="admin-login-container">
          <span type="button" class="btn-admin-login" id="openAdminLogin">
            Login como Admin
          </span>
        </div>
      </form>
      
      <!-- Overlay para a Sidebar -->
      <div class="admin-sidebar-overlay" id="adminSidebarOverlay"></div>
      
      <!-- Sidebar de Login como Admin -->
      <div class="admin-sidebar" id="adminSidebar">
        <div class="admin-sidebar-content">
          <div class="admin-sidebar-header">
            <div class="icons">
              <span><i class="bi bi-person-check"></i></span>
              <h1>Login como Admin</h1>
            </div>
            <button class="admin-sidebar-close" id="closeAdminSidebar">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <form action="" class="form-login-admin" id="adminLoginForm">
            <div class="fields">
              <label for="adminUsername">
                <i class="bi bi-person"></i> Usuario Admin
              </label>
              <input type="text" id="adminUsername" placeholder="Digite o usuário admin" />
            </div>
            <div class="fields password-field">
              <label for="adminPassword">
                <i class="bi bi-lock"></i> Senha Admin
              </label>
              <div class="password-wrapper">
                <input type="password" placeholder="Digite a sua senha" id="adminPassword" />
                <i class="bi bi-eye" id="toggleAdminPassword" aria-label="Mostrar senha" role="button"></i>
              </div>
            </div>
            <button type="button" class="btnlogin">Entrar como Admin</button>
          </form>
        </div>
      </div>
    </div>
    `
  );
}