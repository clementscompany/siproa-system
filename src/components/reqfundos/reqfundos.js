export default function reqFundos(){
    return`
        <div class="requisicao-container">
    <div class="header-top-fundos">
      <div class="title-fundos">
        <h1>Controlo de Requisição de Fundos</h1>
        <button class="btn-voltar"><i class="bi bi-arrow-left-circle"></i> Voltar</button>
      </div>

      <div class="header-req-fundos">
        <div class="select-fundo">
          <label for="selectReq">Requisição Nº</label>
          <select id="selectReq">
            <option value="">Selecione Uma Requisição</option>
          </select>
        </div>

        <div class="buttons-req-fundos-top">
          <button id="lastReq"><i class="bi bi-clock-history"></i>Relatório</button>
          <button id="updateReq"><i class="bi bi-arrow-repeat"></i> Actualizar</button>
          <button id="newReq"><i class="bi bi-plus-circle"></i> Nova</button>
        </div>
      </div>
    </div>

    <form id="formReqFundos">
      <div class="grid-form">
        <!-- ===== Divisão 1 ===== -->
        <div class="secao-principal">
          <div class="inputs-fields-Req">
            <label>ReqFundo</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Cliente Exportador</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>

          <div class="inputs-fields-Req">
            <label>Data de Entrada</label>
            <input type="date">
          </div>

          <div class="inputs-fields-Req">
            <label>Data do Pagamento</label>
            <input type="date">
          </div>

          <div class="inputs-fields-Req">
            <label>DU Nº</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>BL Nº</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>CRF</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Factura Nº</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>FOB</label>
            <input type="number" step="0.01">
          </div>

          <div class="inputs-fields-Req">
            <label>Frete</label>
            <input type="number" step="0.01">
          </div>

          <div class="inputs-fields-Req">
            <label>Seguro</label>
            <input type="number" step="0.01">
          </div>

          <div class="inputs-fields-Req">
            <label>CIF</label>
            <input type="number" step="0.01">
          </div>

          <div class="inputs-fields-Req">
            <label>Via</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>

          <div class="inputs-fields-Req">
            <label>Consignacao</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Pais</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>

          <div class="inputs-fields-Req">
            <label>Moeda</label>
            <select>
              <option>Selecione</option>
            </select>
          </div>

          <div class="inputs-fields-Req">
            <label>Câmbio</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Valor Aduaneiro</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Designacao</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Câmbio USD</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Imposto</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>IVA</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Imposto Selo</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Sobre Taxas</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Emolumentos Gerais</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label>Multas CRF ou Atraso</label>
            <input type="text">
          </div>

          <div class="inputs-fields-Req">
            <label style="color:#223"><strong>SubTotal</strong></label>
            <input type="text">
          </div>
        </div>

        <!-- ===== Divisão 2 ===== -->
        <div class="secao-secundaria">
          <div class="inputs-fields-Req">
            <label>EP 17</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Veterinário / Saúde</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Validação do BL</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Assistência</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Deslocação</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label><strong>Sub-Total</strong></label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Honorário</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Inerente</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Licenciamento</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>DU</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Declaração de Valor</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Modelo O</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Fotocópias</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>T Emolumentos</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Deslocamento</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label>Continuações e Adições</label>
            <input type="text">
          </div>
          <div class="inputs-fields-Req">
            <label style="color:#223"><strong>Sub Total</strong></label>
            <input type="text">
          </div>
        </div>

        <div class="totais-section">
          <div class="inputs-fields-Req total-geral">
            <label>Total Geral</label>
            <input type="text" placeholder="Ex: 150.000,00">
          </div>

          <div class="inputs-fields-Req por-extenso full">
            <label>Por Extenso</label>
            <textarea rows="2" placeholder="Cento e cinquenta mil kwanzas"></textarea>
          </div>

          <div class="btnsaveReq">
            <button id="saveReq"><i class="bi bi-save2"></i> Salvar</button>
          </div>
        </div>
    </form>
    <div class="listbtn-Req">
      <button class="btn-view"><i class="bi bi-eye"></i> Visualizar Requisição</button>
      <button class="btn-file"><i class="bi bi-file-earmark-text"></i> Visualizar Conta</button>
      <button class="btn-print"><i class="bi bi-printer"></i> Imprimir</button>
    </div>

  </div>
    `;
}