
///Tic Tac Toe Game

$(document).ready(function() {
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    // Update the message
    function updateMessage(message) {
        $('#message').text(message);
    }

    // Check for a win or draw
    function checkResult() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                updateMessage(`${currentPlayer} good job!`);
                return;
            }
        }

        if (!board.includes('') && !gameOver) {
            gameOver = true;
            updateMessage('Chicken Scratch!');
        }
    }

    // Handle cell click
    $('.cell').on('click', function() {
        const index = $(this).data('index');

        if (board[index] === '' && !gameOver) {
            board[index] = currentPlayer;
            $(this).text(currentPlayer);

            checkResult();

            // Switch to the other player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });

    // Reset the game
    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameOver = false;
        updateMessage('');
        $('.cell').text('');
    }

    // Reset the game when clicking the board
    $('.board').on('click', function() {
        if (gameOver) {
            resetGame();
        }
    });
});
