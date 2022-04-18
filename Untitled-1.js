var Name = prompt("Як тебе звати?");
console.log("Привіт, " + Name);
var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];

var word = words[Math.floor(Math.random() * words.length)];
var AnswerArray = [];
for (i = 0; i < word.length; i++) {
    AnswerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters < 0) {
    alert(AnswerArray.join(" "));
}

var guess = prompt("Вгадайте букву  натисніть відміна для виходу з гри.!");
if (guess === null) {
    //  break;
} else if (guess.length !== 1) {
    alert("Будь ласка введіть тільки одну букву.");
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            AnswerArray[j] = guess;
            remainingLetters--;
        }
    }
}
alert(AnswerArray.join(" "));
alert("Було слово " + word);