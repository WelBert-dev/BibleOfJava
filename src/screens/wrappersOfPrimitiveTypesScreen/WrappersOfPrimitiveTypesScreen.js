import React from 'react';

// import './JavaBibleScreen.css';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoWrapperClasses from '../../resources/images/java-wrapper-class-hierarchy.webp';

export default function WrappersOfPrimitiveTypesScreen() {

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

            navbarElement.childNodes[4].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Wrappers dos Tipos Primitivos&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Equivalentes dos tipos primitivos porém em forma de Objetos.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>Altera comportamento de passagem por valor para passagem por referência.</span>
                            <span>Conceito de Boxing e Unboxing (Ação importante de encapsular e desencapsular).</span>
                            <span>A ação de cima é custosa em alguns cenários de multiplas iterações em looping.</span>
                            <span>Utilizar apenas quando o contexto EXIGIR objetos.</span>
                            <span>Tambem fornecem métodos estáticos e não estáticos como utilitários.</span>
                            <span>Em fluxos Streams é interessante utilizar Streams Especializados para primitivos.</span>
                            <span>Sem exemplos de código pois é muito básico.</span>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoWrapperClasses} alt="Amostra logo Wrapper Classes" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 106 e 107]</h3> */}
                                    <h3 class="projects-subtitle">Contextualizando: </h3>
                                    <ul className="projects-frontend--container">
                                        <li>Adapter que encapsula os <code className="token_reservada">Tipos Primitivos</code> em objetos para contextos que esperam eles alocando memória e tratando eles como se fossem objetos (Devido a isso, altera o comportamento de <code className="token_reservada">passagem por valor</code> dos Primitivos para <code className="token_reservada">passagem por referência</code> dos objetos).</li>
                                        <li>Apesar de ser Objetos a própria JVM faz o tratamento para encapsular e desencapsular por nós, ou seja, não preciamos executar métodos <code className="token_reservada">.get()</code> ou <code className="token_reservada">.set()</code> explicitamente, e nem mesmo precisamos instânciar com <code className="token_reservada">new</code> manualmente, essa ação é conhecida como <code className="token_reservada">Boxing</code> e <code className="token_reservada">Unboxing</code> (Mais detalhes logo abaixo).</li>
                                        <li>Fornece funcionalidades/métodos estáticos prontos especializado para cada tipo primitivo (Utilitário).</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 class="projects-subtitle">Classes e seus Equivalentes: </h3>
                                    <ul className="projects-frontend--container">
                                        <li><code className="token_reservada">Byte</code>: Objeto Wrapper para Tipo Primitivo byte (<code className="outputResult">8bits</code>).</li>
                                        <li><code className="token_reservada">Short</code>: Objeto Wrapper para Tipo Primitivo short (<code className="outputResult">16bits</code>).</li>
                                        <li><code className="token_reservada">Integer</code>: Objeto Wrapper para Tipo Primitivo int (<code className="outputResult">32bits</code>).</li>
                                        <li><code className="token_reservada">Long</code>: Objeto Wrapper para Tipo Primitivo long (<code className="outputResult">64bits</code>).</li>
                                        <li><code className="token_reservada">Float</code>: Objeto Wrapper para Tipo Primitivo float (<code className="outputResult">32bits</code>).</li>
                                        <li><code className="token_reservada">Double</code>: Objeto Wrapper para Tipo Primitivo double (<code className="outputResult">64bits</code>).</li>
                                        <li><code className="token_reservada">Character</code>: Objeto Wrapper para Tipo Primitivo char.</li>
                                        <li><code className="token_reservada">Boolean</code>: Objeto Wrapper para Tipo Primitivo boolean.</li>
                                    </ul>   
                                </li>
                                 <li>
                                    <h3 class="projects-subtitle">Cenários de uso:</h3>
                                    <ul className="projects-frontend--container">
                                        <li>Muito utilizado com <code className="token_reservada">Listas</code> ou <code className="token_reservada">Coleções</code> em geral pois as mesmas utilizam a <code className="token_reservada">referência do objeto</code>, logo, não é possível criar elas para os <code className="token_reservada">Tipos Primitivos</code> (Já que os mesmos não possuem referência), então a solução é criar <code className="token_reservada">Listas</code> ou <code className="token_reservada">Coleções</code> para os <code className="token_reservada">Objetos Wrappers</code>.</li>
                                        <li>Além das listas, também é bem utilizado em cenários de concorrência <code className="token_reservada">concurrency</code> (MultiThreads) aonde para sincronizar com o token <code className="token_reservada">synchronized</code> só é possível em objetos, dentre outros contextos.</li>
                                        <li>A regra do polimorfismo também se aplica a eles.</li>
                                    </ul>   
                                </li>
                                 <li>
                                    <h3 class="projects-subtitle">Ações importantes da JVM:</h3>
                                    <ul className="projects-frontend--container">
                                        <li><code className="token_reservada">Boxing/AutoBoxing</code>: Processo no qual a JVM encapsula o valor do <code className="token_reservada">Tipo Primitivo</code> em um objeto <code className="token_reservada">Wrapper</code> (Alocando memória, assim temos a referência e o valor em sí) Exemplo: <code className="outputResult">Integer intW = 10;</code>.</li>
                                        <li><code className="token_reservada">Unboxing/AutoUnboxing</code>: Processo inverso, no qual a JVM desencapsula o <code className="token_reservada">Tipo Primitivo</code> retirando o valor encapsulado no objeto <code className="token_reservada">Wrapper</code>, ou seja, processo INVERSO do anterior (Removendo a referência e re-alocando o valor em uma <code className="token_reservada">variável primitiva</code> comum) Exemplo: <code className="outputResult">int intP = intW;</code>.</li>
                                    </ul>   
                                </li>
                                 <li>
                                    <h3 class="projects-subtitle">Atenções a se tomar:</h3>
                                    <ul className="projects-frontend--container">
                                        <li>É importante conhecer essa ação do Java implementado na JVM sobre os <code className="token_reservada">Wrappers</code>, pois em alguns cenários aonde realizamos operações de múltiplas iterações com somas e etc utilizando os objetos <code className="token_reservada">Wrappers</code>, esse processo pode ser computacionalmente CUSTOSO em relação ao desempenho pois a cada iteração a JVM aloca e desaloca memória, para encapsular e desencapsular o valor do primitivo, além disto, também devemos considerar o custo computacional de outros processamentos necessários para a construção de objetos. Ou seja, utilizar sempre que possível os <code className="token_reservada">Tipos Primitivos</code> comuns em contextos que não exigem objetos.</li>
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