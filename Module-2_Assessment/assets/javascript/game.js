let wins = 0;
let guessesRemaining = 12;
let lettersPossible = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let lettersGuessed = [];
const words = ["baseball", "tennis", "basketball", "rugby", "lacrosse", "golf", "volleyball", "wrestling", "equestrian"];
let wordIndex = Math.floor(Math.random() * words.length);
console.log(wordIndex);
let word = words[wordIndex].split("");
let finalWord = new Array(word.length);

for (i = 0; i < word.length; i++)
{
    if (word[i] === " ")
    {
        finalWord[i] = " "
    }
    else 
        finalWord[i] = "_ ";
}

document.querySelector('#word').innerHTML = finalWord.join(" ");
document.querySelector('#guesses').innerHTML = guessesRemaining;

function refresh()
{
    guessesRemaining = 12;
    lettersGuessed = [];
    wordIndex = Math.floor(Math.random() * words.length + 1);
    word = words[wordIndex].split("");
    finalWord = new Array(word.length);
    finalWord.fill('_ ');
    document.querySelector('#word').innerHTML = finalWord.join(" ");
    document.querySelector('#guesses').innerHTML = guessesRemaining;
    document.querySelector('#letters').innerHTML = lettersGuessed.join(" ");
}

function checkLetter(event)
{
    let correct = false;
    const key = event.key;

    for (char = 0; char < word.length; char++)
    {
        if (key === word[char])
        {
            finalWord[char] = key;
            correct = true;
            document.querySelector('#word').innerHTML = finalWord.join(" ");
        }
    }

    if (!correct && (lettersGuessed.includes(key) === false) && (lettersPossible.includes(key) === true))
    {
        console.log("not correct");
        guessesRemaining -= 1;
        lettersGuessed.push(key);
        document.querySelector('#guesses').innerHTML = guessesRemaining;
        document.querySelector('#letters').innerHTML = lettersGuessed.join(" ");
        if (guessesRemaining === 0)
        {
            refresh();
        }
    }
    checkWin(finalWord);
}

function checkWin(finalWord)
{
    if (finalWord.includes("_ ") === false)
    {
        wins += 1;
        console.log("assets/images/" + word + ".jpg");
        document.querySelector('#wordImage').src = "assets/images/" + finalWord.join("") + ".jpg";
        document.querySelector('#winsCounter').innerHTML = wins;
        refresh();
    }
}


document.addEventListener('keyup', checkLetter);



