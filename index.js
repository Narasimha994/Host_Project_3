const fruits = [
    { name: "apple", clue: "I am red or green, and I keep the doctor away." },
    { name: "banana", clue: "I am long and yellow, monkeys love me" },
    { name: "orange", clue: "I am in orange colour, round, and full of vitamin C." },
    { name: "kiwi", clue: "I have brown, fuzzy skin, but green insides with black seeds." },
    { name: "pineapple", clue: "I have spiky skin, but sweet and tropical inside." },
    { name: "pomegranate", clue: "I will help, to pump the level of oxygen in our blood." }
];

let currentFruit = {};
let totalAttempts = 0;
const maxAttempts = 3;

function getRandomFruit() {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}

function reset() {
    currentFruit = getRandomFruit();
    document.getElementById('fruit-clue').textContent = currentFruit.clue;
    document.getElementById('user-guess').value = '';
    document.getElementById('result').textContent = '';
    totalAttempts = 0;
    updateAttemptsDisplay();
    document.getElementById('user-guess').disabled = false;
}

function checkGuess() {
    if (totalAttempts >= maxAttempts) {
        document.getElementById('result').textContent = "You have exceeded the Limit";
        document.getElementById('user-guess').disabled = true;
        return; 
    }
    totalAttempts++;
    const userGuess = document.getElementById('user-guess').value.toLowerCase();

    if (userGuess === currentFruit.name) {
        document.getElementById('result').textContent = "You Guessed The Correct fruit.";
    } else {
        document.getElementById('result').textContent = "Your Guess Is Wrong Try again.";
    }
    updateAttemptsDisplay();
}
function updateAttemptsDisplay() {
    document.getElementById('total-attempts').textContent = `Total Attempts: ${totalAttempts}`;
}

reset();