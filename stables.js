console. log("horses are great!")
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

