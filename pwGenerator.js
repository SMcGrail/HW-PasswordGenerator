//Define variables here:
//let characters = [];
//let choices = [];
let passwordLength;

//Arrays of possible characters 
const ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symb = ["!", "@", "#", "$", "%", "&"];

//Declare function to start script
function andStart() {

    //Ask user to select number of characters desired in password    
    let passwordLength = prompt('How many characters would you like your password to be?');

    //if number chosen by user is not within the range of 8-128 it will continue to ask until the number selected falls in the range.
    while (passwordLength <= 7 || passwordLength >= 129) {
        alert("Password must be between 8 and 128 characters.");
        passwordLength = prompt('How many characters would you like your password to be?');
    }

    console.log(passwordLength);

    //ask user additional parameters for password

    const ucConfirm = confirm('Would you like uppercase letters?');
    console.log(ucConfirm);
    const lcConfirm = confirm('Would you like lowercase letters?');
    console.log(lcConfirm);
    const symbConfirm = confirm('Would you like special charaters?');
    console.log(symbConfirm);
    const numConfirm = confirm('Would you like numbers?');
    console.log(numConfirm);


    //function to generate random lowercase characters
    function getRandomLc() {
        if (lcConfirm) {
            return lcLetters[Math.floor(Math.random() * lcLetters.length)];
        }

    }

    console.log(getRandomLc());

    //function to generate random uppercase letters
    function getRandomUc() {
        if (ucConfirm) {
            return ucLetters[Math.floor(Math.random() * ucLetters.length)];
        }
    }

    console.log(getRandomUc());

    //function to generate random numbers
    function getRandomNum() {
        if (numConfirm) {
            return num[Math.floor(Math.random() * num.length)];
        }
    }

    console.log(getRandomNum());

    //function to generate random symbols
    function getRandomSymb() {
        if (symbConfirm) {
            return symb[Math.floor(Math.random() * symb.length)];
        }
    }
    console.log(getRandomSymb());

    //statement in case all of the above choices are false
    if ((symbConfirm === false) && (numConfirm === false) && (lcConfirm === false) && (ucConfirm === false)) {
        alert("You need to select at least one character type to continue.");
        andStart();
    }

}

andStart();