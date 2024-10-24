export default function formDu(){
    return`
        <div class="criar-processo">
                <div class="center-form-Process">
                    <div class="posicoes-group">
                        <h1>Criar Processo</h1>
                        <div class="left-top-process">
                        <button class="btn-agrupar-posicoes">Agrupar Posições</button>
                        <button class="btn-agrupar-posicoes">Ver Posições Agrupadas</button>
                        </div>
                    </div>
                    <div class="group-adicoes">
                        <div class="options-edit-action"><button class="btn-abrir-adicoes">Adicões</button><button class="btn-abrir-">Editar</button></div>
                        <div class="valoresAduaneiro">
                            <div class="inforAdunaneiro"><label for="">Valor Aduaneiro</label><span>0,0000000</span></div>
                            <div class="inforAdunaneiro"><label for="">Valor a Pagar (DU)</label><span>0,0000000</span></div>   
                       </div>
                   </div>   
                </div>
            <form id="exportersForm">
                <div class="grid-frist-block">
                <div class="form-group-process">
                    <label for="paisExp">Conta nº</label>
                    <input type="text" id="" placeholder="Ex:000CAA">
                </div>
                <div class="form-group-process">
                    <label for="contabilista">Contabilista</label>
                    <input type="text" id="" placeholder="Ex:000CAA">
                </div>
                <div class="form-group-process">
                    <label for="quantidadeAd">Quantidade</label>
                    <input type="text" id="" placeholder="Ex:000CAA">
                </div>
                <div class="form-group-process">
                    <label for="cambiousd">Câmbio do USD</label>
                    <select id="cambiousd">
                        <option value="">Selecione o Câmbio</option>
                        <option value="cambio">0,0000</option>
                        <option value="cambio">0,0000</option>
                    </select>
                </div>
                <div class="form-group-process">
                    <label for="cambiomoeda">Câmbio da Moeda</label>
                    <select id="cambiomoeda">
                        <option value="">Selecione o Câmbio</option>
                        <option value="cambio">0,0000</option>
                        <option value="cambio">0,0000</option>
                    </select>
                </div>
                <div class="form-group-process">
                    <label for="codRegime">Codigo de Regime</label>
                    <select id="codRegime">
                        <option value="">Selecione o Regime</option>
                        <option value="">11</option>
                        <option value="">12</option>
                    </select>
                </div>
                <div class="form-group-process">
                    <label for="estancia">Estância</label>
                    <input type="text" id="estancia" placeholder="Ex:38">
                </div>
                <div class="form-group-process">
                    <label for="fob">FOB</label>
                    <input type="text" id="fob" placeholder="Ex:0,00">
                </div>
                <div class="form-group-process">
                    <label for="frete">FRETE</label>
                    <input type="text" id="frete" placeholder="Ex:0,00">
                </div>
                <div class="form-group-process">
                    <label for="">Soma</label>
                    <input type="text" id="soma" placeholder="Ex:0,00">
                </div>
                <div class="form-group-process">
                    <label for="cif">CIF</label>
                    <input type="text" id="cif" placeholder="Ex:0,00">
                </div>
                <div class="form-group-process">
                    <label for="pesobr">Peso Bruto</label>
                    <input type="text" id="pesobr" placeholder="Ex:5kg">
                </div>
                <div class="form-group-process">
                    <label for="pesoliq">Peso liquido</label>
                    <input type="text" id="pesoliq" placeholder="Ex:10kg">
                </div>
                <div class="form-group-process">
                    <label for="nVolume">Nº Volumes</label>
                    <input type="text" id="nVolume" placeholder="Ex:0001">
                </div>
                <div class="form-group-process">
                    <label for="codVolume">Codigo de Volume</label>
                    <select id="codRegime">
                        <option value="">Selecione o Codigo Volume</option>
                        <option value="">G</option>
                        <option value="">H</option>
                    </select>
                </div>
                <div class="form-group-process">
                    <label for="fisPorto">Fiscalização Porto</label>
                    <input type="text" id="fisPorto" placeholder="Ex:000">
                </div>
                <div class="form-group-process">
                    <label for="aeroporto">Aeroporto</label>
                    <input type="text" id="aeroporto" placeholder="Ex:000">
                </div>
                </div>
                <div class="grid-import-export">
                <div class="form-group-process-importador">
                    <h3>Importador</h3>
                    <div class="form-group-process">
                    <label for="nomeImport">Nome do Importador</label>
                    <select id="nomeImport">
                        <option value="">Selecione o Importador</option>
                        <option value="">João da Cruz Bete</option>
                        <option value="">Moisés Clemente</option>
                    </select>
                    </div>
                    <div class="bottom-div-process">
                    <div class="form-group-process">
                    <label for="morada">Morada</label>
                    <input type="text" id="morada" placeholder="Ex:000CAA">
                    </div>
                    <div class="form-group-process">
                    <label for="ine">I.N.E</label>
                    <input type="text" id="ine" placeholder="Ex:99999999">
                    </div>
                    <div class="form-group-process">
                    <label for="codImport">Codigo Importador/NIF</label>
                    <input type="text" id="codImport" placeholder="Ex:00998889900FF876">
                    </div>
                    </div>
                </div>
                <div class="form-group-process-exportador">
                    <h3>Exportadores</h3>
                    <div class="form-group-process">
                    <label for="nomeExp">Nome do Exportador</label>
                    <select id="nomeExp">
                        <option value="">Selecione o Exportador</option>
                        <option value="">Moisés Clemente</option>
                        <option value="">João da Cruz Bete</option>
                    </select>
                    </div>
                    <div class="bottom-div-process">
                    <div class="form-group-process">
                    <label for="codImport">Codigo Importador/NIF</label>
                    <input type="text" id="codImport" placeholder="Ex:00998889900FF876">
                    </div>
                    <div class="form-group-process">
                     <label for="ine">I.N.E</label>
                     <input type="text" id="ine" placeholder="Ex:99999999">
                    </div>
                    <div class="form-group-process">
                     <label for="morada">Morada</label>
                     <input type="text" id="morada" placeholder="Ex:Cidade-País">
                    </div>
                    </div>
                </div>
                </div>

                <div class="grid-frist-block">
                <div class="form-group-process">
                    <label for="meioTrans">Meio de Transporte</label>
                        <select id="meioTrans">
                          <option value="">Selecione o Meio de Transporte</option>
                             <option value="">1-Navio</option>
                                  <option value="">2-Veiculo</option>
                             </select>
                </div>

                <div class="form-group-process">
                     <label for="nacio">Nacionalidade</label>
                          <select id="nacio">
                            <option value="">Selecione o País</option>
                            <option value="">Argélia</option>
                     <option value="">Angola</option>
                     </select>
                </div>

                <div class="form-group-process">
                    <label for="regTrans">Reg Transporte</label>
                     <input type="text" id="regTrans" placeholder="Insere o Reg Transporte">
                 </div>

                <div class="form-group-process">
                      <label for="man">Manifesto nº</label>
                     <input type="text" id="man" placeholder="Ex:#33FF">
                </div>

                <div class="form-group-process">
                <label for="docTrans">Doc Transporte</label>
                <input type="text" id="docTrans" placeholder="Ex:000/666/ABC">
                </div>

                <div class="form-group-process">
                     <label for="dataChegada">Data de Chegada</label>
                    <input type="date" id="dataChegada">
                </div>

              <div class="form-group-process">
                <label for="portoEntrada">Porto Entrada/Saída</label>
                <input type="text" id="portoEntrada" placeholder="Ex:CAB">
             </div>

                <div class="form-group-process">
                    <label for="gnr">Garantia NR</label>
                    <input type="text" id="gnr" placeholder="Ex:0000111000111">
                </div>

            <div class="form-group-process">
                 <label for="mGT">Montante Garantia</label>
                <input type="text" id="mGT" placeholder="Ex:2.000,99">
             </div>

            <div class="form-group-process">
                <label for="tdr">T.D.R</label>
                 <input type="text" id="tdr" placeholder="Ex:S/N">
            </div>

            <div class="form-group-process">
                 <label for="mta">Método de Avaliação</label>
                <input type="text" id="mta" placeholder="Ex:GATT">
             </div>

            <div class="form-group-process">
                 <label for="fpag">Forma de Pagamento</label>
                 <select id="fpag">
                     <option value="">Selecione a Forma de Pagamento</option>
                    <option value="">PP - Pré Pago</option>
                    <option value="">OA - Conta Aberta</option>
            </select>
            </div>

            <div class="form-group-process">
                <label for="dBd">Detalhes do Banco</label>
                <input type="text" id="dBd" placeholder="Ex:0006">
            </div>
            </div>
            <div class="grid-import-export">
                <div class="form-group-process-exportador">
                    <h3>Marcas e numeros</h3>
                    <div class="form-group-process">
                    <label for="linha1">Linha</label>
                    <input type="text" id="linha1" placeholder="Ex:Apresente uma breve descrição...">
                    </div>
                </div>
                <div class="grid-frist-block">
                                <div class="form-group-process">
                    <label for="LE">Local de Embarque</label>
                    <select id="LE">
                        <option value="">Selecione o Porto</option>
                        <option value="">AAN</option>
                        <option value="">ABU</option>
                    </select>
                </div>
                <div class="form-group-process">
                    <label for="pProcedencia">Pais Procedencia</label>
                    <select id="pProcedencia">
                        <option value="">Selecione a País</option>
                        <option value="">Arabia Saudita</option>
                        <option value="">Alemanha</option>
                    </select>
                </div>
                <div class="form-group-process">
                    <label for="pDest">Pais Destino</label>
                    <input type="text" id="pDest" placeholder="Ex:AO"><!-- Só a inicial do pais-->
                </div>
                <div class="form-group-process">
                    <label for="desal">Desalvanegamento sob caucao nº e Data</label>
                    <input type="text" id="desal" placeholder="Ex:XXXXX/00000/XXXXX">
                </div>
                <div class="form-group-process">
                    <label for="dataDU">Data do DU</label>
                    <input type="date" id="dataDU">
                </div>
                </div>
                <div class="form-actions">
                    <button class="btn-salvar">
                        Salvar 
                    </button>
                </div>
            </div>
            </form>
        </div>
    `;
}