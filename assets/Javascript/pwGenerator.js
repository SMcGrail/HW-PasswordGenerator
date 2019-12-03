//Define variables here:


let charSelect = [];
let passwordLength = 0;
let randomChar = 0;
let lcConfirm;
let ucConfirm;
let symbConfirm;
let numConfirm;
let finalPass = "";


//Arrays of possible characters 
const ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symb = ["!", "@", "#", "$", "%", "&"];


//Declare function to start script when Generate Button is clicked
function andStart() {
    howMany();
    askChar();
};

function howMany() {
    //Ask user to select number of characters desired in password    
    passwordLength = prompt ('How many characters would you like your password to be? (Please choose a number between 8 and 128)');

    console.log(typeof passwordLength);
    numLength = parseInt(passwordLength);
    passwordLength = numLength;

    //if number chosen by user is not within the range of 8-128 it will continue to ask until the number selected falls in the range.
    while ((passwordLength <= 7 || passwordLength >= 129) || (isNaN(passwordLength)) || (typeof passwordLength === "string")) {
        alert("Password must be between 8 and 128 characters.");
        passwordLength = prompt('How many characters would you like your password to be?');

        console.log(typeof passwordLength);
        numLength = parseInt(passwordLength);
        passwordLength = numLength;
    };
    console.log(typeof passwordLength);
    console.log(passwordLength);
};

function askChar() {
    //ask user additional parameters for password
    const ucConfirm = confirm('Would you like uppercase letters?');
    console.log(ucConfirm);
    const lcConfirm = confirm('Would you like lowercase letters?');
    console.log(lcConfirm);
    const symbConfirm = confirm('Would you like special charaters?');
    console.log(symbConfirm);
    const numConfirm = confirm('Would you like numbers?');
    console.log(numConfirm);

    //generate array of selected characters
    if (lcConfirm) {
        lcArr = charSelect.concat(lcLetters);
        charSelect = lcArr;
        console.log(charSelect);
    };


    if (ucConfirm) {
        ucArr = charSelect.concat(ucLetters);
        charSelect = ucArr;
        console.log(charSelect);
    };


    if (numConfirm) {
        numArr = charSelect.concat(num);
        charSelect = numArr;
        console.log(charSelect);
    };


    if (symbConfirm) {
        symbArr = charSelect.concat(symb);
        charSelect = symbArr;
        console.log(charSelect);
    };


    //statement in case all of the above choices are false
    if ((symbConfirm === false) && (numConfirm === false) && (lcConfirm === false) && (ucConfirm === false)) {
        alert("You need to select at least one character type to continue.");
        andStart();
    };

    //code that will create the fnal password
    for (let i = 0; i < passwordLength; i++) {
        randomChar = Math.floor(Math.random() * charSelect.length);
        finalPass += charSelect[randomChar];
    };

    console.log(finalPass);
    document.getElementById("password").value = finalPass;

};

//function to copy password to clipboard
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Passowrd Copied!")
};

function resetPw() {
    charSelect = [];
    finalPass = "";
    randomChar = 0;
    document.getElementById("password").value = "";
};