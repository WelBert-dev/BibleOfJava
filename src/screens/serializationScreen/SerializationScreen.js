import React from 'react';

import { BsFillFolderSymlinkFill } from 'react-icons/bs';

import logoSerializationFlow from '../../resources/images/Java-Serialization-Flow.jpg';

export default function SerializationScreen() {

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

            navbarElement.childNodes[11].classList.add("-ancorOfNavbarIsClicked"); // <- Alteração só ocorre aqui, nas outras Screens
            
        }
        
    }
    setStyleInCorrespondingAncorOfNavbarBecauseIsTheCurrentScreen();

    return (
    <section id="main-javaBible--container">
        <div>
            <h1 className="main-title">&lsaquo;Serialization e Deserialization&rsaquo;</h1>
            <div className="wrapper-projects">
                <article className="projects-single">
                    <div className="projects-right">
                        <div className="projects-title--container">
                            <div>
                                <h3 className="projects-title">Serialização é o processo de transformar um objeto em uma sequência de bytes que podem ser armazenados ou transmitidos pela rede, e posteriormente reconstruídos em um objeto equivalente.</h3>
                                <a href="https://github.com/WelBert-dev/MaratonaJava-DevDojo/blob/main/src/main/java/H_serializacao" target="_blank"><i><BsFillFolderSymlinkFill /></i></a>
                            </div>
                            <span>- Isso permite que o objeto seja persistido em um arquivo, banco de dados ou enviado pela rede para outro sistema, e depois reconstruído em sua forma original.</span>
                            <span>- Para que o objeto de uma classe possa ser serializado, essa classe deve implementar a Interface Serializable ou em alguns casos a Externalizable.</span>
                            <span>- A principal diferença entre as Interfaces acima é que a Serializable define que toda responsabilidade do processo fica delegada para a JVM, então não podemos personalizar as regras sobre a serialização e deserialização, ou seja, todo os valores dos atributos do objeto será serializado, não podemos personalizar regras de negocio que altere esse comportamento implementado na JVM (Apenas podemos utilizar a token `transient` no atributo que desejamos ignorar o valor dele durante o processo de serialização, mas nada além disso).</span>
                            <span>- Por conta disto a Interface Serializable é apenas um marcador que "Flaggamos" na classe que desejamos serializar seus Objetos, já a Externalizable é uma extensão do Serializable que além de marcador define dois (2) métodos que devemos implementar, esses métodos estão relacionados as regras personalizadas sobre o processo de serialização (`@Override writeExternal()`) e deserialização (`@Override readExternal()`), ou seja, agora toda a responsabilidade sobre o algoritmo desse processo não é mais o padrão definido na JVM (que é o caso quando utilizamos o default apenas "flaggando" a classe com Serializable), logo, toda responsabilidade fica para o programador.</span>
                            <span>- Ao utilizar a serialização configurada manualmente com a Interface Externalizable sobrescrevendo os dois (2) métodos ditos acima, conseguimos ganhos de performance significativos, pois agora não é o algoritmo padrão "genérico" que será executado e sim nossa própria lógica, pois tudo que é especializado sempre é mais performático, uma vez que algo genérico deve lídar com o máximo de cenários possíveis, especializado não existe isso pois atacamos apenas algum ponto em específico.</span>
                            <span>- Depois de marcarmos a classe do Objeto com Serializable ou Externalizable, pode-se usar a classe ObjectOutputStream para escrever o objeto em um fluxo de saída, e a classe ObjectInputStream para ler o objeto de volta em sua forma original.</span>
                            <span>- É importante lembrar que a deserialização pode ser afetada por problemas de compatibilidade, pois a estrutura do objeto serializado pode mudar ao longo do tempo, e ao tentar deserializar o objeto anterior em um novo objeto vai ocorrer inconsistências.</span>
                            <span>- Ao deserializar um objeto e reconstruí-lo da maneira convencional o método construtor não será executado, podemos contornar isto instânciando um novo Objeto com `new` e passando os valores do objeto deserializado como argumento para ele, ou executando setters.</span>
                            <span>- Keyword `transient` pode ser utilizada para "flaggar" um atributo de uma classe que desejamos IGNORAR o valor desta variável durante o processo de serialização, isso é util quando esse valor desta variável é facilmente recuperável e não existe a necessidade de armazenar esse estado, ou quando esse atributo é um objeto (Associação) e a classe do mesmo não implementa nenhuma das Interfaces que o torne serializável.</span>
                           
                            <p>Repositório Github clicando no botão acima</p>
                        </div>
                        <div>
                            <ul className="projects-description--container">
                                <li>
                                    <span className="-spanOfLinkAkitaDesbAlgTwitter">Fonte interessante, blog com várias API's do Java em Inglês: <a className="-linkBoldYellowProjects" href="https://tutswiki.com/java/serialization/" target="_blank">Clique AQUI!</a></span>
                                </li>
                            </ul>
                            <img className="projects-logo" src={logoSerializationFlow} alt="Amostra logo IO vs NIO" ></img>
                        </div>
                        <div className="subContainer-bottom">
                            <ul className="projects-description--container">
                                <li>
                                    <h3 class="projects-subtitle">Contextualizando:</h3>
                                    <ul className="projects-frontend--container">
                                        <li></li>
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