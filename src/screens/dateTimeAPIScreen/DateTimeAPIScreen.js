import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoDateTimeAPI from '../../resources/images/dateTimeAPI.png';

export default function DateTimeAPIScreen() {

    // OBS: Esse método é copiado e colado em todas as Screens e atualiza o ancor da Navbar de acordo com qual Screen esta ativa

    // Método que adiciona estilo no ancor correspondente dessa screen na Navbar, pois esse é a screen em renderização corrente
    // Poderia utilizar estados globais como Context ou Redux, porém não quis fazer Over Engineering, e Frontend não é mais meu
    // contexto! (Atualmente estou mais focado em Backend com Java e Spring)
    const setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen = () => {
        const navbarElement = document.querySelector("#navbar-container");

        // Nas primeiras chamadas (Chamadas que ocorrem requisições no servidor) a navBar é null, 
        // porisso a lógica principal referente a essa funcionalidade esta na "components/mainNavbar/MainNavbar.js"
        // Esse bloco só é executado quando o react-router-dom é ativado, ou seja, quando ocorre mudanças de rotas
        // no client-side e já tem o DOM Virtual em cache, o react não faz requisições novamente, ele aproveita esse cache
        // porisso o useEffect na funcionalidade principal "components/mainNavbar/MainNavbar.js" não é executado!
        // Esse bloco foi feito para cenários em que o usuário utiliza as setas do navegador <= ou => para voltar ou
        // avançar no histórico de sites/URLs visitados.
        // ALÉM disso todo o roteamento do react-router-dom ocorre no lado do cliente (client-side), ou seja, 
        // Quando acessamos "/#/algumaCoisa" e essa rota esta mapeada no roteamento do react-router-dom, NÃO
        // ocorrem requisições para o servidor, TODA a lógica de renderizar e etc ocorre no cliente, isso é a magia
        // pois alivia a carga do servidor e mantém a navegação do usuário mais fluida! mas tem que conhecer esse
        // comportamento, pois a depender do escopo em que está definido a lógica ou vai rolar processamentos no
        // servidor ou no cliente!!! 
        if (navbarElement != null) { 

            // limpa os outros e deixa apenas estilos no ancor de acordo com a URL:
            for(let a of navbarElement.childNodes){ 
                a.classList.remove("-ancorOfNavbarIsClicked");
            }

            navbarElement.childNodes[6].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Date-Time API (Legado e Novo)&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Manipulações temporais, maneira legada e nova.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>Implementação da técnica de otimização "String Interning" na JVM.</span>
                            <span>String Constant Pool só é válida para Strings Literais!</span>
                            <span>Strings alocadas manualmente com `new` não vão parar no Pool.</span>
                            <span>Essa técnica visa otimizar recursos de armazenamento em RAM.</span>
                            <span>Isso é possível pois as palavras são compartilhadas entre toda aplicação.</span>
                            <span>Strings Literais são IMUTÁVEIS, pois as referências apontam para a mesma String do Pool.</span>
                            <span>Devido a esse comportamento, cenários de multiplas iterações com concateção é custoso!</span>
                            <span>Pois a cada String nova é alocado memória nova no Pool, e isso ocorre a cada passo da iteração.</span>
                            <span>Sem contar outros processamentos relacionados a implementação baixo nível do Pool.</span>
                            <span>Como verificações em todo Heap do Pool para verificar se a nova palavra em insert já existe lá.</span>
                            <span>Para esses cenários de multiplas iterações com concatenações utilizar as classes Especializadas.</span>
                            <span>StringBuilder para contextos Não-Thread Safe e StringBuffer para contextos Thread-Safe.</span>
                            <span>Essas classes são mais performáticas pois elas manipulam o mesmo endereço de memória inicial.</span>
                            <span>Elas não utilizam o String Constant pool, e a melhora na performance é GRITANTE, exemplos abaixo.</span>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoDateTimeAPI} alt="Amostra logo Wrapper Classes" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 112 até 129]</h3> */}
                                    <h3 class="projects-subtitle">Maneira Legada</h3>
                                    <ul className="projects-frontend--container">
                                        <li><code className="token_reservada">Maneira Legada</code> (<code className="token_reservada">Date</code> e <code className="token_reservada">Calendar</code> do pacote <code className="token_reservada">java.util</code>) porém tem problemas de <code className="token_reservada">Internacionalização</code> e Limitações nas possibilidades de representações, mais informações sobre <code className="token_reservada">Internacionalização</code> na seção logo abaixo desta!</li>
                                        <li>Muitos sistemas ainda utilizam elas! Não é uma boa prática apartir do Java 8.</li>
                                        <br/>
                                        <li>Principais Classes <code className="token_reservada">Temporais</code> deste pacote <code className="token_reservada">legado</code>:</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Date</code>: Representado em baixo nível por um <code className="token_reservada">long</code> que representa os <code className="outputResult">milissegundos</code> de <code className="outputResult">01/01/1970</code> com limitação até <code className="outputResult">17/08/292278994 04:12</code> (valor máximo de um <code className="token_reservada">long</code>), mais informações sobre <code className="token_reservada">Date</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula112Date.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação e demonstração dos millisegundos representados em baixo nível:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Construtor com parâmetro indica qual será o millisegundo em baixo nível: </span><br/>
                                                    <code className="-tokenClassEntity">Date</code> date_withConstructorParameter = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Date</code>(<code className="-tokenKeyConstant">1_000_000_000L</code>);<br/>
                                                    <span className="-tokenComment">// `toString()` dele: Mon Jan 12 10:46:40 BRT 1970</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Pegando os millisegundos em baixo nível: </span><br/>
                                                    date_withConstructorParameter.<code className="-tokenMethod">getTime</code>();<br/>
                                                    <span className="-tokenComment">// 1000000000</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Construtor sem parâmetro pega a data corrente do S.O: </span><br/>
                                                    <code className="-tokenClassEntity">Date</code> date_now = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Date</code>();<br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Valor máximo de um Date (Em alto nível com formatação): </span><br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getInstance</code>();<br/>
                                                    
                                                    <code className="-tokenClassEntity">String</code> dateFormated_maxValue_inHighLevel = df.<code className="-tokenMethod">format</code>({window.screen.width <= 425 ? <br/> : ""}<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Date</code>(<code className="-tokenClassEntity">Long</code>.<code className="-tokenKeyConstant">MAX_VALUE</code>));<br/>
                                                    <span className="-tokenComment">// 17/08/292278994 04:12</span>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Calendar</code>: Devido ao problema inicial de Internacionalização é criado a classe <code className="token_reservada">Calendar</code> (Abstrata, ou seja, é necessário uso do método <code className="token_reservada">builder</code> estático para sua criação, o mesmo faz verificações de origem da JVM para obter datas corretas (Internacionalização), ou podemos alterar esse comportamento padrão passando na <code className="token_reservada">sobrecarga do construtor</code> um objeto <code className="token_reservada">Locale</code>), mais informações sobre <code className="token_reservada">Calendar</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula113Calendar.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando as diferenças em relação a anterior:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Pegando a data corrente do S.O: </span><br/>
                                                    <code className="-tokenClassEntity">Calendar</code> date_now_withCalendar = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenMethod">getInstance</code>();<span className="-tokenComment">// static, ou seja, Não utilizamos `new`</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Saída do `.toString()` contém bastante informações, ele é mais completo que o Date: </span><br/><br/>
                                                    <span className="-tokenComment">java.util.GregorianCalendar[time=1670439756293, areFieldsSet=true, areAllFieldsSet=true, lenient=true, zone=sun.util.calendar.ZoneInfo[id="America/Sao_Paulo", offset=-10800000, dstSavings=0, useDaylight=false, transitions=93, lastRule=null], firstDayOfWeek=1, minimalDaysInFirstWeek=1, ERA=1, YEAR=2022, MONTH=11, WEEK_OF_YEAR=50, WEEK_OF_MONTH=2, DAY_OF_MONTH=7, DAY_OF_YEAR=341, DAY_OF_WEEK=4, DAY_OF_WEEK_IN_MONTH=1, AM_PM=1, HOUR=4, HOUR_OF_DAY=16, MINUTE=2, SECOND=36, MILLISECOND=293, ZONE_OFFSET=-10800000, DST_OFFSET=0]</span>
                                                    <br/><br/>
                                                    <span className="-tokenComment"># Indicando qual padrão da data de acordo com o Pais: </span><br/>
                                                    <code className="-tokenClassEntity">Calendar</code> date_now_canada = <code className="-tokenClassEntity">Calendar</code>.<code className="-tokenMethod">getInstance</code>(<code className="-tokenClassEntity">Locale</code>.<code className="-tokenKeyConstant">CANADA</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Operações de acordo com a instância corrente: </span><br/><br/>

                                                    <span className="-tokenComment"># Pegando qual é o dia da semana: </span><br/>
                                                    <span className="-tokenComment"># 1 - Domingo; 2 - Segunda; 3 - Terça; 4 - Quarta; 5 - Quinta; 6 - Sexta; 7 - Sabado;</span><br/>
                                                    date_now_withCalendar.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DAY_OF_WEEK</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Pegando qual é o dia do mês (0 a 31): </span><br/>
                                                    date_now_withCalendar.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DAY_OF_MONTH</code>);<br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Pegando qual é o dia do ano (0 a 365): </span><br/>
                                                    date_now_withCalendar.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DAY_OF_YEAR</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Pegando qual é o dia da semana no mês (Complicado explicar aqui): </span><br/>
                                                    date_now_withCalendar.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DAY_OF_WEEK_IN_MONTH</code>);<br/>

                                                    <br/><br/>
                                                    <span className="-tokenComment"># Acrescentando dias na instância corrente: </span><br/>
                                                    date_now_withCalendar.<code className="-tokenMethod">add</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DAY_OF_MONTH</code>, <code className="-tokenKeyConstant">2</code>);<br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Acrescentando horas na instância corrente: </span><br/>
                                                    date_now_withCalendar.<code className="-tokenMethod">add</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">HOUR</code>, <code className="-tokenKeyConstant">2</code>);<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li>Utiliza em baixo nível o mesmo <code className="token_reservada">long</code> do <code className="token_reservada">Date</code> para representar a data (sendo os mesmos <code className="outputResult">milissegundos</code> de <code className="outputResult">01/01/1970</code> com limitação até <code className="outputResult">17/08/292278994 04:12</code>).</li>
                                        <li>É concretizada/implementada por 3 classes no Java 17: <code className="token_reservada">BuddhistCalendar</code>, <code className="token_reservada">GregorianCalendar</code> e <code className="token_reservada">JapaneseImperialCalendar</code>.</li>
                                        <br/>
                                        <li>Principais Classes <code className="token_reservada">Utilitárias</code> deste pacote <code className="token_reservada">legado</code>:</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">DateFormat</code>: Surge devido a este tipo de representação em baixo nível utilizando <code className="token_reservada">long</code> ser inviável na visualização e compreensão humana, uma vez que as representações são números enormes que parecem não fazer sentido para quem não conhece, podemos utilizar a classe <code className="token_reservada">DateFormat</code> para melhorar na visibilidade humana formatando e adicionando uma camada de mais alto nível nesses milissegundos, e representando eles em <code className="token_reservada">Strings</code> com máscaras de Datas simples <code className="outputResult">"22/12/1999"</code> ou também máscaras escrito por extenso <code className="outputResult">"quarta feira, 22 de dezembro de 1999"</code> (equivalente do argumento <code className="token_reservada">`-h`</code> que significa "Human", ou também <code className="token_reservada">`--human-readable`</code> dos programas executados pelo terminal shell de Sistemas Operacionais Unix-Like, ou seja, melhora para a visualização humana tornando os resultados dos processamentos na saída do <code className="token_reservada">stdout</code> mais legível), mais informações sobre <code className="token_reservada">DateFormat</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula114DateFormat.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando os padrões de formatações/máscaras disponíveis:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Existem 7 maneiras de criar uma instância de DateFormat: </span><br/>
                                                    <span className="-tokenComment"># Sem uso de Locale, eles se baseiam na localização default do S.O corrente: </span><br/>
                                                    <span className="-tokenComment"># Porém como meu S.O está em inglês, criei um Locale pt-BR para converter corretamente: </span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Com Calendar devemos utilizar `.getTime()` pois a entrada dele é Date (Os millisegundos): </span><br/>
                                                    <code className="-tokenClassEntity">Calendar</code> birthday_withCalendar = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenMethod">getInstance</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString"></code>"pt", <code className="-tokenString">"BR"</code>));<br/>
                                                    birthday_withCalendar.<code className="-tokenMethod">set</code>({window.screen.width <= 425 ? <br/> : ""}<code className="-tokenKeyConstant">1999</code>, <code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">22</code>, <code className="-tokenKeyConstant">12</code>, <code className="-tokenKeyConstant">42</code>, <code className="-tokenKeyConstant">13</code>);<br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getInstance</code>();<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// 22/12/1999 12:42 (dd/MM/yyyy HH:mm)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>();<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// 22 de dez. de 1999 (dd 'de' MMM 'de' yyyy)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateTimeInstance</code>();<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// 22 de dez. de 1999 12:42:13 (dd 'de' MMM 'de' yyyy HH:mm:ss)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">SHORT</code>);<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// 22/12/1999 (dd/MM/yyyy)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">MEDIUM</code>);<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// 22 de dez. de 1999 (dd 'de' MMM 'de' yyyy)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">LONG</code>);<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// 22 de dezembro de 1999 (dd 'de' MMMM 'de' yyyy)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> df = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>);<br/>
                                                    df.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    {/* <span className="outputResult--implementFullBlock"><span><BiLogOut/> Output:</span><span> quarta-feira, 22 de dezembro de 1999 (E, dd 'de' MMMM 'de' yyyy)</span></span><br/> */}
                                                    <span className="-tokenComment">// quarta-feira, 22 de dezembro de 1999 (E, dd 'de' MMMM 'de' yyyy)</span>

                                                </code>
                                            </ul>
                                        
                                        </li>
                                        <li>Para armazenar em <code className="token_reservada">banco de dados</code> podemos utilizar a mesma abordagem de cima, porém deve-se definir um padrão da máscara suportado pelo banco (Para o DB MySQL: <code className="outputResult">"yyyy-mm-dd"</code>).</li>
                                        <li>As conversões do valor <code className="token_reservada">long</code> em baixo nível para <code className="token_reservada">Strings</code> em alto nível que converte e adiciona máscara de Datas melhorando na compreensão humana, seguem a mesma convenção sobre <code className="token_reservada">parsings</code> em geral para várias outras classes da <code className="token_reservada">API Nativa do Java</code>: Regra sobre <code className="token_reservada">.format()</code> que recebe um objeto e retorna/converte em uma <code className="token_reservada">String</code>, e <code className="token_reservada">.parse()</code> que recebe uma <code className="token_reservada">String</code> e retorna/converte em um objeto (Mais explicações sobre esses <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> logo abaixo na classe <code className="token_reservada">DateTimeFormatter</code>).</li>
                                        <li><code className="token_reservada">DateFormat</code> em conjunto com <code className="token_reservada">Locale</code> para <code className="token_reservada">Internacionalização</code>: Podemos também polimorfisar as formatações dos objetos <code className="token_reservada">Temporal</code> utilizando uma instância do <code className="token_reservada">Locale</code> de acordo com a origem desejada, traduzindo assim as datas no padrão de máscara correspondentes aos formatos adotados pelos diferentes paises, ou também traduzir a máscara escrito por extenso <code className="outputResult">"quarta feira, 22 de dezembro de 1999"</code> para a linguagem equivalente ao <code className="token_reservada">Locale</code> (Exemplo de saída utilizando a formatação para a instância de <code className="token_reservada">Locale.JAPANESE</code>: <code className="outputResult">"1999年12月22日水曜日"</code>). A mesma regra serve para outras Classes que possuem representações de máscaras ou padrões diferentes entre os paises como valores de moedas e etc, mais informações sobre <code className="token_reservada">Internacionalização</code> na seção logo abaixo desta!</li>
                                        <br/>
                                        <li><code className="token_reservada">Locale</code>: é o objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o polimorfismo aqui para alterar diversos comportamentos de diversas Classes visando a <code className="token_reservada">Internacionalização</code>, mais informações sobre <code className="token_reservada">Locale</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Internacionalização de Datas</code> com <code className="token_reservada">Locale</code>: Polimorfisando o sistema e alterando o formato da máscara e etc dos objetos <code className="token_reservada">Temporais</code> (Data-Hora) de acordo com o padrão dos paises com o <code className="token_reservada">Locale</code>, mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando as adequações nos padrões de formatações/máscaras de acordo com Locale:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Obs: Para pegar essa ISO, o cabeçalho HTTP envia ela.</span><br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeBrazil = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"pt"</code>, <code className="-tokenString">"BR"</code>);<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeItaly = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"it"</code>, <code className="-tokenString">"IT"</code>);<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeSuica = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"it"</code>, <code className="-tokenString">"CH"</code>);<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeIndia = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"hi"</code>, <code className="-tokenString">"IN"</code>);<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeJapones = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"ja"</code>, <code className="-tokenString">"JP"</code>);<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeHolanda= <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"nl"</code>, <code className="-tokenString">"NL"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> dfBrazil = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>, localeBrazil);<br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> dfItaly = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>, localeItaly);<br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> dfSuica = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>, localeSuica);<br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> dfIndia = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>, localeIndia);<br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> dfJapones = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>, localeJapones);<br/>
                                                    <code className="-tokenClassEntity">DateFormat</code> dfHolanda = <code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenMethod">getDateInstance</code>(<code className="-tokenClassEntity">DateFormat</code>.<code className="-tokenKeyConstant">FULL</code>, localeHolanda);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Utilizando a data com Locale pt-BR (22/12/1999 12:42:13) criada anteriormente.</span><br/>
                                                    <span className="-tokenComment"># Para depois formatar e adequar em outras localizações essa mesma instância.</span><br/>
                                                    <span className="-tokenComment"># Formata a data como se estivesse localizado nos paises (Retorna uma `String`).</span><br/>
                                                    
                                                    <br/>
                                                    dfBrazil.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// Português Brasil: quarta-feira, 22 de dezembro de 1999 (Criado anteriormente)</span><br/>
                                                    <br/>
                                                    
                                                    dfItaly.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// Italia: mercoledì 22 dicembre 1999</span><br/>
                                                    <br/>
                                                    
                                                    dfSuica.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// Suiça: mercoledì, 22 dicembre 1999 (ela tem ",")</span><br/>
                                                    <br/>

                                                    dfIndia.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// India: बुधवार, 22 दिसंबर 1999</span><br/>
                                                    <br/>
                                                    
                                                    dfJapones.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// Japão: 1999年12月22日水曜日</span><br/>
                                                    <br/>
                                                    
                                                    dfHolanda.<code className="-tokenMethod">format</code>(birthday_withCalendar.<code className="-tokenMethod">getTime</code>());<br/>
                                                    <span className="-tokenComment">// Holanda: woensdag 22 december 1999</span><br/>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">Verifica de acordo com o Locale da instância de calendar (neste caso pt-BR), como é "traduzido" o nome de cada localização, ou seja, "Como é traduzido 'Itália' em português Brasil?"</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    
                                                    <span className="-tokenComment"># Como é traduzido 'Itália' em português Brasil?</span><br/>
                                                    localeItaly.<code className="-tokenMethod">getDisplayCountry</code>();<br/>
                                                    <span className="-tokenComment">// Itália</span><br/>
                                                    <br/>
                                                    
                                                    <span className="-tokenComment"># Como é traduzido 'Suíça' em português Brasil?</span><br/>
                                                    localeSuica.<code className="-tokenMethod">getDisplayCountry</code>();<br/>
                                                    <span className="-tokenComment">// Suíça</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Como é traduzido 'Japão' em português Brasil?</span><br/>
                                                    localeJapones.<code className="-tokenMethod">getDisplayCountry</code>();<br/>
                                                    <span className="-tokenComment">// Japão</span><br/>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">Faz a mesma função anterior, porém se baseia na instância de Locale do argumento (Exemplo: Como é traduzido "Itália" em Japonês?):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <span className="-tokenComment"># Como é traduzido 'Itália' em Japonês?</span><br/>
                                                    localeItaly.<code className="-tokenMethod">getDisplayCountry</code>(localeJapones);<br/>
                                                    <span className="-tokenComment">// イタリア (Itália em Japonês)</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Como é traduzido 'Suíça' em Indiano?</span><br/>
                                                    localeSuica.<code className="-tokenMethod">getDisplayCountry</code>(localeIndia);<br/>
                                                    <span className="-tokenComment">// स्विट्ज़रलैंड (Suíça em Indiano)</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Como é traduzido 'Japonês' em Italiano?</span><br/>
                                                    localeJapones.<code className="-tokenMethod">getDisplayCountry</code>(localeItaly);<br/>
                                                    <span className="-tokenComment">// Giappone (Japonês em Italiano)</span><br/>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">Mesma função que as anteriores, porém aqui é em relação a LINGUAGEM em sí, ou seja, "Como se diz 'Itália' em Japonês?"</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    
                                                    <span className="-tokenComment"># Como se diz 'Itália' em Japonês?</span><br/>
                                                    localeItaly.<code className="-tokenMethod">getDisplayLanguage</code>(localeJapones);<br/>
                                                    <span className="-tokenComment">// イタリア語 (Itália em Japonês): ItariaGO</span><br/>
                                                    <br/>
                                                    
                                                    <span className="-tokenComment"># Como se diz 'Suíça' em Indiano?</span><br/>
                                                    localeSuica.<code className="-tokenMethod">getDisplayLanguage</code>(localeIndia);<br/>
                                                    <span className="-tokenComment">// इतालवी (Suíça em Indiano)</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Como se diz 'Japonês' em Italiano?</span><br/>
                                                    localeJapones.<code className="-tokenMethod">getDisplayLanguage</code>(localeItaly);<br/>
                                                    <span className="-tokenComment">// giapponese (Japonês em Italiano)</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li><code className="token_reservada">Internacionalização de Números</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getInstance(Locale.JAPAN)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa os números aonde os separadores de milhares e etc é diferentes para cada pais (<code className="outputResult">"1,200"</code>, <code className="outputResult">"1.200,00"</code>...), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a>
                                            <p className="main-title--implementFullBlock">Exemplos de implementações na seção especifica logo abaixo desta, sobre "Internacionalização"!!</p>
                                        </li>
                                        <li><code className="token_reservada">Internacionalização de Moedas</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getCurrencyInstance(Locale.ITALY)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa as moedas aonde os separadores de milhares, simbolo da moeda e etc também são diferentes para cada pais (<code className="outputResult">"$10,000.21"</code>, <code className="outputResult">"￥10,000"</code>, <code className="outputResult">"10.000,21 €"</code>...), (Obs IMPORTANTE: A internacionalização das moedas utilizando esse processo aqui descrito NÃO faz conversões de câmbio (câmbio de moeda, ou também taxa de câmbio) entre elas, apenas adéqua a máscara (Separadores de milhares e etc <code className="outputResult">","</code>, <code className="outputResult">"."</code>) e símbolos (<code className="outputResult">R$</code>, <code className="outputResult">U$</code>, <code className="outputResult">￥</code>)), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a>
                                            <p className="main-title--implementFullBlock">Exemplos de implementações na seção especifica logo abaixo desta, sobre "Internacionalização"!!</p>
                                        </li>
                                        <br/>
                                        <li><code className="token_reservada">SimpleDateFormat</code>: Mesmo contexto da <code className="token_reservada">DateFormat</code> porém podemos definir um padrão de máscara personalizado por nós (Mesma regra sobre <code className="token_reservada">.format()</code> que recebe um objeto e retorna/converte em uma <code className="token_reservada">String</code>, e <code className="token_reservada">.parse()</code> que recebe uma <code className="token_reservada">String</code> e retorna/converte em um objeto, mais explicações sobre esses <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> logo abaixo na classe <code className="token_reservada">DateTimeFormatter</code>), mais informações sobre <code className="token_reservada">SimpleDateFormat</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula118SimpleDateFormat.java" target="_blank">Clique AQUI!</a></li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile">Porisso devemos nos atentar as possíveis lançadas de <code className="token_reservada">RuntimeExceptions</code> por criar um padrão de máscara e na hora de converter passar um padrão diferente deste criado anteriormente.</p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando os padrões de formatações/máscaras personalizados por nós:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <code className="-tokenClassEntity">String</code> pattern = <code className="-tokenString">"yyyy.MM.dd G 'ás' HH:mm:ss z"</code>;<br/>
                                                    <code className="-tokenClassEntity">SimpleDateFormat</code> sdf = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">SimpleDateFormat</code>(pattern);<br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormated = sdf.<code className="-tokenMethod">format</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Date</code>());<br/>
                                                    <span className="-tokenComment">// Output `dateFormated`: 2022.12.07 d.C. ás 22:17:23 BRT</span>

                                                    <br/><br/>
                                                    <code className="-tokenClassEntity">String</code> pattern2 = <code className="-tokenString">"'Brasil' dd 'de' MMMM 'de' yyyy"</code>;<br/>
                                                    <code className="-tokenClassEntity">SimpleDateFormat</code> sdf2 = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">SimpleDateFormat</code>(pattern2);<br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormated2 = sdf2.<code className="-tokenMethod">format</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Date</code>());<br/>
                                                    <span className="-tokenComment">// Output `dateFormated2`: Brasil 07 de dezembro de 2022</span>

                                                    <br/><br/>
                                                    <span className="-tokenComment"># Obs: Segue a mesma lógica no metodo parsing, aonde devemos respeitar esse pattern/máscara:</span><br/>
                                                    <code className="-tokenKeyword">try</code> &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> dateFormated3_parserException = {window.screen.width <= 425 ? <br/> : ""}sdf2.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"Brasil 07 de dezembro de 2022"</code>);</code><br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">ParseException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <br/>
                                        <h3 class="projects-subtitle">Maneira Nova</h3>
                                        <li><code className="token_reservada">Maneira Nova</code>: Com esses problemas de Limitações nas representações (<code className="token_reservada">long</code>) possíveis e problemas de Internacionalização apartir do Java 8 é adicionado um pacote completo especializado em datas <code className="token_reservada">java.time</code> (Criado por um Brasileiro e adotado pelo Java).</li>
                                        <li>Os novos objetos <code className="token_reservada">Temporais</code> descritos abaixo são <code className="token_reservada">Imutáveis</code> e também são representados em baixo nível pelos <code className="outputResult">milissegundos</code>, portanto também devemos formatar eles para melhorar na visualização humana, porém desta vez suportando até <code className="outputResult">"+999999999-12-31"</code> e <code className="outputResult">"-999999999-01-01"</code>.</li>
                                        <br/>
                                        <li>Principais Classes <code className="token_reservada">Temporais</code> do novo pacote:</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">LocalDate</code>: Utilizada para representar datas simples <code className="outputResult">"22/12/1999"</code> substituindo <code className="token_reservada">Date</code> e <code className="token_reservada">Calendar</code> (Saída do <code className="token_reservada">.toString()</code>: <code className="outputResult">"1999-12-22"</code>), mais informações sobre <code className="token_reservada">LocalDate</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula119LocalDate.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando maneiras de instânciar e alguns métodos utilitários:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Pegando a data corrente do S.O: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_now = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>();<span className="-tokenComment">// static, ou seja, Não utilizamos `new`</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Criando de acordo com parâmetro: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_of = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1999</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">22</code>);<br/>
                                                    <span className="-tokenComment">// `.toString()` dele já vem no formato do DB MySQL: 1999-12-22</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Métodos mais utilizados: </span><br/>
                                                    
                                                    <br/>
                                                    date_of.<code className="-tokenMethod">getYear</code>();<br/>
                                                    date_of.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">ChronoField</code>.<code className="-tokenKeyConstant">YEAR</code>);<br/>
                                                    <span className="-tokenComment">// 1999 (Duas maneiras diferentes que produzem o mesmo resultado)</span><br/>

                                                    <br/>
                                                    date_of.<code className="-tokenMethod">getMonth</code>();<br/>
                                                    <span className="-tokenComment">// DECEMBER</span><br/>

                                                    <br/>
                                                    date_of.<code className="-tokenMethod">getMonthValue</code>();<br/>
                                                    <span className="-tokenComment">// 12</span><br/>

                                                    <br/>
                                                    date_of.<code className="-tokenMethod">getDayOfMonth</code>();<br/>
                                                    date_of.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">ChronoField</code>.<code className="-tokenKeyConstant">DAY_OF_MONTH</code>);<br/>
                                                    <span className="-tokenComment">// 22 (Duas maneiras diferentes que produzem o mesmo resultado)</span><br/>

                                                    <br/>
                                                    date_of.<code className="-tokenMethod">getDayOfWeek</code>();<br/>
                                                    <span className="-tokenComment">// WEDNESDAY</span><br/>

                                                    <br/>
                                                    date_of.<code className="-tokenMethod">getDayOfYear</code>();<br/>
                                                    <span className="-tokenComment">// 356</span><br/>

                                                    <br/>
                                                    date_of.<code className="-tokenMethod">lengthOfMonth</code>();<br/>
                                                    <span className="-tokenComment">// 31 &#60;- ultimo dia do mês de dezembro</span><br/>
                                                    
                                                    <br/><br/>
                                                    date_of.<code className="-tokenMethod">isLeapYear</code>();<br/>
                                                    <span className="-tokenComment">// false &#60;- é ano bisexto?</span><br/>
                                                    
                                                    <br/><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenKeyConstant">MAX</code>;<br/>
                                                    <span className="-tokenComment">// `.toString()` dele: +999999999-12-31</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenKeyConstant">MIN</code>;<br/>
                                                    <span className="-tokenComment">// `.toString()` dele: -999999999-01-01</span>
                                                </code>
                                            </ul>
                                        
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">LocalTime</code>: Utilizado para representar tempos <code className="outputResult">"horas:minutos:segundos.milissegundos"</code> (Saída do <code className="token_reservada">.toString()</code>: <code className="outputResult">"08:30:00.999999999"</code>), mais informações sobre <code className="token_reservada">LocalTime</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula120LocalTime.java" target="_blank">Clique AQUI!</a></p>
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando maneiras de instânciar e alguns métodos utilitários:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Pegando a hora corrente do S.O: </span><br/>
                                                    <code className="-tokenClassEntity">LocalTime</code> time_now = <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenMethod">now</code>();<span className="-tokenComment">// static, ou seja, Não utilizamos `new`</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Criando de acordo com parâmetro: </span><br/>
                                                    <code className="-tokenClassEntity">LocalTime</code> time_of = <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">23</code>, <code className="-tokenKeyConstant">33</code>, <code className="-tokenKeyConstant">12</code>);<br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 23:33:12</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Métodos mais utilizados: </span><br/>
                                                    
                                                    <br/>
                                                    time_of.<code className="-tokenMethod">getHour</code>();<br/>
                                                    <span className="-tokenComment">// 23 </span><br/>
                                                    time_of.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">ChronoField</code>.<code className="-tokenKeyConstant">CLOCK_HOUR_OF_AMPM</code>);<br/>
                                                    <span className="-tokenComment">// 11 </span><br/>

                                                    <br/>
                                                    time_of.<code className="-tokenMethod">getMinute</code>();<br/>
                                                    <span className="-tokenComment">// 33</span><br/>

                                                    <br/>
                                                    time_of.<code className="-tokenMethod">getSecond</code>();<br/>
                                                    <span className="-tokenComment">// 12</span><br/>

                                                    <br/>
                                                    time_of.<code className="-tokenMethod">getNano</code>();<br/>
                                                    <span className="-tokenComment">// 00 (Na criação não passamos ele (menor unidade de tempo), porisso o default é 00)</span><br/>

                                            
                                                    <br/><br/>
                                                    <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenKeyConstant">MAX</code>;<br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 23:59:59.999999999</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenKeyConstant">MIN</code>;<br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 00:00</span>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">LocalDateTime</code>: Utilizada para representar as duas anteriores, mais completas compostas por data e tempo, contendo todas as funcionalidades das duas classes anteriores em uma, sendo assim <code className="outputResult">"yyyy-MM-ddThoras:minutos:segundos.milissegundos"</code> (Saída do <code className="token_reservada">.toString()</code>: <code className="outputResult">"2022-12-07T23:39:20.813999247"</code>), mais informações sobre <code className="token_reservada">LocalDateTime</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula121LocalDateTime.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando maneiras de instânciar e alguns métodos utilitários:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Possui a junção de todos os métodos presentes nas classes especializadas LocalDate e LocalTime;</span><br/><br/>
                                                    
                                                    <span className="-tokenComment"># Pegando a data e hora corrente do S.O: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> dateTime_now = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>();<span className="-tokenComment">// static, ou seja, Não utilizamos `new`</span><br/>
                                                    <br/>

                                                    <span className="-tokenComment"># Podemos unir um LocalDate + LocalTime: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_of = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1999</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">22</code>);<br/>
                                                    <code className="-tokenClassEntity">LocalTime</code> time_of = <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">23</code>, <code className="-tokenKeyConstant">33</code>, <code className="-tokenKeyConstant">12</code>);<br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> dateTimeJoinner_of = date_of.atTime(time_of);<br/>
                                                    <span className="-tokenComment">// 1999-12-22T23:33:12</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li><code className="token_reservada">Instant</code>: Utilizada para representar nano segundos (de <code className="outputResult">01/01/1970</code> até <code className="outputResult">17/08/292278994 04:12</code>), ou seja, a menor unidade/medida de tempo suportada pelo computador, representa um ponto instantâneo dentro de uma linha temporal. A Saída do <code className="token_reservada">.toString()</code> (<code className="outputResult">"2022-12-09T00:20:37.073909679Z"</code>) dele é a mesma que do <code className="token_reservada">LocalDateTime</code> porém com um <code className="token_reservada">`Z`</code> no final de <code className="token_reservada">Zulu time (UTC)</code>, mais informações sobre <code className="token_reservada">Instant</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula122Instant_NanoSeconds.java" target="_blank">Clique AQUI!</a></li>
                                        <li><code className="token_reservada">Zulu time (UTC)</code> é um fuso horário universal, ou seja, quando queremos o horário correto basta converter <code className="outputResult">"Zulu time to brazil"</code> e etc...</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Instant</code>: Utiliza 2 variáveis para representar <code className="token_reservada">Nano</code> e <code className="token_reservada">EpochSeconds</code>.</p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando maneiras de instânciar e também demonstra na prática essas duas variáveis que o representa (<code className="token_reservada">Nano</code> e <code className="token_reservada">EpochSeconds</code>):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Apesar de representar a menor unidade de tempo, ainda sim ele tem a junção das Temporais anteriores, porém ele possui Especialidade em nanossegundos;</span><br/><br/>
                                                    
                                                    <span className="-tokenComment"># Pegando o ponto instantâneo corrente do S.O: </span><br/>
                                                    <code className="-tokenClassEntity">Instant</code> instant_now = <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">now</code>();<span className="-tokenComment">// static, ou seja, Não utilizamos `new`</span><br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 2022-12-09T00:20:37.073909679Z</span><br/>
                                                    <span className="-tokenComment">// 'Z' no final significa "Zulu Time (UTC)"</span><br/>
                                                    <br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Duas representações do Instant (Em baixo nível): </span><br/>
                                                    <br/>
                                                    instant_now.<code className="-tokenMethod">getEpochSecond</code>();<br/>
                                                    <span className="-tokenComment">// 1670546135 (long) basicamente é os segundos</span><br/>
                                                    instant_now.<code className="-tokenMethod">getNano</code>();<br/>
                                                    <span className="-tokenComment">// 938357305 (int) 999.999.999 &#60;=&#62; 1 Epoch (basicamente é os nanossegundos)</span><br/>

                                                    <br/><br/>
                                                    <span className="-tokenComment"># Aqui explica na prática oq é o nano(milesimos e etc) e o epoch(segundo): </span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">ofEpochSecond</code>(<code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">999_999_999</code>).<code className="-tokenMethod">plusNanos</code>(<code className="-tokenKeyConstant">1</code>);<br/>
                                                    <span className="-tokenComment">// 1970-01-01T00:00:0<code className="token_reservada">3</code>Z</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">ofEpochSecond</code>(<code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">1_000_000_000</code>);<br/>
                                                    <span className="-tokenComment">// 1970-01-01T00:00:0<code className="token_reservada">3</code>Z</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># <code className="token_reservada">Explicação</code>: passamos 2 segundos (EpochSecond) e depois somamos com + 1_000_000_000 (Nano) que equivale a 1 segundo (EpochSecond)</span><br/>
                                                    <span className="-tokenComment">// Porisso que quando passamos 2 segundos (EpochSecond) e 999_999_999 (Nano) e realizamos a soma com `.plusNanos(1)` no final gera `3` segundos (1970-01-01T00:00:0<code className="token_reservada">3</code>Z) </span>
                                                    
                                                    <br/><br/>
                                                    <span className="-tokenComment"># Mesma operação porém diminuindo com valores negativos:</span><br/>
                                                    <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">ofEpochSecond</code>(<code className="-tokenKeyConstant">2</code>, -<code className="-tokenKeyConstant">1_000_000_000</code>);<br/>
                                                    <span className="-tokenComment">// 1970-01-01T00:00:0<code className="token_reservada">1</code>Z</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <br/><br/>
                                        <li>Principais Classes <code className="token_reservada">Utilitárias</code> do novo pacote:</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Duration</code>: Classe utilitária para pegar intervalos entre <code className="token_reservada">datas e horas ou APENAS horas</code>, <code className="outputResult">NÃO sendo possível utilizar em datas simples "22/12/1999"</code> (<code className="token_reservada">Compatível: Time or DateTime</code>). Exemplo de classes compatíveis: <code className="token_reservada">LocalDateTime</code>, <code className="token_reservada">LocalTime</code> e <code className="token_reservada">Instant</code>, mais informações sobre <code className="token_reservada">Duration</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/B_time/Aula123Duration_Intervalos_Utils.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando maneiras de obter esses intervalos:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Analisando diferanças entre anos: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> dateTime_now = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>(<code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"America/Sao_Paulo"</code>));<br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> dateTime_nowAfterTwoYears = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>(<code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"America/Sao_Paulo"</code>))<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">plusYears</code>(<code className="-tokenKeyConstant">2</code>)</code>;<br/>

                                                    <code className="-tokenClassEntity">Duration</code> d1 = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">between</code>(dateTime_now, dateTime_nowAfterTwoYears);<br/>
                                                    <span className="-tokenComment">// PT17544H0.000200349S (horas, e segundos)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Analisando a diferença entre horas/minutos/segundos: </span><br/>
                                                    <code className="-tokenClassEntity">LocalTime</code> time_now = <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenMethod">now</code>(<code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"America/Sao_Paulo"</code>));<br/>
                                                    <code className="-tokenClassEntity">LocalTime</code> time_nowMinus7Hours = <code className="-tokenClassEntity">LocalTime</code>.<code className="-tokenMethod">now</code>(<code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"America/Sao_Paulo"</code>))<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">minusHours</code>(<code className="-tokenKeyConstant">7</code>)</code>;<br/>

                                                    <code className="-tokenClassEntity">Duration</code> d2 = <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">between</code>(time_now, time_nowMinus7Hours);<br/>
                                                    <span className="-tokenComment">// PT-6H-59M-59.99997496S (horas, minutos e segundos)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Analisando a diferença entre minutos e segundos: </span><br/>
                                                    <code className="-tokenClassEntity">Duration</code> d2 = <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">between</code>(<code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">now</code>(), <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">plusSeconds</code>(<code className="-tokenKeyConstant">60</code>));<br/>
                                                    <span className="-tokenComment">// PT1M0.000002428S (minutos, e segundos)</span><br/>

                                                    <br/><br/>
                                                    <span className="-tokenComment">#  Possibilita também converter dias em horas e etc: </span><br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">ofDays</code>(<code className="-tokenKeyConstant">20</code>);<br/>
                                                    <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">20</code>, <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">DAYS</code>);<br/>
                                                    <span className="-tokenComment">//  PT480H == 20 Days (Duas maneiras diferentes que produzem o mesmo resultado)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">ofHours</code>(<code className="-tokenKeyConstant">20</code>);<br/>
                                                    <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">20</code>, <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">HOURS</code>);<br/>
                                                    <span className="-tokenComment">// PT20H == 20 Hours (Duas maneiras diferentes que produzem o mesmo resultado)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">ofMinutes</code>(<code className="-tokenKeyConstant">1000</code>);<br/>
                                                    <code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1000</code>, <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">MINUTES</code>);<br/>
                                                    <span className="-tokenComment">// PT16H40M == 1000 Minutes (Duas maneiras diferentes que produzem o mesmo resultado)</span>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação <code className="token_reservada">INVÁLIDA</code> (<code className="outputResult">Utilizando Temporais que representam Datas simples e cruas (Sem horas) "dd/mm/yyyy"</code>) que lança <code className="token_reservada">UnsupportedTemporalTypeException</code>, a <code className="token_reservada">SOLUÇÃO</code> é utilizar próxima classe abaixo (<code className="token_reservada">Period</code>):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <span className="-tokenComment"># <code className="token_reservada">OPERAÇÃO INVÁLIDA!!</code></span><br/>
                                                    <span className="-tokenComment"># Analisando a diferença entre dias: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_now = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>();<br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_nowAfterTwoYears = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">plusYears</code>(<code className="-tokenKeyConstant">2</code>)</code>;<br/>

                                                    <code className="-tokenClassEntity">Duration</code> d1Invalid_throwsEx = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Duration</code>.<code className="-tokenMethod">between</code>(date_now, date_nowAfterTwoYears);<br/>
                                                </code>
                                            </ul>    
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Period</code>: Classe utilitária com mesmo contexto da anterior, porém para pegar intervalos entre <code className="token_reservada">datas simples</code> <code className="outputResult">"22/12/1999"</code> solução para a limitação da anterior (<code className="token_reservada">Compatível: Date</code>). Exemplo de classes compatíveis: <code className="token_reservada">LocalDate</code>, mais informações sobre <code className="token_reservada">Period</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula124Period_IntervalosDate_Utils.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando maneiras de obter esses intervalos (<code className="outputResult">Obs: Os retornos se baseiam em: Ano/Mes/Dia e <code className="token_reservada">NÃO retorna SEMANAS!</code></code>):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <code className="-tokenClassEntity">LocalDate</code> date_now = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>();<br/>

                                                    <span className="-tokenComment"># Agora depois de 2 dias: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_nowAfter2Days = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">plusDays</code>(<code className="-tokenKeyConstant">2</code>)</code>;<br/>

                                                    <code className="-tokenClassEntity">Period</code> period_nowAfter2Days = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Period</code>.<code className="-tokenMethod">between</code>(date_now, date_nowAfter2Days);<br/>
                                                    <span className="-tokenComment">// P2D</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Agora depois de 2 anos: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_nowAfter2Years = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">plusYears</code>(<code className="-tokenKeyConstant">2</code>)</code>;<br/>

                                                    <code className="-tokenClassEntity">Period</code> period_nowAfter2Years = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Period</code>.<code className="-tokenMethod">between</code>(date_now, date_nowAfter2Years);<br/>
                                                    <span className="-tokenComment">// P2Y</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Agora depois de 2 anos e 7 dias: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> date_nowAfter2YearsAnd7Days = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">plusYears</code>(<code className="-tokenKeyConstant">2</code>).<code className="-tokenMethod">plusDays</code>(<code className="-tokenKeyConstant">7</code>) </code>;<br/>

                                                    <code className="-tokenClassEntity">Period</code> period_nowAfter2YearsAnd7Days = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">Period</code>.<code className="-tokenMethod">between</code>(date_now, date_nowAfter2YearsAnd7Days);<br/>
                                                    <span className="-tokenComment">// P2Y7D</span><br/>

                                                    <br/><br/>
                                                    <span className="-tokenComment"># Convertendo 58 semanas em dias: </span><br/>
                                                    <code className="-tokenClassEntity">Period</code>.<code className="-tokenMethod">ofWeeks</code>(<code className="-tokenKeyConstant">58</code>);<br/>
                                                    <span className="-tokenComment">// P406D</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Convertendo 58 meses: (Obs ele suporta meses então retornará o obvio)</span><br/>
                                                    <code className="-tokenClassEntity">Period</code>.<code className="-tokenMethod">ofMonths</code>(<code className="-tokenKeyConstant">58</code>);<br/>
                                                    <span className="-tokenComment">// P58M</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Periodo entre anos (Tomar cuidados): </span><br/>
                                                    <span className="-tokenComment"># Parte que explica aonde <code className="token_reservada">NÃO possui suporte</code>: </span><br/>
                                                    <span className="-tokenComment"># Tomar cuidados pois o método `.getMonths()` não retorna a Unidade Normalizada! (15 Months é != de 1 Year e 3 Months) </span><br/>
                                                    <code className="-tokenClassEntity">Period</code>.<code className="-tokenMethod">between</code>(date_now,<br/>
                                                        <code className="-nestedInnerCode">date_now.<code className="-tokenMethod">plusDays</code>(period_nowAfter2YearsAnd7Days.<code className="-tokenMethod">getDays</code>()))</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">.<code className="-tokenMethod">getMonths</code>());</code><br/>
                                                    <span className="-tokenComment">// <code className="token_reservada">NÃO lança exceções</code>, mas retorna erros de lógica!! </span><br/> 
                                                    <span className="-tokenComment">// <code className="token_reservada">SOLUÇÃO</code>: ChronoUnit</span><br/> 

                                                    <br/>
                                                    <span className="-tokenComment"># <code className="token_reservada">Solução</code>: </span><br/>
                                                    date_now.<code className="-tokenMethod">until</code>(<br/>
                                                        <code className="-nestedInnerCode">date_now.<code className="-tokenMethod">plusDays</code>(period_nowAfter2YearsAnd7Days</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">.<code className="-tokenMethod">getDays</code>()),</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">YEARS</code></code><br/>
                                                    );
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">ChronoUnit</code>: Tudo que é co-relacionado a datas, horas, minutos, segundos, milissegundos e nano segundos utiliza <code className="token_reservada">ChronoUnit</code>, que seria tipo a "tipagem" desses tempos, logo, bastante métodos deste contexto utilizam eles como parâmetro e também temos métodos utilitários para cada tipo dessas unidades de tempo. (Exemplo de uso: Periodo entre dias <code className="token_reservada">ChronoUnit.DAY.beetween(talDia, talDia);</code>, mais informações sobre <code className="token_reservada">ChronoUnit</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula125ChronoUnit_Utils.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando algumas das possibilidades sobre essa classe, em especifico obtenções de intervalos para cada uma das tipagens do Enumerador:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <code className="-tokenClassEntity">LocalDateTime</code> birthday = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1999</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">22</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Quantos anos eu tenho?</span><br/>
                                                    <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">YEARS</code>.<code className="-tokenMethod">between</code>(birthday, <code classname="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>());<br/>
                                                    <span className="-tokenComment">// 22 anos</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Quantos dias eu tenho?</span><br/>
                                                    <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">DAYS</code>.<code className="-tokenMethod">between</code>(birthday, <code classname="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>());<br/>
                                                    <span className="-tokenComment">// 8399 dias</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Quantos meses eu tenho?</span><br/>
                                                    <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">MONTHS</code>.<code className="-tokenMethod">between</code>(birthday, <code classname="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>());<br/>
                                                    <span className="-tokenComment">// 275 meses</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Quantos meses eu tenho?</span><br/>
                                                    <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">WEEKS</code>.<code className="-tokenMethod">between</code>(birthday, <code classname="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>());<br/>
                                                    <span className="-tokenComment">// 1199 semanas</span>    
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">TemporalAdjusters (Classe)</code>: Existe uma Classe estática e também uma Interface, ou seja, 100% utilitária para ajustar objetos do tipo <code className="token_reservada">Temporal</code>, como <code className="token_reservada">LocalDate</code>, <code className="token_reservada">LocalTime</code> e <code className="token_reservada">LocalDateTime</code>, isto é possível pois diversos métodos presentes nessas classes recebem como parâmetro a interface descrita abaixo (<code className="token_reservada">TemporalAdjuster</code>) e essa (<code className="token_reservada">TemporalAdjusters</code>) funciona como uma "fábrica" de Objetos do tipo <code className="token_reservada">TemporalAdjuster</code>. Ela fornece métodos estáticos para realizar ajustes em datas e horários, mais detalhes sobre <code className="token_reservada">TemporalAdjusters</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula126TemporalAdjusters_Utils.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando algumas das possibilidades sobre essa classe, como por exemplo "Quando será a próxima terça? em relação a alguma data ou a data atual (corrente)":</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <code className="-tokenClassEntity">LocalDateTime</code> birthday = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1999</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">22</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Obs: A diferença entre o método `.with()` e `.plusDays()` dos objetos Temporais, é que o `.with()` altera a data SOBRESCREVENDO o valor, e o `.plusDays()` altera SOMANDO os valores.</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Alterando a data sobrescrevendo ao invés de somar e etc...</span><br/>
                                                    
                                                    <br/> 
                                                    <span className="-tokenComment"># Re-atribuí na mesma variável de referência, pois as classes Temporais são IMUTÁVEIS!</span><br/>
                                                    <span className="-tokenComment"># Obs: Esse Enumerador do ChronoField retornará um TemporalField NÃO um TemporalAdjuster, porém o método `.with()` possuí uma sobrecarga que recebe como parâmetro esse tipo, porisso é possível utiliza-lo também.</span><br/>
                                                    birthday = birthday.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">ChronoField</code>.<code className="-tokenKeyConstant">MONTH_OF_YEAR</code>, <code className="-tokenKeyConstant">10</code>);<br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 1999-10-22 (sobrescreveu o mês 12 (Definido inicialmente) pelo 10)</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Pegando o próximo dia da semana ou o atual (Exemplo: quando será a próxima terça?)</span><br/>
                                                    <span className="-tokenComment"># Obs: As diferenças entre `.nextOrSame()` (Hoje, ou a próxima) e `.next()` é que a primeira (`.nextOrSame()`) retornará HOJE se corresponder com o argumento, ou a próxima que corresponder, já a segunda (`.next()`) só considera a próxima (Mesmo se o dia de hoje corresponder com o argumento).</span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> tuesday_nowOrNextWeek = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">TemporalAdjusters</code>.<code className="-tokenMethod">nextOrSame</code>(<code className="-tokenClassEntity">DayOfWeek</code>.<code className="-tokenKeyConstant">TUESDAY</code>));</code><br/>
                                                    <span className="-tokenComment">// Retornará HOJE se for Terça feira ou a próxima Terça feira se hoje não for.</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> tuesday_nextWeekOrNextWeek = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">TemporalAdjusters</code>.<code className="-tokenMethod">next</code>(<code className="-tokenClassEntity">DayOfWeek</code>.<code className="-tokenKeyConstant">TUESDAY</code>));</code><br/>
                                                    <span className="-tokenComment">// Sempre retornára a próxima Terça feira independentemente se for hoje, sempre a próxima.</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Pega o último dia do mês corrente com Calendar</span><br/>
                                                    <code className="-tokenClassEntity">GregorianCalendar</code>.<code className="-tokenMethod">getInstance</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">getMaximum</code>(<code className="-tokenClassEntity">Calendar</code>.<code className="-tokenKeyConstant">DAY_OF_MONTH</code>);</code><br/>
                                                    <span className="-tokenComment">// 31</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Ajusta a data setando o último dia do mês corrente na data corrente (com TemporalAdjusters)</span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> now_withLastDayOfMonth = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">TemporalAdjusters</code>.<code className="-tokenMethod">lastDayOfMonth</code>());</code><br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 2022-12-31</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Ajusta a data setando o primeiro dia do mês corrente (com TemporalAdjusters)</span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> now_withFirstDayOfMonth = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>()<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">TemporalAdjusters</code>.<code className="-tokenMethod">firstDayOfMonth</code>());</code><br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 2022-12-01</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Ajusta a data setando o primeiro ou último dia de um mês X (Basta escolher no `.of()`)</span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateOf_withFirstDayOfMonth = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenKeyConstant">10</code>, <code className="-tokenKeyConstant">22</code>)<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">TemporalAdjusters</code>.<code className="-tokenMethod">firstDayOfMonth</code>());</code><br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 2022-10-01</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateOf_withLastDayOfMonth = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenKeyConstant">10</code>, <code className="-tokenKeyConstant">22</code>)<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">with</code>(<code className="-tokenClassEntity">TemporalAdjusters</code>.<code className="-tokenMethod">lastDayOfMonth</code>());</code><br/>
                                                    <span className="-tokenComment">// `.toString()` dele: 2022-10-31</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">TemporalAdjuster (Interface)</code>: A Interface é polimorfica, utilizada como parâmetro de várias classes relacionadas ao tempo, podemos assim sobrecrever <code className="token_reservada">@Override</code> o método <code className="token_reservada">public Temporal adjustInto(Temporal temporal)</code> para personalizar regras de negócios, mais detalhes sobre as possibilidades de implementações em <code className="token_reservada">src</code> de treino no repositório git (Exemplo: Pegando o próximo dia útil, considerando de segunda até quinta): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula127TemporalAdjuster_Impl_ExeComWith.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando o polimorfismo sobrescrevendo o método <code className="token_reservada">.adjustInto()</code> da interface TemporalAdjuster que é parâmetro de diversos métodos de instância das Classes Temporais, assim podemos personalizar regras de negócios utilizando o polimorfismo a nosso favor; Desafio proposto: Retornar o próximo dia útil (em uma semana que só vai até quinta), ou seja, se hoje for quinta, sexta, sabado, ou domingo, o próximo dia útil será segunda. Para outros dias (segunda, terça, e quarta) o próximo dia útil será o correspondente (Razão 1).</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                
                                                    <span className="-tokenComment"># 1o Primeiro - Implementamos a interface e sobrescrevemos o método `adjustInto()` com regras de negócios personalizadas: </span><br/>
                                                    <code className="-tokenKeyword">class</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>  <code className="-tokenKeyword">implements</code> <code className="-tokenInterfaceEntity">TemporalAdjuster</code> &#123;<br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode -tokenAnnotationsEntity">@Override</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenInterfaceEntity">Temporal</code> <code className="-tokenMethod">adjustInto</code>(<code className="-tokenInterfaceEntity">Temporal</code> temporal) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">DayOfWeek</code> currentDayOfWeek = <code className="-tokenClassEntity">DayOfWeek</code>.<code className="-tokenMethod">of</code>(temporal.<code className="-tokenMethod">get</code>(<code className="-tokenClassEntity">ChronoField</code>.<code className="-tokenKeyConstant">DAY_OF_WEEK</code>));</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">int</code> addDays;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">switch</code> (currentDayOfWeek) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">case</code> <code className="-tokenKeyConstant">THURSDAY</code>: addDays = <code className="-tokenKeyConstant">4</code>; <code className="-tokenKeyword">break</code>;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">case</code> <code className="-tokenKeyConstant">FRIDAY</code>: addDays = <code className="-tokenKeyConstant">3</code>; <code className="-tokenKeyword">break</code>;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">case</code> <code className="-tokenKeyConstant">SATURDAY</code>: addDays = <code className="-tokenKeyConstant">2</code>; <code className="-tokenKeyword">break</code>;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">default</code>: addDays = <code className="-tokenKeyConstant">1</code>; <code className="-tokenKeyword">break</code>;</code><br/>                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> temporal.<code className="-tokenMethod">plus</code>(addDays, <code className="-tokenClassEntity">ChronoUnit</code>.<code className="-tokenKeyConstant">DAYS</code>);</code><br/>
                                                    &#125;<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># 2o Segundo - Realizamos as chamadas passando a implementação personalizada:</span><br/>
                                                    <code className="-tokenKeyword">public class</code> <code className="-tokenClassEntity">Main</code>  &#123;<br/>
                                                        <code className="-nestedInnerCode"> <code className="-tokenKeyword">public static</code> <code className="-tokenClassEntity">void</code> <code className="-tokenMethod">main</code>(<code className="-tokenClassEntity">String</code>[] args) &#123;</code><br/>
                                                        
                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Obs: Ainda NÃO altera em memória, pois as Temporais são IMUTÁVEIS, então a regra só é aplicada no retorno</span><br/>
                                                        
                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de segunda</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_segunda = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">19</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_segunda.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_segunda.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_segunda.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM MONDAY next util day is: 2022-12-20 (TUESDAY)</span><br/>
                                                        
                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de terça</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_terca = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">20</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_terca.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_terca.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_terca.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM TUESDAY next util day is: 2022-12-21 (WEDNESDAY)</span><br/>

                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de quarta</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_quarta = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">21</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_quarta.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_quarta.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_quarta.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM WEDNESDAY next util day is: 2022-12-22 (THURSDAY)</span><br/>

                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de quinta</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_quinta = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">22</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_quinta.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_quinta.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_quinta.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM THURSDAY next util day is: 2022-12-26 (MONDAY)</span><br/>

                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de sexta</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_sexta = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">23</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_sexta.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_sexta.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_sexta.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM FRIDAY next util day is: 2022-12-26 (MONDAY)</span><br/>
                                                        
                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de sabado</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_sabado = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">24</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_sabado.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_sabado.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_sabado.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM SATURDAY next util day is: 2022-12-26 (MONDAY)</span><br/>

                                                        <br/>
                                                        <span className="-tokenComment -nestedInnerCode"># Próximo dia útil de domingo</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDate</code> dateOf_domingo = {window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">2022</code>, <code className="-tokenClassEntity">Month</code>.<code className="-tokenKeyConstant">DECEMBER</code>, <code className="-tokenKeyConstant">25</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"FROM "</code> + dateOf_domingo.<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">" next util day is: "</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_domingo.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()) + <code className="-tokenString">" ("</code> +</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">dateOf_domingo.<code className="-tokenMethod">with</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">GetLastUtilDayWithTemporalAdjuster</code>()).<code className="-tokenMethod">getDayOfWeek</code>() + <code className="-tokenString">")"</code>);</code><br/>
                                                        <span className="-tokenComment -nestedInnerCode">// FROM SUNDAY next util day is: 2022-12-26 (MONDAY)</span><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li><code className="token_reservada">Comportamento das Classes Temporais</code>: Obs: A diferença entre os métodos de instância <code className="token_reservada">.with()</code> e <code className="token_reservada">.plusDays()</code> das Classes Temporais é que o <code className="token_reservada">.with()</code> altera sobrescrevendo a data (Equivalente ao <code className="token_reservada">`=`</code>), já o <code className="token_reservada">.plusDays()</code> faz a adição nele (Equivalente ao <code className="token_reservada">`+=`</code>).</li>
                                        <br/>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Zone</code>: Representa as zonas suportadas pelo Java, essas zonas é as representações dos fuso horários (<code className="token_reservada">OffSet</code>), mais informações sobre essas <code className="token_reservada">Zonas</code>, <code className="token_reservada">OffSet</code>, <code className="token_reservada">ZonedId</code>, <code className="token_reservada">ZonedDateTime</code>, <code className="token_reservada">ZoneOffSet</code>, <code className="token_reservada">OffSetDateTime</code> e etc: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula128Zone_Utils.java" target="_blank">Clique AQUI!</a></p>
                                        
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando essas zonas e como verificar diferenças entre os diversos fusos horários e etc...</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Para obter a lista de zonas suportadas pelo Java:</span><br/>
                                                    <code className="-tokenClassEntity">Map</code>&#60;<code className="-tokenClassEntity">String</code>, <code className="-tokenClassEntity">String</code>&#62; shortIds = <code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenKeyConstant">SHORT_IDS</code>;<br/>
                                                    <span className="-tokenComment">// A Lista de zonas suportadas está logo abaixo deste código aqui no portfólio! ^^</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Obtendo a zona padrão do sistema:</span><br/>
                                                    <code className="-tokenClassEntity">ZoneId</code> zonedIdOfBrazil_withDefault = <code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">systemDefault</code>();<br/>
                                                    <span className="-tokenComment">// America/Sao_Paulo</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Obtendo a zona apartir de algum valor do Map:</span><br/>
                                                    <code className="-tokenClassEntity">ZoneId</code> zonedIdOfTokyo = <code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"Asia/Tokyo"</code>);<br/>
                                                    <span className="-tokenComment">// Asia/Tokyo</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Current sem alteração:</span><br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> now_inAmericaSP = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>();<br/>
                                                    <span className="-tokenComment">// 2022-12-26T19:42:15.690664806</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Alterando a representação da data para outros paises:</span><br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> now_inAsiaTokyo = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>(zonedIdOfTokyo);<br/>
                                                    <span className="-tokenComment">// 2022-12-27T07:42:15.690913888</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Verificando as diferenças de fuso horário entre dois paises/zonas:</span><br/>
                                                    <code className="-tokenClassEntity">ZonedDateTime</code> now_difFuso_byAmericaSPFromAsiaTokyo = now_inAmericaSP.<code className="-tokenMethod">atZone</code>(zonedIdOfTokyo);<br/>
                                                    <span className="-tokenComment">// 2022-12-26T19:45:19.447985416+09:00[Asia/Tokyo]</span><br/>
                                                    <span className="-tokenComment">// Ou seja as diferenças entre SP e Tokyo é de +9 Horas em relação a SP</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Mesma operação anterior porém com Instant que já trás convertido (devido a trabalhar com Zulu Time UTC):</span><br/>
                                                    <code className="-tokenClassEntity">Instant</code> now_instant = <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">now</code>();<br/>
                                                    <span className="-tokenComment">// 2022-12-26T22:56:11.628306908Z (Z de Zulu Time)</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">ZonedDateTime</code> now_zonedDateTimeOfTokyo = now_instant.<code className="-tokenMethod">atZone</code>(zonedIdOfTokyo);<br/>
                                                    <span className="-tokenComment">// 2022-12-27T07:56:11.628306908+09:00[Asia/Tokyo]</span><br/>
                                                    <span className="-tokenComment">// a diferença entre ZuluTime e Tokyo é de +9Horas em relação ao Zulu (Já trás formatado corretamente)</span><br/>
                                                    <span className="-tokenComment">// A conversão está aqui: 2022-12-<code className="token_reservada">26</code>T<code className="token_reservada">22</code>:56:11.628306908Z (Esse é o Zulu sem conversão presente no `now_instant`)</span><br/>
                                                    <span className="-tokenComment">// Esse é o resultado da operação `.atZone()` que faz a conversão: 2022-12-<code className="token_reservada">27</code>T<code className="token_reservada">07</code>:56:11.628306908+09:00[Asia/Tokyo]</span><br/>
                                                    <span className="-tokenComment">// Ou seja, o dia fez roll de +9 horas e mudou o dia automaticamente (pois o Instant trabalha com ZuluTime que é universal, ou seja, sempre vai ser o mesmo cálculo para obter horários corretos de acordo com cada zona)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Mesma operação anterior porém trabalhando com o padrão do Sistema corrente:</span><br/>
                                                    <code className="-tokenClassEntity">ZonedDateTime</code> now_zonedDateTimeOfSystemDefault = now_instant.<code className="-tokenMethod">atZone</code>(<code className="-tokenClassEntity">ZonedDateTime</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">getZone</code>());<br/>
                                                    <span className="-tokenComment">// 2022-12-26T19:56:11.628306908-03:00[America/Sao_Paulo]</span><br/>
                                                    <span className="-tokenComment">// a diferença entre ZuluTime e São Paulo é de -3Horas em relação ao Zulu (Já trás formatado corretamente)</span><br/>
                                                    <span className="-tokenComment">// A conversão está aqui: 2022-12-26T<code className="token_reservada">22</code>:56:11.628306908Z (Esse é o Zulu sem conversão presente no `now_instant`)</span><br/>
                                                    <span className="-tokenComment">// Esse é o resultado da operação `.atZone()` que faz a conversão: 2022-12-26T<code className="token_reservada">19</code>:56:11.628306908-03:00[America/Sao_Paulo]</span><br/>
                                                    <span className="-tokenComment">// Ou seja, o dia fez rollback de -3 horas e mudou apenas o horário (de 22hrs para 19hrs)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Fazendo a mesma coisa porém de uma forma mais "Facil"</span><br/>
                                                    <span className="-tokenComment"># Quando não se sabe o ZoneID, porém sabe as diferenças entre os horários:</span><br/>

                                                    <code className="-tokenClassEntity">ZoneOffset</code> ofSet_tokyo = <code className="-tokenClassEntity">ZoneOffset</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"+09:00"</code>);<br/>
                                                    <code className="-tokenClassEntity">OffsetDateTime</code> offsetDateTime_difFuso_byAmericaFromTokyo = now_inAmericaSP.<code className="-tokenMethod">atOffset</code>(ofSet_tokyo);<br/>
                                                    <span className="-tokenComment">// 2022-12-26T20:09:50.062410339+09:00</span><br/>
                                                    <span className="-tokenComment">// Mesmo resultado anterior porém aqui NÃO contém o ZoneID no final "[Asia/Tokyo]"</span><br/>
                                                    <span className="-tokenComment">// Ou seja, uma respresentação mais completa de uma data seria algo como "Data/Hora/MiliSeconds/OffSet/Zona"</span><br/>
                                                
                                                    <br/>
                                                    <span className="-tokenComment"># Mesma operação porém com outro método (Surte o mesmo efeito):</span><br/>
                                                    <code className="-tokenClassEntity">OffsetDateTime</code> offsetDateTime_difFuso_byAmericaFromTokyo2 = <code className="-tokenClassEntity">OffsetDateTime</code>.<code className="-tokenMethod">of</code>(now_inAmericaSP, ofSet_tokyo);<br/>
                                                    <span className="-tokenComment">// 2022-12-26T20:09:50.062410339+09:00</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Mesma operação e utilizando Instant que já faz a conversão automaticamente:</span><br/>
                                                    <code className="-tokenClassEntity">OffsetDateTime</code> offsetDateTime_difFuso_byZuluFromAmerica =  now_instant.<code className="-tokenMethod">atOffset</code>(<code className="-tokenClassEntity">ZonedDateTime</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">getOffset</code>());<br/>
                                                    <span className="-tokenComment">// 2022-12-26T20:23:22.972477392-03:00</span><br/>

                                                    <br/><br/>
                                                    <span className="-tokenComment"># Trabalhando com eras (Japão) - Atualmente:</span><br/>
                                                    <code className="-tokenClassEntity">JapaneseDate</code> japoneseDate = <code className="-tokenClassEntity">JapaneseDate</code>.<code className="-tokenMethod">from</code>(<code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>());<br/>
                                                    <span className="-tokenComment">// Atual: Japanese Reiwa 4-12-26</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Trabalhando com eras (Japão) - Antigamente:</span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> meijiEraLocalDate = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">of</code>(<code className="-tokenKeyConstant">1900</code>, <code className="-tokenKeyConstant">2</code>, <code className="-tokenKeyConstant">1</code>);<br/>
                                                    <code className="-tokenClassEntity">JapaneseDate</code> meijiEra = <code className="-tokenClassEntity">JapaneseDate</code>.<code className="-tokenMethod">from</code>(meijiEraLocalDate);<br/>
                                                    <span className="-tokenComment">// Antigamente: Japanese Meiji 33-02-01</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li><code className="token_reservada">ZonedId</code>: Com elá é possível retornar um mapa <code className="token_reservada">Map</code> com as zonas suportadas pelo Java.</li>
                                        <li>Saída do <code className="token_reservada">.toString()</code> do <code className="token_reservada">Map&lt;String, String&gt; shortIds = ZoneId.SHORT_IDS;</code> com as Zonas suportadas: </li>
                                        <li><code className="outputResult">EAT=Africa/Addis_Ababa</code></li>
                                        <li><code className="outputResult">EST=-05:00</code></li>
                                        <li><code className="outputResult">PNT=America/Phoenix</code></li>
                                        <li><code className="outputResult">PLT=Asia/Karachi</code></li>
                                        <li><code className="outputResult">CNT=America/St_Johns</code></li>
                                        <li><code className="outputResult">IET=America/Indiana/Indianapolis</code></li>
                                        <li><code className="outputResult">VST=Asia/Ho_Chi_Minh</code></li>
                                        <li><code className="outputResult">JST=Asia/Tokyo</code></li>
                                        <li><code className="outputResult">ART=Africa/Cairo</code></li>
                                        <li><code className="outputResult">PST=America/Los_Angeles</code></li>
                                        <li><code className="outputResult">BET=America/Sao_Paulo</code></li>
                                        <li><code className="outputResult">MIT=Pacific/Apia</code></li>
                                        <li><code className="outputResult">CAT=Africa/Harare</code></li>
                                        <li><code className="outputResult">AGT=America/Argentina/Buenos_Aires</code></li>
                                        <li><code className="outputResult">NET=Asia/Yerevan</code></li>
                                        <li><code className="outputResult">CST=America/Chicago</code></li>
                                        <li><code className="outputResult">IST=Asia/Kolkata </code></li>
                                        <li><code className="outputResult">AET=Australia/Sydney</code></li>
                                        <li><code className="outputResult">BST=Asia/Dhaka</code></li>
                                        <li><code className="outputResult">ACT=Australia/Darwin</code></li>
                                        <li><code className="outputResult">HST=-10:00</code></li>
                                        <li><code className="outputResult">NST=Pacific/Auckland</code></li>
                                        <li><code className="outputResult">AST=America/Anchorage</code></li>
                                        <li><code className="outputResult">MST=-07:00</code></li>
                                        <li><code className="outputResult">SST=Pacific/Guadalcanal</code></li>
                                        <li><code className="outputResult">CTT=Asia/Shanghai</code></li>
                                        <li><code className="outputResult">PRT=America/Puerto_Rico</code></li>
                                        <li><code className="outputResult">ECT=Europe/Paris</code></li>
                                        <br/>        
                                        <li>Para o horário de brasília temos a seguinte opção: <code className="outputResult">BET=America/Sao_Paulo</code>.</li>
                                        <li><code className="token_reservada">ZonedDateTime</code>: Com ela é possível visualizar as diferenças de horarios entre as zonas/locais (mostrando a <code className="token_reservada">ZoneId</code> tbm).</li>
                                        <li><code className="token_reservada">ZoneOffSet</code>: É aonde demonstra as diferenças de horários em sí (Encapsulando em apenas isto), ou seja, não demonstra a <code className="token_reservada">ZoneId</code>.</li>
                                        <li><code className="token_reservada">OffSetDateTime</code>: É a classe que faz o <code className="token_reservada">parsing</code> entre as diferenças e ai podemos visualizar em formato de data.</li>
                                        <br/>
                                        <li>Em resumo uma representação de uma data completa seria composta por: <code className="token_reservada">Data/THora:Minuto:Segundo.Milissegundos/+OffSet/[Zona]</code> (<code className="outputResult">"2022-12-26T19:45:19.447985416+09:00[Asia/Tokyo]"</code>).</li>
                                        <br/>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">DateTimeFormatter</code>: Classe utilitária com o mesmo contexto da <code className="token_reservada">DateFormat</code> legada (do pacote <code className="token_reservada">java.util</code>) porém a diferença é que ela é mais moderna do novo pacote especializado para manipulação dos objetos <code className="token_reservada">Temporal</code> (<code className="token_reservada">java.time</code>) e <code className="token_reservada">Thread-Safe</code> para ambientes de paralelismo e concorrência <code className="token_reservada">concurrency</code>, diferente da <code className="token_reservada">DateFormat</code> do pacote legado que é <code className="token_reservada">Não Thread-Safe</code>. Utilizada como parâmetro nos métodos das classes de Data e Hora para formatar e alterar os padrões de representação delas (Podemos representar com números <code className="outputResult">"dd/mm/yyyy"</code>, também podemos representar escrito por extenso <code className="outputResult">"22 de dezembro de 1999"</code>, dentre outros...) além de outras formatações mais complexas com <code className="token_reservada">DateTimeFormatterBuilder</code>, mais informações sobre <code className="token_reservada">DateTimeFormatter</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula129DateTimeFormatter_Utils.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando os padrões de formatações/máscaras disponíveis:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment">## Operações aplicadas em Objetos do tipo LocalDate: </span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> now_date = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>();<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># ISOS Prontas (Transformando apartir de um Objeto em/para uma String):</span><br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormatedBasic_str = now_date.<code className="-tokenMethod">format</code>(<code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">BASIC_ISO_DATE</code>);<br/>
                                                    <span className="-tokenComment">// 20221226</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormatedLikeSQL_str = now_date.<code className="-tokenMethod">format</code>(<code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">ISO_DATE</code>);<br/>
                                                    <span className="-tokenComment">// 2022-12-26 (Também suporta offset 2022-12-26+09:00)</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormatedDefault_str = now_date.<code className="-tokenMethod">format</code>(<code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">ISO_LOCAL_DATE</code>);<br/>
                                                    <span className="-tokenComment">// 2022-12-26 (ou seja quando chamamos o `.toString()` do LocalDate é ele)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment">## Operações aplicadas em Objetos do tipo LocalDateTime: </span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> now_dateTime = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>();<br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code> dateTimeFormatedDefault_str = now_dateTime.<code className="-tokenMethod">format</code>(<code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">ISO_DATE_TIME</code>);<br/>
                                                    <span className="-tokenComment">// 2022-12-26T21:25:47.897024374 (ou seja quando chamamos o `.toString()` do LocalDateTime é ele)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment">## Operações INVERSAS, ou seja, Transformando uma String que representa o objeto Temporal em um Objeto Temporal: </span><br/>
                                                    <span className="-tokenComment"># Obs: AQUI devemos nos atentar ao padrão de máscara utilizado que deve corresponder com a máscara corretamente durante os parsers!</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateParsedByIsoBasic_obj = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"20221226"</code>, <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">BASIC_ISO_DATE</code>);<br/>
                                                    <span className="-tokenComment">// 2022-12-26</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateParsedByIsoDateSuportOffSet_obj = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"2022-12-26+23:59"</code>, <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">ISO_DATE</code>);<br/>
                                                    <span className="-tokenComment">// 2022-12-26</span><br/>
                                                    <span className="-tokenComment">// Como o LocalDate n trabalha com Time então ele simplemente trunca o OffSet</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> dateTimeParsedByIsoDateTime_obj = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"2022-12-26T21:30:29.165451040"</code>, <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenKeyConstant">ISO_DATE_TIME</code>);<br/>
                                                    <span className="-tokenComment">// 2022-12-26T21:30:29.165451040</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment">## Definindo padrões de máscaras personalizados ("Na unha"):</span><br/>
                                                    <span className="-tokenComment"># Obs: AQUI TAMBÉM devemos nos atentar ao padrão de máscara personalizado que deve corresponder com a máscara corretamente durante os parsers!</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Padrão Brasileiro "dd/MM/yyyy":</span><br/>
                                                    <code className="-tokenClassEntity">DateTimeFormatter</code> formatterPattern_ofBR = <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenMethod">ofPattern</code>(<code className="-tokenString">"dd/MM/yyyy"</code>);<br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormated_BR_str = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">format</code>(formatterPattern_ofBR);<br/>
                                                    <span className="-tokenComment">// 26/12/2022</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Padrão Japonês "yyyy/MM/dd":</span><br/>
                                                    <code className="-tokenClassEntity">DateTimeFormatter</code> formatterPattern_ofJapan = <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenMethod">ofPattern</code>(<code className="-tokenString">"yyyy/MM/dd"</code>);<br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormated_Japan_str = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">format</code>(formatterPattern_ofJapan);<br/>
                                                    <span className="-tokenComment">// 2022/12/26</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Padrão Estados Unidos "MM/dd/yyyy":</span><br/>
                                                    <code className="-tokenClassEntity">DateTimeFormatter</code> formatterPattern_ofEUA = <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenMethod">ofPattern</code>(<code className="-tokenString">"MM/dd/yyyy"</code>);<br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormated_EUA_str = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">format</code>(formatterPattern_ofEUA);<br/>
                                                    <span className="-tokenComment">// 12/26/2022</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment">## Operações INVERSAS, ou seja, Transformando uma String que representa o objeto Temporal em um Objeto Temporal: </span><br/>
                                                    <span className="-tokenComment"># Obs: AQUI devemos nos atentar ao padrão de máscara personalizado utilizado que deve corresponder com a máscara corretamente durante os parsers!</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateParsedByPatternBR_obj = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"26/12/2022"</code>, formatterPattern_ofBR);<br/>
                                                    <span className="-tokenComment">// 2022-12-26</span><br/>
                                                    <span className="-tokenComment">// A saída é essa pois está executando o `.toString()` e esse é o default do LocalDate</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateParsedByPatternJapan_obj = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"2022/12/26"</code>, formatterPattern_ofJapan);<br/>
                                                    <span className="-tokenComment">// 2022-12-26</span><br/>
                                                    <span className="-tokenComment">// A saída é essa pois está executando o `.toString()` e esse é o default do LocalDate</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateParsedByPatternEUA_obj = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"12/26/2022"</code>, formatterPattern_ofEUA);<br/>
                                                    <span className="-tokenComment">// 2022-12-26</span><br/>
                                                    <span className="-tokenComment">// A saída é essa pois está executando o `.toString()` e esse é o default do LocalDate</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment">## Definindo um padrão e pegando apartir de um Locale (Ou seja, faz a tradução): </span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">DateTimeFormatter</code> formatterPattern_byLocaleGR = <code className="-tokenClassEntity">DateTimeFormatter</code>.<code className="-tokenMethod">ofPattern</code>(<code className="-tokenString">"dd.MMMM.yyyy"</code>, <code className="-tokenClassEntity">Locale</code>.<code className="-tokenKeyConstant">GERMAN</code>);<br/>
                                                    <code className="-tokenClassEntity">String</code> dateFormated_byLocaleGR_str = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">format</code>(formatterPattern_byLocaleGR);<br/>
                                                    <span className="-tokenComment">// 26.Dezember.2022</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># MESMA REGRA SOBRE RESPEITAR A MÁSCARA DO PADRÃO NO PARSER: </span><br/>
                                                    <code className="-tokenClassEntity">LocalDate</code> dateParsedByCustonPatternAndLocaleGR_obj = <code className="-tokenClassEntity">LocalDate</code>.<code className="-tokenMethod">parse</code>(<code className="-tokenString">"26.Dezember.2022"</code>, formatterPattern_byLocaleGR);<br/>
                                                    <span className="-tokenComment">// 26.Dezember.2022</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li>Regra sobre <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code> (Válido para várias classes do Java): Convertendo apartir de um objeto <code className="token_reservada">Temporal</code> de data ou tempo (Cuja representação em baixo nível é o <code className="token_reservada">long</code> dos milissegundos computacionalmente entendível, porém humanamente estranho) em uma <code className="token_reservada">String</code> que adiciona uma camada de mais alto nível de representação convertendo esses milissegundos do <code className="token_reservada">long</code> em datas e tempo humanamente entendível de acordo com a máscara de formatação desejada, e convertendo/retornando apartir desta mesma <code className="token_reservada">String</code> gerada anteriormente em um objeto <code className="token_reservada">Temporal</code> de data ou tempo, e vise versa: Devemos nos atentar ao utilizar esses dois métodos devido a representação em baixo nível ser o <code className="token_reservada">long</code> a JVM precisa saber qual é o padrão de máscara utilizado na representação em alto nível da <code className="token_reservada">String</code> que está sendo parseada para saber lidar e converter corretamente essa <code className="token_reservada">String</code> em um dos objetos <code className="token_reservada">Temporais</code>, ou seja, para conseguirmos realizar a operação de <code className="token_reservada">parsing</code> desta <code className="token_reservada">String</code> em um dos objetos <code className="token_reservada">Temporais</code> devemos utilizar o mesmo padrão de máscara que foi utilizado para dar origem a essa <code className="token_reservada">String</code> na sobrecarga do método estático <code className="token_reservada">.parse()</code> das classes <code className="token_reservada">Temporais</code>, se não um <code className="token_reservada">DateTimeParseException</code> será lançado.</li>
                                        <li>Exemplo no estilo <code className="token_reservada">Show me the code</code> para melhor entender o ponto acima: </li>
                                        <li><code className="token_reservada">LocalDate nowLocalDate = LocalDate.now();</code> Cria o objeto temporal para datas simples <code className="outputResult">"2023-06-23"</code></li>
                                        <li><code className="token_reservada">String format = nowLocalDate.format(DateTimeFormatter.BASIC_ISO_DATE);</code> Formata ela adicionando a camada de mais alto nível <code className="outputResult">"20230623"</code></li>
                                        <li><code className="token_reservada">LocalDate parse = LocalDate.parse(format, DateTimeFormatter.BASIC_ISO_DATE);</code> Utiliza a mesma máscara do padrão que deu origem a String anteriormente <code className="outputResult">"2023-06-23"</code></li>
                                        <li>Observe que foi necessário utilizar a sobrecarga do método estático <code className="token_reservada">.parse()</code> indicando qual foi o padrão utilizado para dar origem a essa <code className="token_reservada">String</code> em questão pois se não o tivesse passado também como argumento a JVM iria aplicar a lógica utilizando a máscara padrão <code className="outputResult">"2023-06-23"</code> porém o valor real é <code className="token_reservada">BASIC_ISO_DATE</code> que remove os <code className="token_reservada">`-`</code> deixando assim no final <code className="outputResult">"20230623"</code>.</li>
                                        <li><code className="token_reservada">LEMBRANDO</code> que a saída no console para os objetos executa implicitamente o método <code className="token_reservada">.toString()</code> porisso temos a primeira representação <code className="outputResult">"2023-06-23"</code> para o <code className="token_reservada">LocalDate</code>, exatamente porisso ocorre a <code className="token_reservada">DateTimeParseException</code> se não passar na sobrecarga do método estático <code className="token_reservada">.parse()</code> o argumento informando o padrão de máscara que deu origem a <code className="token_reservada">String</code> em questão, pois ele iria utilizar o <code className="token_reservada">default</code> que é exatamente a mesma lógica de máscara aplicada no método <code className="token_reservada">.toString()</code>.</li>
                                        <br/>
                                        <li>Também é possível definir um padrão personalizado por nós, utilizando o método estático <code className="token_reservada">DateTimeFormatter.ofPattern("dd/MM/yyyy");</code> e passá-lo no método <code className="token_reservada">.format()</code>.</li>
                                        <li>Sobre o ponto acima, segue a mesma regra sobre <code className="token_reservada">parsings</code> e <code className="token_reservada">formats</code>, aonde para o <code className="token_reservada">.parse()</code> funcionar basta passar essa mesma instância do padrão de máscara <code className="token_reservada">Pattern</code> personalizado dito acima como segundo argumento na sobrecarga do método estático, sendo assim: <code className="token_reservada">LocalDate.parse("22/12/1999", DateTimeFormatter.ofPattern("dd/MM/yyyy"));</code> Observe que ambas as máscaras estão linearmente consistentes entre sí.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    )
};