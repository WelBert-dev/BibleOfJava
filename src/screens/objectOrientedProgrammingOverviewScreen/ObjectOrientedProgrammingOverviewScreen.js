import React from 'react';

// import './JavaBibleScreen.css';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoOPPPrinciplesJava from '../../resources/images/poo-java-cover.png';

export default function ObjectOrientedProgrammingOverviewScreen() {

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

            navbarElement.childNodes[2].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Overview sobre POO&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Não explica "Oque é POO" e sim como o Java lída.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/tree/main/src/main/java" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>- Menor nível de profundidade nas informações se comparado aos próximos Módulos.</span>
                            <span>- Sem exemplos de código pois é muito básico.</span>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Playlist completa do curso no Youtube em: <a className="-linkBoldYellowProjects" href="https://www.youtube.com/watch?v=VKjFuX91G5Q&list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoOPPPrinciplesJava} alt="Amostra logo OPP Principles" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    {/* <h3 class="projects-subtitle">[Aulas 75 até 94]</h3> */}
                                    <h3 class="projects-subtitle">Básico, sem exemplos de códigos: </h3>
                                    <ul className="projects-frontend--container">
                                        <li>[Aula 75] - Sequência de inicialização (Ordem de precedência de execução quando usado herança <code className="token_reservada">extends</code>, e blocos estáticos <code className="token_reservada">static &#123;&#125;</code>): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula75-sequenciaDeInicializacao.txt" target="_blank">Clique AQUI!</a></li>
                                        <li>[Aula 77] - Mais sobre <code className="token_reservada">static</code> (Alocamento único de memória, Compartilhado entre todas instâncias de classe): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula77-maisSobreStatic.txt" target="_blank">Clique AQUI!</a></li>
                                        <li>[Aulas 78 e 79] - Mais sobre <code className="token_reservada">final</code> (Constante): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula78e79-maisSobreFinal.txt" target="_blank">Clique AQUI!</a></li>
                                        <li>[Aulas 80 até 83] - Mais sobre <code className="token_reservada">enum</code> (Enumeradores também são Classes e Objetos): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula80a83-enum.txt" target="_blank">Clique AQUI!</a></li>
                                        <li>[Aulas 84 até 86] - Mais sobre <code className="token_reservada">abstract</code> (Generaliza classes, define comportamentos comuns a todos herdeiros): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula84a86-abstract.txt" target="_blank">Clique AQUI!</a></li>
                                        <li>[Aulas 87 até 89] - Mais sobre <code className="token_reservada">interface</code> (Definição de contratos que obrigam comportamentos, ajuda no desacoplamento dos módulos, bastante utilizado com <code className="token_reservada">Dependency Injection</code>, que é uma das implementações para <code className="token_reservada">Inversion of control</code> <code className="token_reservada">DI/IoC</code>): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula87a89-interfaces.txt" target="_blank">Clique AQUI!</a></li>
                                        <li>[Aulas 90 até 94] - Mais sobre <code className="token_reservada">polimorfismo</code> (Capacidade de se adaptar a mudanças ao longo da implementação, existem várias formas de aplicar este conceito em POO): <a className="-linkBoldYellowProjects" href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/anotacoes/aula90a94-polimorfismo.txt" target="_blank">Clique AQUI!</a></li>                                        
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