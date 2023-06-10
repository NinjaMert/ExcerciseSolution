let sales = 0;

if (sales >= 70) {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", true);
} else {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", false);
}
//----------------


let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 0;

if ((sciFiDepartmentSales >200 && sciFiDepartmentSales <500) || (crimeDepartmentSales >200 && crimeDepartmentSales <500)) {
  console.log("Did at least one department between Sci-Fi and Crime sell between 200 and 500 books?", true);
} else {
  console.log("Did at least one department between Sci-Fi and Crime sell between 200 and 500 books?", false);
}



//--------------------------------------

let sciFiDepartmentSales1 = 0;
let crimeDepartmentSales2 = 0;
let comicBookDepartmentSales = 0;

if ((sciFiDepartmentSales1 >200 && sciFiDepartmentSales1 <500) || (crimeDepartmentSales2 >200 && crimeDepartmentSales2 <500)|| (comicBookDepartmentSales>200 && comicBookDepartmentSales <500 ))
 {
  console.log("Did at least one department between Sci-Fi, Crime or comic sell between 200 and 500 books?", true);
} else {
  console.log("Did at least one department between Sci-Fi, Crime or comic sell between 200 and 500 books?", false);
}

//---------------------------------

let cookingDepartmentSales = 0;
let drawingDepartmentSales = 0;

if(cookingDepartmentSales && drawingDepartmentSales >300 ){
  console.log("Yes both DepartmentSales did indeed sell 300 or more units");
}else{
  console.log("no they did not sell 300 or more units");
}

//--------------------------------------------------------------

const cookingDepartmentSales2 = 400;
const drawingDepartmentSales2 = 500 ;

if(cookingDepartmentSales2 > drawingDepartmentSales2){
  console.log("the cooking department store did sell more");
}else{
    console.log("the drawing department store did sell more");
}

let sciFiDepartmentSales3 = 50;
let crimeDepartmentSales3 = 80;
let comicBookDepartmentSales3 = 800;

if(sciFiDepartmentSales3 > crimeDepartmentSales3 && sciFiDepartmentSales3 > comicBookDepartmentSales3){
  console.log("sciFiDepartmentSales3 is the biggest with "+sciFiDepartmentSales3);
}else if(crimeDepartmentSales3 > sciFiDepartmentSales3 && crimeDepartmentSales3 > comicBookDepartmentSales3){
  console.log("crimeDepartmentSales3 is the biggest with "+crimeDepartmentSales3);
}else if(comicBookDepartmentSales3 > sciFiDepartmentSales3 && comicBookDepartmentSales3 > crimeDepartmentSales3){
  console.log("comicBookDepartmentSales3 is the biggest with "+comicBookDepartmentSales3);
}

//-----------------------------------

let sciFiDepartmentSales4 = 324;
let crimeDepartmentSales4 = 500;
let comicBookDepartmentSales4 = 700;

let totalSalesLastYear = 3000;
let totalSalesGoal = 5000;

let total = sciFiDepartmentSales4 + crimeDepartmentSales4 + comicBookDepartmentSales4;
console.log(total);

if(total < totalSalesLastYear){
  console.log(":(");
}else if(total > totalSalesLastYear && total < totalSalesGoal){
  console.log("good but we can do better!");
}else if(total > totalSalesGoal){
  console.log("LETS GOOOOOOOOO");
}

//------------------------

let day = "monday";
let bookPrice = 16;

if(day == "saturday" || day == "sunday"){
  console.log("You will get a 50% discount habibis");
}else {
  console.log("You will not get a 50% discount you naughty kiddo");
}


//--------------------


//TERNARY OPERATOR

  let isMarried = "true";

  if(isMarried == "true"){
    console.log("john is happily married");
  }else {
    console.log("john is not married");
  }
//------------------------------

  const discount = 30;
  const Pay = 100;

  if(Pay > discount){
    console.log(`With a payment of ${Pay} bucks you will get an discount of 30 bucks`);
  }else if(discount > Pay){
    console.log("you will have to pay 0 bucks");
  }

  //----------------------------------

  let itIsRaining = true;
  
  if(itIsRaining){
    console.log("you better stay at home");
  }else {
    console.log("Go out!!");
  }



  //TERNARY OPERATOR AND LOGIC 

let hour = 9;
let action = hour >= 9  ? "It's late, wake up!" : "Go back to bed";

console.log(action);


//---------------------------------

let cartTotal = 50;
let shippingCosts = cartTotal >= 50 ? "0" : "9.99" ;

console.log(
  `With a cart of ${cartTotal}€ the shipping costs amount to ${shippingCosts}€`
);

//--------------------------------------

let day2 = "Sunday";
let mood = day2 === "Saturday" || "sunday" ? "YAY!, it's the weekend" : "work :(";

console.log(mood);

//--------------------------------

let isBackEndDeveloper = false;
let isFrontEndDeveloper = true;

let isFullStackDeveloper = isBackEndDeveloper && isFrontEndDeveloper;

console.log(
  `Gina ${isFullStackDeveloper ? "is" : "is not"} a full-stack developer`
);

//--------------------------

let isEmailCorrect = true;
let isPasswordCorrect = true;

let message = isEmailCorrect && isPasswordCorrect == true
    ? "You logged in successfully!"
    : "The email or the password you typed were not correct. Try again.";

console.log(message);   

//-------------------------

let isLoggedIn = false;

let message2 = !isLoggedIn ? "Please login before proceeding." : "Welcome!";

console.log(message2);

//-----------------------