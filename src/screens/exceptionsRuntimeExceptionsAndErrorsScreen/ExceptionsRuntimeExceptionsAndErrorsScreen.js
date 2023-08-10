import React from 'react';

// import './JavaBibleScreen.css';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoHierarchyOfJavaExceptions from '../../resources/images/hierarchy-of-java-exceptions.webp';


export default function ExceptionsRuntimeExceptionsAndErrorsScreen() {

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

            navbarElement.childNodes[3].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Exceptions, RuntimeExceptions e Errors&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Tratando e lídando com Exceções e Erros.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula94a105-exception.txt" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>                       
                            <span>- Estrutura hirarquica (Tudo no java é Object), logo todos Errors e Exceptions extends de Throwable.</span>
                            <span>- Diferenças entre Checked (Herdeiros de Exception) e Unchecked (Herdeiros de RuntimeException).</span>
                            <span>- Errors não são Exceções pois esse tipo de problema esta fora do controle do desenvolvedor, não sendo possível capturar e realizar tratamentos com uso de lógica.</span>
                            <span>- Errors geralmente ocorrem por conta de lógicas mal feitas, e o programa é finalizado quando lançado.</span>
                            <span>- Exemplos de tipos de Errors comuns é OutOfMemoryError quando acaba a memória durante a execução (Runtime).</span>
                            <span>- Ou também o mais famoso de todos, StackOverflowError quando estoura a pilha de chamadas em tempo de execução (Runtime).</span>
                            <span>- Boas práticas sobre tratamentos de Exceptions e RuntimeExceptions.</span>
                            <span>- Exceptions (Checked) são checadas pois são problemas já "previstos" que podem ocorrer e o JavaC nem compila se não tratar.</span>
                            <span>- Quando não queremos tratar neste escopo corrente que está lançando, podemos delegar esses tratamentos de Exceptions (Checked) retornando todo o workflow da pilha de chamadas.</span>
                            <span>- Por conta disto deve-se analisar em qual passo deste workflow é o melhor cenário (escopo) para capturar e realizar tratamentos.</span>
                            <span>- A dica sobre o ponto acima é verificar qual é o nível do modificador de acesso deste método em questão que está lançando Throws na assinatura dele.</span>
                            <span>- Tratamentos em mão dupla, ou seja, captura e realiza o tratamento desta Exception neste escopo corrente e depois re-lança o mesmo Objeto desta mesma Exceção delegando o tratamento TAMBÉM para o chamador do workflow.</span>
                            <span>- Blocos try-catch-finally para quando desejamos sempre executar algum bloco de lógica, independentemente se lançado alguma exceção ou não (como liberar recursos em buffer e etc).</span>
                            <span>- Capturando múltiplas exceções com uso de Sobrecarga de catchs, sempre começando a tratar Exceções mais Especializadas e depois seguindo as mais Genéricas (Devido ao Polimorfismo).</span>
                            <span>- Múltiplos catch em linha (utilizando pipe `|` como separador no parâmetro do catch), servindo apenas para Exceções com fluxo de herança diferentes entre sí (Devido ao Polimorfismo).</span>
                            <span>- Blocos try-with-resources para executar liberações de recursos automáticamente sem precisar executar .close() explicitamente (Apenas quando essa classe de recurso implementa Closeable ou AutoCloseable).</span>
                            <span>- Ordem de execução do método .close() quando utilizado mais de um Recurso Closeable no argumento do try, será na ordem INVERSA em que foram declarados.</span>
                            <span>- Regras sobre sobrescritas @Override quando esse método em modificação lança alguma Exception, quem está herdando não é obrigado a lançar as mesmas exceções que o pai lança.</span>
                            <span>- Para o cenário anterior, apenas podemos lançar o mesmo tipo de Exceção ou subClasses mais Especializadas que o pai (superClasse) está lançando, NUNCA podemos lançar mais GENÉRICAS (ou seja, superClasses acima da árvore).</span>
                            <span>- Dentro outros assuntos...</span>
                            <p>Repositório referênte a este Módulo no Github clicando no botão acima</p>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoHierarchyOfJavaExceptions} alt="Amostra logo DevDojo Maratona Java" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">

                                <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 95 até 105]</h3> */}
                                    <h3 class="projects-subtitle">Reforçando pontos chaves:</h3>
                                    <ul className="projects-frontend--container">
                                        <li>Estrutura Hierárquica do fluxo de herança, Herdeiros de <code className="token_reservada">Exception</code> são <code className="token_reservada">Checked</code> e Herdeiros de <code className="token_reservada">RuntimeException</code> são <code className="token_reservada">Unchecked</code>, quando lançar <code className="token_reservada">throws</code> na assinatura e quando tratar em blocos <code className="token_reservada">try-catch</code>.</li>
                                        <li>Estrutura Hierarquica do fluxo de herança pois tudo no java é  <code className="token_reservada">Object</code>, logo, as exceções também possuem superClasses e subClasses (<code className="token_reservada">Checked</code> para herdeiros de <code className="token_reservada">Exception</code> e <code className="token_reservada">Unchecked</code> para herdeiros de <code className="token_reservada">RuntimeException</code>).</li>
                                        <li>Todos são herdeiros de <code className="token_reservada">Throwable</code> que é a raiz da hierarquia de exceções, porisso é possível lançar, porém existem diferenças nos tipos de exceções e a forma como é tratado (<code className="token_reservada">Error</code>, <code className="token_reservada">Exception</code> (<code className="token_reservada">Checked</code>) e <code className="token_reservada">RuntimeException</code> (<code className="token_reservada">Unchecked</code>)).</li>
                                        <li><code className="token_reservada">Error</code> não são exceções, esse tipo esta fora de nosso controle, Erros não são possiveis de tratar com lógica, logo, quando ocorrer geralmente o programa finaliza, por exemplo acabar a memória durante a execução (<code className="token_reservada">OutOfMemoryError</code>), ou quando estoura a pilha de chamadas (<code className="token_reservada">StackOverflowError</code>).</li>
                                        <li>Exceções do tipo <code className="token_reservada">Checked</code>: São checadas e filhas da classe <code className="token_reservada">Exception</code> diretamente, se não tratadas o JavaC nem compila. (Exemplo <code className="token_reservada">IOException</code> ao tentar ler arquivos inexistentes, esse se não tratar não irá compilar).</li>
                                        <li>Exceções do tipo <code className="token_reservada">Unchecked</code>: São desconhecidas até que ocorra em tempo de execução (Ou seja, geralmente é causado por falhas de lógica do desenvolvedor), filhas da classe <code className="token_reservada">RuntimeException</code> diretamente ou elá própria, não necessita de tratamentos prévios pois ela só será conhecida em tempo de execução, logo, o Java não obriga tratamentos (Exemplo <code className="token_reservada">IndexOutOfBoundsException</code> ao tentar acessar index inválido/inexistente de um Array).</li>
                                        <li>Nunca definir regras de negócio em blocos <code className="token_reservada">catch</code>, ele serve apenas para TRATAR a <code className="token_reservada">Exception</code> lançada.</li>
                                        <li>Exceções capturadas em blocos <code className="token_reservada">try-catch</code> NÃO param o fluxo de execução corrente deste método em questão se lançadas!</li>
                                        <li>Exceções lançadas com <code className="token_reservada">throws new RuntimeException</code> (Ou subclasses filhas dela <code className="token_reservada">Unchecked</code>'s) no fluxo regular de execução corrente PARAM e retornam para quem chamou, porém NÃO obriga o chamador a tratar ela, neste caso, vai retornando a pilha de chamadas até alguém interceptar e tratar, se ninguem deste workflow tratar o programa é finalizado.</li>
                                        <li>A Regra sobre NÃO obrigar tratamentos em blocos <code className="token_reservada">try-catch</code> <code className="token_reservada">RuntimeException</code>'s (<code className="token_reservada">Unchecked</code>) é aplicada MESMO se lançado <code className="token_reservada">throws</code> na assinatura do método, para este tipo de <code className="token_reservada">RuntimeException</code> (<code className="token_reservada">Unchecked</code>) essa funcionalidade serve apenas para dar dicas ao desenvolvedor no momento de utilizar esse método em questão.</li>
                                        <li>Ao contrário ocorre com <code className="token_reservada">Exception</code>'s (<code className="token_reservada">Checked</code>) que obrigam o tratamento no fluxo regular de execução corrente com uso de <code className="token_reservada">try-catch</code> ou delegando essa responsabilidade de tratamento para quem está chamando, com o lançamento de <code className="token_reservada">throws Exception</code> (<code className="token_reservada">Checked</code>) na assinatura do método.</li>
                                        <li>Quando tratar em blocos <code className="token_reservada">try-catch</code> e quando delegar a responsabilidade para quem está chamando (Lançando <code className="token_reservada">throws</code> na assinatura do método)?</li>
                                        <li>Podemos lançar <code className="token_reservada">throws</code> na assinatura de todos os métodos da pilha de chamadas para delegar e retornar a responsabilidade para TODOS do fluxo, que ele vai retornando o workflow em cascata, porisso o questionamento acima, então em qual passo deste workflow de chamadas devemos tratar a <code className="token_reservada">Exception</code> (<code className="token_reservada">Checked</code>)? se ninguem tratar o programa irá finalizar.</li>
                                        <li>Para saber quando tratar ou não com blocos <code className="token_reservada">try-catch</code> no fluxo regular de execução corrente, devemos análisar se esse método em questão será utilizado por vários outros, se isso ocorrer é ideal DELEGAR a responsabilidade de tratamento para quem está chamando pois assim cada um trata da melhor forma para o seu contexto especifico.</li>
                                        <li>Dica sobre o ponto acima: Análisar qual é o nível de privacidade do <code className="token_reservada">modificador de acesso</code> deste método que lança, quanto mais ABERTO (Exemplo: <code className="token_reservada">public</code>) ele for quer dizer que vários outros irão utiliza-lo, logo, é ideal DELEGAR esse tratamento para eles.</li>
                                        <li>Tratamento em mão dupla, tratando com <code className="token_reservada">try-catch</code> no fluxo regular corrente de execução e re-lançando a <code className="token_reservada">Exception</code> para o chamador: Podemos também capturar a <code className="token_reservada">Exception</code> lançada em blocos <code className="token_reservada">try-catch</code> e mesmo assim DELEGAR esse mesmo tratamento para quem está chamando também, definindo <code className="token_reservada">throws</code> na assinatura do método e retornando o objeto da <code className="token_reservada">Exception</code> (<code className="token_reservada">`ex`</code>) no bloco <code className="token_reservada">catch</code> (Neste caso, não será necessário utilizar <code className="token_reservada">new</code> pois o objeto já existe neste ponto e está vindo no argumento do <code className="token_reservada">catch(Exception ex)</code>, a não ser que deseja lançar outro tipo de <code className="token_reservada">Exception</code>, neste caso é necessário criar o objeto com <code className="token_reservada">new</code>).</li>
                                        <li>Blocos <code className="token_reservada">try-catch-finally</code> para quando desejamos sempre executar algum bloco de lógica, independentemente se ocorrer lançamentos ou não (Definindo essa lógica que sempre será executada no bloco <code className="token_reservada">finally</code>).</li>
                                        <li>Capturando múltiplas exceções com uso de <code className="token_reservada">Sobrecarga de catchs</code> para tratamentos, sempre começando a tratar as Exceções mais Especializadas e por final a mais Genérica, pois se inverter ele sempre irá executar a mais Genérica devido ao polimorfismo e irá simplismente ignorar as outras, ou seja, nunca seram executados.</li>
                                        <li><code className="token_reservada">Múltiplos catch em linha</code> (utilizando pipe <code className="token_reservada">`|`</code> como separador no parâmetro do <code className="token_reservada">catch(BlablaException | WubalubaException | DubDubException ex)&#123;&#125;</code>) serve APENAS para Exceções com fluxo de herança diferentes entre sí (Devido ao polimorfismo), NÃO é possível nem se colocado o parâmetro na ordem do mais Especializado para o mais Genérico! Sintaxe diferente para a mesma ação anterior, porém apenas para Exceções com fluxo de herança diferentes entre sí e para todos o tratamento é o MESMO (Já que para todos irão executar esse mesmo bloco <code className="token_reservada">catch</code>), essa sintaxe torna o código mais legível e coeso em alguns casos.</li>
                                        <li>Ao utilizar <code className="token_reservada">mútiplos catch em linha</code> a variável de referência <code className="token_reservada">`ex`</code> (<code className="token_reservada">catch(BlablaException | WubalubaException | DubDubException ex)</code>) passada no argumento do <code className="token_reservada">catch</code> por segurança é <code className="token_reservada">final</code>, não sendo possível atribuir um novo objeto para ela (Nem mesmo se for algum dos tipos de <code className="token_reservada">Exception</code>'s sobrecarregados em linha com o <code className="token_reservada">`|`</code> no argumento do <code className="token_reservada">catch</code>).</li>
                                        <li><code className="token_reservada">try-with-resources</code> (Exemplo: <code className="token_reservada">try(ResourceCloseable r = new ResourceCloseable) catch&#123;&#125;</code>) para fechar/liberar recursos sem a necessidade de utilizar <code className="token_reservada">.close()</code> explícitamente (APENAS para classes que implementam a interface <code className="token_reservada">Closeable</code> ou <code className="token_reservada">AutoCloseable</code> devido ao polimorfismo que obriga a concretização/implementação do método <code className="token_reservada">.close()</code> presente nestas interfaces), pois a própria JVM se encarrega de executar esse método no final do <code className="token_reservada">try-with-resources</code>. Deixando a implementação mais legível e coesa sem códigos redundantes.</li>
                                        <li>Diferente de outros usos do <code className="token_reservada">try-catch</code>, o <code className="token_reservada">try-with-resources</code> não obriga o uso do <code className="token_reservada">catch</code> em conjunto do <code className="token_reservada">try()</code>, desde que lançado na assinatura do método o <code className="token_reservada">throws</code> com as possíveis <code className="token_reservada">Exception</code>'s lançadas pelos Recursos closeable do argumento <code className="token_reservada">try(ResourceCloseable r = new ResourceCloseable)</code>, DELEGANDO assim esse tratamento <code className="token_reservada">catch</code> para o chamador deste método no passo anterior do workflow na pilha de chamadas.</li>
                                        <li>Ordem de execução do método <code className="token_reservada">.close()</code> quando utilizado mais de um Recurso closeable no argumento do <code className="token_reservada">try(ResourceCloseable r1 = new ResourceCloseable; ResourceCloseable2 r2 = new ResourceCloseable2)</code>, neste caso a ordem de execução para liberar recursos será na ordem INVERSA em que foram declarados, ou seja, do ÚLTIMO argumento até/para o PRIMEIRO.</li>
                                        <li>Isso ocorre pois geralmente quando estamos liberando recursos de <code className="token_reservada">banco de dados</code> por exemplo, a pilha de chamadas (Stack) que libera recursos e/ou fecha conexão devem ser executadas na ordem INVERSA da qual foram executadas para abrir o recurso.</li>
                                        <li>Implementando Exceções customizadas com <code className="token_reservada">extends</code> em alguma <code className="token_reservada">Exception/RuntimeException</code> para cenários especificos em que o Java não o faz. Essas também seguem as mesmas regras ditas anteriormente (<code className="token_reservada">Checked</code> e <code className="token_reservada">Unchecked</code>) e etc...</li>
                                        <li>Regras sobre sobrescritas <code className="token_reservada">@Override</code> quando esse método em modificação lança alguma <code className="token_reservada">Exception</code>: Quem está herdando com <code className="token_reservada">extends</code> (subClasse) não é obrigado a declarar as mesmas <code className="token_reservada">Exceptions/RuntimeExceptions</code> que o pai (superClasse) faz, pois o mesmo (subClasse/filho) pode querer realizar tratamentos diferentes ou lançar Exceções diferentes da que o pai (superClasse) está lançando, umas vez que essa nova implementação pode ser TOTALMENTE diferente e automaticamente lançar diferentes Exceções, ou nem lançar nenhuma, se necessário.</li>
                                        <li>Para o cenário anterior, APENAS não será possível declarar <code className="token_reservada">Exceptions/RuntimeExceptions</code> diferentes na assinatura com <code className="token_reservada">throws</code> do filho (subClasse) que está sobrescrevendo <code className="token_reservada">@Override</code> (<code className="token_reservada">extends</code>), se lançado Exceções de tipos mais GENÉRICOS que o pai (superClasse) está lançando, apenas podemos lançar o mesmo tipo de Exceção ou subClasses mais Especializadas que o pai (superClasse) está lançando.</li>
                                        <li>EM NENHUM CASO é possível declarar <code className="token_reservada">Exception</code>'s (<code className="token_reservada">Checked</code>) neste método sobrescrito <code className="token_reservada">@Override</code> se o pai (superClasse) não estiver declarando.</li>
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