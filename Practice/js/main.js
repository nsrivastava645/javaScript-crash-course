console.log('Hii');
console.warn('A warning');
console.error('An Error');


//variables
//var was used since the beginning and it was globally scoped and hence a loop's var can be used after loops execution
//example 
for(var a = 0; a<10;a++){
    console.log(a);
}
console.log(a);

/* output 
0 main.js:10:13
1 main.js:10:13
2 main.js:10:13
3 main.js:10:13
4 main.js:10:13
5 main.js:10:13
6 main.js:10:13
7 main.js:10:13
8 main.js:10:13
9 main.js:10:13
this 10 below should not have been acessible outside but it is
10 main.js:12:9
*/

//using let
for(let letVar = 0; letVar<10;letVar++){
    console.log(letVar);
}
//below line will give an error
// console.log(letVar);


/* ====OUTPUT====
 0 main.js:30:13
1 main.js:30:13
2 main.js:30:13
3 main.js:30:13
4 main.js:30:13
5 main.js:30:13
6 main.js:30:13
7 main.js:30:13
8 main.js:30:13
9 main.js:30:13
ReferenceError: letVar is not defined 
*/

//using const
// const is like a assign once read thereafter kins of variable
//const can't be reassigned
const pi = 3.14;
console.log(pi);
// pi = 5; will give error as - invalid assignment to const `pi'
// const pi = 6; will give error as - redeclaration of const pi
// console.log(pi);

// Note :::: ==== your const must be initialised with a value when it is declared
//const a ; //throws an error missing = in const declaration


//data types
/* Strings, Numbers, Boolean, null, undefined, Symbols */
const name = 'Neeraj';
console.log(typeof(name));

const age = 22;
console.log(typeof(age));

const decimal = 1.87;
console.log(typeof(decimal));

//above 2 are categorised as numbers and js doesnt differentiate int with dec
const boolVar = true;
console.log(typeof(boolVar));

const nullVar = null;
console.log(typeof(nullVar));
/* Output
string main.js:66:9
number main.js:69:9
number main.js:72:9
boolean main.js:76:9
object main.js:79:9 null as an object is a bug in jS
 */

//something uninitialised is undefined 
let x ;
console.log(typeof(x));
//Undefined 
// let x is equivalent to let x = undefined
let y = undefined;
console.log(typeof(y));
// undefined


/* ----Strings----- */
// concatenation
//1. Old method
console.log('My name is '+ name + ' and I am '+ age +' years old')

//2. Es6 method using back ticks and ${}
console.log(`My name is ${name} and I am ${age} years old`)

/* Both 1 and 2 yield the same results */

//string methods
const str = 'A string for example.';
console.log(str.length);
//output 21

console.log(str.toUpperCase());
// A STRING FOR EXAMPLE.
console.log(str.toLowerCase());
// a string for example.


//we can apply more than one functions to the result of one string function
console.log(str.substr(0,8).toUpperCase());
// A STRING 

//convert string to array by splitting it on some character, if not on any char use '' blank quotes
const arrayForStr = str.split('');
console.log(arrayForStr);
// Array(21) [ "A", " ", "s", "t", "r", "i", "n", "g", " ", "f", … ]


//split is handy for splitting words in a sentence separated by commas or spaces

const arr2 = str.split(' ');
console.log(arr2);
// Array(4) [ "A", "string", "for", "example." ]

//lets take another example
let words = 'one, two, three, four, five';
let wordsArray = words.split(', ');
console.log(wordsArray);
// Array(5) [ "one", "two", "three", "four", "five" ]



//========Arrays==========
//arrays are vars that contain multiple values

//creating a new array using constructor of array
const arrayOfNum = new Array(1,2,3,4,5);
console.log(arrayOfNum);
/* //output ::  
0: 1
​
1: 2
​
2: 3
​
3: 4
​
4: 5

theres a length associated with each array */
console.log(arrayOfNum.length);
console.log(arrayOfNum['length']);
//both outputs give 5 

//creating arrays without constructor
const arrayOfNum2 = [1,2,3,4,5];
console.log(arrayOfNum2);
//outputs :: Array(5) [ 1, 2, 3, 4, 5 ]
//internaly both are same

//acessing elements is basic using square brackets or normal bracets as well
console.log(arrayOfNum2[1]); //as they are 0 based we get arr[1] as 2

//also to notice const arrays unlike const vars can be updated but cannot be reassigned
arrayOfNum2.push(6);
console.log(arrayOfNum2);
// Array(6) [ 1, 2, 3, 4, 5, 6 ] 6 is added
// arrayOfNum2 = [2, 6, 7];  will throw an error as const vars cant be reassigned
//push adds to the beginning and to add to the start we use unshift method as
arrayOfNum2.unshift(0);
console.log(arrayOfNum2);
// Array(7) [ 0, 1, 2, 3, 4, 5, 6 ] 0 gets added to start

//to remove an element from last we use pop
arrayOfNum2.pop();
console.log(arrayOfNum2);
// Array(6) [ 0, 1, 2, 3, 4, 5 ] 6 gets popped out

//to remove from a specific index we use splice method
arrayOfNum2.splice(3,1);//first is the index from where to start removal amd second is the count of elements to be removed
console.log(arrayOfNum2);
//  output Array(5) [ 0, 1, 2, 4, 5 ] 1 element from index 3 to end is removed so element at 3 was 3 which is removed

//to check an array is an array use Array.isArray method as
console.log(Array.isArray(arrayOfNum2));
//return true
console.log(Array.isArray(age));
//returns false


/*  to find the index of an array element use indexOf Method */
console.log((arrayOfNum2.indexOf(5)!=-1)?`Element is present at ${arrayOfNum2.indexOf(5)}th index`:'Element is not present in the array');
// returns 4 as array is 0,1,2,4,5

// find an element is present or not 
console.log((arrayOfNum2.indexOf(8)!=-1)?`Element is present at ${arrayOfNum2.indexOf(8)}th index`:'Element is not present in the array');
//returns -1 as it is not present hence a check



/* Objects in javascript
Objects are basically key value pairs in javaScript where a key is basically an index for a value it contains, the value
can be any other var, a function or another object as well */

//creating an onject
const objectExample = {
   key1:  55, //any number
   key2: 'any String',
   key3: true, // any boolean
   key4: ['element1', 'element2'],
   key5: { //even another object
            subKey1: 10,
            subKey2:'subkeys String',
            subKey3: false, //any boolean
            subkey4: ['sub element1', 'sub element2']
   }
}
console.log(objectExample);
/* Output ::
key1: 55
key2: "any String"
​key3: true
key4: Array [ "element1", "element2" ]
key5: {…}
    subKey1: 10
    ​​subKey2: "subkeys String"
    subKey3: false
    subkey4: Array [ "sub element1", "sub element2" ]
*/

//acessing the onject is done by using . operator

console.log(objectExample.key1);

//gives 55
console.log(objectExample.key5.subkey4);
// gives Array [ "sub element1", "sub element2" ]

//get an element from an array in the object 
console.log(objectExample.key4[1]);
// key4: Array [ "element1", "element2" ] as array has this the output is 
// element2


/* ========Destructuring in javascript
extracting properties from objects or values from arrays as
distinct variables.=======

*/
//lets try on the objectExample and arrayOfNum2
// console.log(key1);
// outputs::::  ReferenceError: key1 is not defined 
const{key1} = objectExample;
console.log(key1);
// Outputs :: 55 as key1 is now a distinct var in global scope

// we can extract them as another var name using : and naming the new variable after this as
const{ key2: secondKey} = objectExample;//key2 is "any string"
//we can say that we extracted key2 as secondkey variable from object onjectExample
console.log(secondKey);
//"any string" is output.

//we can give a defaut value to these vars if they dont have any value in the object as
const {key7 = 50} = objectExample;
console.log(key7);
//but if object has some value then the object key's value is assigned
const {key3: thirdKey = false} = objectExample;
console.log(thirdKey);
//although it is made false but due to it being true in object it is true as value here hence
//Output = true


/* Destructuring in arrays*/
console.log(arrayOfNum2);
// Array(5) [ 0, 1, 2, 4, 5 ]
const [arrElement1, arrElement2, arrElement3, arrElement4, arrElement5, arrElement6=6] = arrayOfNum2;
console.log(arrElement1);
console.log(arrElement2);
console.log(arrElement3);
console.log(arrElement4);
console.log(arrElement5);
console.log(arrElement6);//as 6 is not in array so its default value is stored
/* output
0 main.js:287:9
1 main.js:288:9
2 main.js:289:9
4 main.js:290:9
5 main.js:291:9
6 main.js:292:9
 */

/* array of objects */
const todos = [
    {
        id: 1,
        text: 'Do coding',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Deploy the Website',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Apply the jobs',
        isCompleted: false
    }
]
console.log(todos);

//to convert this to json use json.stringify 
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);//json has double quotes and single quotes are not accepted in it


/* looping is quite simple */
//FOR LOOPs
for(let i = 1; i<=10; i++){
    console.log(`printed it ${i} times `);
}

// WHILE LOOP
let i = 1;
while(i<=10){
    console.log(`i = ${i}`);
    i++;
}

// Iterating over arrays
for(let i = 0; i< todos.length; i++){
    console.log(todos[i].text);
}
/*  output
     Do coding main.js:342:13
    Deploy the Website main.js:342:13
    Apply the jobs 
*/


//but the better way of doing it is using for value in for arrays 
for(elements of todos){
    console.log(elements.text);
}
/* 
/*  output
    Do coding main.js:342:13
    Deploy the Website main.js:342:13
    Apply the jobs 
*/

//using high order functions
todos.forEach(function(iteratorVariable){
    console.log(iteratorVariable);
    console.log(iteratorVariable.id);
    //iterator variable has each todos value stored in it
});
/* Object { id: 1, text: "Do coding", isCompleted: true }
main.js:364:13
1 main.js:365:13
Object { id: 2, text: "Deploy the Website", isCompleted: true }
main.js:364:13
2 main.js:365:13
Object { id: 3, text: "Apply the jobs", isCompleted: false }
main.js:364:13
3 */

//we can get an array of only one value from all the objects in the array using map method as
const onlyOneValuesArray = todos.map(function(iterator){
    return iterator.text;//returns only text key's value for each object in the array
    
});
console.log(onlyOneValuesArray);
/* Output
0: "Do coding"
1: "Deploy the Website"
2: "Apply the jobs" */

//filtering of array values on some condition using filter method as and apply map to get texts only
const todosDoneTasksArray = todos.filter(function(iterator){
    return iterator.isCompleted === true;
}).map(function(iterator){
    return iterator.text;
});
console.log(todosDoneTasksArray);



/* If else conditions */
const val = '10';
if(val == 10){
    console.log('first if condition evaluated, only value is compared');
    //here only value is being compared not the data type hence '10'==10 is true
}/* output  first if condition evaluated, only value is compared*/

if(val === 10){
    console.log('second if condition evaluated, type and value both are compared');
    //here value as well as datatype is being compared hence '10'===10 is not true
}else{
    console.log('if was not true as datatype mismatch');
}
/* output ::: if was not true as datatype mismatch */


//we can add else if to evaluate another condition and else is used like if none other condition is true execcute me
if(val === 10){
    console.log('val is number 10');
}else if(val ==='10'){
    console.log('val is string 10');
}else{
    console.log('val is not "10" or 10');
}
/* Output ::: val is string 10 */



/* Using and and or logical operators */
let var1 = 4;
let var2 = 10;
/* or is || and is && */
if(var1 > 5 || var2 >10){
    console.log('either var1 > 5 or var2 > 10');
    //if any of if condn is true it will be printed but both being false 
    //no outout to the console
}
if(var1 < 5 || var2 >10){
    console.log('either var1 < 5 or var2 > 10');
    //var1<5 is true so console will log this statement

}
//to have both true use &&
if(var1 < 5 || var2 <= 10){
    console.log('both true var1 < 5 and var2 <= 10');
}//output :: both true var1 < 5 and var2 <= 10


//======Ternary Operator=======//
/* We can use ternary operator for shorthand to if else */
//it generally used to assign vars based on condition
let var1Var2Comparator = (var1>var2)?'greater':'not greater';
console.log(var1Var2Comparator);
//output :::: smaller(var1 > var2 is false so var1var2comparator gets the second value)



/***************** Switch condition ***************/
let color = 'red';
// color = 'blue';
// color = 'black';
switch(color){
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    default://if none is true 
        console.log('color is neither blue nor red');
        break;
}//output::: color is red
//play around by uncommenting the color var for different values



/* ********Functions*********** */
//basically functions are used to do some operation and are bound in a block
//created by using function keyword as
function addTwoNums(num1, num2){
    return num1+num2;
} 
//to use a function we need to call them, a functions return can be stored in a variable as well 
console.log(addTwoNums(10,88));//outputs 98
//storing in a var
let sum = addTwoNums(5,7);
console.log(sum);//outputs 12

//default values can be given to parameters 
//if something is not given as an argument then default parameter values are given
function subTwoNums(num1=10,num2=5){
    return num1-num2;
}
console.log(subTwoNums(50,10));//giving both arguments
//output = 40
console.log(subTwoNums(2));//giving only one num1 takes 2 and num2 as 5
// output -3
console.log(subTwoNums());//giving no argument and uses default values
// output 5


/* a very cool thing arrow functions */
/* general syntax let variableName = (parameter list) =>{
    statements in function 
    return statements
}
    they are more handy when parameters are just one like
    let varName = parameter => return values without return statement as 
    let varName = para1 => para1+3;
    
*/
//using arrow functions 
//simplest
let returnVar1 = 10;
let funVar = parameter1 => returnVar1 + parameter1;
console.log(funVar(5)); //5 takes parameter1 as value and output is returned as 15

//multiline arrow functions
let funVar2 = (para1, para2) =>{
    console.log(`entered parameters are "${para1}", "${para2}"`);  
}
funVar2('argument1', 'argument2');

/* Creating objects and instantiating them */
//method 1 by using Constructor function
/* function ClassName(Parameters){
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
} 

and then instantiate it using new keyword as
const objectVarName = new ClassName(argumentsList)*/
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
//instantiation 
const person1 = new Person('Neeraj', 'Srivastava', 22);
console.log(person1);
/* Output
age: 22
firstName: "Neeraj"
lastName: "Srivastava" */

//you can create as many objects you want from this same constructor like
let person2 = new Person('Anushka', 'Srivastav', 23);
console.log(person2);
console.log(person2.firstName.toUpperCase());
/* Outputs
age: 23
firstName: "Anushka"
lastName: "Srivastav"
ANUSHKA
 */
//as objects can have methods with them so we can have functions in class as well like or can be defined in the class constructor as well
person2.getFullName = function(){
    return this.firstName +" "+ this.lastName;
}
console.log(person2.getFullName());
//outputs Anushka Srivastav


/* =====Prototypes=======*/
// prototype or __proto__ is an object associated with all class objects
//this proto has properties that are shared by all objects created from same class
// for things like to return non proto values it is better, for example with the function getFullName every object has this method and it simply outputs full name from the object native variables
//when something is associated with obj and has to be modified for only one of them i.e, not all of them we can use the changeable values as class native vars and the ones which are common to all objects should be put in prototype as
function ExampleForPrototype(name, email){
    this.name = name;
    this.email = email;
    /* this.getEmail = function(){
        return this.email;
    } */
}
// const protoExm1 = new ExampleForPrototype('your name', 'abc@gmail.com');
// console.log(protoExm1.getEmail());//abc@gmail.com
//suppose we want to have a function that gives email associated with any object we can use this.getEmail() function as in comments above
//but the issue is for every object this function will be created and will have some storage but we dont need it we can share it among all other object and simply get their emails so we put it in proto section as

ExampleForPrototype.prototype.getEmail = function(){
    return this.email;
}
const protoObj1 = new ExampleForPrototype('exm2', 'exm2@gmail.com');
console.log(protoObj1);
/* email: "exm2@gmail.com"
​name: "exm2"
<prototype>: {…}
constructor: function ExampleForPrototype(name, email)​​
getEmail: function getEmail()​​
<prototype>: {… */
console.log(protoObj1.getEmail()); //exm2@gmail.com

//now get email will be a prototype method 

/* Creating classes using class keyword */
class ClassUsingClassKeyWord{
    //class constructor is defined using constructor keyword
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    //for prototypes simply define your functions outside the constructor method as
    getEmail(){
        return this.email;
    }
}
//instamtiation is quite similar as
let classObj = new ClassUsingClassKeyWord('usingClassKeyword', 'class@gmail.com');
console.log(classObj);
/* email: "class@gmail.com"
​name: "usingClassKeyword"
<prototype>: {…}
​​constructor: class ClassUsingClassKeyWord { constructor(name, email) }​​
getEmail: function getEmail()​​
<prototype>: {… */
//now methods are in prototype object of an object

console.log(classObj.getEmail());//class@gmail.com




/* ==========DOM manipulation using javascript=========== */
//we are adding a list item in users list below Users heading
//selecting single elements 
// document.getElementById('id');
// document.querySelector('#id' or '.class');

//  Multiple element selector
// document.querySelectorAll('id' or 'class');
// document.getElementsByClassName('class-name');
// document.getElementsByTagName('name of tag');

//changing the button style which is initially black to seagreen 
//get button by its id
const btn = document.querySelector('.btn');
//below line changes the bg color of button 
// btn.style.background = 'seaGreen'; //changes to seagreen color if you comment it out and refresh
// adding elements to the users list using event Listeners
// get form, name and email first
let myForm = document.querySelector('#my-form');
let msg = document.querySelector('.msg');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
//get the list where to add them
let userList = document.querySelector('#users');

//adding event listener on submitting the form
myForm.addEventListener('submit', onSubmit/* callback function */);

//defining the callback function
function onSubmit(e){
        e.preventDefault();//to hold the console and notrefresh the page

        //some validation on form
        if(nameInput.value === '' || emailInput.value===''){
            msg.classList.add('error');//adding the error message class
            msg.innerHTML = 'Please enter both fields';
            //make this message disappear after 3 sec
            setTimeout(()=> msg.remove(), 3000);
        }else{
            //else we create a user entry and add it to the user list
            //create the li element to append to the user ul
            let li = document.createElement('li'); 
            li.innerText = `${nameInput.value} : ${emailInput.value}`;
            //add it as child to the userList 
            userList.appendChild(li);
            //make input fields blank again
            nameInput.value = '';
            emailInput.value = '';
        }



}

/* Note You will lose all entered data as soon as you refresh the page  */

/* Enjoy the course*/

//Link I followed for the course https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2619s












