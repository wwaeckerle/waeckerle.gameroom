
//Guess the number game
$(document).ready(function() {
    // Randomly generate a number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Handle button click event
    $('#submitGuess').on('click', function() {
        const userGuess = parseInt($('#userGuess').val());

        // Validate the input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            $('#feedback').text('Please enter a valid number between 1 and 100.').fadeIn();
            return;
        }

        // Compare the user's guess with the random number
        if (userGuess === randomNumber) {
            $('#feedback').text('Congratulations! You guessed the correct number!').fadeIn();
        } else if (userGuess > randomNumber) {
            $('#feedback').text('Too high! Try again.').fadeIn();
        } else {
            $('#feedback').text('Too low! Try again.').fadeIn();
        }
    });
});


//Rock Paper Scissors Game
$(document).ready(function() {
    const choices = ['rock', 'paper', 'scissors'];

    $('#choices img').on('click', function() {
        const userChoice = $(this).attr('alt');
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        $('#user').text(userChoice);
        $('#computer').text(computerChoice);

        // Determine the winner
        if (userChoice === computerChoice) {
            $('#result').text('It\'s a tie!');
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            $('#result').text('You win!');
        } else {
            $('#result').text('Computer wins!');
        }
    });
});


///Tic Tac Toe Game

(document).ready(function() {
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    // Update the message
    function updateMessage(message) {
        ('#message').text(message);
    }

    // Check for a win or draw
    function checkResult() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]// Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                updateMessage(`{currentPlayer} Winner Winner Chicken Dinner!`);
                return;
            }
        }

        if (!board.includes('') && !gameOver) {
            gameOver = true;
            updateMessage('Chicken Scratch!');
        }
    }

    // Handle cell click
    ('.cell').on('click', function() {
        const index = (this).data('index');

        if (board[index] === '' && !gameOver) {
            board[index] = currentPlayer;
            (this).text(currentPlayer);

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
        ('.cell').text('');
    }

    // Reset the game when clicking the board
    ('.board').on('click', function() {
        if (gameOver) {
            resetGame();
        }
    });
});
