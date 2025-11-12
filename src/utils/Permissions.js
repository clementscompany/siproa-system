/**
 * Utility class for handling user permissions based on roles
 */
export class Permissions {
  /**
   * Get current user from session
   */
  static getCurrentUser() {
    const userStr = sessionStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  /**
   * Check if user is logged in
   */
  static isLoggedIn() {
    return this.getCurrentUser() !== null;
  }

  /**
   * Check if user has a specific role
   * @param {string} role - Role to check ('admin', 'operador', 'gestor')
   */
  static hasRole(role) {
    const user = this.getCurrentUser();
    return user && user.perfil === role;
  }

  /**
   * Check if user is admin
   */
  static isAdmin() {
    return this.hasRole('admin');
  }

  /**
   * Check if user is operator
   */
  static isOperator() {
    return this.hasRole('operador');
  }

  /**
   * Check if user is manager
   */
  static isManager() {
    return this.hasRole('gestor');
  }

  /**
   * Get user role label
   */
  static getRoleLabel() {
    const user = this.getCurrentUser();
    if (!user) return 'Não identificado';

    const roleMap = {
      'admin': 'Administrador',
      'operador': 'Operador',
      'gestor': 'Gestor'
    };

    return roleMap[user.perfil] || user.perfil;
  }

  /**
   * Logout user
   */
  static logout() {
    sessionStorage.removeItem('user');
  }

  /**
   * Require authentication - redirect to login if not logged in
   */
  static requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.hash = '/login';
      return false;
    }
    return true;
  }

  /**
   * Require specific role - check if user has required role
   * @param {string} requiredRole - Required role
   * @param {boolean} redirect - Whether to redirect if unauthorized (default: true)
   */
  static requireRole(requiredRole, redirect = true) {
    const user = this.getCurrentUser();

    if (!user) {
      if (redirect) window.location.hash = '/login';
      return false;
    }

    if (user.perfil !== requiredRole) {
      if (redirect) {
        // Could redirect to unauthorized page or home
        alert('Você não tem permissão para acessar esta página');
        window.location.hash = '/home';
      }
      return false;
    }

    return true;
  }

  /**
   * Check if user can perform a specific action based on permissions
   * @param {string} action - Action to check ('create', 'update', 'delete', 'view_all')
   */
  static canPerformAction(action) {
    const user = this.getCurrentUser();
    if (!user) return false;

    // Admin can do everything
    if (user.perfil === 'admin') return true;

    // Define permissions for each role
    const permissions = {
      'gestor': ['create', 'update', 'view_all', 'read'],
      'operador': ['read', 'update', 'create']
    };

    return permissions[user.perfil]?.includes(action) || false;
  }
}

export default Permissions;

