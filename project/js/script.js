let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const currentPlayerDisplay = document.getElementById('current-player');

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const gameStatusDisplay = document.getElementById('game-status');

function handleClick(index) {
    if (gameActive && !board[index]) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkWin();
        checkDraw();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerDisplay.innerText = `Turn: ${currentPlayer}`;
    }
}

function checkWin() {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            gameStatusDisplay.innerText = `${board[a]} won!`;
            return;
        }
    }
}

function checkDraw() {
    if (!board.includes('') && gameActive) {
        gameActive = false;
        gameStatusDisplay.innerText = 'Draw!';
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    gameStatusDisplay.innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}