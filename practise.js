//Practise 1
//Formula used - BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// let marksHeight = 1.69;
// let marksMass = 78;
// let johnsHeight = 1.95;
// let johnsMass = 92;

// let marksBmi = marksMass / marksHeight ** 2;
// let johnsBmi = johnsMass /  johnsHeight ** 2;
// console.log(marksBmi,johnsBmi);

// let markHigherBMI = marksBmi > johnsBmi;
// console.log(markHigherBMI);

//STRINGS AND TEMPLATE LITERALS

// const myName = "Sudhanshu";
// const age = 27;
// const job = "Developer";

// const aboutMe = `I'm ${myName} and I'm ${age} years old. I am a ${job}`;
// console.log(aboutMe); 

//Practise 2
// let marksHeight = 1.69;
// let marksMass = 78;
// let johnsHeight = 1.95;
// let johnsMass = 92;

// let marksBmi = marksMass / marksHeight ** 2;
// let johnsBmi = johnsMass /  johnsHeight ** 2;

// if (marksBmi > johnsBmi){
//     console.log(`Marks BMI which is ${marksBmi} is higher than Johns`);
// } else {
//     console.log(`John BMI which is ${johnsBmi} is higher than Marks`);
// }

// //Types and Coercion
// //Type Conversion
// const year = '2001';
// console.log(Number(year));
// //Type Coercion
// console.log('I am ' + 27 + ' years old.');
// console.log('21' - '1' - 10);

//Truthy and Falsy
//5 falsy values : 0,'',undefined,null,NaN
// let money = 0; //0 is falsy value
// if (money){
//     console.log("Spend it wisely");
// } else {
//     console.log("Start earning money then!");
// }

// let height; //undefined is falsy value
// if (height){
//     console.log("Height is defined");
// } else {
//     console.log("Heigh is undefined");
// }

// //Boolean Logic OR, AND, NOT 
// const age = 25;
// const gender = "male";

// if (age === 25 && !gender === "male"){ // AND needs both to be true, ! inverts ture to false and vice versa
//     console.log("You can booz");
// } else {
//     console.log("Girls can also booz..LOL");
// }

// if (age === 25 || gender === "female"){ // OR needs only one to be true
//     console.log("You can booz");
// } else {
//     console.log("Girls can also booz..LOL");
// }

//Practise 3
// const dolphinAvgScore = (2 + 2 + 11) / 3;
// const koolaAvgScore = (2 + 2 + 11) / 3;

// if (dolphinAvgScore > koolaAvgScore && dolphinAvgScore >= 100) {
//     console.log("Dolphin's are the Winner");
// } else if (koolaAvgScore > dolphinAvgScore && koolaAvgScore >= 100){
//     console.log("Koola's are the winner");
// } else if (dolphinAvgScore === koolaAvgScore && dolphinAvgScore >= 100 && koolaAvgScore >=100){
//     console.log("It's a Draw");
// } else {
//     console.log("No one wins..");
// }

//Switch VS If Else
// const day = "Sunday";
// switch (day){ // day === "Sunday"
//     case "Monday" :
//         console.log("Chest Day");
//         break;
//     case "Tuestday" :
//         console.log("Shoulder Day");
//         break;
//     case "Wednesday" :
//     case "Thursday" :
//         console.log("Cardio Day");
//         break;
//     case "Friday" :
//         console.log("Biceps and Triceps Day");
//         break;
//     case "Saturday" :
//         console.log("Legs Day");
//         break;
//     case "Sunday" :
//         console.log("Take Rest! :)");
//         break;
//     default :
//         console.log("Not a valid day");
// }
// const day = "Friday";
// if (day === "Monday"){
//     console.log("Chest Day");
// } else if (day === "Tuesday"){
//     console.log("Shoulder Day");
// } else if (day === "Wednesday" || day === "Thursday"){
//     console.log("Cardio Day");
// } else if (day === "Friday"){
//     console.log("Biceps and Triceps Day");
// } else if (day === "Saturday"){
//     console.log("Legs Day");
// } else if (day === "Sunday"){
//     console.log("Take Rest! :)");
// } else {
//     console.log("Not a valid day");
// }
//Ternary Operator VS If Else Operator
// const age = 21;
// const whatToDrink = age >= 25 ? "Whiskey" : "Water";
// console.log(`You can drink ${whatToDrink}`);
// console.log(`Please drink ${age >= 25 ? "Whiskey" : "Water"}`);
// let whatToDrink2;
// if (age >=25){
//     whatToDrink2 = "Whiskey";
// } else {
//     whatToDrink2 = "Water";
// }
// console.log(`You can drink ${whatToDrink2}`);
//
//Practise 4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
// console.log(`Total bill was ${bill} and tip was ${tip} and total was ${bill + tip}`); 
//
//Use Strict
// 'use strict';
// let hasLicense = false;
// const passTest = true;
// if(passTest) hasLic = true;
// if(hasLicense) console.log("I can drive");
//
//Functions
// function foodProcessor(apple,orange){
//     console.log(apple,orange)
//     const juice = `Juice is made up of ${apple} apples and ${orange} oranges`;
//     return juice;
// }
// console.log(foodProcessor(1,2));
//Function Declaration and Function Expression
//Function Declaration
// const year = 2021;
// function age(birthYear){
//     return year - birthYear;
// }
// const currentAge1 = age(1993);
// console.log(currentAge1);
// //Function Expression
// const currentAge2 = function (birthYear){
//     return year - birthYear;
// }
// console.log(currentAge2(1993));
//Arrow Functions
// const age = birthYear => 2021 - birthYear;
// console.log(age(1993));
// const yearUntilRetirement = (birthYear,name) => {
//     const age = 2021 - birthYear;
//     const yearLeftUntilRetirement = 60 - age;
//     return yearLeftUntilRetirement;
// }
// console.log(yearUntilRetirement(1993,"Sudhanshu"));
// console.log(yearUntilRetirement(1990,"Karan"));
/////////////////////////////////////////////////
//Calling function inside a function
// const add = function (a,b){
//     return a+b;
// }
// const sub = function (a,b){
//     return a-b;
// }
// const cal = function (num1,num2){
//     const addNumber = add(num1,num2);
//     const substractNumber = sub(num1,num2);
//     return `Addition is ${addNumber} and Substraction is ${substractNumber}`;
// }
// console.log(cal(4,3));
//Practise 5
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const dolphinScore = calcAverage(85,54,41);
// const koalasScore =  calcAverage(23,34,27);
// const checkWinner = function (avgDolphins,avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
//     }
//     else {
//         console.log("No one wins :(");
//     }
// }
// checkWinner(dolphinScore,koalasScore);
///////////////////////////////////////////////////
//Arrays
// const mySelf = ["Sudhanshu","Singh",27,"Developer","Melloit",["Utkarsh", "Rohit", "Shivam"]];
// console.log(mySelf);
// console.log(mySelf[0]);
// console.log(mySelf[1]);
// console.log(mySelf[2]);
// console.log(mySelf[3]);
// console.log(mySelf[4]);
// console.log(mySelf[5]);

// const firstName = "Sudhanshu";
// const friends = ["Robin,Udit"];
// const companyFunction = () => console.log("Melloit"); 
// const newMyslef = [firstName, frineds, 2021 - 1993, companyFunction()];
//Arrat Methods (Array Functions)
// const friends = ["Robin","Udit"];
// friends.push("Achint");//add element end of array
// console.log(friends);
// friends.unshift("Gurung");//add element start of array
// console.log(friends);
// //Remove elements
// friends.pop();// last element
// console.log(friends);
// //pop returns the value it omits from array
// const popped = friends.pop();
// console.log(popped);
// const evenNumber = [2,4,6,8];
// console.log(evenNumber.indexOf(4));//returns index of element
// console.log(evenNumber.includes(2));//returns boolean
// if(evenNumber.includes(2)){
//     console.log("its a even number");
// }
//////////////////////////////////////
//Practise 6
// const calcTip = (bill) => {
//     if (bill >= 50 && bill <=300){
//         return 15 / 100 * bill;
//     } else {
//         return 20 / 100 * bill;
//     }
// }
// const bills = [125,555,44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);
///////////////////////////////////////
//OBJECTS
// const mySelf = {
//     firstName : "Sudhanshu",
//     lastName : "Singh",
//     age : 2021 - 1993,
//     job : "Developer",
//     technology : ["React", "Angular", "Vue"]
// }
// mySelf.location = "Greater Noida";
// mySelf['Company'] = "Melloit";
// console.log(`${mySelf['firstName']} knows ${mySelf['technology'].length} technologies`);
///////////////////////////////////////
//OBJECTS METHODS
// const mySelf = {
//     firstName : "Sudhanshu",
//     lastName : "Singh",
//     job : "Developer",
//     technology : ["React", "Angular", "Vue"],
//     calcAge : function(birthYear){
//         return (new Date().getFullYear()) - birthYear;
//     }
// }
// console.log(mySelf.calcAge());
// console.log(mySelf['calcAge']());
// const mySelf = {
//     firstName : "Sudhanshu",
//     lastName : "Singh",
//     birthYear : 2013,
//     calcAge : function(){
//         return (new Date().getFullYear()) - this.birthYear;
//     },
//     getSummary : function(){
//         console.log(`${this.firstName} ${this.lastName} has ${this.calcAge() > 18 ? "Driving License" : "No Driving License"}`);
//     }
// };
// mySelf.getSummary();
///////////////////////////////////////
//Practise 7
// const markObject = {
//     fullName : "Mark Miller",
//     mass : 78,
//     height : 1.69,
//     calcBMI : function(){
//         return this.mass / this.height**2
//     }
// }
// const johnObject = {
//     fullName : "John Abraham",
//     mass : 92,
//     height : 1.95,
//     calcBMI : function(){
//         return this.mass / this.height**2
//     }
// }
// console.log(markObject.calcBMI() > johnObject.calcBMI() ? `${markObject.fullName}'s BMI(${markObject.calcBMI()}) is heigher than ${johnObject.fullName}` : `${johnObject.fullName}'s BMI(${johnObject.calcBMI()}) is heigher than ${markObject.fullName}`);
////////////////////////////////////
//Loops
// for (let reps = 1; reps <= 25; reps++){ //counter initiation; counter logical condition; counter increment
//     console.log(`I do push up with REPS = ${reps}`);
// }
// const getTypeArray = [];
// const data = ["Sudhanshu", 1993, true];
// for(let i = 0; i < data.length; i++){
//     getTypeArray.push(typeof data[i]);
// }
// console.log(getTypeArray);
//Continue and Break
//Continue
// for(let i=0; i < 10; i++){
//     if(i === 3) continue;
//     console.log(i);
// }
//Break
// for(let i=0; i < 5; i++){
//     if(i === 2) break;
//     console.log(i);
// }
/////////////////////////////////////////////
//Reverse Loop
// const number = [1,2,3,4,5];
// for(let i = number.length - 1; i >= 0; i--){
//    console.log(number[i]);
// }
//Loop Nesting
// for(let exercise = 1; exercise <= 3; exercise++){
//    console.log(`Exercise = ${exercise}`);
//    for(let rep = 1; rep <= 5; rep++){
//       console.log(`Repetitions = ${rep}`)
//    }
// }
// //While Loop
// let loop = 1;
// while(loop <=5){
//    console.log(loop);
//    loop++;
//}
// let dice = Math.trunc(Math.random() * 6) + 1;//Math.trunc rounds toward 0, Math.floor rounds toward negative infinity, Math.ceil rounds towards positive infinity
// while(dice !== 6){
//    console.log(`Dice rolls out : ${dice}`);
//    dice = Math.trunc(Math.random() * 6) + 1;
//    if(dice === 6) console.log('Loop is gonna TERMINATE...');
// }
//Practise 8
// const calcTip = (bill) => {
//    return bill >= 50 && bill <= 300 ? 15 / 100 * bill : 20 / 100 * bill;
// }
// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const total = [];
// for (let  i = 0; i < bills.length; i++){
//    const tip = calcTip(bills[i]);
//    tips.push(tip);
//    total.push(tip + bills[i])
// }
// const calcAverage = (arr) => {
//    let sum = 0;
//    for(let i = 0; i < arr.length; i++){
//       sum += arr[i];
//    }
//    return sum / arr.length;
// }
// console.log(calcAverage(total));