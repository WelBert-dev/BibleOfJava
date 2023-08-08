import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoGlobalization from '../../resources/images/globalization.png';

export default function InternationalizationScreen() {

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

            navbarElement.childNodes[7].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Strings e String Constant Pool&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Internacionalização e Globalização.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/D_internacionalizacao" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>Internacionalizar é polimorfisar o sistema adequando para diversos paises.</span>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoGlobalization} alt="Amostra logo Wrapper Classes" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 108 até 111]</h3> */}
                                    <h3 class="projects-subtitle">Internacionalização</h3>
                                    <ul className="projects-frontend--container">
                                        <li>Internacionalizar é polimorfisar o sistema de acordo com o <code className="token_reservada">Locale</code> (Região/Origem), adequando o sistema para diversos paises utilizando a mesma implementação, bastando alterar a instância do objeto <code className="token_reservada">Locale</code> para oferecer suporte a outros paises/origem.</li>
                                        <li><code className="token_reservada">Locale</code>: é o objeto que representa a Origem/Localidade da JVM, ou seja, podemos utilizar o polimorfismo aqui para alterar diversos comportamentos de diversas Classes visando a Internacionalização, mais informações sobre <code className="token_reservada">Locale</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/A_date/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></li>
                                        <br/>
                                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Internacionalização de Datas</code> com <code className="token_reservada">Locale</code>: Polimorfisando o sistema e alterando o formato da máscara e etc dos objetos <code className="token_reservada">Temporais</code> (Data-Hora) de acordo com o padrão dos paises com o <code className="token_reservada">Locale</code>, mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula115Locale_Internacionalizacao.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">MESMO Exemplo da seção acima sobre a API de Data e Hora: Implementação demonstrando as adequações nos padrões de formatações/máscaras de acordo com Locale:</p>
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
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Internacionalização de Números</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getInstance(Locale.JAPAN)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa os números aonde os separadores de milhares e etc é diferentes para cada pais (<code className="outputResult">"1,200"</code>, <code className="outputResult">"1.200,00"</code>...), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula116NumberFormat_Number_Locale.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando as adequações nos padrões de formatações/máscaras de acordo com Locale, alterando assim os separadores de milhares e etc:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Segue as mesmas regras sobre Parsings e Formats ditas na seção de Data e Hora!</span><br/>
                                                    <span className="-tokenComment"># O Método `.format()` retorna uma String que representa o número formatado em alto nível com máscara.</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeUS = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"en"</code>, <code className="-tokenString">"US"</code>);<br/>                                                 
                                                    <code className="-tokenClassEntity">Locale</code> localeJapones =  <code className="-tokenClassEntity">Locale</code>.<code className="-tokenKeyConstant">JAPAN</code>;<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeItaliano =  <code className="-tokenClassEntity">Locale</code>.<code className="-tokenKeyConstant">ITALY</code>;<br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">NumberFormat</code>[] nfArray = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">NumberFormat</code>[<code className="-tokenKeyConstant">4</code>];<br/>

                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">0</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getInstance</code>(); <span className="-tokenComment">// locale default (pt-BR)</span><br/>
                                                    <span className="-tokenComment">// 10.000,213 </span><br/>
                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">1</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getInstance</code>(localeUS);<br/> 
                                                    <span className="-tokenComment">// 10,000.213</span><br/>
                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">2</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getInstance</code>(localeJapones);<br/> 
                                                    <span className="-tokenComment">// 10,000.213</span><br/>
                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">3</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getInstance</code>(localeItaliano);<br/> 
                                                    <span className="-tokenComment">// 10.000,213</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Valor que será formatado de acordo com os Locale e NumberFormart (Para números comuns) != moedas</span><br/> 
                                                    <code className="-tokenKeyword">double</code> valor = <code className="-tokenKeyConstant">10_000.2130</code>;<br/>
                                                    <code className="-tokenKeyword">for</code> (<code className="-tokenClassEntity">NumberFormat</code> n : nfArray) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(n.<code className="-tokenMethod">format</code>(valor));</code><br/>    
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Internacionalização de Moedas</code> com <code className="token_reservada">Locale</code> e <code className="token_reservada">NumberFormat.getCurrencyInstance(Locale.ITALY)</code>: Polimorfisando o sistema e alterando o formato da máscara que representa as moedas aonde os separadores de milhares, simbolo da moeda e etc também são diferentes para cada pais (<code className="outputResult">"$10,000.21"</code>, <code className="outputResult">"￥10,000"</code>, <code className="outputResult">"10.000,21 €"</code>), (Obs IMPORTANTE: A internacionalização das moedas utilizando esse processo aqui descrito NÃO faz conversões de câmbio (câmbio de moeda, ou também taxa de câmbio) entre elas, apenas adéqua a máscara (Separadores de milhares e etc <code className="outputResult">","</code>, <code className="outputResult">"."</code>) e símbolos (<code className="outputResult">R$</code>, <code className="outputResult">U$</code>, <code className="outputResult">￥</code>)), mais informações: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/C_formatacao/Aula117NumberFormat_Coin_Locale.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando as adequações nos padrões de formatações/máscaras de acordo com Locale, alterando assim os separadores de milhares, simbolos das moedas e etc:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment">## Segue a mesma lógica de formatar numeros, porém pega uma instancia diferente no NumberFormat.</span><br/>
                                                    <span className="-tokenComment">## Trocando o `NumberFormat.getInstance()` por `NumberFormat.getCurrencyInstance()`;</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Segue as mesmas regras sobre Parsings e Formats ditas na seção de Data e Hora!</span><br/>
                                                    <span className="-tokenComment"># O Método `.format()` retorna uma String que representa o número formatado em alto nível com máscara.</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeUS = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"en"</code>, <code className="-tokenString">"US"</code>);<br/>                                                 
                                                    <code className="-tokenClassEntity">Locale</code> localeJapones =  <code className="-tokenClassEntity">Locale</code>.<code className="-tokenKeyConstant">JAPAN</code>;<br/>
                                                    <code className="-tokenClassEntity">Locale</code> localeItaliano =  <code className="-tokenClassEntity">Locale</code>.<code className="-tokenKeyConstant">ITALY</code>;<br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">NumberFormat</code>[] nfArray = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">NumberFormat</code>[<code className="-tokenKeyConstant">4</code>];<br/>

                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">0</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getCurrencyInstance</code>(); <span className="-tokenComment">// locale default (pt-BR)</span><br/>
                                                    <span className="-tokenComment">// R$ 10.000,21 </span><br/>
                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">1</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getCurrencyInstance</code>(localeUS);<br/> 
                                                    <span className="-tokenComment">// $10,000.21</span><br/>
                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">2</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getCurrencyInstance</code>(localeJapones);<br/> 
                                                    <span className="-tokenComment">// ￥10,000</span><br/>
                                                    <br/>
                                                    nfArray[<code className="-tokenKeyConstant">3</code>] = <code className="-tokenClassEntity">NumberFormat</code>.<code className="-tokenMethod">getCurrencyInstance</code>(localeItaliano);<br/> 
                                                    <span className="-tokenComment">// 10.000,21 €</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Moeda que será formatada de acordo com o Locale passado na instanciação de NumberFormat</span><br/> 
                                                    <code className="-tokenKeyword">double</code> coin = <code className="-tokenKeyConstant">10_000.2130</code>;<br/>
                                                    <code className="-tokenKeyword">for</code> (<code className="-tokenClassEntity">NumberFormat</code> n : nfArray) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(n.<code className="-tokenMethod">format</code>(coin));</code><br/>   
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(n.<code className="-tokenMethod">getMinimumFractionDigits</code>());</code><span className="-tokenComment">// pega o máximo de casas decimais suportado</span><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># também é possivel utilizar o set do fraction e modificar o número de casas decimais.</span></code><br/>     
                                                    &#125;<br/>

                                                    <br/>
                                                    <span className="-tokenComment">## Realizando PARSER que pega a `String` formatada anteriormente e retorna um `Number`:</span><br/>
                                                    <span className="-tokenComment">## Obs: Deve-se passar o formato correto e os simbolos também!:</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code> coinFormated_str = <code className="-tokenString">"R$ 10.000,21"</code>; <span className="-tokenComment">// Obs: Não utilizar "_" separador de milhar pois aqui n é válido!</span><br/>
                                                    <br/>
                                                    <code className="-tokenKeyword">try</code> &#123; <span className="-tokenComment">// Exception Checked</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Number</code> coinParsed_BR_number = nfArray[<code className="-tokenKeyConstant">0</code>].<code className="-tokenMethod">parse</code>(coinFormated_str); <span className="-tokenComment">// Index 0 pois é a máscara correspondente da moeda (Reais)</span></code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">float</code> coin_float = coinParsed_BR_number.<code className="-tokenMethod">floatValue</code>();</code><br/>
                                                        <span className="-nestedInnerCode -tokenComment">// 10000.21 (32bits signed IEEE 754 floating point)</span><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">double</code> coin_double = coinParsed_BR_number.<code className="-tokenMethod">doubleValue</code>();</code><br/>
                                                        <span className="-nestedInnerCode -tokenComment">// 10000.21 (64bits signed IEEE 754 floating point)</span><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">byte</code> coin_byte = coinParsed_BR_number.<code className="-tokenMethod">byteValue</code>();</code><br/>
                                                        <span className="-nestedInnerCode -tokenComment">// 16 (Trunca tudo pois é 8bits signed)</span><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">short</code> coin_short = coinParsed_BR_number.<code className="-tokenMethod">shortValue</code>();</code><br/>
                                                        <span className="-nestedInnerCode -tokenComment">// 10000 (Trunca as casas decimais) 16bits signed</span><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">int</code> coin_int = coinParsed_BR_number.<code className="-tokenMethod">intValue</code>();</code><br/>
                                                        <span className="-nestedInnerCode -tokenComment">// 10000 (Trunca as casas decimais) 32bits signed</span><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">long</code> coin_long = coinParsed_BR_number.<code className="-tokenMethod">longValue</code>();</code><br/>
                                                        <span className="-nestedInnerCode -tokenComment">// 10000 (Trunca as casas decimais) 64bits signed</span><br/>
                                                        <br/>


                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">ParseException</code> e) &#123;<br/>
                                                        <code className="-nestedInnerCode">e.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">ResourceBundle</code>: Classe utilizada para internacionalização e tradução automática de acordo com o <code className="token_reservada">Locale</code>, funciona como se fosse um dicionário aonde definimos arquivos de resource (estilo <code className="token_reservada">.env</code>) para cada linguagem/pais e nele definimos pares <code className="token_reservada">chave-valor</code> <code className="token_reservada">Key-Value</code>, esses dicionários são acessados pelo Java em cascata buscando o valor correspondente da chave, assim podemos pegar valores diferentes com a mesma chave, de acordo com esses <code className="token_reservada">Locale</code> que corresponde ao dicionário para ele, sendo assim podemos realizar traduções de linguagens em geral ou algo do tipo bastando alterar a instância do <code className="token_reservada">Locale</code> para o sistema se adequar nesta nova linguagem, mais informações sobre <code className="token_reservada">ResourceBundle</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/D_internacionalizacao/Aula130ResourceBundle_Internacionalizacao_Util.java" target="_blank">Clique AQUI!</a></p>
                                        
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando como utilizar esses dicionários definidor na raiz do projeto (<code className="outputResult">"/src/main/resources"</code>), maiores explicações sobre essas definições e como funciona passo a passo descrito nos próximos pontos abaixo!</p>
                                            <br/>
                                            <p className="main-title--implementFullBlock">Dicionário <code className="token_reservada">Português Brasil</code> definido na raiz <code className="outputResult">"/src/main/resources/messages_pt_BR.properties"</code>: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># == Comentário</span><br/>
                                                    <span className="-tokenComment">! == Comentário</span><br/>
                                                    <br/>
                                                    <code className="-tokenKeyConstant">hello</code> = <code className="-tokenString">Olá</code><br/>
                                                    <code className="-tokenKeyConstant">good.morning</code> = <code className="-tokenString">Bom dia</code><br/>
                                                </code>
                                            </ul>
                                            <p className="main-title--implementFullBlock">Dicionário <code className="token_reservada">Inglês Estados Unidos</code> definido na raiz <code className="outputResult">"/src/main/resources/messages_en_US.properties"</code>: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># == Comentário</span><br/>
                                                    <span className="-tokenComment">! == Comentário</span><br/>
                                                    <br/>
                                                    <code className="-tokenKeyConstant">hello</code> = <code className="-tokenString">Hello</code><br/>
                                                    <code className="-tokenKeyConstant">good.morning</code> = <code className="-tokenString">Good Morning</code><br/>
                                                </code>
                                            </ul>
                                            <p className="main-title--implementFullBlock">Finalmente as Implementações em sí utilizando os dicionários de acordo com Locale nas chamadas: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Cria o bundle passando a locale desejada para tradução no dicionário</span><br/>
                                                    
                                                    <code className="-tokenClassEntity">ResourceBundle</code> bundle_enUS = <code className="-tokenClassEntity">ResourceBundle</code>.<code className="-tokenMethod">getBundle</code>(<code className="-tokenString">"messages"</code>, <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"en"</code>, <code className="-tokenString">"US"</code>));<br/>
                                                    <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(bundle_enUS.<code className="-tokenMethod">getString</code>(<code className="-tokenString">"hello"</code>));<br/> 
                                                    <span className="-tokenComment">// Hello</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(bundle_enUS.<code className="-tokenMethod">getString</code>(<code className="-tokenString">"good.morning"</code>));<br/> 
                                                    <span className="-tokenComment">// Good Morning</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># A chave pode mudar também, porém é interessante mante um padrão pois ai basta apenas alterar o locale na criação do objeto e ai a tradução ocorre automaticamente pois no restante do código a chamada (Key) é a mesma para os dois.. POLIMORFISMO, assim não precisamos realizar essas duplicatas:</span><br/>
                                                    
                                                    <code className="-tokenClassEntity">ResourceBundle</code> bundle_ptBR = <code className="-tokenClassEntity">ResourceBundle</code>.<code className="-tokenMethod">getBundle</code>(<code className="-tokenString">"messages"</code>, <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"pt"</code>, <code className="-tokenString">"BR"</code>));<br/>
                                                    <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(bundle_ptBR.<code className="-tokenMethod">getString</code>(<code className="-tokenString">"hello"</code>));<br/> 
                                                    <span className="-tokenComment">// Olá</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(bundle_ptBR.<code className="-tokenMethod">getString</code>(<code className="-tokenString">"good.morning"</code>));<br/> 
                                                    <span className="-tokenComment">// Bom dia</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment">## Observe que as chaves da chamada são as mesmas, porém como é outro dicionário ocorre a tradução, porisso é interessante utilizar as mesmas chaves porém com valores diferentes, assim o sistema poderá se adequar e adaptar automaticamente sem muitas mudanças de códigos!</span><br/>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação simulando um sistema real em produção, realizando as traduções automáticamente sem mudanças no código:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Global é uma classe util para toda a implementação, ela simula (Mock) a maneira como podemos obter a instância do Locale de acordo com as preferências do usuário:</span><br/>
                                                    
                                                    <code className="-tokenClassEntity">Locale</code> localeSelected;<br/>
                                                    <code className="-tokenKeyword">if</code> (<code className="-tokenClassEntity">Global</code>.<code className="-tokenMethod">getLocale</code>().<code className="-tokenMethod">toString</code>().<code className="-tokenMethod">equals</code>(<code className="-tokenString">"pt_BR"</code>)) &#123;<br/>
                                                        <code className="-nestedInnerCode">localeSelected =  <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"pt"</code>, <code className="-tokenString">"BR"</code>);</code><br/>
                                                    &#125; <code className="-tokenKeyword">else if</code> (<code className="-tokenClassEntity">Global</code>.<code className="-tokenMethod">getLocale</code>().<code className="-tokenMethod">toString</code>().<code className="-tokenMethod">equals</code>(<code className="-tokenString">"en_US"</code>) &#123;<br/>
                                                        <code className="-nestedInnerCode">localeSelected =  <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Locale</code>(<code className="-tokenString">"en"</code>, <code className="-tokenString">"US"</code>);</code><br/>
                                                    &#125; <code className="-tokenKeyword">else</code> &#123;<br/>
                                                        <code className="-nestedInnerCode">localeSelected =  <code className="-tokenClassEntity">Locale</code>.<code className="-tokenMethod">getDefault</code>();</code><br/>
                                                    &#125;<br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Finalmente cria o bundle de acordo com o Locale selecionado pelo usuário:</span><br/>
                                                    <code className="-tokenClassEntity">ResourceBundle</code> bundle_main = <code className="-tokenClassEntity">ResourceBundle</code>.<code className="-tokenMethod">getBundle</code>(<code className="-tokenString">"messages"</code>, localeSelected);<br/>
                                                    <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(bundle_main.<code className="-tokenMethod">getString</code>(<code className="-tokenString">"hello"</code>));<br/> 
                                                    <span className="-tokenComment">// Olá (A depender do locale)</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(bundle_main.<code className="-tokenMethod">getString</code>(<code className="-tokenString">"good.morning"</code>));<br/> 
                                                    <span className="-tokenComment">// Bom dia (A depender do locale)</span><br/>
                                                    
                                                </code>
                                            </ul>
                                        </li>
                                        <li>Esses dicionários são definidos como se fosse um <code className="token_reservada">`.env`</code> na raiz do projeto e com uma nomeclatura especial, algo parecido com <code className="outputResult">`messages_en_US.properties`</code>, aonde <code className="outputResult">`_en_US`</code> indica que é para acessar esse dicionário quando instânciado um <code className="token_reservada">Locale</code> <code className="outputResult">`en_US`</code>, assim podemos definir vários dicionários para suportar os Paises desejados.</li>
                                        <li>Então definimos pares <code className="token_reservada">chave-valor</code> contendo a mesma chave para todos os dicionários porém com valores diferentes, algo parecido com <code className="outputResult">`hello = Hello`</code> para o dicionário <code className="outputResult">`messages_en_US.properties`</code> e <code className="outputResult">`hello = Olá`</code> para o dicionário <code className="outputResult">`messages_pt_BR.properties`</code>, sendo assim, utilizamos a mesma chamada da chave na implementação, bastando alterar apenas a instância do objeto <code className="token_reservada">Locale</code> para traduzir automáticamente.</li>
                                        <br/>
                                        <li>Existe uma regra sobre a ordem de procura do dicionário <code className="token_reservada">resource bundle</code> na raiz (<code className="outputResult">`algo_bla_blabla.properties`</code>), caso não encontre o pais definido pelo <code className="token_reservada">Locale</code> correspondente ao criado nos <code className="outputResult">`.properties`</code>, aonde a JVM executa a busca em cascata na seguinte ordem até encontrar o dicionário correspondente:</li>
                                        <li>Exemplo com o <code className="token_reservada">Locale("fr", "CA");</code>:</li>
                                        <li><code className="token_reservada">1o Primeiro</code> - Ele procura pelo dicionário correspondente ao <code className="token_reservada">Locale</code> instânciado, neste caso seria o dicionário <code className="outputResult">`messages_fr_CA.properties`</code>.</li>
                                        <li><code className="token_reservada">2o segundo</code> - Se não encontrar, ele procura pelo dicionário genérico daquela linguagem, ignorando o pais (Genérico pois abstrai o pais e generaliza para a linguagem como um todo, neste caso o pais abstraído/ignorado seria o Canada <code className="outputResult">`CA`</code>), neste caso seria o dicionário correspondente <code className="outputResult">`messages_fr.properties`</code>.</li>
                                        <li><code className="token_reservada">3o Terceiro</code> - Se não encontrar, ele procura pelo dicionário correspondente ao <code className="token_reservada">Default do sistema</code>, ou seja, a linguagem e pais padrão do S.O corrente, no meu caso seria o dicionário <code className="outputResult">`messages_en_US.properties`</code> (Linguagem e Pais Default do meu sistema).</li>
                                        <li><code className="token_reservada">4o Quarto</code> - Se não encontrar, ele procura pelo dicionário genérico da linguagem relacionado ao <code className="token_reservada">Default do sistema</code>, ignorando o pais (Genérico pois abstrai o pais e generaliza para a linguagem como um todo, no meu caso o pais abstraído/ignorado seria o <code className="outputResult">`US`</code>), neste caso seria o dicionário correspondente <code className="outputResult">`messages_en.properties`</code> (Linguagem Default do meu sistema).</li>
                                        <li><code className="token_reservada">5o Quinto</code> - Se não encontrar, ele procura pelo dicionário MAIS genérico de todos, ou seja, esse cenário seria o último caso, então é ideal definir a linguagem mais universal possivel nos valores correspondentes para as chaves dele, é sempre indicado definir ele para não ocorrer problemas se não encontrar nenhum, ele é definido como <code className="outputResult">`messages.properties`</code>.</li>
                                        <li><code className="token_reservada">6o Sexto</code> - Se não encontrar nenhum vai ser lançado uma <code className="token_reservada">EXCEÇÃO</code>, porisso sempre é bom definir o dicionário MAIS genérico <code className="outputResult">`messages.properties`</code>.</li>
                                        <br/>
                                        <li>Exemplo de utilização para o dicionário MAIS genérico <code className="token_reservada">`messages.properties`</code> é definir palavras que não possuem tradução para outros Idiomas, ou definir mensagens de <code className="token_reservada">Exceptions</code> pois sempre será as mesmas (em inglês) independente do <code className="token_reservada">Locale</code>.</li>
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