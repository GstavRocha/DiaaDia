# Cronograma de Atividades 1° ETAPA #

## INÍCIO 10/2022.

``` mermaid
    gantt
    title Cronograma 1° ETAPA
    dateFormat  YYYY-MM-DD
    section Documentação
    Planejamento do pré-projeto :a1,2022-10-07, 3d
    Apresentação do  pré-Projeto      :crit,milestone, 2022-10-17, 1d
    Levantamento de requisitos  :a2, after a1, 15d
    Levantamento de dados       :a3,2022-11-01, 15d
    Levantamento de literatura  :a3, after a1, 25d
    levantamento de litura sobre analise de dados: m9, after m8, 10d
    
    Diagramação do Banco de Dados :d1, 2023-01-15, 15d
    Elicitação de Requisitos para Banco de Dados: f5, after d11, 7d
    Elicitação de Requisitos API: h6, after g5, 7 d
    Elicitação de UI com flutter: l10, after j7, 15d

    section Pesquisa
    Analide de Dados            :b3, after b2, 10d
    section Prototipação
    Modelagem do diagrama de uso de caso: c1, 2022-11-14,10d
    section Elementos Gráficos
    Criação Logo Marca          :c2, after c1, 5d
    criação de Layout           :c3, after c2, 15d
    criação de Prototipo        :c4, after c3, 35d
    section Desenvolvimento WEB e MOBILE
   
    Prototipação do Banco de Dados :d2, after d1, 15d
    Desenvolvimento Web (Front-End) :d3, after d2, 30d
    Desenvolvimento de Banco de Dados: g5,after f5, 15d
    
    Desenvolvimento de Api com FastAPI: j7, after h6, 20d
    Desenvolvimento de App Web (usuario-clinica): m7,after l10, 15d
    Desenvolvimento de App Mobile(usuario-paciente): m8, after m7, 15d
    section desevolvimento WEB ANALISE DE DADOS

    Desenvolvimento de tratamento de Dados(PANDAS): m9, after m8, 15d

    section TESTES 
    Teste Unitário API: n10, after m8, 10d
    Teste de Carga: n11, after n10, 10d
    Revisão e correções: p5, after n11, 15d
    
    section Defesa
    Organização da Apresentação :e1,2023-03-10, 10d
    Organização do Slide :e1,2023-03-13,8d
    Ensaio da Apresentação :e2,after e1, 7d
    Ajustes Finais : e3,after e2, 23d
    Apresentação e entrega  :crit,milestone,2023-03-30, 1d
  
    

```
# Cronograma de Atividades 2° ETAPA #

## INÍCIO 04/2023
``` mermaid
    gantt
    title Cronograma 2° ETAPA
    dateFormat  YYYY-MM-DD
    section Documentação


    Apresentação da Segunda Etapa do Projeto: crit,milestone, 2023-04-14, 1d

    section Levantamento Bibliográfico
    Learning PostgresSQL - Salahaldin, Juba         : a1, after 2023-04-14, 10d
    PosgreSQL Administration Cookbook - Riggs, Simon: b2, after a1, 10d
    Dart Essentials - Martin, Sikora                : c3, after b2, 10d
    Dart for Absolute Beginners - Kopec             : d4, after c3, 10d
    Flutter In Action - Widmill, Eric               : d5, after d4, 10d
    Python Data Analytics - Neilli , Fabio          : d6, after d5, 10d

    section Documentação
    Revisão de Diagramação de Banco de Dados        : e1, after d6, 3d
    Elicitação de Requisitos - Banco de Dados       : e2, after e1, 3d
    Digramação de API                               : e3, after e2, 2d
    Digramação de Aplicação                         : e4, after e3, 3d
    Digramação de Caso de Uso                       : e5, after e4, 5d
    Levantamento e Analise UI                       : e6, after e5, 3d

    section Desenvolvimento
    Desenvolvimento API - FAST API                  : f1, after e5, 10d
    Desenvolvimento Banco de Dados                  : f2, after f1, 7d
    Desenvolvimento usuário - Clinica (web)         : f3, after f2, 10d
    Desenvolvimento usuário - paciente (Mobile)     : f4, after f3, 15d
    Desenvolvimento Analise de Dados - Pandas (usuario - paciente)  :f5, after f4, 5d

    section Testes
    Teste Unitário                                  :g1, after f5, 10d
    Teste de Carga                                  :g2, after g1, 10d
    Revisão de projeto                              :g3, after g2, 7d
    Apresentação e entrega                          :crit,milestone,2023-09-27, 1d

```
### Curriculos do Programa da Graduação de Tecnologia e Sistemas para Internet - TSI que contemplados no projeto.

### Curriculos Não Técnicos:
* Metodologia do Trabalho Científico;
* Leitura e produção de Textos Acadêmicos;
### Curriculos Técnicos:
* Desenvolvimento Web - Front End;
* Desenvolvimento Web - Back End;
* Desenvolvimento de Sistemas Corporativos;
* Banco de Dados;
* Projetos de Software - APSWEB.
* Teste de Software;
* Desenvolvimento Mobile;

________________________________________
# PROTOTIPO #

## CLINICA (BROWSER) ##
<img src="./img/browserIndex.png">

### CLÍNICA LOGIN ### 

Tela de login, navegador para usuário-clínica.
   
    *   login
    *   Password
    *   Esqueci Password

## CLINICA DASHBOARD(BROWSER) ##
<img src="./img/browserDash.png">

### DASHBOARD ###

Tela com recurso para uso da clínica.

  1. Menu Lateral:
    
    MENU
     
     * Emails (recursos terceiros)
     * Reports: Notificações de manutenção e bugs da aplicação.
     * Notificações: Atualizações e rotinas administrativas.
  
    ROTINAS

     * Chat APP: chat integrado a aplicação mobile.
     * Consultas: Cadastro, agendamento e pesquisa de Consultas Médicas.
     * Agendas Médicas: Cadastros, agendamento e pesquisa de agenda dos Médicos.

    OPÇÕES
   
     *  Configurações: Ajustes finos ( Tamanho da fonte, idioma...)

    SOBRE: Versão da Aplicação.


  2. Tela Principal:
    
    * Buscar: Pesquisa, recursos, usuários, clinícas (relacionados às cadastradas), convênios e médicos.
    * Seja Bem vindo: Usuário que está autenticado no sistema (logado).
    * Cadastrar Paciente: Cadastrar, remover e alterar pacientes para uso da aplicação mobile.
    * Pacientes: Gráficos e índices gerais da aplicação e seus cadastrados.
    * Total de Aferições: Atualizações referentes as aferições em tempo real de usuários, possível de verificação por usuário-paciente.
    * Médicos Disponíveis: Referente aos usuários-médicos possiveis de cadastro e agendamento para consultas futuras.
    * Ver todos: consulta e índices gerais( Com gráficos).
    * Consultas agendadas para hoje: lista de consultas agendas em tempo real, conforme o status de seus prosseguimentos. Exibe nome do paciente, horário de consulta, unidade de atendimento e médico agendado para aquela consulta.
___________________________________________________
## CADASTRO USUÁRIOS(BROWSER) ##

### DASHBOARD ###
Refere-se ao as descrições antes citadas.

Interface relacionada ao cadastro dos usuários-pacientes e seus relativos dados civis, diagnosticais e posiológicos.

_____________________________________________________

# USUÁRIO-PACIENTE (MOBILE) #
<img src="./img/mobileIndex.png">

### PACIENTE LOGIN ###

Tela de login, navegador para usuário-paciente.
   
    *   login
    *   Password
    *   Esqueci Password
  
## INTEFACE AFERIÇÃO PACIENTE (MOBILE) ##
<img src="./img/afermobile.png">

Interface de aferição do usuário para controle de índice glicêmico. Primeira tela caso o usuário-paciente tenha agendado tal rotina.

    * Verificar gráficos: botão de acesso aos índices anteriores, caso não haja aferições anteriores esse recurso não fica disponível.
    * Painel aferição: usuário deve digitar o índice relacionado ao seu nível glicêmico.
    * Enviar: Botão para confirma à aferição.
    * corrigir: Botão para correção, caso necessite.
  
## INTEFACE GRÁFICOS PACIENTE (MOBILE) ##
<img src="./img/modileGrafic.png">

Interface de verificação de aferições, é exibido o gráfico que faz as medições em relação as alterações do índice glicêmico por período( semanais ou mensais, quando disponíveis.).

    * Agendar: Botão para agendamento de consultas ( Aplicações de terceiros.)
    * Painel Gráfico de aferições: exibe as aferições feitas pelo usuário-paciente e suas possíveis alterações.
    * Tabela Medições: exibe ao usuário-paciente uma lista de todas suas aferições(dia, hora e índice). Atualiza sempre que é feita uma nova aferição.
____________________________________________________________  
# MÉDICO(A) (BROWSER/MOBILE- RESPONSIVE) #

<img src="./img/medicIndex.png">

## MÉDICO LOGIN ##

Tela de login, navegador para usuário-médico.
   
    *   login
    *   Password
    *   Esqueci Password

## MÉDICO INTERFACE ##
<img src="./img/medicdash.png">

Interface de consutal Usuário-Paciente. 
    * pesquisar paciente: Barra de pesquisa para consultar paciente e seus respectivos dados para consulta.
    * Nome e dados do paciente;
    * Medições: tabela com as aferições feitas pelo paciente e seus respectivos índices.
    * Gráfico de Índices Glicêmicos: Gráfico que expões as alterações glicêmicas do paciente, pode ser alterado sua peridiocidade.
    * Próximas Consultas: Tabela relacionada as próximas consultadas agendas pelo usuário-clínica, com os campos dia, hora e paciente.