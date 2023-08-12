import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoJavaioVSjavanio from '../../resources/images/javaioVSjavanio.webp';

export default function NewInputOutputAPIScreen() {

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

            navbarElement.childNodes[10].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;New Input e Output API&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Manipulações de Arquivos e/ou Diretórios (HD) - Novo pacote mais coeso e poderoso.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/F_io" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>- Pacote novo java.nio disponível apartir do Jdk 1.4, adiconando maior Coesão entre classes, polimorfismo de Sistemas de Arquivos, polimorfismo de S.O's (Cada um possue suas próprias convenções sobre variáveis de ambiente e etc), Não bloqueante em contextos Multithreads...</span>
                            <span>- Não se limita apenas a leituras de HD's ou SSD's como qualquer outro tipo de operação que envolva transferência de arquivos entre periféricos externos, como por exemplo transferência de arquivos pela Rede (Internet).</span>
                            <span>- Obs: Não transferimos o arquivo em sí, mas sim a serialização dele, ou seja, o arquivo convertido em fluxos de bytes.</span>
                            <span>- Qualquer classe no Java que contenha "Stream" em sua nomenclatura, quer dizer que estamos operando no mais baixo nível, geralmente manipulando fluxos de bytes.</span>
                            <span>- A classe File do pacote legado é substituído pela Interface Path deste novo pacote, que também é a representação do Arquivo ou Diretório (mais especificamente o path dele) em forma de Objeto, ou seja, para qualquer operação que envolva Arquivos ou Diretórios agora utilizamos ele ao invés do legado File.</span>
                            <span>- Agora é uma Interface por conta do polimorfismo de Sistemas de Arquivos, ou seja, utilizamos programação orientada a interface para melhor adequar os caminhos dos arquivos em diferentes sistemas de arquivos, pois cada um segue suas próprias convenções.</span>
                            <span>- Para manter compatibilidade com sistemas legados que ainda utilizam a classe File, ou também para contextos que esperam um objeto do tipo File, a Interface Path possuí um método `toFile()` que faz a conversão e retorna um objeto File. O File também possuí um método `toPath()` com a mesma lógica.</span>
                            <span>- Por conta de agora utilizarmos uma Interface Path que representa um Arquivo ou Diretório, utilizamos a classe Paths que serve como fabrica de objetos compatíveis com a Interface Path, o método sobrecarregado `.get()` desta classe realiza calculos de acordo com a JVM em execução para assim obter objetos adequados para o Sistema de Arquivos do Sistema Operacional em execução.</span>
                            <span>- Todos os métodos de instância da classe legada File são transferidos para a classe utilitária Files, porém agora são métodos estáticos, ou seja, para qualquer operação que envolva Arquivos ou Diretórios como copiar, modificar atributos básicos como data de criação, data de última modificação, data de último acesso, ou coisas mais complexas como navegações de diretórios em loopings de iteração, dentre outras funcionalidades que envolvam operações em Arquivos ou Diretórios.</span>
                            <span>- Operações de normalize dos Paths: Método que retira os caracteres curingas de um caminho Path quando esse mesmo é combinado com outro, como "../" ou "./", e retorna um Path "limpo" e "resolvido", ou seja, um caminho sujo: "/home/welbert/documents/../../arquivo.txt" ao aplicar a função de normalização ele ficará assim: "/home/arquivo.txt".</span>
                            <span>- Operações de resolve dos Paths: Método que toma um caminho relativo como entrada e o combina com o caminho atual para produzir um caminho absoluto. Obs: Ele só resolve apartir de um absoluto para o relativo nunca ao contrário. Exemplo: Caminho atual ("/var/log") combinado com o Caminho relativo ("messages") temos que o caminho absoluto será ("/var/log/messages").</span>
                            <span>- Operações de relativize dos Paths: Método usado para calcular o caminho relativo entre dois caminhos. Ele leva dois caminhos como entrada e retorna um caminho relativo que represente a diferença entre eles. Por exemplo, suponha que temos os seguintes caminhos: objPath_source sendo "/home/user/documents" e objPath_target sendo "/home/user/pictures", se relativisarmos apartir do source para o target o resultado seria o path "../pictures". Esse caminho relativo pode ser usado para navegar do diretório "documents" para o diretório "pictures".</span>
                            <span>- BasicFileAttributes e BasicFileAttributesView: Representação dos atributos básicos de um Arquivo ou Diretório, esse é o tipo mais Genérico para esta representação, ou seja, indenpendentemente do Sistema Operacional ou Sistema de Arquivos utilizado, ele contém tudo que é comum entre eles. A diferença de um para outro é que o com final "View" é utilizado para MODIFICAÇÕES nessas informações, ou seja, getters and setters, já o sem serve apenas para OBTER informações, ou seja, apenas getters.</span>
                            <span>- DosFileAttributes e DosFileAttributesView, PosixFileAttributes e PosixFileAttributesView: Equivalentes do anterior porém especializados para ambientes Windows (DOS) e GNU/Linux (POSIX), isso é necessário devido aos diferentes Sistemas de Arquivos utilizados por ambos Sistemas Operacionais, como por exemplo a forma como é as permissões de usuários e grupos no Linux é diferente das convenções do Windows, dentre outros atributos de Arquivos ou Diretórios que diferem entre cada S.O.</span>
                            <span>- DirectoryStream: Navegando e iterando em Diretórios de maneira não recursiva, ou seja, o primeiro nível hierárquico da árvore de diretórios, isso é util para realizar navegações em looping e para cada Arquivo realizar uma operação nele.</span>
                            <span>- SimpleFileVisitor: Navegando e iterando em Diretórios de maneira recursiva, ou seja, apartir de um diretório até o final do ramo desta árvore de diretórios, ou seja, equivalente do anterior porém mais poderoso, podendo navegar apartir de um ponto da árvore até o final do ramo e também é possível executar blocos de lógica Antes, Durante, Se ocorrer algum erro, e Depois de visitar um diretório, bastanto sobrescrever o método correspondente dessas ações.</span>
                            <span>- PathMatcher: Com ela é possível utilizar expressões regulares para definir quais paths iremos querer filtrar, isso ajuda a evitar vários if's com `.endsWith()` quando desejamos encontrar diversos padrões diferentes na mesma passada da iteração (navegação) pelos Paths, ele é utilizado em conjunto com as duas classes descritas anteriormente.</span>
                            <span>- ZipOutputStream: Utilizada para zippar arquivos de acordo com os Path's desejados, por se tratar de um Stream é uma classe low level que manipula fluxos de dados.</span>
                            <p>Repositório Github clicando no botão acima</p>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Fonte interessante, repositório Github em Inglês: <a className="-linkBoldYellowProjects" href="https://github.com/Mr-Dai/Java-Tutorial/blob/master/nio/nio.md" target="_blank">Clique AQUI!</a></span>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Fonte interessante, GithubPages em Coreano: <a className="-linkBoldYellowProjects" href="https://kouzie.github.io/java/java-NIO/#" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoJavaioVSjavanio} alt="Amostra logo IO vs NIO" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    <h3 class="projects-subtitle">Contextualizando:</h3>
                                    <ul className="projects-frontend--container">
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile">Nova maneira mais coesa de lidar com as mesmas operações anteriores, porém com maior coerência entre as classes, melhor performance e ajusta alguns erros que poderiam ocorrer se utilizar as legadas, problemas esses relacionados a Internacionalização de Sistemas Operacionais (Aonde cada um segue suas prórprias convenções gerais sobre variáveis de ambiente e etc, diferentes tipos de Sistemas de Arquivos, adicionando assim funcionalidades para normalizar e retirar esses caracteres especiais do caminho Path do Arquivo ou Diretório, tornando esse novo caminho absoluto melhor entendível para os diferentes S.O's.</p>
                                            
                                            <p className="main-title--implementFullBlock">Fluxograma trasendo um Overview geral sobre as novas classes que substituem as do pacote legado da seção acima, tornando melhor a compreensão sobre a coesão entre as novas classes:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    {window.screen.width <= 800 ? <><pre className="pre-implementFullBlock">                <span className="-tokenComment">Substitui File por Path</span></pre><br/></> : ""}
                                                    {window.screen.width <= 800 ? <><pre className="pre-implementFullBlock">                           <span className="-tokenComment --fontSize1rem">⇣</span></pre><br/></> : ""}
                                                    <pre className="pre-implementFullBlock">   [Class File] &#60;=&#62; [Interface Path] {window.screen.width > 800 ? <><span className="-tokenComment">-&#62; Substitui File por Path</span></> : ""}</pre><br/>
                                                    <pre className="pre-implementFullBlock">        /\                 /\</pre><br/>
                                                    <pre className="pre-implementFullBlock">        ||                 ||</pre><br/>
                                                    <pre className="pre-implementFullBlock">        ||            [Class Paths] {window.screen.width > 800 ? <><span className="-tokenComment">-&#62; Fabrica de Path</span></> : ""}</pre><br/>
                                                    {window.screen.width <= 800 ? <><pre className="pre-implementFullBlock">        ||                 <span className="-tokenComment --fontSize1rem">⇡</span></pre><br/></> : ""}
                                                    {window.screen.width <= 800 ? <><pre className="pre-implementFullBlock">        ||           <span className="-tokenComment">Fabrica de Path</span></pre><br/></> : ""}
                                                    <pre className="pre-implementFullBlock">        ||</pre><br/>
                                                    <pre className="pre-implementFullBlock">[Class Util Files] {window.screen.width > 800 ? <><span className="-tokenComment">-&#62; Todos os métodos de File transferidos para Files (Agora são Estáticos)</span></> : ""}</pre><br/>
                                                    {window.screen.width <= 800 ? <><pre className="pre-implementFullBlock">        <span className="-tokenComment --fontSize1rem">⇡</span></pre><br/></> : ""}
                                                    {window.screen.width <= 800 ? <><pre className="pre-implementFullBlock"><span className="-tokenComment">Todos os métodos de File<br/>transferidos para Files<br/>(Agora são Estáticos)</span></pre><br/></> : ""}
                                                </code>
                                            </ul>
                                        </li>
                                        <li><code className="token_reservada">Path</code>: Substitui a legada <code className="token_reservada">File</code> devido a coesão (Pois o <code className="token_reservada">File</code> na verdade representa o caminho path do Arquivo ou Diretório em sí, então faz mais sentido o nome ser <code className="token_reservada">Path</code> ao invés de <code className="token_reservada">File</code>). Além disto agora é utilizado programação orientada a interface devido ao polimorfismo de Sistemas Operacionais, assim utilizamos a referência em uma abstração genérica que é concretizada apartir da classe util <code className="token_reservada">Paths</code> servindo de fábrica de objetos do tipo <code className="token_reservada">Path</code> realizando cálculos de acordo com o Sistema Operacional em execução, assim é garantido que o Objeto real final seja compatível com o Sistema Operacional em execução evitando vários problemas (Tudo que é especializado é melhor do que soluções genéricas que é o caso do pacote I/O legado, porisso ocorriam vários problemas relacionados a Internacionalização de Sistemas Operacionais); Obs: NÃO é garantido que o caminho path realmente exista pois não é realizado nenhum tratamento neste sentido, ou seja, é apenas a representação em forma de Objeto, se o caminho realmente é válido ou não é responsabilidade do desenvolvedor (Isso pode ser verificado com o método estático <code className="token_reservada">Files.notExists(filePath)</code>), mais informações sobre <code className="token_reservada">Path</code>, <code className="token_reservada">Paths</code> e <code className="token_reservada">Files</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula144e145Introducao_Path_Paths_Files.java" target="_blank">Clique AQUI!</a></li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Paths</code>: Classe final utilizada principalmente para gerar uma instância de <code className="token_reservada">Path</code> com o método estático <code className="token_reservada">Paths.get(caminho-do-arquivo)</code>; Obs: Por conta do parâmetro do método get dela ser um <code className="token_reservada">varargs (...)</code> podemos passar pasta a pasta do caminho utilizando "," <code className="token_reservada">Paths.get("C:", "pamonha", "arq.txt")</code> ou também <code className="token_reservada">Paths.get("/home/user/documents/", "arq.txt")</code>, mais informações sobre <code className="token_reservada">Path</code>, <code className="token_reservada">Paths</code> e <code className="token_reservada">Files</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula144e145Introducao_Path_Paths_Files.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando as várias maneiras de fabricar uma instância de Path com essa classe utilitária:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    
                                                    <span className="-tokenComment"># Caminho absoluto</span><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathAbsolute = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/user/arq.txt"</code>);<br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Caminho relativo</span><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathRelative = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"diretorio/subdiretorio/arq.txt"</code>);<br/>
                                                    <span className="-tokenComment">// Para obter o caminho completo `pathRelativo.toAbsolutePath()`</span><br/>
                                                    <span className="-tokenComment">// O Caminho absoluto será em relação ao arq.java em execução deste código</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Utilizando uma sequência de componentes do caminho</span><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathComponents = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"diretorio", "subdiretorio", "arq.txt"</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Utilizando URI absoluta</span><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathUriAbsolute = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"file:///home/user/arq.txt"</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Utilizando URI relativa</span><br/>
                                                    <code className="-tokenClassEntity">URI</code> uriRelative = <code className="-tokenClassEntity">URI</code>.<code className="-tokenMethod">create</code>(<code className="-tokenString">"file://"</code> + <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"diretorio/subdiretorio/arq.txt"</code>)<br/>
                                                        <code className="-nestedInnerCode">.<code className="-tokenMethod">toAbsolutePath</code>());</code><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathUriRelative = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(uriRelative);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Obtendo o caminho atual (Current) aonde esta sendo executado .java</span><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathCurrent = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">""</code>);<br/>
                                                    <span className="-tokenComment">## Obs: Se colocar no `sout` apenas a variável de referência a saída do `.toString()` será empty, então deve-se executar `.toAbsolutePath()`</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Utilizando um objeto File</span><br/>
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/user/arq.txt"</code>);<br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> pathFile = arquivo.<code className="-tokenMethod">toPath</code>();<br/>
                                                    <span className="-tokenComment">## Obs: Também é possível o processo inverso com `path.toFile()`</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Files</code>: Classe 100% Estática (Ou seja, ela é uma classe utilitária) contendo todos os métodos de instância da legada <code className="token_reservada">File</code> (Porém agora Estáticos), ou seja, métodos para criação, escritas, leituras, navegações e etc, tudo que é relacionado a Arquivos e Diretórios neste sentido é nela que se encontra (Ou seja, ela é uma facade), , mais informações sobre <code className="token_reservada">Path</code>, <code className="token_reservada">Paths</code> e <code className="token_reservada">Files</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula144e145Introducao_Path_Paths_Files.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando como criar Arquivos e Diretórios: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    
                                                    <code className="-tokenKeyword">try</code> &#123;<br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Criando diretorio único (Sem ser de maneira recursiva, com pastas e subpastas):</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity ">Path</code> directoryPath = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert", "pasta_nonExistent"</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(directoryPath)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">directoryPath = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createDirectory</code>(directoryPath);</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Criando multiplos sub-diretorios de uma vez (Recursivamente):</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> directoriesPath = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert", "pasta_nonExistent", "subpasta", "subsubpasta"</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(directoriesPath)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">directoriesPath = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createDirectories</code>(directoriesPath);</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Criando arquivo dentro de um diretorio criado anteriormente:</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> filePath = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(directoriesPath.<code className="-tokenMethod">toString</code>(), <code className="-tokenString">"arq_nonExistent.txt"</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(filePath)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">filePath = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createFile</code>(filePath);</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Renomeando um arquivo criado anteriormente:</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> source = filePath; <span className="-tokenComment">// Origem</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> target = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(filePath.<code className="-tokenMethod">getParent</code>().<code className="-tokenMethod">toString</code>(), <code className="-tokenString">"arq_renamed.txt"</code>); <span className="-tokenComment">// Destino</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">copy</code>(source, target, <code className="-tokenClassEntity">StandardCopyOption</code>.<code className="-tokenKeyConstant">REPLACE_EXISTING</code>); <span className="-tokenComment">// Último argumento faz Override se já existir</span></code><br/>

                                                    <br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                    <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Operações de objPath.normalize() dos paths</code>: Método que substitui os caracteres curingas de um <code className="token_reservada">Path</code> relacionadas as variáveis de ambientes e convenções gerais sobre, deixando o path "limpo" completo, sem esses caracteres, esse processo é importante para manter compatibilidade com diferentes tipos de Sistemas Operacionais ou Sistemas de arquivos. (Exemplo: Criamos um path <code className="outputResult">"/home/welbert/Documentos/../../arq.txt"</code> ao normalizar ele ficará assim: <code className="outputResult">"/home/arq.txt"</code>), mais informações sobre <code className="token_reservada">Normalização de Paths</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula146NormalizacaoDePaths.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando como narmalizar Paths, retirando assim caracteres curingas redundantes do caminho, deixando ele Absoluto, limpo e compatível para diferentes Sistemas Operacionais: </p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">String</code> projectDirectory = <code className="-tokenString">"/home/welbert/documents"</code>;<br/>
                                                    <code className="-tokenClassEntity">String</code> txtArchive = <code className="-tokenString">"../../arquivo.txt"</code>;<br/>

                                                    <br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_nonNormalized = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(projectDirectory, txtArchive);<br/>
                                                    <pre className="pre-implementFullBlock"><span className="-tokenComment">//                    NÃO está resolvendo</span></pre><br/>
                                                    <pre className="pre-implementFullBlock"><span className="-tokenComment">//                           <span className={window.screen.width <= 425 ? "--fontSize1rem" : "--fontSize1Dot5rem"}>⇣⇣</span></span></pre><br/>
                                                    <pre className="pre-implementFullBlock"><span className="-tokenComment">// "/home/welbert/documents/../../arquivo.txt"</span></pre><br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_normalized = path_nonNormalized.<code className="-tokenMethod">normalize</code>();<br/>
                                                    <span className="-tokenComment">// "/home/arquivo.txt" &#60;- Resolveu</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Operações de objPath_absolute.resolve(objPath_relative) dos paths</code>: Ele toma um <code className="token_reservada">caminho relativo</code> como entrada e o combina com o <code className="token_reservada">caminho atual</code> para produzir um <code className="outputResult">caminho absoluto</code>. Obs: Ele só resolve apartir de um absoluto para o relativo nunca ao contrário. (Exemplo: Caminho atual (<code className="outputResult">"/var/log"</code>) combinado com o Caminho relativo (<code className="outputResult">"messages"</code>) temos que o caminho absoluto será (<code className="outputResult">"/var/log/messages"</code>)), mais informações sobre <code className="token_reservada">Resolvendo Paths</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula147ResolvendoPaths_concatenando.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando como resolver e combinar Paths, Obs: Se o caminho já estiver correto ele desconsidera e retorna sem mudanças e sem erros.</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
    
                                                    <span className="-tokenComment"># Resolvendo de todas as maneiras possíveis (Inclusive maneiras INVÁLIDAS):</span><br/>
                                                    <br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_absolute = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert"</code>);<br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_relative = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"documents"</code>);<br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_file = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"arq.txt"</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Absoluto resolve relativo: (Correto)</span><br/>
                                                    path_absolute.<code className="-tokenMethod">resolve</code>(path_relative);<br/>
                                                    <span className="-tokenComment">// "/home/welbert/documents"</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Absoluto resolve file: (Correto)</span><br/>
                                                    path_absolute.<code className="-tokenMethod">resolve</code>(path_file);<br/>
                                                    <span className="-tokenComment">// "/home/welbert/arq.txt"</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Relativo resolve absoluto: (INCORRETO)</span><br/>
                                                    path_relative.<code className="-tokenMethod">resolve</code>(path_absolute);<br/>
                                                    <span className="-tokenComment">// "/home/welbert" (Fica exatamente como está definido o absoluto, erro de lógica)</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Relativo resolve file: (Correto se o arquivo está no dir relativo)</span><br/>
                                                    path_relative.<code className="-tokenMethod">resolve</code>(path_file);<br/>
                                                    <span className="-tokenComment">// "documents/arq.txt"</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># File resolve absoluto: (INCORRETO)</span><br/>
                                                    path_file.<code className="-tokenMethod">resolve</code>(path_absolute);<br/>
                                                    <span className="-tokenComment">// "/home/welbert" (Fica exatamente como está definido o absoluto, erro de lógica)</span><br/>

                                                    <br/>                                                        
                                                    <span className="-tokenComment"># File resolve relativo: (INCORRETO)</span><br/>
                                                    path_file.<code className="-tokenMethod">resolve</code>(path_relative));<br/>
                                                    <span className="-tokenComment">// "arq.txt/documents" (Erro de lógica)</span><br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">Operações de objPath_source.relativize(objPath_target) dos paths</code>: Usado para calcular o caminho relativo entre dois caminhos. Ele leva dois caminhos como entrada e retorna um caminho relativo que represente a diferença entre eles. Por exemplo, suponha que temos os seguintes caminhos: objPath_source sendo <code className="outputResult">"/home/user/documents"</code> e objPath_target sendo <code className="outputResult">"/home/user/pictures"</code>, se relativisarmos apartir do source para o target o resultado seria o path <code className="outputResult">"../pictures"</code>. Esse caminho relativo pode ser usado para navegar do diretório "documents" para o diretório "pictures". Ou seja, é útil quando precisamos determinar como navegar de um diretório para outro. Obs: Essa operação só pode ser aplicada em dois <code className="token_reservada">caminhos ABSOLUTOS</code>, ou seja, o source e target devem ser caminhos completos pois só assim é possível ter parâmetros para realizar esse cálculo, mais informações sobre <code className="token_reservada">Relativizar Paths</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula148RelativisandoPaths.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando como relativizar e determinar como navegar de um path source para outro path target, retornando um path RELATIVO que representa essa diferença entre eles. (APENAS SE APLICA EM AMBOS CAMINHOS ABSOLUTOS):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">

                                                    <span className="-tokenComment">## Reforçando: Essa operação só pode ser aplicada em ambos caminhos ABSOLUTOS!</span><br/>
                                                    <br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_source = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert"</code>);<br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> path_target = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/pedro/documents"</code>);<br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Navegando de `/home/welbert` para `/home/pedro/documents`</span><br/>
                                                    path_source.<code className="-tokenMethod">relativize</code>(path_target);<br/>
                                                    <span className="-tokenComment">// "../pedro/documents"</span><br/>
                                                    
                                                    <br/>
                                                    <span className="-tokenComment"># Navegando de `/home/pedro/documents` para `/home/welbert`</span><br/>
                                                    path_target.<code className="-tokenMethod">relativize</code>(path_source);<br/>
                                                    <span className="-tokenComment">// "../../welbert"</span><br/>        
                                                </code>
                                            </ul>
                                        </li>
                                            <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">BasicFileAttributes</code> e <code className="token_reservada">BasicFileAttributesView</code>: A Interface <code className="token_reservada">BasicFileAttributes</code> é a mais genérica para representação dos atributos básicos de um Arquivo ou Diretório em um Sistema de Arquivos utilizada <code className="token_reservada">APENAS para OBTER informações</code> (NÃO podemos utilizar as classes que implementam ela para MODIFICAR, para isto temos as equivalentes com final "View", ou seja, para realizar modificações utiliza-se a equivalente <code className="token_reservada">BasicFileAttributesView</code>), informações essas relacionadas aos meta dados dos Arquivos ou Diretórios, como <code className="outputResult">tamanho do arquivo em bytes</code>, <code className="outputResult">data de criação</code>, <code className="outputResult">data de última modificação</code>, <code className="outputResult">data de último acesso</code>, <code className="outputResult">é arquivo?</code>, <code className="outputResult">é diretório?</code>, <code className="outputResult">é link simbolico?</code> , <code className="outputResult">é outro?</code> (quando não é nenhum dos anteriores), <code className="outputResult">é somente leitura?</code>, <code className="outputResult">é oculto?</code>, <code className="outputResult">é arquivado?</code>. OBS: Para obter informações relacionaads as permissões dos usuários ou grupos utiliza-se as interfaces que extends desta, para ambientes like Posix (Linux e etc) utilizamos a <code className="token_reservada">PosixFileAttributes</code> e para ambientes like DOS (Windows e etc) utilizamos a <code className="token_reservada">DosFileAttributes</code>. OBS: Para informações sobre o <code className="outputResult">tipo MIME</code> do arquivo em manipulação utilizamos a facade <code className="token_reservada">Files.probeContentType()</code> (Quando não é possível obter essa informação pelo nome e extensão do arquivo), mais informações sobre <code className="token_reservada">BasicFileAttributes</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula149BasicFileAttributes.java" target="_blank">Clique AQUI!</a>, mais informações sobre <code className="token_reservada">BasicFileAttributesView</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula150BasicFileAttributes_OrientadoInterface.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">SEM UTILIZAR BasicFileAttributes, MODIFICANDO informações com o pacote legado: Exemplo de Implementação demonstrando a maneira <code className="token_reservada">LEGADA</code> de se trabalhar com os atributos básicos dos Arquivos, no qual é possível moficiar a data de modificação setando ela para antes de criar o arquivo, rolando assim inconsistências (Como pode a data de modificação ser antes mesmo de o arquivo existir?) pois não rola verificações entes de modificar, lógico que esse cenário é exagerado pois o próprio desenvolvedor está setando isso, mas ainda sim é inconsistente. OBS: PROBLEMA AINDA OCORRENDO NO NOVO PACOTE TAMBÉM!</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/welbert/arq.txt"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(!file.<code className="-tokenMethod">exists</code>()) &#123;<br/>                                                            
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Hoje menos 10 dias</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDateTime</code> dateTimeNow_minus10Days = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">minusDays</code>(<code className="-tokenKeyConstant">10</code>);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">boolean</code> isCreatedFile = file.<code className="-tokenMethod">createNewFile</code>();</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Modifica a data de modificação com a data Inconsistente em relação a data de criação</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">boolean</code> isModifiedFile = file.<code className="-tokenMethod">setLastModified</code>(dateTimeNow_minus10Days</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">.<code className="-tokenMethod">toInstant</code>(<code className="-tokenClassEntity">ZoneOffset</code>.<code className="-tokenKeyConstant">UTC</code>).<code className="-tokenMethod">toEpochMilli</code>());</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// Não rola Exceptions! Ou seja, é possível setar datas inconsistentes pois não rola verificações</span></code><br/>   
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## OBS: A DATA deve ser na zona ZuluTime UTC, porisso utilizamos `.toInstant(ZoneOffset.UTC)`, isso esta relacionado ao Polimorfismo de datas para Internacionalização (Mais informações sobre ZuluTime na seção "Manipulação de Data e Hora" novo pacote java.time no ponto sobre "zone")</span></code><br/> 

                                                    &#125;<br/>                                                                       
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">SEM UTILIZAR BasicFileAttributes, MODIFICANDO informações com o novo pacote: Exemplo de Implementação demonstrando a maneira <code className="token_reservada">NOVA</code> de se trabalhar com os atributos básicos dos Arquivos, no qual TAMBÉM é possível moficiar a data de modificação setando ela para antes de criar o arquivo, rolando assim inconsistências (Como pode a data de modificação ser antes mesmo de o arquivo existir?) pois não rola verificações entes de modificar, lógico que esse cenário é exagerado pois o próprio desenvolvedor está setando isso, mas ainda sim é inconsistente. OBS: PROBLEMA TAMBÉM OCORRE NO PACOTE LEGADO!</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenInterfaceEntity">Path</code> aqrv_path = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/arq_path.txt"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(aqrv_path)) &#123;<br/>                                                        
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createFile</code>(aqrv_path);</code><br/>
                                                    &#125;<br/>                                            

                                                    <br/>
                                                    <span className="-tokenComment"># Hoje menos 10 dias</span><br/>
                                                    <code className="-tokenClassEntity">LocalDateTime</code> dateTimeNow_minus10Days = <code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>().<code className="-tokenMethod">minusDays</code>(<code className="-tokenKeyConstant">10</code>);<br/>
                                                    <br/>
                                                    <span className="-tokenComment">## OBS: SEM utilizar BasicFileAttributesView também é possível modificar, que é este caso:</span><br/>
                                                    <code className="-tokenClassEntity">FileTime</code> fileTime = <code className="-tokenClassEntity">FileTime</code>.<code className="-tokenMethod">from</code>(dateTimeNow_minus10Days.<code className="-tokenMethod">toInstant</code>(<code className="-tokenClassEntity">ZoneOffset</code>.<code className="-tokenKeyConstant">UTC</code>));<br/>
                                                    <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">setLastModifiedTime</code>(aqrv_path, fileTime);<br/>
                                                    <span className="-tokenComment">// Não rola Exceptions! Ou seja, é possível setar datas inconsistentes pois não rola verificações</span><br/>    

                                                    <br/>
                                                    <code className="-nestedInnerCode"><span className="-tokenComment">## OBS: A DATA deve ser na zona ZuluTime UTC, porisso utilizamos `.toInstant(ZoneOffset.UTC)`, isso esta relacionado ao Polimorfismo de datas para Internacionalização (Mais informações sobre ZuluTime na seção "Manipulação de Data e Hora" novo pacote java.time no ponto sobre "zone")</span></code><br/>
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">UTILIZANDO BasicFileAttributes para OBTER informações com o pacote novo: Exemplo de Implementação demonstrando a programação orientada a interface para execuções indenpendentemente do Sistema Operacional em execução (NÃO vai ter problemas, pois o objeto invocado é genérico e possuí apenas informações comuns entre os diferentes Sistemas Operacionais e Sistemas de Arquivos):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenInterfaceEntity">Path</code> path_file = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/arq.txt"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">exists</code>(path_file)) &#123;<br/>                                                            
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Obtém a instância delegando a responsabilidade da criação correta para a JVM calcular o S.O em execução.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">BasicFileAttributes</code> attributes = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">readAttributes</code>(path_file, <code className="-tokenInterfaceEntity">BasicFileAttributes</code>.<code className="-tokenKeyword">class</code>);</code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">FileTime</code> creationTime = attributes.<code className="-tokenMethod">creationTime</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-12-01T16:06:57.120342248Z</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">FileTime</code> lastModifiedTime = attributes.<code className="-tokenMethod">lastModifiedTime</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-11-21T16:06:57.120342248Z &#60;- Inconsistente, modificado no exemplo acima</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">FileTime</code> lastAccessTime = attributes.<code className="-tokenMethod">lastAccessTime</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-12-01T16:06:57.120342248Z</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## OBS: A DATA esta na zona ZuluTime UTC, porisso o `Z` no final, isso esta relacionado ao Polimorfismo de datas para Internacionalização (Mais informações sobre ZuluTime na seção "Manipulação de Data e Hora" novo pacote java.time no ponto sobre "zone")</span></code><br/>

                                                    &#125;<br/>                                                               
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">UTILIZANDO BasicFileAttributesView para MODIFICAR informações com o pacote novo: Exemplo de Implementação demonstrando a programação orientada a interface para execuções indenpendentemente do Sistema Operacional em execução (NÃO vai ter problemas, pois o objeto invocado é genérico e possuí apenas informações comuns entre os diferentes Sistemas Operacionais e Sistemas de Arquivos):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenInterfaceEntity">Path</code> path_file = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/arq.txt"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">exists</code>(path_file)) &#123;<br/>                                                            
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Obtém a instância delegando a responsabilidade da criação correta para a JVM calcular o S.O em execução.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">BasicFileAttributesView</code> attributesView = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">getFileAttributeView</code>(path_file, <code className="-tokenInterfaceEntity">BasicFileAttributeView</code>.<code className="-tokenKeyword">class</code>);</code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">FileTime</code> creationTime = attributesView.<code className="-tokenMethod">readAttributes</code>().<code className="-tokenMethod">creationTime</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-12-01T16:06:57.120342248Z</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">FileTime</code> lastModifiedTime = attributesView.<code className="-tokenMethod">readAttributes</code>().<code className="-tokenMethod">lastModifiedTime</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-11-21T16:06:57.120342248Z &#60;- Continua inconsistente</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## Alvo que TAMBÉM será modificado inconsistentemente (TAMBÉM VAI FUNCIONAR!!)</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">FileTime</code> lastAccessTime = <code className="-tokenClassEntity">FileTime</code>.<code className="-tokenMethod">from</code>(<code className="-tokenClassEntity">LocalDateTime</code>.<code className="-tokenMethod">now</code>()</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">.<code className="-tokenMethod">minusDays</code>(<code className="-tokenKeyConstant">10</code>).<code className="-tokenMethod">toInstant</code>(<code className="-tokenClassEntity">ZoneOffset</code>.<code className="-tokenKeyConstant">UTC</code>));</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-11-21T16:06:57.120342248Z &#60;- Agora inconsistente TAMBÉM</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Finalmente setta as informações inconsistentes</span></code><br/>
                                                        <code className="-nestedInnerCode">attributesView.<code className="-tokenMethod">setTimes</code>(lastModifiedTime, lastAccessTime, creationTime);</code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## OBS: A DATA deve ser na zona ZuluTime UTC (porisso utilizamos `.toInstant(ZoneOffset.UTC)`), esse é o significado do `Z` no final das Datas, isso esta relacionado ao Polimorfismo de datas para Internacionalização (Mais informações sobre ZuluTime na seção "Manipulação de Data e Hora" novo pacote java.time no ponto sobre "zone")</span></code><br/>
                                                    &#125;<br/>                                                               
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">DosFileAttributes</code> e <code className="token_reservada">DosFileAttributesView</code>, <code className="token_reservada">PosixFileAttributes</code> e <code className="token_reservada">PosixFileAttributesView</code>: As Interfaces <code className="token_reservada">DosFileAttributes</code> e <code className="token_reservada">PosixFileAttributes</code> são Interfaces que extends da anterior (<code className="token_reservada">BasicFileAttributes</code>), porém são Especializadas para ambientes DOS (Windows e etc) e a outra para ambientes Posix (GNU/Linux e etc), e são Interfaces também utilizadas para representação dos atributos de um Arquivo ou Diretório em um Sistema de Arquivos usada <code className="token_reservada">APENAS para OBTER informações</code> (NÃO podemos utilizar as classes que implementam elas para MODIFICAR, para isto temos as equivalentes com final "View", ou seja, para realizar modificações utiliza-se a equivalente <code className="token_reservada">DosFileAttributesView</code>) ou <code className="token_reservada">PosixFileAttributesView</code>), informações essas relacionadas aos meta dados dos Arquivos ou Diretórios, como <code className="outputResult">tamanho do arquivo em bytes</code>, <code className="outputResult">data de criação</code>, <code className="outputResult">data de última modificação</code>, <code className="outputResult">data de último acesso</code>, <code className="outputResult">é arquivo?</code>, <code className="outputResult">é diretório?</code>, <code className="outputResult">é link simbolico?</code> , <code className="outputResult">é outro?</code> (quando não é nenhum dos anteriores), <code className="outputResult">é somente leitura?</code>, <code className="outputResult">é oculto?</code>, <code className="outputResult">é arquivado?</code>. OBS: Ou seja mesmas operações anteriores porém agora também podemos realizar operações especificas do ambiente DOS como por exemplo obter informações relacionaads as permissões dos usuários. OBS: Para informações sobre o <code className="outputResult">tipo MIME</code> do arquivo em manipulação utilizamos a facade <code className="token_reservada">Files.probeContentType()</code> (Quando não é possível obter essa informação pelo nome e extensão do arquivo), mais informações sobre <code className="token_reservada">DosFileAttributes</code> e <code className="token_reservada">DosFileAttributesView</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula151DosFileAttributes.java" target="_blank">Clique AQUI!</a>, mais informações sobre <code className="token_reservada">PosixFileAttributes</code> e <code className="token_reservada">PosixFileAttributesView</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula152PosixFileAttributes.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">UTILIZANDO DosFileAttributesView (Para ambientes Windows) para MODIFICAR informações com o pacote novo: Exemplo de Implementação demonstrando as modificações relacionadas as permissões de usuários:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenInterfaceEntity">Path</code> path_file = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/arq.txt"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">exists</code>(path_file)) &#123;<br/>                                                            
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Obtém qual é o Sistema Operacional em execução runtime:</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">final</code> <code className="-tokenClassEntity">String</code> os = <code className="-tokenClassEntity">System</code>.<code className="-tokenMethod">getProperty</code>(<code className="-tokenString">"os.name"</code>);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## Se for ambiente DOS (Windows e etc):</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (os.<code className="-tokenMethod">contains</code>(<code className="-tokenString">"Windows"</code>)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment"># Obtem o principal de usuário para o usuário corrente</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenInterfaceEntity">UserPrincipal</code> user = path_file.<code className="-tokenMethod">getFileSystem</code>()</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">getUserPrincipalLookupService</code>()</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">lookupPrincipalByName</code>({window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">System</code>.<code className="-tokenMethod">getProperty</code>(<code className="-tokenString">"user.name"</code>));</code><br/>                                                                    

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment"># Define permissões de leitura e escrita para o usuário corrente</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenInterfaceEntity">AclFileAttributeView</code> aclView = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">getFileAttributeView</code>(path_file, <code className="-tokenInterfaceEntity">AclFileAttributeView</code>.<code className="-tokenKeyword">class</code>);</code><br/>

                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenInterfaceEntity">List</code>&#60;<code className="-tokenClassEntity">AclEntry</code>&#62; aclEntries = aclView.<code className="-tokenMethod">getAcl</code>();</code><br/>
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">AclEntry</code> entry = <code className="-tokenClassEntity">AclEntry</code>.<code className="-tokenMethod">newBuilder</code>()</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">setType</code>(<code className="-tokenClassEntity">AclEntryType</code>.<code className="-tokenKeyConstant">ALLOW</code>)</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">setPrincipal</code>(user)</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">setPermissions</code>(<code className="-tokenClassEntity">AclEntryPermission</code>.<code className="-tokenKeyConstant">READ_DATA</code>, <code className="-tokenClassEntity">AclEntryPermission</code>.<code className="-tokenKeyConstant">WRITE_DATA</code>)</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">build</code>();</code><br/>
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation">aclEntries.<code className="-tokenMethod">add</code>(entry);</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">aclView.<code className="-tokenMethod">setAcl</code>(aclEntries);</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## Se for ambiente Posix (Gnu/Linux e etc):</span></code><br/>
                                                        
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">else</code> &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment"># Exemplo abaixo deste!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation">...</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>                                                               
                                                </code>
                                            </ul>

                                            <p className="main-title--implementFullBlock">PosixFileAttributesView (Para ambientes GNU/Linux) para MODIFICAR informações com o pacote novo: Exemplo de Implementação demonstrando as modificações relacionadas as permissões de usuários e grupos (Mesmo exemplo anterior, porém para ambientes Unix-Like):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenInterfaceEntity">Path</code> path_file = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/arq.txt"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">exists</code>(path_file)) &#123;<br/>                                                            
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Obtém qual é o Sistema Operacional em execução runtime:</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">final</code> <code className="-tokenClassEntity">String</code> os = <code className="-tokenClassEntity">System</code>.<code className="-tokenMethod">getProperty</code>(<code className="-tokenString">"os.name"</code>);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## Se for ambiente Unix (Linux):</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (os.<code className="-tokenMethod">contains</code>(<code className="-tokenString">"Linux"</code>)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment"># Define permissões como rwxrw-rw- </span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenInterfaceEntity">Set</code>&#60;<code className="-tokenClassEntity">PosixFilePermission</code>&#62; permissions = <code className="-tokenClassEntity">PosixFilePermissions</code>.<code className="-tokenMethod">fromString</code>(<code className="-tokenString">"rwxrw-rw-"</code>);</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">setAttribute</code>(file_path, <code className="-tokenString">"posix:permissions"</code>, permissions);</code><br/>
                                                            
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment"># Verifica se as permissões foram aplicadas corretamente</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation">newPermissions =</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">(<code className="-tokenInterfaceEntity">Set</code>&#60;<code className="-tokenClassEntity">PosixFilePermission</code>&#62;) <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">getAttribute</code>(file_path, <code className="-tokenString">"posix:permissions"</code>);</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>({window.screen.width <= 425 ? <br/> : ""}<code className="-tokenClassEntity">PosixFilePermissions</code>.<code className="-tokenMethod">toString</code>(newPermissions));</code><br/>
                                                        <code className="-nestedInnerCode">&#123;</code><br/>
                                                    &#125;<br/>                                                               
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">DirectoryStream</code>: Navegando e Iterando sobre diretórios de maneira <code className="token_reservada">NÃO Recursiva</code> (Para navegar de maneira recursiva e executar lógicas durante essa navegação utiliza-se a próxima classe pontuada abaixo desta <code className="token_reservada">SimpleFileVisitor</code> (Com ela além de navegar de maneira recursiva na árvore hierárquia de diretórios, também é possível executar blocos de lógica <code className="outputResult">Antes</code>, <code className="outputResult">Durante</code>, <code className="outputResult">Se ocorrer algum erro</code>, e <code className="outputResult">Depois</code> de visitar um diretório, bastanto sobrescrever o método correspondente dessas ações, mais detalhes na pontuação abaixo)), ou seja com essa Interface <code className="token_reservada">DirectoryStream</code>, só é possível iterar em primeiro nível da árvore hierárquica de diretórios (Código implementado e executado em ambiente GNU/Linux Ubuntu, não sei se é válido também para DOS). Obs: O Retorno é <code className="token_reservada">Path</code>, mais informações sobre <code className="token_reservada">DirectoryStream</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/G_nio/Aula153DirectoryStream_interacaoLvl1emDirs.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação navegando e iterando lvl 1 da árvore hierárquica de diretórios e pegando arquivos com extensão <code className="outputResult">`.java`</code> no nome do arquivo (Obs: O Retorno é Path):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenInterfaceEntity">Path</code> path_file = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"src/main/java/G_nio"</code>);<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">exists</code>(path_file)) &#123;<br/>                                                            
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Obtém qual é o Sistema Operacional em execução runtime:</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">final</code> <code className="-tokenClassEntity">String</code> os = <code className="-tokenClassEntity">System</code>.<code className="-tokenMethod">getProperty</code>(<code className="-tokenString">"os.name"</code>);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">## Se for ambiente Unix (Linux):</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (os.<code className="-tokenMethod">contains</code>(<code className="-tokenString">"Linux"</code>)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">try</code> (<code className="-tokenInterfaceEntity">DirectoryStream</code>&#60;<code className="-tokenInterfaceEntity">Path</code>&#62; directoryStream = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">newDirectoryStream</code>(file_path, <code className="-tokenString">"*.java"</code>)) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">for</code> (<code className="-tokenInterfaceEntity">Path</code> path : directoryStream) &#123;</code><br/>
                                                                    <code className="-nestedInnerCode --4Identation"><span className="-tokenComment"># Faz alguma coisa com os Paths que correspondem a arquivos `.java`</span></code><br/>
                                                                    <code className="-nestedInnerCode --4Identation">...</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">&#125;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>                                                               
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">SimpleFileVisitor</code>: Classe equivalente da anterior <code className="token_reservada">DirectoryStream</code>, porém mais poderosa podendo além de navegar e iterar de <code className="token_reservada">maneira recursiva</code> abaixo da árvore hierárquica de diretórios, também é possível executar blocos de lógica <code className="outputResult">Antes</code> (Sobrescrevendo o <code className="token_reservada">preVisitDirectory()</code>), <code className="outputResult">Durante</code> (Sobrescrevendo o <code className="token_reservada">visitFile()</code>), <code className="outputResult">Se ocorrer algum erro durante algum dos passos anteriores</code> (Sobrescrevendo o <code className="token_reservada">visitFileFailed()</code>), e <code className="outputResult">Depois</code> (Sobrescrevendo o <code className="token_reservada">postVisitDirectory()</code>) de visitar o diretório, bastando sobrescrever APENAS o método correspondente desejado.</p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação navegando e iterando lvl ALL (Recursivamente) da árvore hierárquica de diretórios e pegando arquivos com extensão <code className="outputResult">`.java`</code> no nome do arquivo e tomando decisões durante as visitas nos diretórios (Obs: O Retorno é Path):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenKeyword">class</code> <code className="-tokenClassEntity">ListAllFiles_endsWithDotJava</code> <code className="-tokenKeyword">extends</code> <code className="-tokenClassEntity">SimpleFileVisitor</code>&#60;<code className="-tokenInterfaceEntity">Path</code>&#62; &#123;<br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Executado antes de abrir e apontar o cursor para o novo diretório.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenAnnotationsEntity">@Override</code></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenClassEntity">FileVisitResult</code> preVisitDirectory(<code className="-tokenInterfaceEntity">Path</code> dir, <code className="-tokenInterfaceEntity">BasicFileAttributes</code> attrs) <code className="-tokenKeyword">throws</code> <code className="-tokenClassEntity">IOException</code> &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"preVisit: "</code>+dir.<code className="-tokenMethod">getFileName</code>());</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">...</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> <code className="-tokenClassEntity">FileVisitResult</code>.<code className="-tokenKeyConstant">CONTINUE</code>;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Executado após abrir e apontar o cursor para o diretório corrente.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenAnnotationsEntity">@Override</code></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenClassEntity">FileVisitResult</code> visitFile(<code className="-tokenInterfaceEntity">Path</code> file, <code className="-tokenInterfaceEntity">BasicFileAttributes</code> attrs) <code className="-tokenKeyword">throws</code> <code className="-tokenClassEntity">IOException</code> &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"visitFile: "</code>+file.<code className="-tokenMethod">getFileName</code>());</code><br/>
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">if</code> (file.<code className="-tokenMethod">toString</code>().<code className="-tokenMethod">endsWith</code>(<code className="-tokenString">".java"</code>)) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">...</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>
                                                            
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> <code className="-tokenClassEntity">FileVisitResult</code>.<code className="-tokenKeyConstant">CONTINUE</code>;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Executado em casos de errors em algum dos passos anteriores.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenAnnotationsEntity">@Override</code></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenClassEntity">FileVisitResult</code> visitFileFailed(<code className="-tokenInterfaceEntity">Path</code> file, <code className="-tokenClassEntity">IOException</code> exc) <code className="-tokenKeyword">throws</code> <code className="-tokenClassEntity">IOException</code> &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"visitFileFailed: "</code>+file.<code className="-tokenMethod">getFileName</code>());</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">...</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> <code className="-tokenClassEntity">FileVisitResult</code>.<code className="-tokenKeyConstant">CONTINUE</code>;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Executado após abrir e apontar o cursor para o diretório corrente retornando.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenAnnotationsEntity">@Override</code></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenClassEntity">FileVisitResult</code> postVisitDirectory(<code className="-tokenInterfaceEntity">Path</code> dir, <code className="-tokenClassEntity">IOException</code> exc) <code className="-tokenKeyword">throws</code> <code className="-tokenClassEntity">IOException</code> &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"postVisitDirectory: "</code>+dir.<code className="-tokenMethod">getFileName</code>());</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">...</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> <code className="-tokenClassEntity">FileVisitResult</code>.<code className="-tokenKeyConstant">CONTINUE</code>;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                    &#125;<br/>                                                 
                                                </code>
                                            </ul>
                                            <p className="main-title--implementFullBlock"><code className="token_reservada">FileVisitResult.CONTINUE;</code> Define que ira continuar a interação, ou seja próximo Path.</p>
                                            <p className="main-title--implementFullBlock"><code className="token_reservada">FileVisitResult.TERMINATE;</code> Define que encontrou o Path desejado e Finaliza.</p>
                                            <p className="main-title--implementFullBlock"><code className="token_reservada">FileVisitResult.SKIP_SUBTREE;</code> Define que é para sair da subpasta corrente.</p>
                                            <p className="main-title--implementFullBlock"><code className="token_reservada">FileVisitResult.SKIP_SIBLINGS;</code> Continua interação pulando quem está no mesmo nível da arvore.</p>

                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenKeyword">public static</code> <code className="-tokenClassEntity">void</code> <code className="-tokenMethod">main</code>(<code className="-tokenClassEntity">String</code>[] args) &#123;<br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> path_root = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString"></code>".");</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">exists</code>(path_root)) &#123;</code><br/>                                                            
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">try</code> &#123;</code><br/>
                                                                <br/>
                                                                <code className="-nestedInnerCode --3Identation"><span className="-tokenComment"># Executa a navegação:</span></code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">walkFileTree</code>(path_root, <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ListAllFiles_endsWithDotJava</code>());</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">...</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>  

                                                    &#125;<br/>                                                 
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">PathMatcher</code>: Com ela é possível utilizar expressões regulares para definir quais paths iremos querer filtrar (Isso ajuda a evitar vários if's com <code className="token_reservada">.endsWith()</code> quando desejamos encontrar diversos padrões diferentes na mesma passada da iteração (navegação) pelos paths. Utilizamos expressões globs que são bem parecidas com regex porém mais simplificado, mas também é possível utilizar <code className="token_reservada">regex</code> quando o padrão é mais complexo. Devido ao polimorfismo de S.O's aonde cada um possuem seus próprios e diferentes Sistemas de Arquivos, para obter uma instância dele é necessário utilizar o método estático <code className="token_reservada">FileSystems.getDefault().getPathMatcher(sintaxeGlob);</code></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação navegando e iterando lvl All recursivo na árvore hierárquica de diretórios e pegando arquivos que começam com <code className="outputResult">"Aula"</code> e tenham a extensão <code className="outputResult">`.java`</code> ou <code className="outputResult">`.class`</code> no nome do arquivo (Obs: O Retorno é Path):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">                   
                                                    <code className="-tokenKeyword">public static boolean</code> isMatcherInPathsWithGlob(<code className="-tokenInterfaceEntity">Path</code> path, <code className="-tokenClassEntity">String</code> globExpression) &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">PathMatcher</code> pathMatcher = <code className="-tokenClassEntity">FileSystems</code>.<code className="-tokenMethod">getDefault</code>().<code className="-tokenMethod">getPathMatcher</code>(globExpression);</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">return</code> pathMatcher.<code className="-tokenMethod">matches</code>(path);</code><br/>
                                                    &#125;<br/>                                
                                                </code>
                                            </ul>

                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">              
                                                    <code className="-tokenKeyword">class</code> <code className="-tokenClassEntity">ListAllFiles_whenMatchesInGlobExpression</code> <code className="-tokenKeyword">extends</code> <code className="-tokenClassEntity">SimpleFileVisitor</code>&#60;<code className="-tokenInterfaceEntity">Path</code>&#62;&#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">private final</code> <code className="-tokenInterfaceEntity">Path</code> outputPath;</code><span className="-tokenComment">// Arq .txt que será append o nome dos arquivos que fez match na expressão.</span><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">private final</code> <code className="-tokenClassEntity">String</code> globExpression;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenMethod">ListAllFiles_whenMatchesInGlobExpression</code>(<code className="-tokenInterfaceEntity">Path</code> saveOutputPath, <code className="-tokenClassEntity">String</code> globExpression) &#123;</code><br/>

                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">super</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">this</code>.outputPath = saveOutputPath;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">this</code>.globExpression = globExpression;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Executado após abrir e apontar o cursor para o diretório corrente.</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenAnnotationsEntity">@Override</code></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">public</code> <code className="-tokenClassEntity">FileVisitResult</code> visitFile(<code className="-tokenInterfaceEntity">Path</code> file, <code className="-tokenInterfaceEntity">BasicFileAttributes</code> attrs) <code className="-tokenKeyword">throws</code> <code className="-tokenClassEntity">IOException</code> &#123;</code><br/>
                                                            
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">if</code> (<code className="-tokenMethod">isMatcherInPathsWithGlob</code>(file, globExpression)) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">...</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(<code className="-tokenString">"path que deu match: "</code><br/>
                                                                <code className="-nestedInnerCode --4Identation"></code>+file.<code className="-tokenMethod">getFileName</code>());</code><br/>
                                                                <br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">write</code>(outputPath,</code><br/>
                                                                    <code className="-nestedInnerCode --4Identation">(file.<code className="-tokenMethod">getFileName</code>().<code className="-tokenMethod">toString</code>()+<code className="-tokenString">"\n"</code>).<code className="-tokenMethod">getBytes</code>(),</code><br/>

                                                                    <code className="-nestedInnerCode --4Identation"><code className="-tokenClassEntity">StandardOpenOption</code>.<code className="-tokenKeyConstant">APPEND</code>);</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>
                                                            
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">return</code> <code className="-tokenClassEntity">FileVisitResult</code>.<code className="-tokenKeyConstant">CONTINUE</code>;</code><br/>

                                                        <code className="-nestedInnerCode">&#125;</code><br/> 
                                                    &#125;<br/>                                
                                                </code>
                                            </ul>

                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">                   
                                                    
                                                    <code className="-tokenKeyword">try</code> &#123;<br/>

                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> pathInScan = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"."</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> pathOutputResult = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/outputResult.txt"</code>);</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(pathOutputResult)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createFile</code>(pathOutputResult);</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">String</code> globExpression = <code className="-tokenString">"glob:**/Aula*.&#123;java&#125;"</code>;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">walkFileTree</code>(pathInScan,</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">new</code><code className="-tokenClassEntity"> ListAllFiles_whenMatchesInGlobExpression</code>(</code><br/>
                                                                    <code className="-nestedInnerCode --4Identation">pathOutputResult, globExpression));</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/> 

                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;                       
                                                </code>
                                            </ul>
                                            <p className="main-title--implementFullBlock">BÔNUS: Carregando o arquivo gerado anteriormente em memória e organizando em ASC (Ordem alfabética), após salva em outro arquivo txt:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">                   
                                                    
                                                    <code className="-tokenKeyword">try</code> &#123;<br/>

                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">Path</code> path_dotJavaAndDotClass_inAsc = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/outputResult_inAsc.txt"</code>);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenInterfaceEntity">List</code>&#60;<code className="-tokenClassEntity">String</code>&#62; lines = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">readAllLines</code>(pathOutputResult);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code>[] array = lines.<code className="-tokenMethod">toArray</code>(<code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">String</code>[lines.<code className="-tokenMethod">size</code>()]);</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">Arrays</code>.<code className="-tokenMethod">sort</code>(array);</code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(path_dotJavaAndDotClass_inAsc)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createFile</code>(path_dotJavaAndDotClass_inAsc);</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">write</code>(path_dotJavaAndDotClass_inAsc, <code className="-tokenClassEntity">Arrays</code>.<code className="-tokenMethod">asList</code>(array));</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/> 
                                                    
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;                       
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">ZipOutputStream</code>: Utilizada para zippar arquivos de acordo com os paths desejados, por se tratar de um Stream é uma classe low level que manipula fluxos de dados.</p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação navegando e iterando lvl 1 na árvore de diretórios e zippando os arquivos que acabam com a extensão <code className="outputResult">.java</code>:</p>
                                            
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <span className="-tokenComment"># Define o método que faz a zippagem, abaixo está as regras sobre quais paths (Arquivos) seram zippados, porisso o parâmetro é uma List de paths.</span><br/>
                                                   
                                                    <code className="-tokenKeyword">public static</code> <code className="-tokenClassEntity">void</code> <code className="-tokenMethod">zip</code>(<code className="-tokenInterfaceEntity">Path</code> target_path, <code className="-tokenInterfaceEntity">List</code>&#60;<code className="-tokenInterfaceEntity">Path</code>&#62; archivesPathList) &#123;<br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">try</code> (<code className="-tokenClassEntity">ZipOutputStream</code> zipStream = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ZipOutputStream</code>(<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">newOutputStream</code>(target_path))) &#123;</code><br/>
                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">for</code> (<code className="-tokenInterfaceEntity">Path</code> path : archivesPathList) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenClassEntity">ZipEntry</code> zipEntry = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ZipEntry</code>(path.<code className="-tokenMethod">getFileName</code>().<code className="-tokenMethod">toString</code>());</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">zipStream.<code className="-tokenMethod">putNextEntry</code>(zipEntry); <span className="-tokenComment">// prepara o arquivo, copiando apenas o nome dele</span></code><br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">copy</code>(path, zipStream); <span className="-tokenComment">// copia o conteúdo</span></code><br/>
                                                                <code className="-nestedInnerCode --3Identation">zipStream.<code className="-tokenMethod">closeEntry</code>(); <span className="-tokenComment">// fecha a entrada</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>
                                                        
                                                        <code className="-nestedInnerCode">&#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    &#125;<br/>      
                                                </code>
                                            </ul>
                                            
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <span className="-tokenComment"># Pega a lista de paths (Arquivos) que desejamos zippar de acordo com algum critério, e chama o método de cima que faz a zippagem: </span><br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> target_path_endsWithDotJava = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/targetPath_endsWithDotJava.zip"</code>);<br/>
                                                    <code className="-tokenInterfaceEntity">Path</code> source_dirPath = <code className="-tokenClassEntity">Paths</code>.<code className="-tokenMethod">get</code>(<code className="-tokenString">"/home/welbert/"</code>);<br/>
                                                    
                                                    <br/>
                                                    <code className="-tokenKeyword">try</code> &#123;<br/>

                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">if</code> (<code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">notExists</code>(target_path_endsWithDotJava)) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">createFile</code>(target_path_endsWithDotJava);</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenInterfaceEntity">List</code>&#60;<code className="-tokenInterfaceEntity">Path</code>&#62; archivesPathList = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">ArrayList</code>&#60;&#62;();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenKeyword">try</code> (<code className="-tokenInterfaceEntity">DirectoryStream</code>&#60;<code className="-tokenInterfaceEntity">Path</code>&#62; directoryStream = <code className="-tokenClassEntity">Files</code>.<code className="-tokenMethod">newDirectoryStream</code>(source_dirPath, path -&#62;</code><br/>
                                                                <code className="-nestedInnerCode --4Identation">path.<code className="-tokenMethod">toString</code>().<code className="-tokenMethod">endsWith</code>(<code className="-tokenString">".java"</code>))) &#123;</code><br/>
                                                                <br/>
                                                                <code className="-nestedInnerCode --3Identation"><code className="-tokenKeyword">for</code> (<code className="-tokenInterfaceEntity">Path</code> path : directoryStream) &#123;</code><br/>
                                                                    <code className="-nestedInnerCode --4Identation">archivesPathList.<code className="-tokenMethod">add</code>(path);</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">&#125;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">&#125;</code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/> 

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Finalmente faz a zippagem desses paths que acabam com `.java`</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenMethod">zip</code>(target_path_endsWithDotJava, archivesPathList);</code><br/>           
                                                        <br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
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