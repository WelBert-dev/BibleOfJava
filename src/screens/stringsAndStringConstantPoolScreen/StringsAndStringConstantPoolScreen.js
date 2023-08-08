import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoStringConstantPool from '../../resources/images/java-string-pool.png';

export default function StringsAndStringConstantPoolScreen() {

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

            navbarElement.childNodes[5].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
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
                                <h3 className="projects-title">Não explica "Oque é String" e sim como o Java lída em baixo nível.</h3>
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
                            <img className="projects-logo" src={logoStringConstantPool} alt="Amostra logo Wrapper Classes" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 108 até 111]</h3> */}
                                    <h3 class="projects-subtitle">Contextualizando:</h3>
                                    <ul className="projects-frontend--container">
                                        <li>Não são consideradas <code className="token_reservada">Wrappers</code> pois elas já são objetos normalmente e não existe <code className="token_reservada">Tipo Primitivo</code> para elas (Como ocorre em linguagens de mais alto nível como python por exemplo).</li>
                                        <li><code className="token_reservada">Strings literais</code> (<code className="outputResult">String b = "Wubalubadubdub";</code>) no Java são objetos Imutáveis devido ao <code className="token_reservada">Pool de Strings constantes</code>.</li>
                                        <li><code className="token_reservada">Strings constants pool</code> é uma técnica que a JVM faz para otimizar recursos de armazenamento quando trabalhamos com <code className="token_reservada">Strings literais</code>. (Implementação baseada em <code className="token_reservada">String Interning</code> que é uma técnica na computação para armazenar apenas uma cópia de cada valor de string distinto), vídeo aula com explicação mais completa: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=vH7izlkNewI&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&index=109" target="_blank">Clique AQUI!</a></li>
                                        <li>A JVM implementa o conceito acima compartilhando as palavras entre toda aplicação, alocando memória no pool apenas para palavras novas, porisso é necessário a Imutabilidade delas já que esses valores do pool em memória seram compartilhados entre todas as referências da aplicação que apontam para a mesma <code className="token_reservada">Strings literal</code>, essa regra <code className="token_reservada">NÃO</code> se aplica para as <code className="token_reservada">Strings</code> alocados manualmente com <code className="token_reservada">new</code>.</li>
                                        <li>Ou seja, antes dele alocar memória para a palavra, ele verifica no <code className="token_reservada">pool de Strings constantes</code> se ela já existe evitando assim duplicatas (<code className="token_reservada">DISTINCT</code>).</li>
                                        <li>PORÉM essa implementação acaba atrapalhando alguns cenários em que é realizado muitas Iterações com concatenação, devido a JVM alocar memória no <code className="token_reservada">pool de Strings constantes</code> para CADA palavra diferente, logo, a cada iteração será alocado memória no pool. (Mais explicações no TXT de estudos), vídeo aula com explicação mais completa: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=5hfftQx_S8Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW&index=110&pp=iAQB" target="_blank">Clique AQUI!</a></li>
                                        <li><code className="token_reservada">StringBuilder</code> e <code className="token_reservada">StringBuffer</code> (Chegam para corrigir o problema de cima, e outros cenários que visam performance em Iterações), pois eles manipulam diretamente a memória alocada inicialmente, e não utiliza o <code className="token_reservada">pool de Strings constantes</code> que fica alocando espaço para cada palavra diferente.</li>
                                        <li>A Diferença deles é que o <code className="token_reservada">StringBuffer</code> é desenhado para cenários de <code className="token_reservada">MultiThreads</code> e Concorrência <code className="token_reservada">Concurrency</code>.</li>
                                        <li>Se atentar ao tipo de retorno se utilizado essas classes (<code className="token_reservada">StringBuilder</code> e <code className="token_reservada">StringBuffer</code>) ou outras, quando o tipo de retorno é diferente do objeto manipulado em memória em sí, quer dizer que a lógica não está alterando o valor real em memória e sim apenas esse retorno em questão.</li>
                                        <li>Sobre o ponto acima neste contexto, quando utilizamos um <code className="token_reservada">StringBuilder</code> e algum método está retornando uma <code className="token_reservada">String</code> comum, isso quer dizer que a lógica só está sendo aplicada no retorno, e não está alterando o valor real em memória do objeto. (<code className="outputResult">objBuilderOrBuffer.reverse()</code> retorna um <code className="token_reservada">StringBuilder</code>, logo altera o valor real em memória, já <code className="outputResult">objBuilderOrBuffer.subString(startIndex, endIndex)</code> retorna uma <code className="token_reservada">String</code> comum, logo NÃO está alterando o valor real em memória, está apenas aplicando a lógica no retorno).</li>
                                        <li>Métodos utilitários prontos para manipulação de <code className="token_reservada">Strings</code> (<code className="token_reservada">.replace(thisValue, fromThisValue)</code>, <code className="token_reservada">.substring(startIndex, endIndex)</code>, <code className="token_reservada">.trim()</code>, <code className="token_reservada">.charAt()</code>, <code className="token_reservada">.toUpperCase()</code>, e etc).</li>
                                        <br/>
                                        <li>Obs sobre o método <code className="token_reservada">.replace(thisValue, fromThisValue)</code>: Diferente do Javascript que substitui apenas a primeira ocorrência, no Java TODAS as ocorrências são substituidas.</li>
                                        <br/>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile">Exemplos de Implementações utilizando String, StringBuilder e StringBuffer para visualizar as diferenças de performance e entender melhor o Strings Constants Pool na prática:</p>
                                            <p className="main-title--implementFullBlock"><code className="token_reservada">String normal</code>: Utilizando <code className="token_reservada">for nativo</code>, o for nativo é otimizado e gera instruções de baixo nível pensadas em ganhos de performance, PORÉM o cenário muda quando realizamos iterações com aumentos exponenciais na entrada, pois a String será duplicada e re-alocada várias vezes no Pool de Strings Constantes e assim performar BEM MAL: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Método que simula a != no processamento quando aumentado a entrada exponencialmente</span><br/>
                                                    <code className="-tokenKeyword">private static</code> <code className="-tokenClassEntity">void</code> <code className="-tokenMethod">concatString</code>(<code className="-tokenKeyword">int</code> tamanho) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> texto = <code className="-tokenString">""</code>;</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">for</code> (<code className="-tokenKeyword">int</code> i = 0; i &#60;= tamanho; i++) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">texto += i;</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Primeira Iteração:</span><br/>
                                                    <code className="-tokenMethod">concatString</code>(<code className="-tokenKeyConstant">1_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 3ms</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Segunda Iteração:</span><br/>
                                                    <code className="-tokenMethod">concatString</code>(<code className="-tokenKeyConstant">10_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 186ms</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Terceira Iteração:</span><br/>
                                                    <code className="-tokenMethod">concatString</code>(<code className="-tokenKeyConstant">100_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 9855ms</span>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock"><code className="token_reservada">StringBuilder (Não Thread-Safe)</code>: Também utilizando <code className="token_reservada">for nativo</code> porém trocando <code className="token_reservada">String</code> por <code className="token_reservada">StringBuilder</code> que não utiliza o Pool de Strings Constantes e sempre manipula o mesmo endereço em memória alocado inicialmente, as seguintes implementações demonstram as diferenças no processamento quando utilizado o método anterior (<code className="token_reservada">concatString(int tamanho)</code>) e o novo (<code className="token_reservada">concatStringBuilder(int tamanho)</code>): </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Mesmo método anterior, porém trocando String por StringBuilder:</span><br/>
                                                    <code className="-tokenKeyword">private static</code> <code className="-tokenClassEntity">void</code> <code className="-tokenMethod">concatStringBuilder</code>(<code className="-tokenKeyword">int</code> tamanho) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">StringBuilder</code> textoSB = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">StringBuilder</code>(tamanho);</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">for</code> (<code className="-tokenKeyword">int</code> i = 0; i &#60;= tamanho; i++) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">textoSB.<code className="-tokenMethod">append</code>(i);</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>
                                                    <br/>
                                                    <span className="-tokenComment"># A diferença na performance é gritante!</span><br/><br/>
                                                    <span className="-tokenComment"># Primeira Iteração:</span><br/>
                                                    <code className="-tokenMethod">concatString</code>(<code className="-tokenKeyConstant">30_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 1081ms</span><br/>
                                                    <code className="-tokenMethod">concatStringBuilder</code>(<code className="-tokenKeyConstant">30_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 1ms</span><br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Segunda Iteração:</span><br/>
                                                    <code className="-tokenMethod">concatString</code>(<code className="-tokenKeyConstant">100_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 9855ms</span><br/>
                                                    <code className="-tokenMethod">concatStringBuilder</code>(<code className="-tokenKeyConstant">100_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 4ms</span>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock"><code className="token_reservada">StringBuffer (Thread-Safe)</code>: A Única diferença entre a anterior (<code className="token_reservada">StringBuilder</code>) e essa é que essa (<code className="token_reservada">StringBuffer</code>) é <code className="token_reservada">Thread-Safe</code> ou seja, segura para usos em ambientes MultiThreads e concorrência, então também utilizamos <code className="token_reservada">for nativo</code> porém trocando a instância de <code className="token_reservada">StringBuilder</code> por <code className="token_reservada">StringBuffer</code>, as seguintes implementações demonstram as diferenças no processamento quando utilizado o método anterior (<code className="token_reservada">concatStringBuilder(int tamanho)</code>) e o novo (<code className="token_reservada">concatStringBuffer(int tamanho)</code>), LEMBRANDO que ambas são otimizadas e desenhadas para diferentes contextos, logo, as diferenças na performance de uma ou outra <code className="token_reservada">NÃO é RELEVANTE</code>: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment"># Implementação idêntica ao anterior, porém mudando a instância:</span><br/>
                                                    <code className="-tokenKeyword">private static</code> <code className="-tokenClassEntity">void</code><code className="-tokenMethod">concatStringBuffer</code>(<code className="-tokenKeyword">int</code> tamanho) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">StringBuffer</code> textoSBuff = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">StringBuffer</code>(tamanho);</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">for</code> (<code className="-tokenKeyword">int</code> i = 0; i &#60;= tamanho; i++) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">textoSBuff.<code className="-tokenMethod">append</code>(i);</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>
                                                    <br/>
                                                    <span className="-tokenComment"># Ele é menos performático que a anterior, <br/>porém são desenhados para contextos diferentes!</span><br/><br/>
                                                    <code className="-tokenMethod">concatStringBuilder</code>(<code className="-tokenKeyConstant">100_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 3ms</span><br/>
                                                    <code className="-tokenMethod">concatStringBuffer</code>(<code className="-tokenKeyConstant">100_000</code>);<br/>
                                                    <span className="-tokenComment">// Tempo de processamento: 6ms</span>
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