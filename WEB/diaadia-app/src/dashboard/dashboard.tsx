import React from 'react';
import '../styles/dashboard.css';
import logoDash  from '../styles/img/logoGrande.png';
import usuarioexemplo from '../styles/img/borat.jpeg';


const DashBoard = () =>{
    return(
      <div className="dashboard">
          <div className="sidebar">
              <h1>
                  Dia a Dia
              </h1>

              <div className="menu">

                  <h3 className="menutitulo"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                   className="bi bi-columns-gap" viewBox="0 0 16 16">
                      <path
                          d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/></svg>   DASHBOARD</h3>
                  <h3 className="menutitulo"> MENU</h3>
                  <p className="textosidebar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-envelope-at" viewBox="0 0 16 16">
                          <path
                              d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                          <path
                              d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                      </svg>   Emails</p>
                  <p className="textosidebar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                          <path
                              d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                          <path
                              d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                      </svg>   Reports</p>
                  <p className="textosidebar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-bell" viewBox="0 0 16 16">
                          <path
                              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                      </svg>   Notificacoes</p>
                  <p className="textosidebar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-chat-dots" viewBox="0 0 16 16">
                          <path
                              d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          <path
                              d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                      </svg>  ChatApp</p>
                  <br/>
                  <hr className="linha"/>
                  <br/>
                  <h3 className="menutitulo">ROTINAS</h3>
                  <p className="textosidebar">         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-bookmark-heart" viewBox="0 0 16 16">
                      <path fill-rule="evenodd"
                            d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                      <path
                          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>  Consultas</p>
                  <p className="textosidebar">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-calendar2-check" viewBox="0 0 16 16">
                          <path
                              d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path
                              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                      </svg>   Agendas Médica</p>
                  <br/>
                  <hr className="linha"/>
                  <br/>
                  <h3 className="menutitulo">OPÇÕES</h3>
                  <p className="menutitulo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-gear-fill" viewBox="0 0 16 16">
                          <path
                              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                      </svg>   Configurações</p>
                  <p className="menutitulo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-info-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path
                              d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>   Sobre</p>
              </div>
          </div>
          <div className="topo">
              <ul>
                  <li>
                      <div className="div_busca">
                      <input type="text" className="busca_input" placeholder="Buscar"/>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                               className="bi bi-search busca_svg" viewBox="0 0 16 16">
                              <path
                                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                          </svg>
                      </div>
                  </li>
                  <li><div className="usuario">
                      <img src={usuarioexemplo}alt="" className="usuario_img"/>
                      <p className="usuario_login"> Seja bem vindo João Fulano</p>
                  </div></li>
                  <li><img src={logoDash} alt="logo clinica" className="logoDash"/></li>
              </ul>
          </div>
          <div className="dashBoardLayout">
              <input type="submit" className="cadastrar" value="Cadastrar Paciente" />
              <h3 className="tituloDashBoard">
                  APP Indices CLINICA MÉDICA
              </h3>
              <p className="calendar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path
                          d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                      <path
                          d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>10/JANEIRO/2023</p>
              <div className="dashBoardPanels">
                  <div className="cardPanel">
                      <p className="cardStile">Pacientes</p>
                      <p className="panelExpositor">2,100</p>
                      <input  type="submit" className="cardPesquisa" value="Pesquisar Paciente"/>
                  </div>
                  <div className="cardPanel">
                      <p className="cardStile">Total de Aferições</p>
                      <p className="panelExpositor">500</p>
                      <input  type="submit" className="cardPesquisa colors" value="+50(10%)"/>
                  </div>
                  <div className="cardPanel">
                      <p className="cardStile">Médicos Disponíveis</p>
                      <p className="panelExpositor">13</p>
                      <input  type="submit" className="cardPesquisa" value="Consultar Agenda"/>
                  </div>
              </div>
              <div className="dashTable">
                  <h3 className="tituloDashBoard_tabela">
                      Consultas agendadas para Hoje.
                  </h3>
                  <table className="tabela">
                      <tr>
                          <th> NO</th>
                          <th> Nome Completo</th>
                          <th>Horário</th>
                          <th>Clinica</th>
                          <th>Médico</th>

                      </tr>
                      <tr className="estiloTabelaLinhas">
                        <td>1</td>
                        <td>Zé das Tantas Tantam</td>
                        <td>0:00</td>
                        <td>UNIDADE X</td>
                        <td>Hipocrates</td>
                      </tr>
                      <tr className="estiloTabelaLinhas">
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr className="estiloTabelaLinhas">
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr className="estiloTabelaLinhas">
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr className="estiloTabelaLinhas">
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr className="estiloTabelaLinhas">
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                      <tr>
                          <td>1</td>
                          <td>Zé das Tantas Tantam</td>
                          <td>0:00</td>
                          <td>UNIDADE X</td>
                          <td>Hipocrates</td>
                      </tr>
                  </table>

              </div>
          </div>

      </div>
    );
}
export default DashBoard;

