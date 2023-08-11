import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoInputOutputAPI from '../../resources/images/IO_package-HD.png';

export default function InputOutputLegacyAPIScreen() {

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

            navbarElement.childNodes[9].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Input e Output API LEGADO&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Manipulações de Arquivos e/ou Diretórios (HD) - Legado e se tornando depreciado.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java/F_io" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>- Pacote legado java.io que é introduzido nas primeiras versões do Java, sempre que possível optar por utilizar o novo pacote java.nio disponível apartir do Jdk 1.4.</span>
                            <span>- Não se limita apenas a leituras de HD's ou SSD's como qualquer outro tipo de operação que envolva transferência de arquivos entre periféricos externos, como por exemplo transferência de arquivos pela Rede (Internet).</span>
                            <span>- Obs: Não transferimos o arquivo em sí, mas sim a serialização dele, ou seja, o arquivo convertido em fluxos de bytes.</span>
                            <span>- Qualquer classe no Java que contenha "Stream" em sua nomenclatura, quer dizer que estamos operando no mais baixo nível, geralmente manipulando fluxos de bytes.</span>
                            <span>- A classe File é a representação do Arquivo ou Diretório (mais especificamente o path dele) em forma de Objeto, ou seja, para qualquer operação que envolva Arquivos ou Diretórios utilizamos ele.</span>
                            <span>- FileWriter: Após carregarmos o Arquivo em sí no Objeto File, podemos utilizar esta classe para escrever nele, porém vale ressaltar que por trabalhar em mais baixo nível direto no HD ela não é otimizada.</span>
                            <span>- BufferedWriter: Equivalente da anterior, porém otimizada pois manipula primeiro em memória RAM e só no final escreve no HD, TAMBÉM é necessário uma instância da anterior para sua criação.</span>
                            <span>- FileReader: Após carregarmos o Arquivo em sí no Objeto File, podemos utilizar esta classe para ler o conteúdo dele, porém vale ressaltar que por trabalhar em mais baixo nível direto no HD ela não é otimizada.</span>
                            <span>- BufferedReader: Equivalente da anterior, porém otimizada pois manipula primeiro em memória RAM e só no final lê o conteúdo do Arquivo no HD, TAMBÉM é necessário uma instância da anterior para sua criação.</span>
                            <span>- O novo pacote java.nio é mais coeso e é trocado a classe File pela Interface Path (Pois na verdade é basicamente isso que o File representa, Interface devido ao Polimorfismo de S.O's, mais especificamente ao Polimorfismo de Sistemas de Arquivos), os métodos de instância de File são transferidos para a classe utilitária Files e agora são métodos estáticos, é adicionado a classe Paths que serve como fabrica de objetos compatíveis com a Interface Path (Programação orientada a Interface, ela realiza calculos sobre qual é o Sistema de Arquivos utilizado pela JVM em execução, para assim oferecer suporte a diferentes Sistemas de Arquivos e automaticamente diferentes Sistemas Operacionais).</span>
                            <span>- Mais informações no próximo módulo "New I/O API - Manipulação de HD", que é o novo pacote para lidar com IO, adicionando maior coesão entre classes e intuitivo, além de coneguir lidar melhor sobre as diferenças entre os Sistemas Operacionais e Sistemas de Arquivos com uso do Polimorfismo, entre outras novas funcionalidades.</span>
                            <p>Repositório Github clicando no botão acima</p>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Fonte interessante, porém página legada e em Inglês: <a className="-linkBoldYellowProjects" href="https://docstore.mik.ua/orelly/java-ent/jnut/ch11_01.htm" target="_blank">Clique AQUI!</a></span>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Fonte ainda mais interessante, repositório Github em Inglês (também possuem infos sobre outros pacotes do Java): <a className="-linkBoldYellowProjects" href="https://github.com/Suryakant-Bharti/Important-Java-Concepts/tree/master/_moreReadMe/input_output" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoInputOutputAPI} alt="Amostra logo InputOutput API" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    <h3 class="projects-subtitle">Contextualizando:</h3>
                                    <ul className="projects-frontend--container">
                                        <li>Neste módulo é estudado a maneira Legada sobre como é tratado as operações de Entrada e Saída, como por exemplo Leituras em memórias secundárias como SSD's ou HD's ou também gravações nos mesmos, ou seja, operações que envolvem criações, modificações ou leituras de Aqruivos e/ou Diretórios em geral.</li>
                                        <li>Devido a esses operações devemos nos atentar sobre os diferentes tipos de Sistemas Operacionais e suas convenções próprias sobre variáveis de ambientes, diferentes tipos de Sistemas de Arquivos e etc entre eles, além dessas convenções também devemos nos atentar sobre as permissões do usuário que está executando a aplicação ao tentar modificar ou acessar arquivos que o usuário não tem permissões apropriadas, esses tratamentos devem ser feitos.</li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">File</code>: Representação de Arquivos e/ou Diretórios em forma de objetos e base para a criação de outras Classes que envolvem leituras ou escritas de Arquivos ou Diretórios, além desta representação também temos diversos métodos utilitários para obter ou modificar informações relacionadas a Arquivos ou Diretórios (Desde que não envolve leituras ou escritas, para essas operações existem outras Classes apropriadas descritas logo nos próximos pontos), porém é uma <code className="token_reservada">Classe legada</code> devendo ser substituída pelo <code className="token_reservada">Path</code> do novo pacote <code className="token_reservada">java.nio</code>, pois é basicamente o caminho path do arquivo que essa Classe representa, logo, o novo pacote trás maior coesão sobre, mais informações sobre <code className="token_reservada">File</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/F_io/Aula138File_introduction_Utils.java" target="_blank">Clique AQUI!</a></p>

                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando a criação e as possibilidades sobre essa classe File que representa Arquivos ou Diretórios em forma de Objetos:</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/welbert/documents/file.txt"</code>); <span className="-tokenComment">// caminho absoluto ou parcial</span><br/>
                                                    <br/>
                                                    <code className="-tokenKeyword">boolean</code> isDeleted;<br/>

                                                    <code className="-tokenKeyword">if</code> (file.<code className="-tokenMethod">exists</code>()) &#123;<br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// isDeleted = file.delete();</span></code><br/>
                                                    &#125;<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">if</code> (file.<code className="-tokenMethod">exists</code>()) &#123;<br/> 
                                                        
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">boolean</code> isFile = file.<code className="-tokenMethod">isFile</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// true</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">boolean</code> isDirectory = file.<code className="-tokenMethod">isDirectory</code>();</code><br/> 
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// false</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">boolean</code> isHidden = file.<code className="-tokenMethod">isHidden</code>();</code><br/> 
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// false</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> absolutePath_str = file.<code className="-tokenMethod">getAbsolutePath</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// "/home/welbert/documents/file.txt"</span></code><br/>
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> path_str = file.<code className="-tokenMethod">getPath</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// "/home/welbert/documents/file.txt"</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> parent_str = file.<code className="-tokenMethod">getParent</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// "/home/welbert/documents"</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">long</code> totalSpace_long = file.<code className="-tokenMethod">getTotalSpace</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 318450962432</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">long</code> freeSpace_long = file.<code className="-tokenMethod">getFreeSpace</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 254839607296</span></code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">LocalDateTime</code> lastModified = <code className="-tokenClassEntity">Instant</code>.<code className="-tokenMethod">ofEpochMilli</code>(file.<code className="-tokenMethod">lastModified</code>())</code><br/>
                                                            <code className="-nestedInnerCode --2Identation">.<code className="-tokenMethod">atZone</code>(<code className="-tokenClassEntity">ZoneId</code>.<code className="-tokenMethod">of</code>(<code className="-tokenString">"America/Sao_Paulo"</code>))</code><br/>
                                                                <code className="-nestedInnerCode --3Identation">.<code className="-tokenMethod">toLocalDateTime</code>();</code><br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment">// 2022-12-04T21:08:13.624</span></code><br/>
                
                                                    &#125;<br/>

                                                    <br/>
                                                    <code className="-tokenKeyword">try</code> &#123;<br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">boolean</code> isCreated = file.<code className="-tokenMethod">createNewFile</code>();</code><br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">FileWriter</code>: Após carregarmos o Arquivo em sí no Objeto <code className="token_reservada">File</code>, podemos utilizar esta classe para escrever nele. Porém é um classe bem LowLevel ou seja, não otimizada pois manipula diretamente no HD diferente de outras (<code className="token_reservada">BufferedWriter</code>) na qual manipula primeiro em memória RAM e depois realiza a escrita, logo conseguimos mais desempenho (+ otimizada), entretanto para sua criação é necessário também uma instância de <code className="token_reservada">File</code> que encapsula o Arquivo no qual vamos realizar essa escrita. Além disto também devemos nos atentar sobre as convenções de caracteres especiais nos diferentes tipos de Sistemas Operacionais, como por exemplo o caractere de quebra-linha que no Linux é <code className="token_reservada">`\n`</code> e o equivalente do Windows é <code className="token_reservada">`\n\r`</code>, mais informações sobre <code className="token_reservada">FileWriter</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/F_io/Aula139FileWriter_LowLevel_Utils.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando a criação, escrita e por fim liberação de recursos (utilizando try-with-resources que o faz automaticamente, isso é possível pois o FileWriter implementa Closeable e AutoCloseable):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/welbert/documents/file.txt"</code>); <span className="-tokenComment">// caminho absoluto ou parcial</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Relembrando try-with-resources: O Java mesmo se encarrega de executar o `.close()` no final do bloco (liberando assim recursos)</span><br/>
                                                    <code className="-tokenKeyword">try</code> (<code className="-tokenClassEntity">FileWriter</code> fw = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">FileWriter</code>(file, <code className="-tokenKeyConstant">true</code>)) &#123;<br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!\n"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!\n"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!\n"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!\n"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!\n"</code>);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">flush</code>(); <span className="-tokenComment">// Libera o buffer pois existe a chance de antes de fechar o arquivo a JVM não mandou todos os bytes do buffer, assim é necessário libera-lo e após liberar fechar corretamente</span></code><br/>

                                                    <br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">FileReader</code>: Segue a mesma lógica sobre a classe <code className="token_reservada">FileWriter</code>, aonde após carregarmos o Arquivo em sí no Objeto <code className="token_reservada">File</code>, podemos utilizar esta classe para ler os dados do arquivo, carregando caractere a caractere neste objeto (<code className="token_reservada">NÃO</code> é possível carregar linha a linha utilizando esta classe, para essa funcionalidade utilizar a equivalente otimizada <code className="token_reservada">BufferedReader</code>). Porém também é um classe bem LowLevel ou seja, não otimizada pois manipula diretamente no HD diferente de outras (<code className="token_reservada">BufferedReader</code>) na qual manipula primeiro em memória RAM e depois realiza a leitura, logo conseguimos mais desempenho (+ otimizada), entretanto para sua criação é necessário também uma instância de <code className="token_reservada">File</code> que encapsula o Arquivo no qual vamos realizar essa leitura caractere a caractere, mais informações sobre <code className="token_reservada">FileReader</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/F_io/Aula140FileReader_LowLevel_Utils.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando a criação, leitura caractere a caractere em looping (Não é possível carregar linha a linha com essa, para isto podemos utilizar a equivalente otimizada BufferedReader) e por fim liberação de recursos (utilizando try-with-resources que o faz automaticamente, isso é possível pois o FileReader também implementa Closeable e AutoCloseable):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/welbert/documents/file.txt"</code>); <span className="-tokenComment">// caminho absoluto ou parcial</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Relembrando try-with-resources: O Java mesmo se encarrega de executar o `.close()` no final do bloco (liberando assim recursos)</span><br/>
                                                    <code className="-tokenKeyword">try</code> (<code className="-tokenClassEntity">FileReader</code> fr = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">FileReader</code>(file)) &#123;<br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># `fr.read()`: Retorna um `int` que representa um caractere na tabela ASC (-1 reprersenta o final)</span></code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Aloca memória em array para armazenar os caracteres lidos do Arquivo</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">char</code>[] in = <code className="-tokenKeyword">new char</code> [(<code className="-tokenKeyword">int</code>)file.<code className="-tokenMethod">length</code>()<code className="-tokenKeyConstant">-1</code>];</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Carrega os dados do buffer no array `in` (Caractere a Caractere)</span></code><br/>
                                                        <code className="-nestedInnerCode">fr.<code className="-tokenMethod">read</code>(in);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Finalmente podemos obter as informações iterando no array</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">for</code> (<code className="-tokenKeyword">char</code> c : in) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">print</code>(c);</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
                                                    <br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">BufferedWriter</code>: Equivalente do <code className="token_reservada">FileWriter</code> porém otimizado utilizando e manipulando primeiro em memória RAM (que possuí maior capacidade de processamento e transferência) e depois escrevendo no HD, porisso o ganho significativo de performance. Porém segue a mesma regra sobre ser necessário uma instância de <code className="token_reservada">File</code> que encapsula o Arquivo ou Diretório e depois passa-lo para a criação de uma instância de <code className="token_reservada">FileWriter</code> e por fim passar essa instância de <code className="token_reservada">FileWriter</code> para a criação do <code className="token_reservada">BufferedWriter</code>. Além disto, essa classe corrige e normaliza algumas convenções sobre os diferentes tipos de caracteres especiais ligados aos diferentes tipos de Sistemas Operacionais, neste contexto sobre o caractere de quebra-linha que no Linux é <code className="token_reservada">`\n`</code> e o equivalente do Windows é <code className="token_reservada">`\n\r`</code>, agora NÃO utilizamos mais essas flags literais inderindo de maneira "Hardcoded" no texto em processo de escrita, para tal utilizamos o método <code className="token_reservada">objBufferedWriter.newLine();</code> que faz esse tratamento por nós, assim delegamos essas responsabilidades para a própria JVM se encarregar de utilizar o caractere correto para essas internacionalizações e normalizações de acordo com o Sistema Operacional que está em execução, mais informações sobre <code className="token_reservada">BufferedWriter</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/F_io/Aula141BufferedWriter_Optimized_Utils.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando a criação, escrita e por fim liberação de recursos (utilizando try-with-resources que o faz automaticamente, isso é possível pois o BufferedWriter também implementa Closeable e AutoCloseable):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/welbert/documents/file.txt"</code>); <span className="-tokenComment">// caminho absoluto ou parcial</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Relembrando try-with-resources: O Java mesmo se encarrega de executar o `.close()` no final do bloco (liberando assim recursos)</span><br/>
                                                    <code className="-tokenKeyword">try</code> (<code className="-tokenClassEntity">FileWriter</code> fw = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">FileWriter</code>(file, <code className="-tokenKeyConstant">true</code>);<br/>
                                                    <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">BufferedWriter</code> bw = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">BufferedWriter</code>(fw, <code className="-tokenKeyConstant">2048</code>)) &#123; <span className="-tokenComment">// 2048 é o size do buffer em alocação</span></code><br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">newLine</code>();</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">newLine</code>();</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">newLine</code>();</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!"</code>);</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">newLine</code>();</code><br/>
                                                        <code className="-nestedInnerCode">bw.<code className="-tokenMethod">write</code>(<code className="-tokenString">"A certificação oracle veeem!!"</code>);</code><br/>

                                                        <br/>
                                                        <code className="-nestedInnerCode">fw.<code className="-tokenMethod">flush</code>(); <span className="-tokenComment">// Libera o buffer pois existe a chance de antes de fechar o arquivo a JVM não mandou todos os bytes do buffer, assim é necessário libera-lo e após liberar fechar corretamente</span></code><br/>

                                                    <br/>
                                                    &#125; <code className="-tokenKeyword">catch</code> (<code className="-tokenClassEntity">IOException</code> ex) &#123;<br/>
                                                        <code className="-nestedInnerCode">ex.<code className="-tokenMethod">printStackTrace</code>();</code><br/>
                                                    &#125;<br/>
                                                </code>
                                            </ul>
                                        </li>
                                        <li className="-marginNone--inMobile"><p className="-listItem--inMobile"><code className="token_reservada">BufferedReader</code>: Equivalente do <code className="token_reservada">FileReader</code> porém otimizado utilizando e manipulando primeiro em memória RAM (que possuí maior capacidade de processamento e transferência) e depois por final lendo no HD, porisso o ganho significativo de performance. Porém segue a mesma regra sobre ser necessário uma instância de <code className="token_reservada">File</code> que encapsula o Arquivo ou Diretório e depois passa-lo para a criação de uma instância de <code className="token_reservada">FileReader</code> e por fim passar essa instância de <code className="token_reservada">FileReader</code> para a criação do <code className="token_reservada">BufferedReader</code>. Além disto, agora é possível carregar e iterar linha a linha (O que anteriormente só era possível iterar caractere a caractere) pois ele adiciona uma camada a mais de abstração e facilita neste contexto (Além dos ganhos e otimizações na performance), logo podemos obter o mesmo resultado anterior porém com menas linhas de códigos tornando a implementação mais coesa e otimizada, mais informações sobre <code className="token_reservada">BufferedReader</code>: <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/F_io/Aula142BufferedReader_Optimized_Utils.java" target="_blank">Clique AQUI!</a></p>
                                            
                                            <p className="main-title--implementFullBlock">Exemplo de Implementação demonstrando a criação, leitura linha a linha em looping e por fim liberação de recursos (utilizando try-with-resources que o faz automaticamente, isso é possível pois o BufferedReader também implementa Closeable e AutoCloseable):</p>
                                            <ul className="main-implementFullBlock--container">
                                                <code className="implementFullBlock">
                                                    <code className="-tokenClassEntity">File</code> file = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">File</code>(<code className="-tokenString">"/home/welbert/documents/file.txt"</code>); <span className="-tokenComment">// caminho absoluto ou parcial</span><br/>

                                                    <br/>
                                                    <span className="-tokenComment"># Relembrando try-with-resources: O Java mesmo se encarrega de executar o `.close()` no final do bloco (liberando assim recursos)</span><br/>
                                                    <code className="-tokenKeyword">try</code> (<code className="-tokenClassEntity">FileReader</code> fr = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">FileReader</code>(file);<br/>
                                                        <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">BufferedReader</code> br = <code className="-tokenKeyword">new</code> <code className="-tokenClassEntity">BufferedReader</code>(fr)) </code>&#123;<br/>
                                                        
                                                        <br/>
                                                        <code className="-nestedInnerCode"><span className="-tokenComment"># Toda operação anterior reduzida apenas nisto</span></code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenClassEntity">String</code> line_str;</code><br/>
                                                        <code className="-nestedInnerCode"><code className="-tokenKeyword">while</code> ( (line = br.<code className="-tokenMethod">readLine</code>()) != <code className="-tokenKeyConstant">null</code> ) &#123;</code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><code className="-tokenClassEntity">System</code>.out.<code className="-tokenMethod">println</code>(line_str);</code><br/>

                                                            <br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                            <code className="-nestedInnerCode --2Identation"><span className="-tokenComment">// A certificação oracle veeem!!</span></code><br/>
                                                        <code className="-nestedInnerCode">&#125;</code><br/>
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