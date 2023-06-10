let myNum = 45;

if(myNum % 3== 0 && myNum %5 !==0){
    console.log("Fizz");
}else if(myNum %5== 0 && myNum %3 !==0){
    console.log("Buzz");
}else if(myNum % 5== 0 && myNum % 3== 0){
    console.log("Fizzbuzz");
}