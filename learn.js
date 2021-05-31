
//      //// ****   Start Hangman Game     **********  ////

// write the letters
const letters = "abcdefghijklmnopqrstuvwxyz1234567890";

// Array to make letters in array
let lettersArray = Array.from(letters);

// select the container
let lettersContainer = document.querySelector('.letters');

// loop to create span to each letter
lettersArray.forEach(letter => {

    // create span
    let span = document.createElement('span');

    // create the textnode 
    let theletter = document.createTextNode(letter);

    // put the letter to text node
    span.appendChild(theletter);

    // create class name to the span
    span.className = 'letter-box';

    // put the span created to the main cntainer
    lettersContainer.appendChild(span);

});


// Object to generate random words
const words = {
    programming : ["Html And Html5", "Css And Css3", "Javascript", "ES6", "Vue js", "Bootstrap", "Jquery", "Git", "Github", "Python"],
    people : ["Mohamed Almarag", "Ahmed Nour", "Osama Elzero", "Elsayed", "Hossam", "Vittoria", "Lisa", "Julia", "Kristina"],
    Paths: ["Front End", "Back End", "Full Stack", "Javascript Devloper", "Python Devloper", "Algorithm"],
    movies: ["zanderxxx", "Expendols", "Yep", "Purssit Of Happines", "Ninja"]
}

// Get AllKeys
let allkeys = Object.keys(words);

// Get Random Number Depend on allkes length
let randomPropNumber = Math.floor(Math.random() *  allkeys.length);

// get random prop name of allkes to category
let randomPropName = allkeys[randomPropNumber];

// get category words
let randomPropValue = words[randomPropName];

// random number from words
let randomPropValueNumber = Math.floor(Math.random() * randomPropValue.length);

// get random word now the word it will be choosen
let randomPropValueValue = randomPropValue[randomPropValueNumber];

// put the words in category
document.querySelector('.game-info .category span').innerHTML = randomPropName;


// select letters-gusess to make array contains the choosen word and make soan
let lettersGusessContiner = document.querySelector('.letters-gusess');

// Array on the choosen word to make sapn equal letters
let lettersAndSpace = Array.from(randomPropValueValue);

// forEach loop to create spans
lettersAndSpace.forEach(letter => {

    // create Empty Span
    let emptySpan = document.createElement('span');

    // check if the choosen word contains  space or no to do thing
    if(letter === " ") {

        // Add class on empty span
        emptySpan.className = 'with-space';
    }

    // put empty span in lettersGusessContiner
    lettersGusessContiner.appendChild(emptySpan);
});

// select the gusess spans
let gusessSpan = document.querySelectorAll('.letters-gusess span')

// set the wrong attempts to clculte the wrongs letter and write 
let wrongAttempts = 0;

// select the draw element
let theDraw = document.querySelector('.hangman-draw');

//Handle clicking on letters
document.addEventListener('click', (e) => {

    //set the status false to know if the letter right or wrong when the person click on it
    let theStatus = false;

    // check if this letter meaning sapn contains class letter-box
    if(e.target.className === 'letter-box') {

        // Add class Clicked to prevent click again in span or letter
        e.target.classList.add('clicked');
    }

    // Get the clicked letter
    let theClcikedLetter = e.target.innerHTML.toLowerCase();

    // The chossen word
    let theChoosenWord = Array.from(randomPropValueValue.toLowerCase());

    // Loop to compare the clicked letter with the word letter
    theChoosenWord.forEach((wordLetter, wordIndex) => {

        // check if the clicked letter === the word letter
        if(theClcikedLetter == wordLetter) {

            // set theStatus true 
            theStatus = true;
            
            // loop on all Gusess Spans 
            gusessSpan.forEach((span, spanIndex) => {

                //ckeck if the index of word == the index of span
                if(wordIndex === spanIndex) {

                    span.innerHTML = theClcikedLetter;
                    
                }
                /* 
                (important notic) we will put (theStatus) out side the loop because if we put 
                (theStatus)in loop or in (else) when the letter is wrong ,
                theStatus will be repeate with 
                the number of word for example (8 letters) = (theStatus 8 wrong)
                and this is soooo bad and wrong
                */
            });

        }

    });

    // out side the loop
    //check if letter is wrong
    if(theStatus !== true) {

        wrongAttempts++;

        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // check if the wrongs are 8 mistakes
        if(wrongAttempts === 8) {

            lettersContainer.classList.add('noagain');
            document.getElementById('right-word').innerHTML = `The Right Word is : ${randomPropValueValue}`;
        }

    }

});

//      //// ****   End Hangman Game     **********  ////
