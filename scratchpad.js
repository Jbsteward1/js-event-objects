// // Write a function that returns the number of true values in a given array.

// var numberCount = 0
// function trueValue(booleans){
//     booleans.forEach(function(boolean){
//         if (boolean === true ){
//             numberCount += 1
//         }

       
//     })
//     return numberCount
    

//  }
// trueValue([true, true, true, false, false])
// console.log(trueValue(["true", 1, true , false]))



//Create a function that takes in an integer and returns it in seconds 
// var a = 60
// var b = 5

// function convertToSeconds(b, a) {
// 	return b * 60;
// }
// console.log(convertToSeconds(5, 60));

//Create a function that takes an integer and returns the numbers in days

// var a = 365
// var b = 12

// function ageToDays(a, b){
//     return b * 365
// } 
// console.log(ageToDays(12,365));

//Create a function that creates the next number pass


// function number(x){
//     let newNumber = x + 1;
//     console.log(newNumber);
// }
// number(1020);

//Create a function that returns the base and height if a traingle and returns the area
//  var a = 45
//  var b = 55

//  function baseXHeight(a,b){
//      let area = a * b / 2
//      return(area);
//  }
// console.log(baseXHeight(a,b));


// EASIER WAY TO WRITE ARMONIS TRIANGLE FUNCTION
// const triangleArea =(base, height) => (base * height) / 2

// console.log(triangleArea(33,17))

// Create a function that add all the numbers from a single number 

// function addNumbers(x){
//     let newNumber = 0; 
//     for (let i = 0; i <= x; i++){
//        newNumber = newNumber + i
//     }
//     console.log(newNumber)
// }
// addNumbers(17);
// EASIER WAY TO ADD NUMBERS FROM A SINGLE NUMBER

// function addUp(num) {
//     return (num * (num + 1))/2;
//   }
// console.log(addUp(6));


// Using this array of drinks {each drink being an object with two properties: name and price.} Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// drinks = [
//     {name:"lemonade",
//     price: 50
//     },
//     {name:"lime",
//     price: 10
//     },
//     {name:"apple",
//     price: 40
//     },
//     {name:"orange",
//     price: 20
//     }
// ];
// let drinkAsc = drinks.sort((cra,zy) => cra.price - zy.price);
// console.log(drinkAsc);

// Create a function that takes a string and reverses it


/**
 * Create a function that takes in a string and reverse the string 
 * recursion built in mechanisms 
 */


//  function reverseString(str) {
//     let splitString = str.split("").reverse().join("");

//     return splitString;
    
// }

// console.log(reverseString("hello"));/**
//  * Create a function that takes in a string and reverse the string 
//  * recursion built in mechanisms 
//  */


// function reverseString(str) {
//     let splitString = str.split("").reverse().join("");

//     return splitString;
    
// }

// console.log(reverseString("hello"));/**
//  * Create a function that takes in a string and reverse the string 
//  * recursion built in mechanisms 
//  */


// function reverseString(str) {
//     let splitString = str.split("").reverse().join("");

//     return splitString;
    
// }

// console.log(reverseString("hello"));



// console.log(12345);

// console.log(typeof 12345);

// console.log(typeof 1234.456);

// console.log( typeof true);

// console.log(new Date);

// console.log(typeof null);
// // array its a list like in python
// function printName() {
//     console.log("Troy Wilson")

// }

// printName();

// function sayHello(name){
//     console.log("Hello," + name);
// }


// sayHello("Jeremy")


// function createVariables(){
//     // creating a variable GLOBAL SCOPE...Available anywhere


// }

// createVariables();

// // var firstName ="Jeremy";

// // let middleName = "Bryant";

// // const lastName = "Steward"

// var firstName = "Jeremy";

// let age = 29;

// console.log(firstName, age)

// // *CONSTANT VARIABLE CANT BE REASSIGNED*


// const email = "jbsteward1@gmail.com";

// console.log(email);



// const user = {
//     firstName: 'Jeremy',
//     age: 33

// };

// console.log(user)

// function sayName(){
//     console.log(firstName);
// }
// // changes the object/dictionary with constant variable
// user["age"] = 34;

// console.log(user);


// const numbers = [1, 2, 3, 4, 5, 6];
// console.log (numbers);

// numbers.push(10, 12 ,47, 69);
// console.log(numbers);



// function sayHello(name){
// console.log('hello', name);
// console.log('hello', name);
// }
// sayHello();



// function add(x,y) {
//     return x + y;
// }

// const sum = add(5,7);
// console.log(sum);

// function add(x, y) {
//     const total = x + y;
//     return total;
// }

// const sum = add(5, 7);

// console.log(sum);


// function subtract(x, y) {
//     const total = x - y;

//     return "OMG";
// }

// const sum = subtract(100, 27);
// console.log(sum);

// const age = 11;
 
// if (age >= 21){
//     console.log( 'you may enter')
// }else if ( age >= 18)
// {
//     console.log('not just yet buddy...')
// }else{
//     console.log('bye...')
// }
// nothing is gonna happen
// CONDITIONAL STATEMENTS PASS IN VALUE YOU WANT TO BE EVALUATED(AGE) THEN CHECKS AGAINST CASES
// const age = 21;

// switch (age) {
//     case 21:
//         console.log('you may enter...');
//         break;
//     case 18:
//         console.log('not just yet buddy...');
//         break;
//     default:
//         console.log('bye...');
//         break;
// }
 
 /* For Loop
 *variable/vaule , condition , iterator

1) Get a value
2) Check condition
3) If true, execute code block
4) iterate ()
 
//  */
// let x = 0


// for (let x = 0; x <10; x++) {
//     console.log(x);
// }

// while (x < 10) {
//     console.log(x);

//     x++;
// }


// /* 1) How to create a function
// * 2) How to return a value from a function
// * 3) How to interrpret a string
// */

// function tipAmount(billAmount, serviceLevel) {
//     let serviceLevels = {
//         good: .20,
//         fair: .15,
//         poor: .10,
//     };


//     return billAmount * serviceLevels[serviceLevel];
// }
// console.log(tipAmount(100, "fair"));




// function cipher(string, offset){
//     let letters =[
//         "a",
//         "b",
//         "c",
//         "d",
//         "e",
//         "f",
//         "g",
//         "h",
//         "i",
//         "j",
//         "k",
//         "l",
//         "m",
//         "n",
//         "o",
//         "p",
//         "q",
//         "r",
//         "s",
//         "t",
//         "u",
//         "v",
//         "w",
//         "x",
//         "y",
//         "z"
//     ];

//     let newString = "";
//     let currentIndex = 0;
    
//     for (currentIndex; currentIndex < string.lenght; currentIndex++) {
//         newString += letters[offset + letters.indexOf(string[currentIndex])];
//     }

//     return newString;

// }

// console.log(cipher("abc, 2"))


// WORKING MAD LIB

// function madlib(x, y){
//     const libs = x + "'s favorite subject in school is " + y;
//     return libs;
// }

// const mad = madlib("Jeremy", "Economics")
// console.log(mad)

// let x = 0


// for (let x = 0; x <10; x++) {
//     console.log(x);
// }

// while (x < 10 ) {
//     console.log(x);
//     x++
// }


// var name = "jeremy"


// console.log(`Hello ${name}`)

// const age = 14;

// if (age == 21){
//     console.log("Youre old enough to buy alcholol")}
// else if (age < 21){
//         console.log("you cant buy alchol")}
// else {
//     console.log("go home kid")
// };


// function tipCalculator(price, service){
//     if (service == "good"){
//         const total = price * 1.2;
//         const tipAmount = price * .2;
//         return `this is your total bill ${total} and this is your tip thank you ${tipAmount} `
//     }else if (service == "ok"){
//         const total = price * 1.15;
//         const tipAmount = price * .15;
//         return `this is your total bill ${total} and this is your tip thank you ${tipAmount} `}
//     else{
//         return `Thank you for nothing`
//         }
    
// }

// console.log(tipCalculator(200, "good"))

// Leetspeak

// function leetspeak(word){
//     let currentCharacter = null;
//     let newWord = new Array(word.lenght);



//     // COUNTER     |         CONDITION                 | INCREMENT/DECREMENT
//     for(let counter = 0; counter < word.length; counter++){
//         // GET ACCESS TO EACH CHARACTER
//         // CHECK FOR A MATCH TO BE TRANSFORMED

//         // console.log('COUNTER:', counter, word[counter]);

//         currentCharacter = word[counter];

//         switch (currentCharacter) {
//             case "a":
//                 currentCharacter = 4;
//                 break;
//             case "e":    
//                 currentCharacter = 3;
//                 break;
//             case "g":
//                 currentCharacter = 6;
//                 break;
//             case "i":
//                 currentCharacter =  1;
//                 break;
//             case "o":
//                 currentCharacter = 0;
//                 break;
//             case "s":
//                 currentCharacter = 5;
//                 break;
//             case "t":
//                 currentCharacter = 7;
//                 break;
//             default:
//                 break;

//         }
//         newWord.push(currentCharacter);
//     }

//     // return leetspeakString;
//     return newWord.join("");
// }

// console.log(leetspeak("amanda gail peterson"));


// Just the positives
// Write a function positiveNumbers
//  which is given an array of numbers 
//  and returns a new array 
//  containing only the positive numbers within the given array.
    

// function positiveNumbers(numbers){

//     const newNum = (["1", "-3", "5", "-3", "0"])

//     let poNu = ["0", "2", "4"];

   
//     return "The Positive Numbers are"

// }

// console.log(positiveNumbers(poNu))






// function justPositives(positive, negatives){
//     if (positive == "positive"){
//         total = [1, 5, 0];
//         return  total
//     }else if (negatives == "negative"){
//         total = [-3, -4, -9];
//             return "This is not what were looking for"
//         }
//         else{
//             return `Thank you for nothing`
            
//         }
// }
// console.log(justPositives("positive"))


// // Comment => Create a function called positiveNumbers
// function positiveNumbers(values){
// //    Comment => Created a variable for the new string to be placed
//     newValues =[];
//     // Used a For loop to look at each individual number within the array
//     for (let index = 0; index < values.length; index++){
//         // All positive numbers get added to the new array
//         if (values[index] > 0) {
//             newValues.push(values[index]);
//         }
//         // All negative numbers gets changed into positive numbers
//         // Using their absolute values
//         else if (values[index] < 0){
//             var abVal = Math.abs(values[index]);
//             newValues.push(abVal);
//         }
//     // Return both back to the new array
//     }
//     return newValues;
// };
// // Insert an array of numbers
// console.log(positiveNumbers([1, -2, -3, 4, -5, 6, -18]));




/**
 * Dom
 * Document Object Model
 * 
 * 
 * Bom
 * Browser Object Model
 */


// console.log('BOM acessed through window object:')
// console.log(window)

// console.log('DOM acessed through document object:')
// console.log(document)

// console.log(window)

// console.log(document)

// let element = document.getElementById('primary')
// console.log(element);



// document.getElementById('heading').innerHTML = "Toppings";
// var getList = document.getElementById('list');
// var newEl = document.createElement('li');
// var newText = document.createTextNode("Pizza");
// newEl.append(newText);
// getList.append(newEl)

// var newTopping = document.createTextNode("Cheese");
// var newerEl = document.createElement('li');
// newerEl.append(newTopping);
// getList.append(newEl);


// findList.append(setLiID)
// const root = document.querySelector('#root')

//  console.log(document)
// //  const listItems = document.getElementsByTagName('li')

//  console.log(document)
//  const listItems = document.createElement('li')
//  root.append(listItems)


// let myButton = document.getElementById('button2');

// myButton.addEventListener('click', function() {
//     console.log('hello button 2');
// })



// window.addEventListener('resize', function() {
//     console.log(window.innerWidth);
// })

// document.addEventListener('click', function(event) {
//     console.log(event.target);

// })

/**
 * 1) LISTEN FOR EVENTS ON THE DOCUMENT
 * 2) SPECIFICALLY, CLICK EVENTS
 * 3) RUN THE FUNCTION I PROVIDE WHEN THE EVENT IM TARGETTING HAPPENS
 * 4) THE EVENT OBJECT IS PASSED IN TO THE FUNCTION I CREATED AUTOMATICALLY
 * 5) LOG OUT THE TARGET PROPERTY ON THE EVENT
 */


// function onButtonClick() {
//     console.log("Button Pressed");
// }
// function onButtonClick1() {
//     console.log("2nd button pressed");
// }
// function onButtonClick2() {
//     console.log("Peanut butter jelly time");
// }
// function onButtonClick3() {
//     console.log("You Left Clicked");
// }


// myButton.addEventListener('click', function() {
//     console.log('You Left Clicked');
    
// })
// let myButton = document.getElementById('button3');


//  var x =  document.getElementById('myButton');

//  x.addEventListener('click', function(event){
//      event.target.x = console.log('You Left Clicked')
//  })


//  window.addEventListener('resize', function() {
//         console.log(window.scroll, 'You Changed the size of the window');
//     })
  
// <script>
//     window.addEventListener('resize', () => {
//         console.log('You Change the size of the Window!')
//     })
// </script>



// document.getElementById('heading').innerHTML = "Shopping List 09/23/2021";
// var getList = document.getElementById('list');
// var newEl = document.createElement('li');
// var newText = document.createTextNode("Pizza");
// newEl.append(newText);
// getList.append(newEl)

// var newTopping = document.createTextNode("Cheese");
// var newerEl = document.createElement('li');
// newerEl.append(newTopping);
// getList.append(newEl);


// let input = document.getElementsByTagName("input")[0];
// let submitButton = document.getElementsByTagName('button')[0];
// let itemsList = document.createElement("ul")
// let title = document.getElementsByTagName('h1')[0];
// let removeButton = null;

// itemsList.setAttribute("id", "items-List");

// title.insertAdjacentElement("afterend", itemsList);



// submitButton.addEventListener('click', function(event){
//    let item = document.createElement("li");
//    item.innerHTML = input.value;

//    removeButton = document.createElement("button");
//    removeButton.setAttribute("class", "remove-button");
//    removeButton.innerHTML = "remove";
//    removeButton.addEventListener("click", function(event) {
//        event.target.parentElement.remove();

//    })

   
// item.append(removeButton)

//  itemsList.appendChild(item);

//  input.value = "";

// })


// const request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//     console.log(this);
// };

// request.open("GET", "http://placekitten.com/400/400");

// const requestButton =document.getElementById("request-button");

// requestButton.addEventListener("click", funtion() {
//     request.send();

// })


/**
 * Asynchronous JavaScript XML
 * 
 * objectives make an AJAX request
 * - XMLHttpRequest
 * -Fetch
 * 
 * Understand server status codes
 * Handle AJAX responses
 * 
 * XHR 
 *
 * API- application Programming Interface (ways to communicate with your app)
 * 
 * Promises are also like placeholders (fetch, catch, then)
 * make request THEN send something to it or use whats there
 */




 
 /**
  * 1)   Make get request with fetch
  * 2)   That request returns a Promise
  * 3)   Then... once it resolves successfully run the first function passed
  * 4)   Inside that function, parse the expected text response, which returns 
  *      a Promise as well
  * 5)   Then (again)... once that Promise resolves successfully, log the result
  *      that in this case I called Data
  * 
  * ***  NOTES:  The result of the Promise gets passed into the function automatically.
  * ***          Also, if you're fetching a local file like this you'll need to run your
  *              project directory as a local server. I will show you how you can do this.
  *              In the mean time, try doing the assignments releated to the external API.
  */ 
//   fetch(`sample.txt`)
//   .then(function(response) {
//      return response.text();
//   })
//   .then(function(data) {
//       console.log(data);
//   })

//   fetch

// fetch("http://placekitten.com/400/400").then(function(response){
//     console.log(response);
// })

// .catch(function(error){
//     console.log(error);
// })

// fetch("./sample.txt").then(response => {
//     console.log(response);
//   });
      
// const request = new XMLHttpRequest();
// request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this);
//     }
// };
// request.open("GET", "./sample.txt");
// request.send();


// fetch("google.com")
// .then(function(response){
//     response.text()
//     console>log(response);

// })

// .then(function(result){

// })
//     response.text()
// .catch(function(error){
//     console.log(error.message)
// });

// function makeGroceryList(item1, item2, item3){
//     return [item1, item2, item3];
// }
// const firstItem = makeGroceryList("bananas", "pears", "apples")[2];
// console.log(firstItem);

/**
 * Promises 101
 * 
 * [] Function Returns + Method Cleaning
 * [] Understand what they are
 * [] Understand why we use them
 * [] Understand JSON (JavaScript Object Notation)
 * 
 * 
 */
//  fetch('https://anapioficeandfire.com/api/characters/583')
//  .then(response => response.json())
//  .then(data => console.log(data.name))


// fetch('https://anapioficeandfire.com/api/characters/583')
//  .then(function(response){
//      //PARSE (TRANSFORM) THE JSON INTO ACTUAL OBJECT
//     return response.json();
//  })
//  .then(function(data){
//      console.log(data.aliases);
//  })

//  fetch("https://anapioficeandfire.com/api/characters/583").then(function(response){
//      return response.json();
//  })
//  .then(function(data){
//      console.log(data.name + " was of " +  data.culture + "  culture. ");
//  })

 
//  fetch("https://anapioficeandfire.com/api/characters/583").then(function(response){
//     return response.json();
// })
// .then(function(data){
//     for  ( let aliases = 0; aliases  <8; aliases++ ){

//         console.log(data.aliases[aliases]);
//     }





// })



// "{
//     characterName: 'Jon Snow',
//     age: 20,
// }

// function middleNumber (array) {
//     // [1, 2, 3, 4, 5]
//     // [1, 2, 3, 4]
//     if (array.lenght % 2 == 0){
//         console.log(array[array.lenght -1])

//     } else{
//         let middleIndex = (array.length / 2) -0.5
//         console.log(array[middleIndex])
//     }
// }
// middleNumber([1, 2, 3, 4])
// middleNumber([1, 2, 3, 4, 5])


// fetch('https://anapioficeandfire.com/api/characters/583')
// .then(function(response) {
//     // Parse the JSON into an actual JS object
//    return response.json();
// })
// .then(function(data) {
//     console.log(data);
//     return data;
// })
// .then(function(data) {
//     console.log(data.name + " was of " + data.culture + " culture.");
//     return data;
// })
// .then(function(data) {
//     console.log(data.aliases);
//     return data;
// })
// .then(function(data) {
//     for(let i = 0; i < data.aliases.length; i++) {
//         console.log(data.name + " is known as " + data.aliases[i] + ".");
//     }
//     return data;
// })
// .catch(() => console.log("There's an error somewhere."));
// // fetch('https://anapioficeandfire.com/api/characters/583')
// // .then(response => response.json())
// // .then(data => console.log(data.aliases))
// //https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10
// fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=30')
// .then(function(response) {
//     // Parse the JSON into an actual JS object
//    return response.json();
// })
// .then(function(data) {
//     console.log(data);
//     return data;
// })
// .then(function(data) {
//     for(let i = 0; i < data.length; i++) {
//         if(data[i].name.length > 0) {
//             console.log(data[i].name + " was a character in Game Of Thrones.");
//         }
//     }
// })



// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// // API Key - 7983f9630bd1335bc5529b4c48cf145a

fetch("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=7983f9630bd1335bc5529b4c48cf145a")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    return data;
})
.then(function(data) {
    console.log(data.name + " feels like " + data.main.temp)
    return data;
})
.then(function(data){
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    console.log(data.weather[0].main +);
    return data;
})