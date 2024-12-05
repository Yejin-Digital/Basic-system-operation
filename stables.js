//
//
//                         //       //
//                      ===          ===//
//                       ==============////
//                      =============///////
//                  ======❤️❤️❤️===========//////
//                 ====================//////  
//                   ==================//////
//                     ================//////  
//                          ===========//////                           //////
//                          ===========//////                         /////////         ❤️❤️❤️❤️❤️❤️❤️
//                          ===========/////////////                 /////////////    /
//                          =======================================//    //////    //
//                          =======================================//     ////   ///
//                           =====================================         ////////
//                           =====================================          //////
//                           =====================================            ///
//                           ==========                 ==========
//                            ========                    =======
//                              ====                        ====
//                                =                           =                           [] [] [] [] [] [] [] [] [] [] [] 
//
//
//
//
//

//Horse variable to store my horses
let horses = [];


//This is my horse properties using a constructor to add varioubles
function Horses(name, nickname, favoriteTreat, age, monthlyRentFee, color, birthPlace, isHorseInside, hungerState) {
    //the variables about horses (name, nickname, treat, age, montly rent fee, color, birthplace, inside, hungry)
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRentFee = monthlyRentFee;
    //color and birthplace is 2 more properties
    this.color = color;
    this.birthPlace = birthPlace;
    this.isHorseInside = isHorseInside; //true= inside false=outside
    //boolen to check the horses are hungry or not
    this.hungerState = hungerState;
    // Welcome, introduction, late rent fee notification, news messages using function, this is method in the constructor
    this.welcomeMessage = function () {
        console.log(`Welcome to the worderful horse world!`)
    };
    this.horseIntroduction = function () {
        console.log(`Welcom to horse world. My name is ${this.name}. I'm ${this.age} years old, and I like to eat ${this.favoriteTreat}`);
    };
    //This is method(fucntion) to log out the late rent fee
    this.lateRentFee = function () {
        console.log(`There is a late payment fee, and it costs 10% of montly rent fee. So, for the ${this.name}, you should pay $${this.monthlyRentFee*0.1} more.So, its total cost is ${this.monthlyRentFee}`)
    };
    //This new method sentence
    this.newsMessage = function () {
        console.log(`In rainy day, we are not opened. Sorry about that.`)
    };
}

//This is my horses with variables
const horseOne = new Horses("Pink", "Pong", "Tangerine", 5, 500, "Brown", "Jeju Island", true, false);
const horseTwo = new Horses("Orange", "Ping", "Carrot", 7, 200, "Gray", "France", false, true);
const horseThree = new Horses("Lemon", "King", "Apple", 2, 300, "White", "Austrailia", false, true);

//add my horses into the horses array
horses.push(horseOne)
horses.push(horseTwo)
horses.push(horseThree)

//This is log out the late rent fee to check that my code is working or not
horseOne.lateRentFee();

// adding a new horse in my norses variable
const newHorse = new Horses("Penny", "Coco", "beans", 4, 600, "speckled pattern", "London", true, false);
horses.push(newHorse)

console.log(horses);


//available stalls conditional coding
let totalStalls = 8;

if (totalStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${totalStalls-horses.length} available!`);
}

//loop to log out they like the treat or not
let treat = "beans"
for (let horse of horses) {
    if (horse.favoriteTreat === treat) {
        console.log(`${horse.name} loves ${treat}!`);
        break;
    } else {
        console.log(`${horse.name} doesn't like ${treat}.`);
    }
}

//nickname output to use return it not log out
function outNickname(horses) {
    return horses.nickname;
}
//This is log out to check the above code is working or not
console.log(outNickname(horses[0]));

//this is conditional to output my unique properties(birthPlace)
function birthPlace(horses) {
    if (horses.birthPlace === "France") {
        console.log(`${horses.name} is from France`)
    }
}

birthPlace(horses[1]);


//I made a function to set the location of the horses using conditional 
function changeLocationHorse(horse,age) {
    if (2>= age > 6) {
        console.log(`${horse.name} has been moved outside.`);
    } else {
        console.log(`${horse.name} is already outside!`)
    }
}

//This is the loop for bring the horses back if they are outside 
function changeLocationHorse() {
    for (let i = 0; i < horses.length; i++) {
        if(horses[i].isHorseInside === true) {
            horses[i].isHorseInside = false;
            console.log("All the horses are outside")
        }
    }
}
    

//This is the feed time function with conditional state
function feedHorses() {
    for (let i = 0; i < horses.length; i++) {
        if(horses[i].isHorseInside === true) {
            horses[i].isHorseInside = true;
            console.log("It's time to feed!");
        } else {
            horses[i].isHorseInside = false;
            console.log("Come back inside, It's time to feed!")
        }
    }
}

//Bed time function to call the horses which are in outside
function bedtime() {
    for (let i=0; i < horses.length; i++) {
        if(horses[i].isHorseInside === true) {
            horses[i].isHorseInside = true;
            console.log("It's time to go to bed!, Come back to the stall.");
        } else {
            horses[i].isHorseInside = false;
            console.log("All horses is inside for the sleep.")
        }
    }
}






