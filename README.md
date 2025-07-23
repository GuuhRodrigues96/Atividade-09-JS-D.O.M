### 💻 Desenvolvido por: Gustavo Rodrigues de Oliveira

### Um jogo dinâmico e divertido desenvolvido como projeto para a disciplina de Programação para WEB. O objetivo é testar seus reflexos e sua capacidade de identificar cores sob a pressão do tempo. Este projeto foi criado para aplicar conceitos de manipulação do DOM, eventos e armazenamento local com HTML, CSS e JavaScript puro.

## 📜 Regras do Jogo

O jogo possui um conjunto de regras claras para tornar a experiência desafiadora e justa.
 * Objetivo Principal: Clicar no quadrado colorido que corresponde ao nome da cor exibido na instrução.
 * Grade de Cores: O jogo apresenta uma grade de 3x3 (9 quadrados) com uma seleção de 10 cores possíveis, tornando cada rodada imprevisível.
 * Contador de Tempo: A partida inicia com 10 segundos. O tempo é o seu maior adversário!
 * Sistema de Pontuação:
   * ✅ Acerto: Você ganha +5 pontos e um bônus de +2 segundos no tempo.
   * ❌ Erro: Você perde -3 pontos (a pontuação mínima é 0).
 * Fim de Jogo: A partida termina quando o cronômetro chega a zero. Sua pontuação final é exibida.
 * Ranking (Bônus): As 5 melhores pontuações são salvas localmente no seu navegador, permitindo que você acompanhe seu progresso e compita consigo mesmo.
## 🖱️ Como Jogar
Siga estes passos simples para se divertir:
 * Ao abrir a página, digite seu nome (ou jogue como "Jogador" anônimo).
 * Clique no botão "Jogar" para iniciar a partida.
 * Leia a instrução na tela, por exemplo: Clique na cor: azul.
 * Clique no quadrado com a cor correspondente o mais rápido que puder.
 * O jogo continuará com novas cores e o grid será atualizado a cada clique.
 * Continue jogando até o tempo acabar.
 * Na tela de "Fim de Jogo", você verá sua pontuação final e a lista dos melhores jogadores.
 * Para um novo desafio, clique em "Jogar Novamente"!
## 🚀 Como Executar
O projeto não requer nenhuma instalação ou dependência complexa. Você precisa apenas de um navegador de internet moderno (como Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
Método 1: Download Direto
 * Baixe os arquivos do projeto (normalmente como um arquivo .zip) e extraia-os em uma pasta no seu computador.
 * Certifique-se de que a estrutura de pastas (css/, js/) seja mantida.
 * Abra o arquivo index.html diretamente no seu navegador.
Método 2: Via Git (para desenvolvedores)
 * Clone o repositório para a sua máquina local usando o comando:
   git clone [https://github.com/GuuhRodrigues96/Atividade-09-JS-D.O.M]

 * Navegue até a pasta do projeto recém-criada:
   cd [Atividade-09-JS-D.O.M]

 * Abra o arquivo index.html no seu navegador.

## 📚 Créditos e Referências

Este projeto foi desenvolvido com o intuito de aprimorar os aprendizados da linguagem JavaScript. A seguir estão os créditos e referências que utilizei para desenvolver esta atividade:

* **Tecnologias Base:** HTML5, CSS3 e JavaScript (ES6+) (Conteúdos vistos nas atividades anteriores e em sala de aula: (JS: https://arthurporto.notion.site/08-JS-A-Linguagem-b3f10adc354548d2b005bbfa64b10e07)
(HTML/CSS: https://arthurporto.notion.site/03-Introdu-o-HTML-CSS-a9884c7bbfa148bd965fb25641be4ad0 ).
* **Manipulação do DOM:** O núcleo da interatividade foi construído utilizando a API do DOM para criar, modificar e remover elementos da página dinamicamente (https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction).
* **Eventos e Temporizadores:** A lógica do jogo é controlada por `Event Listeners` para os cliques e `setInterval` para o contador de tempo regressivo (https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener).
* **Web Storage API:** O ranking de melhores jogadores (recurso bônus) é implementado com `localStorage`, permitindo que os dados sejam armazenados no navegador do usuário (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).
* **Algoritmo Fisher-Yates:** Utilizado na função `shuffleArray` para garantir que as cores sejam inseridas de forma aleatória no grid a cada nova rodada (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#JavaScript_implementation).
* **Fontes:** O design utiliza as fontes [Roboto](https://fonts.google.com/specimen/Roboto) e [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) do Google Fonts.
* **Documentação de Referência:** A [Mozilla Developer Network (MDN) Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) serviu como principal fonte de consulta para as APIs e funcionalidades do JavaScript.

## 📄 Licença do Projeto
Este projeto está licenciado sob a Licença MIT.
Isso significa que você tem a liberdade de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software. A única condição é que o aviso de direitos autorais e esta nota de permissão sejam incluídos em todas as cópias ou partes substanciais do software.