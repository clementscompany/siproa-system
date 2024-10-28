export default function listapaises(){
    return`
    <div class="arquivos-container">
  <div class="title-adicoes">
    <h1><i class="bi bi-globe"></i>Paises</h1>
    <button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>
  </div>

  <div class="container-arquivos-tab">
    <table>
      <thead>
        <tr>
          <th>Pais</th>
          <th>Código País</th>
          <th>Moeda</th>
          <th>Código Moeda</th>
          <th>Simbolo</th>
          <th>Bandeira</th>
        </tr>
      </thead>
      <tbody>
         <tr>
          <td>Angola</td>
          <td>AO</td>
          <td>Kwanza</td>
          <td>AOA</td>
          <td>$</td>
          <td>Bandeira</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `;
}