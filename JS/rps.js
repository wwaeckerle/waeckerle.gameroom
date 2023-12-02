
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
