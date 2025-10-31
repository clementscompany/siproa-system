export default function exportadores() {
  return (
    `
     <div class="cadastro-container-partilhado">
  <div class="center-form">
    <div class="header-form">
      <h2>Cadastro de Exportadores</h2>
      <button class="btn-voltar">
        <i class="bi bi-arrow-left-circle"></i> Voltar
      </button>
    </div>

    <form id="exportersForm">
      <div class="form-grid">
        <div class="form-group">
          <label for="codigoCliente">Código EXP</label>
          <input type="text" id="codigoCliente" placeholder="Ex: 001, 01US/DSA">
        </div>

        <div class="form-group">
          <label for="ine">I.N.E</label>
          <input type="text" id="ine" placeholder="Ex: 999999999">
        </div>

        <div class="form-group">
          <label for="nomeExportador">Nome do Exportador</label>
          <input type="text" id="nomeExportador" placeholder="Nome completo">
        </div>

        <div class="form-group">
          <label for="endereco">Endereço completo</label>
          <input type="text" id="endereco" placeholder="Rua, nº, Bairro">
        </div>

        <div class="form-group">
          <label for="cidade">Cidade do Fornecedor</label>
          <input type="text" id="cidade" placeholder="Ex: Cabinda">
        </div>

        <div class="form-group">
          <label for="paisExp">País do Fornecedor</label>
          <input type="text" id="paisExp" placeholder="Ex: Angola">
        </div>

        <div class="form-group">
          <label for="nomeEntidade">Nome da Entidade Angolana</label>
          <input type="text" id="nomeEntidade" placeholder="Nome da Entidade">
        </div>

        <div class="form-group">
          <label for="nif">Número de Contribuinte (NIF)</label>
          <input type="text" id="nif" placeholder="NIF da Entidade">
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