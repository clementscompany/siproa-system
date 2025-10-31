export default function importadores() {
  return (
    `
       <div class="cadastro-container-partilhado">
  <div class="center-form">
    <div class="header-form">
      <h2>Cadastro de Importadores</h2>
      <button class="btn-voltar">
        <i class="bi bi-arrow-left-circle"></i> Voltar
      </button>
    </div>

    <form id="exportersForm">
      <div class="form-grid">
        <div class="form-group">
          <label for="codigoCliente">Código Cliente</label>
          <input type="text" id="codigoCliente" placeholder="Ex: 001, 01US/DSA">
        </div>

        <div class="form-group">
          <label for="nomeExportador">Nome do Importador</label>
          <input type="text" id="nomeImportador" placeholder="Nome completo">
        </div>

        <div class="form-group">
          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" placeholder="Rua, nº, Bairro">
        </div>

        <div class="form-group">
          <label for="cidade">Telefone</label>
          <input type="text" id="cidade" placeholder="Ex: Cabinda">
        </div>

        <div class="form-group">
          <label for="paisExp">Código Estático</label>
          <input type="text" id="" placeholder="Ex: ##$%-667-???">
        </div>

        <div class="form-group">
          <label for="nomeEntidade">Email</label>
          <input type="email" id="emailimp" placeholder="siproa2025@gmail.com">
        </div>

      </div>

      <div class="form-group-btn">
        <button type="submit" class="submit-btn">Cadastrar Exportador</button>
      </div>
    </form>
  </div>
</div>
      `
  );
}