'use strict';


////Lecture What is DOM Manipulation
//see notes

///Lecture Selecting and Manipulating elements

/*
console.log(document.querySelector('.message').textContent); // what ot started out as  
document.querySelector('.message').textContent = 'Correct Number🎉'; // dom manipulation of a dom node

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Lecture Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // known as a state variable. Updates with the state. 
let highScore = 0; 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}  // refactoring strategy. see old versions for reference. 

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {
        displayMessage('⛔️ No Number'); 

    // when the player wins   
    } else if (guess === secretNumber) {
        displayMessage('Correct Number🎉');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if( score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // when guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : 'Too low 📉!'); //terenary operator 
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('😔 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
    // when the guess is too high      
    // } else if (guess > secretNumber){

    //     if(score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!'; 
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😔 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
      
    //  //when guess is too low   
    // } else if (guess < secretNumber){

    //     if(score > 1 ){
    //     document.querySelector('.message').textContent = 'Too low 📉!'; 
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😔 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    }
});


// Lecture Implementing Game Logic
// see above const secretNumber and else if statement 
//Lecture Dom Manipulation with CSS 
//see above document.querySelector('body').style.width...p5.BandPass()

// Coding Challenge # 1
/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function() {
    
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');     
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

//Lecture Implementing high score - see under when player wins

//Lecture Refactoring code


