export default function fatura(){
    return`
    <div class="table-fatura">
        <header>
            <img src="src/img/icon.jpeg" alt="Logotipo" />
            <h3>JMX - José Mayamona Xingui</h3>
            <p>Despachante Oficial • Cédula nº 01068 Série D</p>
            <h4>Direcção Regional das Alfândegas de Cabinda</h4>
        </header>

        <!-- DADOS PRINCIPAIS -->
        <table class="dados-principais">
            <tr>
                <th>Data de Entrada</th>
                <td>01/11/2025</td>
                <th>C/Marca Nº</th>
                <td>CM-2025-044</td>
            </tr>
            <tr>
                <th>B.L. Nº</th>
                <td>BL-3399</td>
                <th>Via</th>
                <td>Marítima</td>
            </tr>
            <tr>
                <th>Origem</th>
                <td>China</td>
                <th>Fob</th>
                <td>12 000,00</td>
            </tr>
            <tr>
                <th>Frete</th>
                <td>3 500,00</td>
                <th>Seguro</th>
                <td>500,00</td>
            </tr>
            <tr>
                <th>CIF</th>
                <td>16 000,00</td>
                <th>Cliente/Empresa</th>
                <td>Global Trading Lda</td>
            </tr>
            <tr>
                <th>Req. Fundo Nº</th>
                <td>RF-8812</td>
                <th>Moeda</th>
                <td>USD</td>
            </tr>
            <tr>
                <th>Câmbio</th>
                <td>840,00</td>
                <th>Valor Aduaneiro</th>
                <td>Kz 13 440 000,00</td>
            </tr>
            <tr>
                <th>Factura Nº</th>
                <td>FT-7791</td>
                <th>D.U. Nº</th>
                <td>DU-5549</td>
            </tr>
        </table>

        <h4>Designação da Mercadoria:</h4>
        <p>Motores Industriais - Peças sobressalentes</p>

        <!-- BLOCO 1 -->
        <table class="tabela-bloco">
            <thead>
                <tr>
                    <th colspan="3">Regime Geral</th>
                </tr>
                <tr>
                    <th>Descrição</th>
                    <th>Moeda</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1. Imposto Sobre Importação</td>
                    <td>Kz</td>
                    <td>1 000 000,00</td>
                </tr>
                <tr>
                    <td>2. IVA</td>
                    <td>Kz</td>
                    <td>900 000,00</td>
                </tr>
                <tr>
                    <td>3. Imposto de Selo</td>
                    <td>Kz</td>
                    <td>15 000,00</td>
                </tr>
                <tr>
                    <td>4. Emolumentos Gerais</td>
                    <td>Kz</td>
                    <td>4 400,00</td>
                </tr>
                <tr>
                    <td>5. Sobre Taxa</td>
                    <td>Kz</td>
                    <td>0,00</td>
                </tr>
                <tr>
                    <td>6. Multas CRF ou Atraso D.U.</td>
                    <td>Kz</td>
                    <td>0,00</td>
                </tr>
                <tr>
                    <td colspan="3" class="subtotal">SubTotal: Kz 1 919 400,00</td>
                </tr>
            </tbody>
        </table>

        <!-- BLOCO 2 -->
        <table class="tabela-bloco">
            <thead>
                <tr>
                    <th colspan="3">Taxas e Serviços</th>
                </tr>
                <tr>
                    <th>Descrição</th>
                    <th>Moeda</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>7. EP 17</td>
                    <td>Kz</td>
                    <td>1 844 428,00</td>
                </tr>
                <tr>
                    <td>8. Veterinário/Saúde</td>
                    <td>Kz</td>
                    <td>0,00</td>
                </tr>
                <tr>
                    <td>9. Validação do BL</td>
                    <td>Kz</td>
                    <td>1 003 380,39</td>
                </tr>
                <tr>
                    <td>10. Deslocação e Acompanhamento</td>
                    <td>Kz</td>
                    <td>140 000,00</td>
                </tr>
                <tr>
                    <td colspan="3" class="subtotal">SubTotal: Kz 2 987 808,39</td>
                </tr>
            </tbody>
        </table>

        <!-- BLOCO 3 -->
        <table class="tabela-bloco">
            <thead>
                <tr>
                    <th colspan="3">Honorários e Outros</th>
                </tr>
                <tr>
                    <th>Descrição</th>
                    <th>Moeda</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11. Honorário</td>
                    <td>Kz</td>
                    <td>1 000 000,00</td>
                </tr>
                <tr>
                    <td>12. Licenciamento</td>
                    <td>Kz</td>
                    <td>20 000,00</td>
                </tr>
                <tr>
                    <td>13. Declaração de Valor</td>
                    <td>Kz</td>
                    <td>0,00</td>
                </tr>
                <tr>
                    <td>14. Deslocação</td>
                    <td>Kz</td>
                    <td>250 000,00</td>
                </tr>
                <tr>
                    <td>15. Outros</td>
                    <td>Kz</td>
                    <td>5 000,00</td>
                </tr>
                <tr>
                    <td colspan="3" class="subtotal">SubTotal: Kz 1 275 000,00</td>
                </tr>
            </tbody>
        </table>

        <div class="total-geral">
            TOTAL GERAL: Kz 6 182 208,39
        </div>

        <div class="assinatura">
            <p><strong>O DESPACHANTE OFICIAL</strong></p>
            <p><i>JOSÉ MAYAMONA XINGUI</i ></p>
        </div>

        <footer>
            <p>14/mar/25 — Rua de Macau, defronte às Obras Públicas<br>
                Tel: 00244 923 241 134 / 993 241 134<br>
                E-mail: bentosambo@hotmail.com - Cabinda - Angola</p>
        </footer>
    </div>
    `;
}