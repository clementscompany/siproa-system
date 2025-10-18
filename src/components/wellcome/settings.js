export default function ConfigSetup() {
  return `
  <div class="config-setup">
    <div class="titleDaPagina">
      <h1><i class="bi bi-gear"></i> Configuração Inicial</h1>
    </div>
    <div class="tabs">
      <button class="tab active" data-tab="empresa"><i class="bi bi-building"></i> Empresa</button>
      <button class="tab" data-tab="usuario"><i class="bi bi-person"></i> Usuário</button>
      <button class="tab" data-tab="parametros"><i class="bi bi-globe"></i> Parâmetros</button>
      <button class="tab" data-tab="preferencias"><i class="bi bi-sliders"></i> Preferências</button>
    </div>

    <div class="tab-content active" id="empresa">
      <h2><i class="bi bi-building"></i> Dados da Empresa</h2>
      <form id="formEmpresa">
        <label>Nome da Empresa</label>
        <input type="text" placeholder="Ex: Nome da sua empresa">

        <label>NIF</label>
        <input type="text" placeholder="Ex: 5000000000">

        <label>Endereço</label>
        <input type="text" placeholder="Rua / Cidade / País">

        <label>Telefone</label>
        <input type="text" placeholder="Ex: +244 999 999 999">

        <label>Email</label>
        <input type="email" placeholder="empresa@email.com">
      </form>
    </div>

    <div class="tab-content" id="usuario">
      <h2><i class="bi bi-person"></i> Usuário Administrador</h2>
      <form id="formUsuario">
        <label>Nome de Usuário</label>
        <input type="text" placeholder="Ex: admin">

        <label>Email</label>
        <input type="email" placeholder="admin@email.com">

        <label>Senha</label>
        <input type="password" placeholder="********">

        <label>Confirmar Senha</label>
        <input type="password" placeholder="********">
      </form>
    </div>

    <div class="tab-content" id="parametros">
      <h2><i class="bi bi-globe"></i> Parâmetros Aduaneiros</h2>
      <form id="formParametros">
        <label>Moeda Padrão</label>
        <select>
          <option>Kwanza (AOA)</option>
          <option>Dólar (USD)</option>
          <option>Euro (EUR)</option>
        </select>

        <label>Taxa de Câmbio Atual</label>
        <input type="number" placeholder="Ex: 880">

        <label>Unidade Padrão</label>
        <select>
          <option>Kg</option>
          <option>Tonelada</option>
          <option>Litro</option>
        </select>
      </form>
    </div>

    <div class="tab-content" id="preferencias">
      <h2><i class="bi bi-sliders"></i> Preferências do Sistema</h2>
      <form id="formPreferencias">
        <label>Tema</label>
        <select>
          <option>Claro</option>
          <option>Escuro</option>
        </select>

        <label>Idioma</label>
        <select>
          <option>Português</option>
          <option>Inglês</option>
          <option>Francês</option>
        </select>

        <label>Ativar Backup Automático</label>
        <input type="checkbox">
      </form>
    </div>

    <div class="footer">
      <button class="btn-save"><i class="bi bi-save"></i> Salvar</button>
      <button class="btn-cancel" id="closeButton"><i class="bi bi-x-circle"></i> Cancelar</button>
    </div>
  </div>
  `
}
