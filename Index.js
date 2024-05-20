let age = window.prompt("what is your age");

let message = age > 50 ? "youre older than 50" : "youre younger than 50";// this is a teminary statement replaces if else statemnt 

console.log(message);

for (let i = 0; i < 10 ; i++){// for loop 
    console.log("55");
}

let numOne = 1;
let numTwo = 2;
let numThree = 3;
let numFour = 4;
let numFive = 5;


function findAverage(...numbers){// the three dots before the numbers is a rest, wich allows you to take in a numbers of variables and make them an array  

    let average = 0; 

    for(let i of numbers){  //enhanced  for loop
        average = average + i;
    }

    return average /numbers.length;
}



let averageResult = findAverage(numOne,numTwo,numThree,numFour,numFive); // method / function

console.log(averageResult);



let fruit = ["apple", "watermelon", "banana"]; // this is an array


fruit[1] = "grape"// watermelon is now a grape

fruits.push("cocunut")// adds an element to the end of an array
fruits.pop()// removes the last element 

fruits.unshift("mango ")// adds element to the beginning of an array 

let name = "ricardo";
const helloTwo = (name) => console.log('hello  ${name}');  //  = (parameters) => some code    arrow fuction  used for easy functions 


//  javascript objects 
// object = {key: value,
//            function()}

const People = {
    firstName: "Ricardo",
    lastName: "Gomez",
    race: "hispanic",
    isEmployed: true,
    sayHello: function(){ console.log("hello");}

  

    









}