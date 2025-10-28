export default function duAdicoes(){
    return`
    <div class="add-table-container">
    <div class="header-adicoes">
    <div class="title-adicoes">
      <h1>Adicoes</h1>
      <button><i class="bi bi-arrow-left-circle"></i>Voltar</button>
    </div>
    <div class="blocks-top">

      <div class="first-block">

        <div class="div-options">
          <label for="">Aduaneiro</label>
          <label for="">Total FOB</label>
          <label for="">Frete</label>
          <label for="">Total CIF</label>
          <label for="">Peso Liquido</label>
        </div>

        <div class="div-options">
          <h3>Lancado</h3>
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
        </div>
        
        <div class="div-options">
          <h3>Total da Conta</h3>
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
        </div>

        <div class="div-options">
          <h3>Diferença</h3>
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
          <input type="text" placeholder="Ex:0,000">
        </div>

        <div class="div-options">
        <div class="div-other-add">
          <label for="">Peso Bruto</label>
          <input type="text">
        </div>
        <div class="div-other-add">
          <label for="">Regime</label>
          <input type="text">
        </div>
        <div class="div-other-add">
          <label for="">Moeda</label>
          <input type="text">
        </div>
        <div class="div-other-add">
          <label for="">Câmbio</label>
          <input type="text">
        </div>
        <div class="div-other-add">
          <label for="">Pais Origem</label>
          <input type="text">
        </div>
        </div>
        
      </div>

      <!--Possivel Form-->
    </div>

    <div class="blocks-bottom">
      <div class="left-bottom-block">
        <div class="div-other-add">
          <label for="">Nº Adições</label>
          <input type="text">
       </div>
       <div class="div-other-add">
          <label for="">Conta Nº</label>
          <input type="text">
       </div>
      </div>
      <div class="search-part">
         <input type="text" id="searchprocess" placeholder="Procurar Adições...">
         <button class="search-btn" id="btn-search"><i class="bi bi-search"></i></button>
      </div>
    </div>
  </div>

  <div class="table-simulate-table">
      <div class="header-of-boxies">
        <span>
        Adição Nº
        </span>
        <span>
        Descrição
        </span>
        <span>
        Outros
        </span>
      </div>
      <div class="boxies-contex">
        <div class="box-contex">
          <div class="box-one">
              <div class="numberArt">
                <p>00</p>
                <span>000000000</span>
              </div>
            <div class="fob-line">
              <label for="">FOB</label>
              <span>000,000</span>
            </div>
            <div class="cif-line">
              <label for="">CIF</label>
              <span>000,000</span>
            </div>
          </div>
          <div class="box-two">
            <span class="designacao-Prod-add">
                Designacao do Produto
            </span>
          </div>
          <div class="box-three">
            <div class="box-lines-others">
              <label for="">Peso Liquido</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Aduaneiro</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">U. Suplemento</label>
              <span>KG</span>
            </div>
            <div class="box-lines-others">
              <label for="">Câmbio</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Quantidade</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Frete</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Pais Origem</label>
              <span>USA</span>
            </div>
            <div class="box-lines-others">
              <label for="">42</label>
              <span>000,000</span>
            </div>
          </div>
        </div>
        

          <div class="box-contex">
          <div class="box-one">
              <div class="numberArt">
                <p>00</p>
                <span>000000000</span>
              </div>
            <div class="fob-line">
              <label for="">FOB</label>
              <span>000,000</span>
            </div>
            <div class="cif-line">
              <label for="">CIF</label>
              <span>000,000</span>
            </div>
          </div>
          <div class="box-two">
            <span class="designacao-Prod-add">
                Designacao do Produto
            </span>
          </div>
          <div class="box-three">
            <div class="box-lines-others">
              <label for="">Peso Liquido</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Aduaneiro</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">U. Suplemento</label>
              <span>KG</span>
            </div>
            <div class="box-lines-others">
              <label for="">Câmbio</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Quantidade</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Frete</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Pais Origem</label>
              <span>USA</span>
            </div>
            <div class="box-lines-others">
              <label for="">42</label>
              <span>000,000</span>
            </div>
          </div>
        </div>

          <div class="box-contex">
          <div class="box-one">
              <div class="numberArt">
                <p>00</p>
                <span>000000000</span>
              </div>
            <div class="fob-line">
              <label for="">FOB</label>
              <span>000,000</span>
            </div>
            <div class="cif-line">
              <label for="">CIF</label>
              <span>000,000</span>
            </div>
          </div>
          <div class="box-two">
            <span class="designacao-Prod-add">
                Designacao do Produto
            </span>
          </div>
          <div class="box-three">
            <div class="box-lines-others">
              <label for="">Peso Liquido</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Aduaneiro</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">U. Suplemento</label>
              <span>KG</span>
            </div>
            <div class="box-lines-others">
              <label for="">Câmbio</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Quantidade</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Frete</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Pais Origem</label>
              <span>USA</span>
            </div>
            <div class="box-lines-others">
              <label for="">42</label>
              <span>000,000</span>
            </div>
          </div>
        </div>

          <div class="box-contex">
          <div class="box-one">
              <div class="numberArt">
                <p>00</p>
                <span>000000000</span>
              </div>
            <div class="fob-line">
              <label for="">FOB</label>
              <span>000,000</span>
            </div>
            <div class="cif-line">
              <label for="">CIF</label>
              <span>000,000</span>
            </div>
          </div>
          <div class="box-two">
            <span class="designacao-Prod-add">
                Designacao do Produto
            </span>
          </div>
          <div class="box-three">
            <div class="box-lines-others">
              <label for="">Peso Liquido</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Aduaneiro</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">U. Suplemento</label>
              <span>KG</span>
            </div>
            <div class="box-lines-others">
              <label for="">Câmbio</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Quantidade</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Frete</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Pais Origem</label>
              <span>USA</span>
            </div>
            <div class="box-lines-others">
              <label for="">42</label>
              <span>000,000</span>
            </div>
          </div>
        </div>

          <div class="box-contex">
          <div class="box-one">
              <div class="numberArt">
                <p>00</p>
                <span>000000000</span>
              </div>
            <div class="fob-line">
              <label for="">FOB</label>
              <span>000,000</span>
            </div>
            <div class="cif-line">
              <label for="">CIF</label>
              <span>000,000</span>
            </div>
          </div>
          <div class="box-two">
            <span class="designacao-Prod-add">
                Designacao do Produto
            </span>
          </div>
          <div class="box-three">
            <div class="box-lines-others">
              <label for="">Peso Liquido</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Aduaneiro</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">U. Suplemento</label>
              <span>KG</span>
            </div>
            <div class="box-lines-others">
              <label for="">Câmbio</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Quantidade</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Frete</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Pais Origem</label>
              <span>USA</span>
            </div>
            <div class="box-lines-others">
              <label for="">42</label>
              <span>000,000</span>
            </div>
          </div>
        </div>

          <div class="box-contex">
          <div class="box-one">
              <div class="numberArt">
                <p>00</p>
                <span>000000000</span>
              </div>
            <div class="fob-line">
              <label for="">FOB</label>
              <span>000,000</span>
            </div>
            <div class="cif-line">
              <label for="">CIF</label>
              <span>000,000</span>
            </div>
          </div>
          <div class="box-two">
            <span class="designacao-Prod-add">
                Designacao do Produto
            </span>
          </div>
          <div class="box-three">
            <div class="box-lines-others">
              <label for="">Peso Liquido</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Aduaneiro</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">U. Suplemento</label>
              <span>KG</span>
            </div>
            <div class="box-lines-others">
              <label for="">Câmbio</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Quantidade</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Frete</label>
              <span>000,000</span>
            </div>
            <div class="box-lines-others">
              <label for="">Pais Origem</label>
              <span>USA</span>
            </div>
            <div class="box-lines-others">
              <label for="">42</label>
              <span>000,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}