const { log } = require("console");

let hour = 10;

if(hour > 8){
    console.log("Get up");
}else {
    console.log("Go back to sleep");
}

//-----------------------------------

const hasFinishedHomerwork = false ;

if(hasFinishedHomerwork === false){
    console.log("Keep studying");
}else{
    console.log("play videogames");
}

//------------------------

const cartValue = 50;
const devliverycost =9.99;
let total = cartValue;

 if(cartValue < 40){
    total =total + devliverycost;
 }
 console.log(`The total amount is: ${total}€`);


//-------------------------------------------

const n=9;

if(n % 3){
    console.log(`${n} is divisible by 3`);
}else{
    console.log(`${n} is divisible by 3`);
}

//--------------------------------


let userName = "John";

if(!userName){
    console.log("Hello Guest");
}else{
    console.log(`Welcome Back ${userName}`);
}

//---------------------
person1Name = "tugra";  
person1Age = 13;
person2Name = "tuana";
person2Age = 15;

if(person1Age > person2Age){
    console.log(`${person2Name} is the youngest`);
}else{
    console.log(`${person1Name} is the youngest`);
}

//-------------------------

const mode = 'light';
let background;
let textColor;

if(mode == 'light'){
    background = 'white';
    textColor = 'black';
}else if(mode == 'black'){
        background = 'black';
        textColor = 'white';
     }else {console.log("the mode is not valid");
     }
console.log(mode);
console.log(background);
console.log(textColor);

//------------------------


isMilkAvailable =true;
isBreadAvailable =false;
isAppleAvailable=false;

if(isBreadAvailable == true){
    console.log("eat a sandwich");
}else if(isMilkAvailable == true){
    console.log("some cereal will be fine");
}else if (isAppleAvailable == true){
        console.log("an apple is fine too");
}else {
    console.log("I will have some breakfast outside");
}

const n2= 10;

if(n2 % 2==0){
    console.log("the number is an even one");
}else {
    console.log("the number is odd");
}

const x = 20;
const y = 30;

if(x == y){
    console.log("x is equal to y");
}else if(x > y){
    console.log("x is bigger than y");
}else if(x<y){
    console.log("y is smaller than x");
}

const password = "Aha";

if(password.length > 8 && (password.slice(-1)!== password.charAt(0)) && (password !== "12345678") && (password.charAt(0) !== " ") && (password.slice(-1)!== "!")){
    console.log("the password is valid") ;
}else {
    console.log("the password is not valid");
}


  


