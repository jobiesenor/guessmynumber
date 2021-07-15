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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // known as a state variable. Updates with the state. 


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number'; 

    // when the player wins   
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number🎉';
        document.querySelector('.number').textContent = secretNumber;

        
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
    // when the guess is too high
    } else if (guess > secretNumber){

        if(score > 0) {
        document.querySelector('.message').textContent = 'Too high 📈'; 
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😔 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
      
     //when guess is too low   
    } else if (guess < secretNumber){

        if(score > 0 ){
        document.querySelector('.message').textContent = 'Too low 📉'; 
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😔 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});


// Lecture Implementing Game Logic
// see above const secretNumber and else if statement 
//Lecture Dom Manipulation with CSS 
//see above document.querySelector('body').style.width...p5.BandPass()
