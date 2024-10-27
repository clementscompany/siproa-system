export default function ListaImportadores(){
    return`
        <div class="Lista-Importadores">
            <div class="header-section">
                <h2><button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>Lista de Importadores</h2>
                <button class="add-btn" id="openFormBtn">+ Novo Importador</button>
            </div>
         <div class="table-container">
            <table>
                <thead>
                    <tr>
                         <th>Código Cliente</th>
                         <th>Nome do Importador</th>
                         <th>Endereço</th>
                         <th>Telefone</th>
                         <th>Código Estático</th>
                         <th>Email</th>
                    </tr>
                </thead>
                <tbody id="tabelaImportadores">
                    <tr>
                         <td>DSA/FFG/aaa</td>
                         <td>Joao Bete</td>
                         <td>Bairro Cabassando</td>
                         <td>999-999-999</td>
                         <td>CC-111</td>
                         <td>joaodacruzbete@gmail.com</td>
                    </tr>
                </tbody>
            </table>
         </div>
        </div>
    `;
}