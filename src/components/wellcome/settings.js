export default function ConfiguracaoInicial() {
  return `
  <div class="winform-setup">
    <div class="form-header">
      <h1><i class="bi bi-gear-fill"></i> Configuração Inicial</h1>
      <p>Preencha as informações passo a passo</p>
    </div>

    <form id="formConfiguracao" method="post" novalidate>
      <!-- Etapa 1 -->
      <div class="step active" data-step="1">
        <h2><i class="bi bi-building"></i> Dados da Empresa</h2>
        <div class="grid-2">
          <div class="form-group">
            <label>Nome da Empresa</label>
            <input name="empresa_nome" type="text" placeholder="Ex: Nome da sua empresa">
          </div>
          <div class="form-group">
            <label>NIF</label>
            <input name="empresa_nif" type="text" placeholder="Ex: 5000000000">
          </div>
          <div class="form-group">
            <label>Endereço</label>
            <input name="empresa_endereco" type="text" placeholder="Rua / Cidade / País">
          </div>
          <div class="form-group">
            <label>Telefone</label>
            <input name="empresa_telefone" type="text" placeholder="Ex: +244 999 999 999">
          </div>
          <div class="form-group">
            <label>Cédula</label>
            <input name="empresa_cedula" type="text" placeholder="Ex: 344-554-ABC">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input name="empresa_email" type="email" placeholder="empresa@email.com">
          </div>
        </div>
      </div>

      <!-- Etapa 2 -->
      <div class="step" data-step="2">
        <h2><i class="bi bi-person-badge"></i> Usuário Administrador</h2>
        <div class="grid-2">
          <div class="form-group">
            <label>Nome de Usuário</label>
            <input name="admin_usuario" type="text" placeholder="Ex: admin">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input name="admin_email" type="email" placeholder="admin@email.com">
          </div>
          <div class="form-group">
            <label>Senha</label>
            <input name="admin_senha" type="password" placeholder="********">
          </div>
          <div class="form-group">
            <label>Confirmar Senha</label>
            <input name="admin_confirmar" type="password" placeholder="********">
          </div>
        </div>
      </div>

      <!-- Etapa 3 -->
      <div class="step" data-step="3">
        <h2><i class="bi bi-globe"></i> Parâmetros Aduaneiros</h2>
        <div class="grid-2">
          <div class="form-group">
            <label>Moeda Padrão</label>
            <select name="moeda_padrao">
              <option value="">Selecione</option>
              <option>Kwanza (AOA)</option>
              <option>Dólar (USD)</option>
              <option>Euro (EUR)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Taxa de Câmbio Atual</label>
            <input name="taxa_cambio" type="number" placeholder="Ex: 880">
          </div>
          <div class="form-group">
            <label>Unidade Padrão</label>
            <select name="unidade_padrao">
              <option value="">Selecione</option>
              <option>Kg</option>
              <option>Tonelada</option>
              <option>Litro</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Etapa 4 -->
      <div class="step" data-step="4">
        <h2><i class="bi bi-sliders"></i> Preferências do Sistema</h2>
        <div class="grid-2">
          <div class="form-group">
            <label>Tema</label>
            <select name="tema">
              <option value="">Selecione</option>
              <option>Claro</option>
              <option>Escuro</option>
            </select>
          </div>
          <div class="form-group">
            <label>Idioma</label>
            <select name="idioma">
              <option value="">Selecione</option>
              <option>Português</option>
              <option>Inglês</option>
              <option>Francês</option>
            </select>
          </div>
          <div class="form-group checkbox">
            <input type="checkbox" id="backupAuto" name="backup_auto">
            <label for="backupAuto">Ativar Backup Automático</label>
          </div>
        </div>
      </div>

      <div class="footer">
        <button type="button" class="btn btn-prev"><i class="bi bi-arrow-left"></i> Voltar</button>
        <button type="button" class="btn btn-next">Próximo <i class="bi bi-arrow-right"></i></button>
        <button type="submit" class="btn btn-save hidden"><i class="bi bi-save"></i> Salvar</button>
        <button type="button" class="btn btn-cancel" id="closeButton"><i class="bi bi-x-circle"></i> Cancelar</button>
      </div>
    </form>
  </div>
  `;
}
