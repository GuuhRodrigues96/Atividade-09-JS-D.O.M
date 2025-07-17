// Aguarda o DOM ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- SELEÇÃO DOS ELEMENTOS DO DOM ---
    // Telas
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const gameOverScreen = document.getElementById('game-over-screen');

    // Botões
    const startButton = document.getElementById('start-button');
    const playAgainButton = document.getElementById('play-again-button');

    // Elementos de exibição
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const instructionText = document.getElementById('instruction-text');
    const colorGrid = document.getElementById('color-grid');
    const feedbackText = document.getElementById('feedback-text');
    const finalScoreElement = document.getElementById('final-score');
    const finalMessageElement = document.getElementById('final-message');
    const playerNameInput = document.getElementById('player-name-input');
    
    // Elementos do Ranking (Bônus)
    const rankingList = document.getElementById('ranking-list');

    // --- CONFIGURAÇÕES E VARIÁVEIS DO JOGO ---
    // Definição das cores que serão usadas no jogo
    const COLORS = {
        'vermelho': '#e74c3c',
        'verde': '#2ecc71',
        'azul': '#3498db',
        'amarelo': '#f1c40f',
        'laranja': '#e67e22',
        'roxo': '#9b59b6',
        // --- Novas cores adicionadas ---
        'ciano': '#1abc9c',
        'rosa': '#ff79c6',
        'cinza': '#95a5a6',
        'marrom': '#8b4513'
    };
    const COLOR_NAMES = Object.keys(COLORS); // Extrai os nomes das cores
    const GRID_SIZE = 9; // 3x3 grid
    const INITIAL_TIME = 15; // Tempo inicial em segundos

    // Variáveis de estado do jogo
    let score = 0;
    let timeLeft = 0;
    let timerInterval = null;
    let currentCorrectColorName = '';
    let playerName = '';

    // --- FUNÇÕES DO JOGO ---

    /**
     * Inicia o jogo: reseta o estado, esconde a tela inicial e mostra a tela do jogo.
     */
    function startGame() {
        playerName = playerNameInput.value.trim() || 'Jogador';
        score = 0;
        timeLeft = INITIAL_TIME;

        updateScoreDisplay();
        updateTimerDisplay();

        startScreen.classList.remove('active');
        gameOverScreen.classList.remove('active');
        gameScreen.classList.add('active');

        generateNewRound();
        startTimer();
    }

    /**
     * Inicia o contador de tempo regressivo.
     */
    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    /**
     * Gera uma nova rodada: limpa o grid, escolhe uma nova cor e preenche o grid.
     */
    function generateNewRound() {
        colorGrid.innerHTML = '';
        feedbackText.textContent = '';

        currentCorrectColorName = COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)];
        instructionText.textContent = `Clique na cor: ${currentCorrectColorName}`;

        const colorsForGrid = [COLORS[currentCorrectColorName]];
        while (colorsForGrid.length < GRID_SIZE) {
            const randomColorName = COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)];
            colorsForGrid.push(COLORS[randomColorName]);
        }

        shuffleArray(colorsForGrid);

        colorsForGrid.forEach(color => {
            const square = document.createElement('div');
            square.classList.add('color-square');
            square.style.backgroundColor = color;
            square.addEventListener('click', handleSquareClick);
            colorGrid.appendChild(square);
        });
    }

    /**
     * Lida com o clique em um dos quadrados coloridos.
     * @param {MouseEvent} event - O evento de clique.
     */
    function handleSquareClick(event) {
        const clickedColor = event.target.style.backgroundColor;
        const correctColorHex = hexToRgb(COLORS[currentCorrectColorName]);
        
        if (clickedColor === correctColorHex) {
            feedbackText.textContent = 'Acertou!';
            feedbackText.style.color = '#2ecc71';
            score += 5;
            timeLeft += 2;
        } else {
            feedbackText.textContent = 'Errou!';
            feedbackText.style.color = '#e74c3c';
            score = Math.max(0, score - 3);
        }

        updateScoreDisplay();
        updateTimerDisplay();

        setTimeout(generateNewRound, 300);
    }
    
    /**
     * Finaliza o jogo: para o timer e mostra a tela de fim de jogo.
     */
    function endGame() {
        clearInterval(timerInterval);

        finalScoreElement.textContent = score;
        finalMessageElement.textContent = `Muito bem, ${playerName}!`;
        
        updateRanking(playerName, score);

        gameScreen.classList.remove('active');
        gameOverScreen.classList.add('active');
    }

    // --- FUNÇÕES AUXILIARES ---

    function updateScoreDisplay() {
        scoreElement.textContent = score;
    }

    function updateTimerDisplay() {
        timerElement.textContent = timeLeft;
    }

    /**
     * Embaralha os elementos de um array (algoritmo Fisher-Yates).
     * @param {Array} array - O array a ser embaralhado.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /**
     * Converte um código de cor hexadecimal para o formato RGB que o navegador usa.
     * @param {string} hex - O código hexadecimal.
     * @returns {string} - A cor em formato RGB.
     */
    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length == 4) {
            r = "0x" + hex[1] + hex[1];
            g = "0x" + hex[2] + hex[2];
            b = "0x" + hex[3] + hex[3];
        } else if (hex.length == 7) {
            r = "0x" + hex[1] + hex[2];
            g = "0x" + hex[3] + hex[4];
            b = "0x" + hex[5] + hex[6];
        }
        return `rgb(${+r}, ${+g}, ${+b})`;
    }
    
    // --- BÔNUS: FUNÇÕES DE RANKING ---

    /**
     * Atualiza o ranking com o novo resultado e o salva no localStorage.
     * @param {string} name - Nome do jogador.
     * @param {number} score - Pontuação final.
     */
    function updateRanking(name, score) {
        const ranking = JSON.parse(localStorage.getItem('colorChallengeRanking')) || [];
        ranking.push({ name, score });
        ranking.sort((a, b) => b.score - a.score);
        const top5 = ranking.slice(0, 5);
        localStorage.setItem('colorChallengeRanking', JSON.stringify(top5));
        displayRanking();
    }
    
    /**
     * Exibe o ranking na tela de fim de jogo.
     */
    function displayRanking() {
        const ranking = JSON.parse(localStorage.getItem('colorChallengeRanking')) || [];
        rankingList.innerHTML = '';
        
        if (ranking.length === 0) {
            rankingList.innerHTML = '<li>Ainda não há pontuações. Seja o primeiro!</li>';
        } else {
            ranking.forEach(player => {
                const li = document.createElement('li');
                li.textContent = `${player.name} - ${player.score} pontos`;
                rankingList.appendChild(li);
            });
        }
    }

    // --- EVENT LISTENERS ---
    startButton.addEventListener('click', startGame);
    playAgainButton.addEventListener('click', startGame);
});