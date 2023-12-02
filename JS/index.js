
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
