console.log("horses are great!")
let horseName = "Pretty"; // what ever I can write in this section
horseName = "Remarkable"; // for strings, prefer double quotes
horseAge = 10;
console.log(horseName);
console.log(horseAge);
let isHorseInside = true;  
console.log(isHorseInside);
horseName = "Pretty"
console.log(horseName);



console.log(typeof 890);
console.log(typeof "890");


const STABLE_MONTHLY_FEE = 100;



console.log(STABLE_MONTHLY_FEE + STABLE_MONTHLY_FEE);
console.log(STABLE_MONTHLY_FEE * 123);
console.log(STABLE_MONTHLY_FEE / 50);



////////LESSON 4 CODE //////
let horseNickname = "swift horse in the world!";
console.log(horseNickname);

let horseIntroduction = `${horseName} is my horse's name, and nickname of pretty is ${horseNickname}`;
console.log(horseIntroduction);


let feeIntroduction = `The monthly fee is usually, $ ${STABLE_MONTHLY_FEE} per month.`;
console.log(feeIntroduction);

let discoutEvent = `Get 10% discount for three month!, you purchase only $ ${STABLE_MONTHLY_FEE*3*0.9}.`;
console.log(discoutEvent);


///Lesson-5 Code///
let visitingHorseName = "Lemon";

if (horseName === "Pretty" && visitingHorseName === "Lemon" && isHorseInside)
{ console.log (`${horseName} is inside with his visitor ${visitingHorseName}`);
} else if (horseName === "Pretty" && visitingHorseName === "Strawberry" && !isHorseInside) {
    console.log (horseName + " is outside with" + visitingHorseName);
} else {
    console.log (horseName + " has no visitor today.");
}

///Lesson-6 Code///

//Horse = ["name", gae, isInside, "nickName"]//
let horseOne = [horseName, horseAge, isHorseInside, horseNickname];
let horseTwo = ["Strawberry", 2, false, "Pie"];

let horseNames = [horseName, "Strawberry", "Orange"];
let horseAges = [horseAge, 2, 10];
let horseNicknames = [horseNickname, "pie", "Arthur"];
let areHorsesInside = [isHorseInside, false, true];

console.log(horseOne);
console.log(horseTwo);

//length means that how many items are in the arrays//
console.log(["Strawberry", 2, false, "Pie"].length);

horseOne.push("blue");
console.log(horseOne);

console.log(horseOne[0] + "'s nickname is " + horseOne[3]);
console.log(`${horseTwo[0]}'s nickname is ${horseTwo[3]}`);

console.log(horseOne[1] + horseTwo[1]);

if (horseOne[1] === 3) {
    console.log(horseOne[0] + " is 3");
} else {
    console.log(horseOne[0] + " is NOT 3");
}

console.log(horseOne[0] + " and " + horseTwo[0] + " are staying at the stables");

let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, ${horseNames[2]}!`;
console.log(horseIntro);

let differentHorseIntro = " There are " +  horseNames.length + " horses staying at my stables: " + horseNames[0] + " , " + horseNames[1] + " , " + horseNames[2] + "!";
console.log(differentHorseIntro);

///Lab - branch lesson-6 (done by Sunday)
// Stables.js
// - Output an introduction to your horses
// - Output whether your horses inside or outside AT LEAST 3 HORSES!!!
//Readme
// 3 confusing things
// 3 things you feel like you have a solid understanding of
// Analogies that you use to think about things (gif) 


let horseThree = ["Ubin", 10, "Pineapple"];
let horseFour = ["Jisoo", 13, "Cherry"];
let horseFive = ["Seuyoung", 5, "Apple"];

console.log(horseThree);
console.log(horseFour);
console.log(horseFive);

let horseMultipleIntro = " There are " +  horseThree.length + " horses in my garden, " + " and " + " their names are " + horseThree[0] + ", " + horseFour[0] + ", " + horseFive[0] + "!"
                          + " They have nicknames which are " + horseThree[2] + ", " + horseFour[2] + ", " + "and " + horseFive[2] + ".";
console.log(horseMultipleIntro);

let horseLocation = " Today, the whether is sunny so that " + horseThree[0] + " and " + horseFour[0] + " is outside to walk around" + ", but " + horseFive[0] + " is in the stable because she is sick. ";
console.log(horseLocation);  

//This is lesson-6//

