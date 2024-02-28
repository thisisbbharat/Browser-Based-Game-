function play() {
    var randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    var guess = prompt("Guess the number between 1 and 10:");

    if (guess == randomNumber) {
        document.getElementById("result").innerText = "Congratulations! You guessed the correct number.";
    } else {
        document.getElementById("result").innerText = "Sorry, the correct number was " + randomNumber + ". Try again!";
    }
}
