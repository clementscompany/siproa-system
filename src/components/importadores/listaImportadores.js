export default function ListaImportadores(){
    return`
        <div class="table-list">

            <!-- Topo -->
                 <div class="top-bar">
                    <button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>
                    <h2>Lista de Importadores</h2>
                 </div>

            <!-- Tabela -->
                <div class="table-container-list">
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
                            <td>DSA/FFG/AAA</td>
                            <td>João Bete</td>
                            <td>Bairro Cabassando</td>
                            <td>999-999-999</td>
                            <td>CC-111</td>
                            <td>joaodacruzbete@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <!-- Botão no rodapé -->
                <div class="bottom-bar">
                    <button class="add-btn" id="openFormBtn">+ Novo Importador</button>
                </div>
        </div>

    `;
}