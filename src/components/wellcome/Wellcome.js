export default function WellCome(data) {
  return (
    ` <div class="wellcomePage">
      <div class="content">
        <div class="logo">
          <img src="./src/assets/logo.png" alt="logo">
        </div>
        <div class="title">
          <h1>Sistema de Gestão</h1>
        </div>
        <!-- Botao para configuracao inicial do sistema -->
        <div class="btn-container">
          <button id="configButton" class="btn btn-next">Configuração Inicial</button>
        </div>
      </div>
    </div>`
  )
}