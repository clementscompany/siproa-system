export default function Cadimportadores() {
  return (
    `
      <div class="cadastro-importadores">
        <div class="center-form">
              <div class="logo-h2">
          <h2>Cadastro de Importador</h2>
        </div>
        <form id="importerForm">
          <div class="form-group">
            <label for="codigoCliente">Código de Cliente</label>
            <input type="text" id="codigoCliente" placeholder="Ex: 001, 01US/DSA">
          </div>

          <div class="form-group">
            <label for="nomeImportador">Nome do Importador</label>
            <input type="text" id="nomeImportador" placeholder="Nome completo">
         </div>

         <div class="form-group">
          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" placeholder="Rua, nº, Bairro, Cidade">
         </div>

         <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" placeholder="+244 9XX XXX XXX">
         </div>

         <div class="form-group">
          <label for="codigoEstatico">Código Estático</label>
          <input type="text" id="codigoEstatico" placeholder="Ex: IMP-2025">
         </div>

         <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="exemplo@email.com">
         </div>
         <div class="form-group-btn">
          <button type="submit" class="submit-btn">Cadastrar Importador</button>
         </div>
        </form>
        </div>
      </div>
      `
  );
}