import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoRegexpInJava from '../../resources/images/java-regular-expression-regex-stepByStep.png';

export default function RegexOrRegexpScreen() {

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

            navbarElement.childNodes[8].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Regex or Regexp&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Buscando padrões em textos utilizando Expressões Regulares.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/E_regex" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>- "Sublinguagem" utilizada para encontrar padrões em textos, utilizado não apenas no Java como qualquer outra linguagem de programação.</span>
                            <span>- Em particular, no Java utilizamos duas classes principais para esta finalidade sendo elas o Pattern e o Matcher.</span>
                            <span>- O Pattern define qual é o padrão que estamos buscando de acordo com os meta caracteres de configuração.</span>
                            <span>- O Matcher é quem realmente percorre iterando sobre o texto, realizando os "Matchs" caso a palavra corrente corresponda ao Pattern em busca.</span>
                            <span>- Na primeira seção logo abaixo é descrito o passo a passo básico sobre como isso ocorre.</span>
                            <span>- Meta caracteres: São as keywords que utilizamos para edfinir o padrão em busca, é algo como `\d` ou `\D`, mais detalhes na segunda seção logo abaixo.</span>
                            <span>- Range `[]`: Podemos utilizar intervalo de valores com uso do `[1-9]`, que neste caso é qualquer ocorrência de números que vai de 0 até 9.</span>
                            <span>- Quantificadores: Utilizamos eles em conjunto com os ranges `[]` para definir a quantidade de ocorrências que desejamos deste intervalo, pois se não utilizar, ao encontrar a primeira ocorrência a iteração é encerrada.</span>
                            <span>- Anchor `^`: Esse operador possue duas funcionalidades distintas a depender de aonde ele esta inserido, dentro `[^\d]` ou fora do range `^[\d]`.</span>
                            <span>- Dentro `[^\d]` indicamos que NÃO queremos esses valores do intervalo, ou seja, funciona como negação `!` dos valores deste intervalo range, sendo assim, vai retornar TUDO que NÃO fazer match na expressão do range.</span>
                            <span>- Fora `^[\d]` indicamos que queremos EXATAMENTE a próxima expressão, isto em referência ao inicio do texto no qual estamos aplicando o match do regex.</span>
                            <span>- Implementamos de exemplo busca de padrões que correspondam a valores Hexadecimais ("0[xX]([0-9a-fA-F])+(\\s|$)") e também validador de Emails ("([a-zA-Z0-9\\.-_])+@([a-zA-Z])+(\\.([a-zA-Z])+)+"), para assim entender quais as possibilidades.</span>
                            <span>- Também falamos um pouco sobre a classe Scanner, ela NÃO é relacionada a Regex, porém o parâmetro delimitador dela é uma expressão regular, então utilizamos ele como exemplificação nas possibilidades de uso, além desta classe, DIVERSAS outras da API Nativa do Java e também de bibliotecas externas utilizam Regex.</span>
                            <p>Repositório Github clicando no botão acima</p>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoRegexpInJava} alt="Amostra logo Regex or Regexp" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                 <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 131 até 137]</h3> */}
                                    <h3 class="projects-subtitle">Contextualizando:</h3>
                                    <ul className="projects-frontend--container">
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Regex</code> (Expressões regulares) ou <code className="token_reservada">Regexp</code> (Regular Expression) é uma técnica na computação para encontrar padrões em textos, no Java utilizamos basicamente duas classes para essa funcionalidade, sendo elas <code className="token_reservada">Pattern</code> que define o padrão a ser buscado e <code className="token_reservada">Matcher</code> para realizar as comparações/matchs em sí no texto, mais informações sobre <code className="token_reservada">Pattern</code> e <code className="token_reservada">Matcher</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula131PatternAndMatcher.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando como utilizar as expressões regulares para encontrar padrões de textos, maiores explicações sobre essas definições e como funciona passo a passo descrito nos próximos pontos abaixo!</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Define os meta caracteres de configuração de acordo com a lógica do padrão em busca</span><br/>
                                                    <code className="-tokenClassEntity">String</code> regex = <code className="-tokenString">"ab"</code>;<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Define o texto no qual vamos realizar a busca pelo padrão definido em `regex`:</span><br/>
                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"abaaba"</code>;<br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Verifica se a expressão é válida (se ela compila), se for válida a instância será retornada.</span><br/>
                                                    <code className="-tokenClassEntity">Pattern</code> pattern = <code className="-tokenClassEntity">Pattern</code>.<code className="-tokenMethod">compile</code>(regex);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Verifica se ocorre algum match com a String (percorre por completo).</span><br/>
                                                    <code className="-tokenClassEntity">Matcher</code> matcher = pattern.<code className="-tokenMethod">matcher</code>(texto);<br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenKeyword">while</code>(matcher.<code className="-tokenMethod">find</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># `.start()` retorna a primeira posição referênte ao primeiro char do padrão buscado no texto</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Exemplo: "abaaba" ("ab" estão nas posições: 0, 3 pois é aonde inicia a flag/padrão buscado).</span></code><br/>
                                                        
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(matcher.<code className="-tokenMethod">start</code>()+<code className="-tokenString">" "</code>);</code><br/> 
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Posições encontradas: 0 3</span></code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li><code className="token_reservada">1o Primeiro</code> - Utilizamos o método estático da classe <code className="token_reservada">Pattern.compile(regex)</code>, aonde <code className="outputResult">`regex`</code> é os caracteres especiais que contém a lógica do padrão a ser buscado no texto, esse método só irá retornar a instância de <code className="outputResult">Pattern objPattern</code> se a expressão passada no argumento for válida e compilar.</li>
                                        <li><code className="token_reservada">2o Segundo</code> - Após compilado a expressão, utilizamos o método NÃO estático do <code className="token_reservada">`objPattern`</code> retornado/criado no passo anterior, sendo assim <code className="token_reservada">objPattern.matcher(texto)</code>, aonde <code className="outputResult">`texto`</code> é a <code className="token_reservada">String</code> do texto em sí que estamos realizando a busca utilizando como critério de comparação a expressão válida e compilada no primeiro passo, o retorno agora será um <code className="outputResult">Matcher objMatcher</code>.</li>
                                        <li><code className="token_reservada">3o Terceiro</code> - Utilizamos um <code className="token_reservada">looping</code> que irá percorrer a <code className="token_reservada">String</code> e realizar os matchs em sí <code className="token_reservada">while(objMatcher.find())&#123;&#125;</code>.</li>
                                        <li><code className="token_reservada">4o Quarto</code> - Neste bloco do <code className="token_reservada">looping</code> podemos utilizar vários métodos do <code className="token_reservada">`objMatcher`</code> com diversos tipos de retornos relacionados aos matchs, nos estudos eu utilizei <code className="token_reservada">objMatcher.start()</code> e <code className="token_reservada">objMatcher.group()</code>.</li>
                                        <br/>
                                        <li><code className="token_reservada">objMatcher.start()</code> retorna o primeiro indice da posição dos matchs encontrados.</li>
                                        <li><code className="token_reservada">objMatcher.group()</code> retorna a quantidade total de valores que deram match no padrão, considerando apartir do valor corrente até os anteriores.</li>
                                        <li>Detalhe importante sobre o comportamento do <code className="token_reservada">`objMatcher`</code>: Ao utilizar o método <code className="token_reservada">objMatcher.start()</code>, por padrão, ele percorre a lista de elementos e ao dar match com o padrão definido na <code className="token_reservada">regex</code> ele retorna o indice e continua APARTIR DALI, ou seja, se temos um padrão <code className="outputResult">"aba"</code> e realizamos a busca na String <code className="outputResult">"abababa"</code> ele irá considerar os retornos: <code className="outputResult">`0`</code> <code className="outputResult">`4`</code> pois ele descarta o <code className="outputResult">"aba"</code> do meio que já fez match na iteração anterior com a primeira ocorrência.</li>   
                                    </ul>

                                    <h3 class="projects-subtitle">Meta Caracteres:</h3>
                                    <ul className="projects-frontend--container">
                                        <li><code className="token_reservada">Meta Caracteres</code>: Os meta caracteres são os caracteres especiais de configuração para o <code className="token_reservada">Pattern</code>, existem inumeros e aqui estão os mais utilizados, mais informações sobre os <code className="token_reservada">Meta Caracteres</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula132PatternAndMatcher_metaCaracteres.java" target="_blank">Clique AQUI!</a></li>
                                        <li><code className="token_reservada">`\d`</code> - Todos os <code className="token_reservada">digítos</code>.</li>
                                        <li><code className="token_reservada">`\D`</code> - Ao contrário, ou seja, retorna tudo que <code className="token_reservada">NÃO</code> for <code className="token_reservada">digito</code>.</li>
                                        <li><code className="token_reservada">`\s`</code> - Todos os <code className="token_reservada">espaços em branco</code> (<code className="token_reservada">`\t`</code>, <code className="token_reservada">`\n`</code>, <code className="token_reservada">`\f`</code>, <code className="token_reservada">`\r`</code>).</li>
                                        <li><code className="token_reservada">`\S`</code> - Ao contrário, ou seja, retorna tudo que <code className="token_reservada">NÃO</code> for <code className="token_reservada">espaço em branco</code>.</li>
                                        <li><code className="token_reservada">`\w`</code> - Todas as letras (<code className="token_reservada">a-z</code> e <code className="token_reservada">A-Z</code>), <code className="token_reservada">digítos</code>, e <code className="token_reservada">`_`</code> (Ou seja, exclui todos caracteres especiais menos o <code className="token_reservada">`_`</code>).</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">`\W`</code> - Ao contrário, ou seja, retorna tudo que <code className="token_reservada">NÃO</code> for <code className="token_reservada">letras</code>, <code className="token_reservada">digitos</code> e <code className="token_reservada">`_`</code>.</p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando como utilizar esses meta caracteres, no caso o `\d` e `\D`:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Define os meta caracteres de configuração de acordo com a lógica do padrão em busca</span><br/>
                                                    <code className="-tokenClassEntity">String</code> regex = <code className="-tokenString">"\\d"</code>;<br/>
                                                    <span className="-tokenComment">// `\d` indica que queremos qualquer dígito numérico</span><br/>
                                                    <span className="-tokenComment">// Obs: dois (2) contra-barras `\\` pois uma é caractere de escape.</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Define o texto no qual vamos realizar a busca pelo padrão definido em `regex`:</span><br/>
                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"1kaka123kaka1"</code>;<br/>
                                                    <span className="-tokenComment">// Neste caso os index aonde deve ocorrer o match são: 0, 5, 6, 7, e 12 pois são as posições que correspondem números (digitos)</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Verifica se a expressão é válida (se ela compila), se for válida a instância será retornada.</span><br/>
                                                    <code className="-tokenClassEntity">Pattern</code> pattern = <code className="-tokenClassEntity">Pattern</code>.<code className="-tokenMethod">compile</code>(regex);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Verifica se ocorre algum match com a String (percorre por completo).</span><br/>
                                                    <code className="-tokenClassEntity">Matcher</code> matcher = pattern.<code className="-tokenMethod">matcher</code>(texto);<br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenKeyword">while</code>(matcher.<code className="-tokenMethod">find</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># `.group()` retorna o grupo de valores encontrados ou seja o valor que deu match em sí</span></code><br/>                                                            
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>("Índice do primeiro char: " + matcher.<code className="-tokenMethod">start</code>()+</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenString">" | Valor encontrado: "</code> + matcher.<code className="-tokenMethod">group</code>());</code><br/>

                                                        <br/>    
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Posições encontradas: </span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 0 | Valor encontrado: 1</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 5 | Valor encontrado: 1</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 6 | Valor encontrado: 2</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 7 | Valor encontrado: 3</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 12 | Valor encontrado: 1</span></code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Ou seja: 1 k a k a 1 2 3 k a k a 1</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Ocorreu: 0 X X X X 5 6 7 X X X X 12</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Aonde `X` são as posições que não correspondeu com o padrão em busca (números).</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># E os números são os Index dos elementos que deram match no padrão em busca.</span></code><br/>

                                                    &#125;<br/>

                                                    <br/>
                                                    <span className="-tokenComment">## Operação INVERTIDA, ou seja, Retornando tudo que NÃO for digítos com `\D` para entender melhor:</span><br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code> regex = <code className="-tokenString">"\\D"</code>;<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># MESMO texto anteior, ou seja, as posições agora devem INVERTER:</span><br/>
                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"1kaka123kaka1"</code>;<br/>
                                                    <span className="-tokenComment">// Neste caso os index aonde deve ocorrer o match são: 1, 2, 3, 4, 8, 9, 10, 11 pois são as posições que NÃO correspondem números (digitos)</span><br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenClassEntity">Pattern</code> pattern = <code className="-tokenClassEntity">Pattern</code>.<code className="-tokenMethod">compile</code>(regex);<br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">Matcher</code> matcher = pattern.<code className="-tokenMethod">matcher</code>(texto);<br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenKeyword">while</code>(matcher.<code className="-tokenMethod">find</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>("Índice do primeiro char: " + matcher.<code className="-tokenMethod">start</code>()+</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenString">" | Valor encontrado: "</code> + matcher.<code className="-tokenMethod">group</code>());</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Posições encontradas: </span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 1 | Valor encontrado: k</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 2 | Valor encontrado: a</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 3 | Valor encontrado: k</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 4 | Valor encontrado: a</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 8 | Valor encontrado: k</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 9 | Valor encontrado: a</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 10 | Valor encontrado: k</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 11 | Valor encontrado: a</span></code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Ou seja: <pre className="pre-implementFullBlock">1 k a k a 1 2 3 k a k  a  1</pre></span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Ocorreu: <pre className="pre-implementFullBlock">X 1 2 3 4 X X X 8 9 10 11 X</pre></span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Aonde `X` são as posições que não correspondeu com o padrão em busca (números).</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># E os números são os Index dos elementos que deram match no padrão em busca.</span></code><br/>

                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                    </ul>

                                    <h3 class="projects-subtitle">Range `[]`:</h3>
                                    <ul className="projects-frontend--container">
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Range</code> <code className="token_reservada">`[]`</code>: Podemos delimitar intervalos de valores no <code className="token_reservada">Pattern</code> utilizando <code className="token_reservada">`[]`</code> (Exemplo: Intervalos numéricos de <code className="outputResult">1 até 9</code> <code className="token_reservada">`[1-9]`</code>, ou também intervalos alfabéticos de <code className="outputResult">A até Z</code> com <code className="token_reservada">case insensitive</code> <code className="token_reservada">`[a-zA-Z]`</code>), porém desta forma sem nenhum <code className="token_reservada">quantificador</code> ele vai considerar apenas a primeira ocorrência encontrada, ou seja, o primeiro char que corresponder ao padrão, mais informações sobre range <code className="token_reservada">`[]`</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula133PatternAndMatcher_range.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando como utilizar ranges `[]`, em exemplo utilizando expressões para encontrar padrões de valores Hexadecimais válidos; Obs: Incompleto pois precisamos utilizar os Operadores Quantificadores, solução completa no segundo ponto abaixo que fala sobre eles!</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <span className="-tokenComment"># Em java para dizermos que um valor é hexadecimal utilizamos "0X" ou "0x" no início, seguido do valor e com limite de 6 casas no tamanho total;</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># `[xX]` Indica que queremos o `x` case insensitive, apenas UM pois não utilizamos Operadores Quantificador;</span><br/>
                                                    <span className="-tokenComment"># `[0-9a-fA-F]` Indica que queremos o interválo de `0` até `9` ou então `a` até `f` case insensitive, apenas UM pois não utilizamos Operadores Quantificador;</span><br/>
                                                    <code className="-tokenClassEntity">String</code> regex = <code className="-tokenString">"0[xX][0-9a-fA-F]"</code>;<br/>

                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"12 0x 0X 0xFFABC 0x109 0x1"</code>;<br/>
                                                    <span className="-tokenComment">// Neste caso os index aonde deve ocorrer o match são: 9, 17, e 23  pois são as posições que correspondem Hexadecimais válidos</span><br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenClassEntity">Pattern</code> pattern = <code className="-tokenClassEntity">Pattern</code>.<code className="-tokenMethod">compile</code>(regex);<br/>
                                                    <code className="-tokenClassEntity">Matcher</code> matcher = pattern.<code className="-tokenMethod">matcher</code>(texto);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">while</code>(matcher.<code className="-tokenMethod">find</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>("Índice do primeiro char: " + matcher.<code className="-tokenMethod">start</code>()+</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenString">" | Valor encontrado: "</code> + matcher.<code className="-tokenMethod">group</code>());</code><br/>

                                                        <br/>    
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Posições encontradas: </span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 9 | Valor encontrado: 0xF</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 17 | Valor encontrado: 0x1</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 23 | Valor encontrado: 0x1</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Ainda não é oque queremos, pois ele para a busca quando da match na expressão,</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># para retornar o valor completo do hexadecimal precisamos continuar a interação.</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># para isto será necessário utilizar algum dos</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Operadores quantificador (?, *, +, &#123;n-min, n-max&#125;, () agroup, | ou/or, $ fim da linha)</span></code><br/>

                                                    &#125;<br/>
                                                
                                                </code>
                                            </ul>
                                        </li>
                                    </ul>

                                    <h3 class="projects-subtitle">Quantificadores:</h3>
                                    <ul className="projects-frontend--container">
                                        <li><code className="token_reservada">Quantificadores</code>: Utilizamos quantificadores quando desejamos retornar vários valores de um range <code className="token_reservada">`[]`</code> pois o default é retornar apenas a primeira ocorrência que corresponder ao padrão do intervalo range, quando queremos continuar a interação sobre esse intervalo range e retornar mais valores utilizamos um <code className="token_reservada">agrupamento</code> <code className="token_reservada">`([])`</code> seguido de um dos operadores descritos abaixo (Exemplo <code className="token_reservada">`([])*`</code>), mais informações sobre os operadores <code className="token_reservada">quantificadores</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula134PatternAndMatcher_quantificadores.java" target="_blank">Clique AQUI!</a></li>
                                        <li><code className="token_reservada">`?`</code> - Zero ou uma.</li>
                                        <li><code className="token_reservada">`*`</code> - Zero ou mais/vários.</li>
                                        <li><code className="token_reservada">`+`</code> - Uma ou mais/vários.</li>
                                        <li><code className="token_reservada">`&#123;n-min, n-max&#125;`</code> - De n-min até n-max.</li>
                                        <li><code className="token_reservada">`()`</code> - Agrupamento.</li>
                                        <li><code className="token_reservada">`|`</code> - Ou/Or (Exemplo: <code className="token_reservada">`o(v|c)o`</code> retorna match com <code className="outputResult">"ovo"</code> ou <code className="outputResult">"oco"</code>).</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">`$`</code> - Flag que indica fim da linha.</p>

                                            <p className="main-title--implementFullBlock">Exemplo de implementação demonstrando como utilizar ranges `[]` e esses Operadores Quantificadores para continuar a iteração quando der match no texto, em exemplo utilizando expressões para encontrar padrões de valores Hexadecimais válidos (Finaliza a solução disposta no ponto anterior):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <span className="-tokenComment">Em java para dizermos que um valor é hexadecimal utilizamos "0X" ou "0x" no início, seguido do valor e com limite de 6 casas no tamanho total</span><br/>

                                                    
                                                    
                                                    <span className="-tokenComment"># Mesma expressão anterior porém agora com Operador Quantificador `+`, e com flag que indica final de linha `(\\s|$)`;</span><br/>
                                                    <span className="-tokenComment"># `([0-9a-fA-F])+`: Indica que queremos um agrupamento de valores de `0` até `9` ou então `a` até `f` case insensitive e indicamos que deve corresponder UM ou mais vazes, assim a iteração continuará e retornará todo o valor hexadecimal, diferente de anteriormente que só retornava o index que fazia match e o valor hexadecimal fragmentado;</span><br/>

                                                    <code className="-tokenClassEntity">String</code> regex = <code className="-tokenString">"0[xX]([0-9a-fA-F])+(\\s|$)"</code>;<br/>

                                                    <br/> 
                                                    <span className="-tokenComment"># MESMO texto anteior, porém agora deverá retornar o valor Hexadecimal completo sem fragmentar:</span><br/>
                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"12 0x 0X 0xFFABC 0x109 0x1"</code>;<br/>
                                                    <code className="-tokenClassEntity">Pattern</code> pattern = <code className="-tokenClassEntity">Pattern</code>.<code className="-tokenMethod">compile</code>(regex);<br/>
                                                    <code className="-tokenClassEntity">Matcher</code> matcher = pattern.<code className="-tokenMethod">matcher</code>(texto);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">while</code>(matcher.<code className="-tokenMethod">find</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>("Índice do primeiro char: " + matcher.<code className="-tokenMethod">start</code>()+</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenString">" | Valor encontrado: "</code> + matcher.<code className="-tokenMethod">group</code>());</code><br/>

                                                        <br/>    
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Posições encontradas: </span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 9 | Valor encontrado: 0xFFABC (Antes retornava apenas 0xF)</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 17 | Valor encontrado: 0x109 (Antes retornava apenas 0x1)</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 23 | Valor encontrado: 0x1 (Antes retornava também 0x1 pois é esse o valor completo mesmo)</span></code><br/>
                                                    &#125;<br/>
                                                
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">BÔNUS: Exemplo de implementação que faz a busca por expressões que correspondem Emails VÁLIDOS:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <code className="-tokenClassEntity">String</code> regex = <code className="-tokenString">"([a-zA-Z0-9\\.-_])+@([a-zA-Z])+(\\.([a-zA-Z])+)+"</code>;<br/>
                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"wellison.bertelli@hotmail.com, bertelli.wesley@gmail.com, danielle@uoul.com.br, pamonha@gmail"</code>;<br/>
                                                    <span className="-tokenComment">// pamonha@gmail == E-mail INVÁLIDO! Não deverá retornar match abaixo!</span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">Pattern</code> pattern = <code className="-tokenClassEntity">Pattern</code>.<code className="-tokenMethod">compile</code>(regex);<br/>
                                                    <code className="-tokenClassEntity">Matcher</code> matcher = pattern.<code className="-tokenMethod">matcher</code>(texto);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">while</code>(matcher.<code className="-tokenMethod">find</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>("Índice do primeiro char: " + matcher.<code className="-tokenMethod">start</code>()+</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenString">" | Valor encontrado: "</code> + matcher.<code className="-tokenMethod">group</code>());</code><br/>

                                                        <br/>    
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Posições encontradas: </span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 0 | Valor encontrado: wellison.bertelli@hotmail.com</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 31 | Valor encontrado: bertelli.wesley@gmail.com</span></code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Índice do primeiro char: 58 | Valor encontrado: danielle@uoul.com.br</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// pamonha@gmail Não retornou pois é um E-mail INVÁLIDO (Faltando `.com` e etc)</span></code><br/>
                                                    &#125;<br/>
                                                
                                                </code>
                                            </ul>
                                        </li>
                                        <br/>
                                        <li>Fonte interessante sobre <code className="token_reservada">quantificadores</code> e <code className="token_reservada">regex</code> em geral com Java: <a className="-linkBoldYellowProjects" href="https://www.programacaoprogressiva.net/2012/08/java-expressoes-regulares-regex-em-java_2423.html" target="_blank">Clique AQUI!</a></li>
                                    </ul>

                                    <h3 class="projects-subtitle">Anchor `^`:</h3>
                                    <ul className="projects-frontend--container">
                                        <li><code className="token_reservada">Anchor</code> <code className="token_reservada">`^`</code>: Esse operador possuí duas utilidades distintas a depender do contexto no qual estiver inserido, as duas possibilidades estão descritas abaixo, mais informações sobre <code className="token_reservada">Anchor</code> <code className="token_reservada">`^`</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula136PatternAndMatcher_Anchor.java" target="_blank">Clique AQUI!</a></li>
                                        <li>Utilizando ele no começo da expressão fora do range <code className="token_reservada">`^[\w]`</code> indicamos que queremos <code className="token_reservada">EXATAMENTE</code> a próxima expressão, isto em referência ao inicio do texto no qual estamos aplicando o match do regex.</li>
                                        <li>Utilizando ele dentro do range <code className="token_reservada">`[^\w]`</code> indicamos que <code className="token_reservada">NÃO</code> queremos esses valores do intervalo,  ou seja, funciona como <code className="token_reservada">negação</code> <code className="token_reservada">`!`</code> dos valores deste intervalo range, sendo assim, vai retornar TUDO que <code className="token_reservada">NÃO</code> fazer match na expressão do range.</li>
                                    </ul>

                                    <h3 class="projects-subtitle">Class Scanner:</h3>
                                    <ul className="projects-frontend--container">
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Scanner</code>: <code className="token_reservada">NÃO</code> é uma classe relacionada a <code className="token_reservada">regex</code>, mas podemos utilizar ela em conjunto e realizar algumas operações interessantes (Ela vai além de escanear as entradas do usuário pelo console com <code className="token_reservada">Scanner scan = new Scanner(System.in);</code> rsrs), utilizamos ela também para iterar em arquivos textos e etc, podendo assim fragmentar em tokens de acordo com alguma lógica/padrão e receber esses valores dos elementos (tokens) em variáveis corretas a depender de seus <code className="token_reservada">Tipos Primitivos</code> sem precisar fazer <code className="token_reservada">casts</code> explícitos pois o default é considerar todos tokens como <code className="token_reservada">String</code>. Para realizar essa operação basta apenas instânciar um objeto <code className="token_reservada">Scanner</code> passando no construtor qual será o recurso texto que desejamos iterar e pegar esses valores (<code className="token_reservada">Scanner scann = new Scanner(texto_str);</code>), após instânciado o objeto <code className="token_reservada">`scann`</code> podemos alterar o <code className="token_reservada">delimitador</code> que faz o <code className="token_reservada">.split()</code> em sí, esse parâmetro dele é uma <code className="token_reservada">regex</code> portanto podemos personalizar a regra que irá fragmentar esse texto em tokens no qual iremos iterar (<code className="token_reservada">scann.useDelimiter(", ");</code>), após isso basta utilizarmos um looping (<code className="token_reservada">while(scanner.hasNext())&#123;&#125;</code>) e neste bloco realizar verificações com <code className="token_reservada">if</code> qual é o <code className="token_reservada">Tipo Primitivo</code> do próximo elemento em iteração (<code className="token_reservada">if(scanner.hasNextInt())&#123;&#125;</code>), assim bastando recebe-los em variáveis correspondentes, mais informações sobre <code className="token_reservada">Scanner</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/E_regex/Aula137Scanner_Utils.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo desta Implementação utilizando Scanner para receber valores de uma String em variáveis que correspondem corretamento os Tipos primitivos de maneira simples:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">"Levi, Eren, Mikasa, true, 1200"</code>;<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Sem utilizar Scanner aonde todos seram tratados como `String`: </span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">String</code>[] nomes = texto.<code className="-tokenMethod">split</code>(<code className="-tokenString">","</code>);<br/>
                                                    <code className="-tokenKeyword">for</code> (<code className="-tokenClassEntity">String</code> nome : nomes) &#123;<br/>
                                                        <code className="-nestedInnerCode">...</code><br/>
                                                    &#125;<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Utilizando Scanner e recebendo os elementos em variáveis corretas: </span><br/>
                                                    <br/>
                                                    <code className="-tokenClassEntity">Scanner</code> scanner = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">Scanner</code>(texto); <span className="-tokenComment">// Aqui ele percorre a lista e faz um `.split()` por padrão nos " "</span><br/>
                                                    scanner.<code className="-tokenMethod">useDelimiter</code>(<code className="-tokenString">", "</code>); <span className="-tokenComment">// Aqui mudamos o comportamento padrão e utilizamos "," no `.split()`</span><br/>
                                                    
                                                    <code className="-tokenKeyword">while</code>(scanner.<code className="-tokenMethod">hasNext</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(scanner.<code className="-tokenMethod">hasNextInt</code>()) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">int</code> inteiro = scanner.<code className="-tokenMethod">nextInt</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// 1200</span></code><br/>
                                                            
                                                        <code className="-nestedInnerCode">&#125; <code className="-tokenKeyword">else if</code> (scanner.<code className="-tokenMethod">hasNextBoolean</code>()) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">boolean</code> boleano = scanner.<code className="-tokenMethod">nextBoolean</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// true</span></code><br/>

                                                        <code className="-nestedInnerCode">&#125; <code className="-tokenKeyword">else</code> &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">String</code> tokenGeneric_str = scanner.<code className="-tokenMethod">next</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// Levi</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// Eren</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// Mikasa</span></code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
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