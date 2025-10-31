export default function agruparPosicoes(){
    return`
            <div class="container-posicoes">
                <div class="posicoes-group-positions">
                    <h1>Posições</h1>
                <div class="left-top-process">
                    <button class="btn-cancelar-posicoes">Cancelar</button>
                </div>
            </div>
            <div class="artigo-form">
                    <input type="number" id="artigoPautal" placeholder="Artigo Pautal">
                    <input type="number" id="valorFOB" placeholder="Valor FOB (opcional)">
                    <input type="number" id="quantidade" placeholder="Quantidade" value="1" min="1">
                    <button id="adicionarArtigo">Adicionar Artigo</button>
            </div>
            <div class="container-first-positions-group">
                <h2>Inserção de Posições</h2>
                <table id="tabelaArtigos">
                    <thead>
                        <tr>
                            <th>Artigo Pautal</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Valor FOB</th>
                            <th>Total FOB</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

                <div class="btns">
                    <button id="agruparArtigos">Agrupar Itens Iguais</button>
                </div>
            </div>

            <!-- Tabela de agrupados -->
                <div class="container-first-positions-group">
                    <h2>Posições Agrupadas</h2>
                    <table id="tabelaAgrupados">
                        <thead>
                            <tr>
                                <th>Artigo Pautal</th>
                                <th>Descrição</th>
                                <th>Quantidade Total</th>
                                <th>Total FOB</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div class="btns">
                        <button id="enviarAgrupadas">Enviar Itens Agrupados</button>
                    </div>
                </div>
            </div>
    `;
}