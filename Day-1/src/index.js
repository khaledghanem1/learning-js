import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
/*
const consoleLogThis = (text) => {
  console.log(text);
};

consoleLogThis("hi im so nice");
consoleLogThis("hi im so nice");
consoleLogThis("hi im so nice");
consoleLogThis("hi im so big");
consoleLogThis("hi im so mean");

const addNumbers = (numA, numB) => {
  console.log(numA + numB);
};

addNumbers(1, 4); //5

addNumbers(1, "4"); //14

const fullName = (fName, lName) => {
  console.log("hello " + fName + " " + lName);
};

fullName("sakina", "shivji");// hello sakina shivji
fullName("Khaled", "Ghanem");// hello khaled ghanem

var string = "hi"; //quote
var stringNum = "2"; //quote
var number = 1; //no quote, just number
var boolean = false; //true false



// get name + age
// check if age is over 18
// if there age is over 18 say "CONGRATS [NAME] toy in!"
// if there not over 18 say "sorry your age is under "
              // Ali,    5
const checkAge = (name, age) => {
  if (age >= 18) {
    console.log("Congrats" + name)
  } else {
   console.log("sorrrrry" + name)
  }
}

checkAge("Ali", 5)// sorrryyy ali
checkAge("Sakina", 21)//congrats sakina


// creat function with a name + fav colors
// if their fav color is purple = my fav color is also purple + their name
// if their fav color is yellow = "eww" + name
//// if their fav color is red = "we all love red" + name
//// if their fav color is anything else = "i dont care about you!" + name

const selectColor = (name, favColor) => {
  if (favColor === "purple") {
    console.log("my fav color is also purple " + name);
  } else if (favColor === "yellow"){
    console.log("eww " + name);
  } else if (favColor === "red"){ 
    console.log("we all love red! "+ name);
  } else {
    console.log("i dont care about you!" + name);
  }
};
selectColor("Ali", "blue");//i dont care about you! ali
selectColor("Khaled", "red");// we all love red khaled
selectColor("Sakina", "purple")//my favr color is also purple sakina
selectColor("gamosa", "yellow")// eww gamoussa 


// get height & name & weight 
// if shorter than 120 cm & weight less than 100pound + " short & skinny" + [name]
// if their between 120 & 160 7 their weight is betweejn 100 & 140 " your normal" + [name]
// if their above 160 cm & their weight is about 140 pounds " big n tall" + [name]
const checkHeightWeight = (height, weight, name) => {
  //          200 x   300 x
  if (height < 120 && weight < 100) {
    console.log("short & skinny"+ name); 
              // 200 yes      200 no              300 yes            300 no 
  } else if ((height => 120 && height <= 160) && (weight => 100 && weight <= 140)) {
    console.log("youre normal"+ name);
  } else { //height 120+ weighr 140+
    console.log("big n tall"+ name);
  }
};
checkHeightWeight(110, 99, "khaled"); // short and skinny khaled
checkHeightWeight(130, 130, "sakina")//
checkHeightWeight(200, 300,"gym")
checkHeightWeight(161, 141, "lll"); 
*/
//0  //1 //2
//var numArray = [5, 4, 8, 9, 3];

//console.log(numArray)
//console.log("third item " + numArray[2])

const checkArrayLessThanFive = (numArray) => {
  for (var index = 0; index < numArray.length; index++) {
    //console.log("for loop "  + numArray[index])
    if (numArray[index] <= 5) {
      console.log("this is less than/= to 5: " + numArray[index]);
    } else {
      console.log("these are above 5: " + numArray[index]);
    }
  }
};

checkArrayLessThanFive([1, 4, 5, 6, 3]);
checkArrayLessThanFive([4, 5, 6, 7, 4]);

//creat function takes in an array[colors]
// check if the color is blue then "like this sky"
// black " like the night"
// yellow "like the sun"
// else "sorry i dont have a metaphor for you"
const checkArrayColor = (colorArray) => {
  for (var index = 0; index < colorArray.length; index++) {
    if (colorArray[index] === "blue") {
      console.log("like the sky " + colorArray[index]);
    } else if (colorArray[index] === "black") {
      console.log("like the night " + colorArray[index]);
    } else if (colorArray[index] === "yellow") {
      console.log("like the sun" + colorArray[index]);
    } else {
      console.log("sorry i dont have a methaphor for you");
    }
  }
};

checkArrayColor(["blue", "yellow", "black", "pink"]);
