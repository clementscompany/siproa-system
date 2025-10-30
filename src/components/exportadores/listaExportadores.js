export default function ListaExportadores(){
    return`
        <div class="table-list">

            <!-- Topo -->
                 <div class="top-bar">
                    <button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>
                    <h2>Lista de Exportadores</h2>
                 </div>

            <!-- Tabela -->
                <div class="table-container-list">
                <table>
                    <thead>
                        <tr>
                            <th>Código Cliente</th>
                            <th>I.N.E</th>
                            <th>Nome do Exportador</th>
                            <th>Enderço Completo</th>
                            <th>Cidade do Fornecedor</th>
                            <th>Pais do Fonecedor</th>
                            <th>Nome da Entidade</th>
                            <th>Número de Contribuiente</th>
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
                             <td>999-999-999</td>
                            <td>CC-111</td>
                        </tr>
                                  <tr>
                            <td>DSA/FFG/AAA</td>
                            <td>João Bete</td>
                            <td>Bairro Cabassando</td>
                            <td>999-999-999</td>
                            <td>CC-111</td>
                            <td>joaodacruzbete@gmail.com</td>
                             <td>999-999-999</td>
                            <td>CC-111</td>
                        </tr>
                                  <tr>
                            <td>DSA/FFG/AAA</td>
                            <td>João Bete</td>
                            <td>Bairro Cabassando</td>
                            <td>999-999-999</td>
                            <td>CC-111</td>
                            <td>joaodacruzbete@gmail.com</td>
                             <td>999-999-999</td>
                            <td>CC-111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <!-- Botão no rodapé -->
                <div class="bottom-bar">
                    <button class="add-btn" id="openFormBtn">+ Novo Exportador</button>
                </div>
        </div>
    `;
}