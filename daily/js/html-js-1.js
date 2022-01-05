
// 22.11.2021


const submit = () => {
    let username = document.getElementsByName("username")[0].value;
    let passwd = document.getElementsByName("passwd")[0].value;

    console.log(username,passwd);

    localStorage.setItem("username",username);
    localStorage.setItem("passwd",username);
}

console.log(Number("us"))

// function printAlphabates(name,time){
//     return new Promise((resolve, reject) => {
//         if(name === "A"){
//             resolve("PromiseResolve");
//         }else{
//             reject("Promise Rejected");
//         }
        
//     });
// }

// printAlphabates("B",2000).then(data => console.log(data))
// .catch(data => console.log(data))
// .finally(() => console.log("Task Compelete"));





// call, apply, bind function

// let obj = {
//     name:"Nothing",
//     age:0,
//     display:function(){
//         console.log(this.name +" "+this.age);
//     }
// }

// function show(){
//     this.display();
// }
// show.call(obj);

// function hide(data){
//     this.display();
//     console.log(data);
// }
// hide.apply(obj,["Nohting is Here"]);

// let bind = hide.bind(obj);
// bind("Everything is Here");



// $("button").click(function(){
//     $("h1").toggle();
//     $("#display").toggle();
//     $(".display").toggle();
//     $(this).hide();
// });

// $.ajax({
//     url:"https://jsonplaceholder.typicode.com/todos/1",
//     type:"GET",    
//     success:function(data){
//         console.log(data);
//     }
// });
// setInterval(function(){
//     let getTime = new Date();
//     let hours = getTime.getHours();
//     let minutes = getTime.getMinutes();
//     let seconds = getTime.getSeconds();
    
//     document.getElementById("hours").innerHTML = hours < 10 ? '0'+ hours : hours;
//     document.getElementById("minute").innerHTML = minutes < 10 ? '0'+ minutes : minutes;
//     document.getElementById("seconds").innerHTML = seconds < 10 ? '0'+ seconds : seconds;    
// },1000);


// function add(){
//     document.getElementById("replace").innerHTML ="Welcome to Elevation Acedmy";
// }

// function display(){
//     document.getElementById("demo").innerHTML = document.getElementsByTagName("select")[0].value;
// }

// function submit(){
//     let name = document.getElementById("name").value;
//     let email =  document.getElementById("email").value.toString();
//     let mobile = document.getElementById("mobile").value.toString();
//     let year = parseInt(document.getElementById("year").value);
    
//     document.getElementById("errName").innerHTML = name;

//     if(year<1995){
//         document.getElementById("errYear").innerHTML = "Year Must be not Less than 1995";
//         document.getElementById("errYear").style.color = "red";        
//     }else{
//         document.getElementById("errYear").innerHTML = year;
//     }       
//     if(!mobile.startsWith("91")){        
//        document.getElementById("errMobile").innerHTML = "Year Must be start With 91";
//         document.getElementById("errMobile").style.color = "red";        
//     }else{
//         document.getElementById("errMobile").innerHTML = mobile;
//     }
//     if(email.split("@")[1]!="prepbytes.com"){
//         document.getElementById("errEmail").innerHTML = "Year Must be end with prepbytes.com";
//          document.getElementById("errEmail").style.color = "red";        
//     }else{
//         document.getElementById("errEmail").innerHTML = email;
//     }
// }


// function add(){

//     var element= document.createElement("h2");
//     element.setAttribute("class","heading");
//     element.setAttribute("id","name");
//     element.innerText = "Elevation Acedmy";

//     document.getElementById("content").appendChild(element);

// }

// 1// 

// Write a code to explain closure?


// 2//
// Write a code to calculate area of a rectangle using inner function. In this case outer 
// function should accept parameter length and inner function should accept parameter bredth.


// 3// 

// Take a variable in outer function and create an inner 
// function to increase the counter every time it is called_______?

// 4//
//   "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();"


// 5//
// "var globalVar = ""xyz"";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         ""outerArg = "" + outerArg + ""\n"" +
//         ""innerArg = "" + innerArg + ""\n"" +
//         ""outerVar = "" + outerVar + ""\n"" +
//         ""innerVar = "" + innerVar + ""\n"" +
//         ""globalVar = "" + globalVar);
    
//     })(456);
// })(123);"



// function change(){
//     let result = document.getElementById("heading");
//     result.innerText = "Angle of Depression";
//     result.style.color = "red";
//     result.style.textAlign = "center";
// }
// function reset(){
//     let result = document.getElementById("heading");
//     result.innerText = "Angle of Elevation";
//     result.style.color = "black";
//     result.style.textAlign = "left";
// }

// function reverse(){
//     row = document.getElementById("card").style.flexDirection = "column";
    
// }





// //by tag name
// const result = document.getElementsByTagName("h1");
// console.log(result[0].innerHTML);

// //by class name
// const result1 = document.getElementsByClassName("heading");
// console.log(result1[0].innerHTML);

// //by id name
// const result2 = document.getElementById("heading");
// console.log(result2.innerHTML);



// var arr = [2,7,11,15];
// let sum = 9;
// let s = new Set();
// for (let i = 0; i < arr.length; ++i)
// {
//     let temp = sum - arr[i];
//     if (s.has(temp)) {
//         console.log("Pair with given sum " + sum + " is (" + arr[i]+ ", " + temp + ")");    
//     }
//     s.add(arr[i]);
//     console.log(s);
// }


//is that right?

// var arr = [2,7,11,15];
// for(let i = 0; i<arr.length-1 ; i++){
//     for(let j = i+1; j<arr.length;  j++){
//         if(arr[i]+arr[j] == 9){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }


// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 
// //  Retrieve the details of students who scored  more than 50 marks and have id greater than 120.

// studentRecords.forEach(element =>{
//     if(element.marks > 50 && element.id > 120){
//         console.log(element);
//     }
// });

// console.log(studentRecords.map(element=>{ 
//     if(element.marks > 50 && element.id > 120){
//         return element;
//     }else{
//         return null;
//     } 
// }));
          


// function display(sec){
//     setTimeout(()=>{
//         console.log("Call Back after: ", sec);
//     },1000*sec);
// }

// function output(callback){
//     for(let i=0; i<7; i++){
//         callback(i+1);
//     }    
// }
// output(display);



// let production = () =>{
//     console.log("Numbers")
//     setTimeout(()=>{
//       console.log("1")
//       setTimeout(()=>{
//         console.log("2")
//         setTimeout(()=>{
//           console.log("3")
//           setTimeout(()=>{
//             console.log("4")
//             setTimeout(()=>{
//               console.log("5")
//               setTimeout(()=>{
//                 console.log("6")
//                 setTimeout(()=>{
//                   console.log("7")
//                 },70000)
//               },6000)
//             },5000)
//           },4000)
//         },3000)
//       },2000)
//     },1000)
// };

// production();

// setTimeout function

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }
  


// function display(){
//     console.log("Before");
//     setTimeout(()=>{
//         console.log("Inside");
//     },0);
//     console.log("After");
// }

// display();


// var word = "Name";
// setTimeout(() => {    
//     console.log(word);
// },100*word.length);


// Closures function

// function counter(){
//     var counter = 0;
//     function increase(){
//         return counter+=1;
//     }
//     return increase;
// }
// var count = counter();
// for (const key in [1,2,3,4]) {
//     console.log(count());
// }



// function outer(){
//     var outer = 100;
//     function inner(){
//         alert(outer);
//     }
//     return inner;
// }
// var result = outer();
// result();



 //Hands-ON
// we would like to know the sum total of the marks of the students.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                         {name: 'Baba', id: 101, marks : 23 },
//                         {name: 'yaga', id: 200, marks : 45 },
//                         {name: 'Wick', id: 115, marks : 75 } ]

// sum = 0;
// studentRecords.forEach(element => {
//     sum+=element.marks;    
// });
// console.log(sum);


// studentRecords.forEach(element => {
//     if(element.marks > 50){
//         console.log(element.name);
//     }
//  });
 
// sum = 0;
// studentRecords.forEach(element => {
//     if(element.id > 120){
//         sum+=element.marks;
//     }
//  });
// console.log(sum);



// studentRecords.forEach(element => {
//     if(element.marks < 50){
//         element.marks +=15;
//     }  
//  });
//  studentRecords.forEach(element => {
//     if(element.marks > 50){
//         console.log(element);
//     }  
//  });

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ]


// for(const key in studentRecords){
//         console.log(studentRecords[key].name.toUpperCase());
// }


// let person = {
//     firstName: "John"
// }
// let job = {
//     location: "USA"
// }

// let merge = Object.assign( {}, person, job );

// console.log(merge);



// var obj = Object({
//     name:"redmi",
//     age: 24
// });

// console.log(obj);




// let menu = {
//     width: 200,
//     height: 300
// };

// let multiplyNumeric = (menu)=>{
//     menu.width = menu.width * 2;
//     menu.height = menu.height * 2;
// };

// multiplyNumeric(menu);
// console.log(menu);\



//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

// var parent = Object({
//     name:"Name",
//     display:function(){
//         return this.name;
//     }
// });
// var child = Object.create(parent);
// console.log(child.display());


// Inheritance
// var parent = {
//     name: 'ABCD',
//     age: 12,
//     display: function(){
//         console.log(this.name, this.age);
//     }
// }

// var child = Object.create(parent);

// child.course = "LAMP";
// child.display()
// console.log(child);




//function constructor object

// function Student (name, age){
//     this.name = name;
//     this.age = age;
// }

// console.log(new Student("X",24));
// console.log(new Student("Y",26));

// var obj = {
//     name: "Z",
//     age: 28
// }
// console.log(Object.create(obj));

//var obj = new Student("X",24);



// first class function
// const add  = () =>{
//     return () =>{
//         console.log(3+4);
//     }
// }
// add()();


// Hands on  2/11/2021

// Write the code, one line for each action:
// Create an empty object user.
// Add the property ""name"" with the value John.
// Add the property ""age"" with the value 24.
// Change the value of the ""name"" to Smith.
// Remove the property ""name"" from the object."

// var obj = new Object();
// obj.name = "John";
// obj.age = 24;

// console.log(obj);
// obj.name = "Smith";

// console.log(obj);

// delete obj.name;

// console.log(obj);



// 2// 
// "Question : Write the function checkObjHasProperties(obj) 
// which returns true if the object has no properties, false otherwise.

// Input
// 3// 
// "Question : We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Smith: 150,
// }
// Write the code to sum all salaries and store in the variable sum. Should be 250 in the example above. If salaries is empty, then the result must be 0."


// let salaries = {
//        John: 100,
//        Smith: 150,
//     }
// let sum = 0;    
// for(const key in salaries){
//     sum += salaries[key];
// }
// console.log(sum);
// Create an object using object constructor.
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.





// ********OBJECT*********
// var obj = new Object();

// obj.name = "Name";
// obj.age = 24;

// console.log(obj);

// var object = new Object({
// 	name:"Name",
//   age: 24
// });

// console.log(object);
// console.log(Object.keys(object),Object.values(object));


// let arr = ["e","l","k"];

// for(const key in arr){
// 	console.log(key,arr[key]);
// }

// let statment = {
//     firstName: "X",
//     courseName: "Elevation",
//     batchMonth: "september",    
//     display: function(){
//         console.log(this.firstName, "is studying in",this.courseName, "academy",this.batchMonth, "batch")
//     }
// }
// statment.display();



/*******ARRAY HANDS ON *******

var str1 = "prepbytes";
var arr = str1.split("");
console.log("prepbytes".split('').reduce((total, letter) => {total[letter] ? total[letter]++ : total[letter] = 1; return total;}, {}));
var result  = {};
for(var i=0; i<"prepbytes".length; i++){
    char1 = "prepbytes".charAt(i);
    if(result[char1]){
        result[char1]++;
    }else{
        result[char1] = 1;
    }
}
console.log(result);

console.log("I am utkarsh raj".split(" "));
console.log("Utkarsh"=="Utkarsh");

console.log(c=="a"|| c=="e"||c=="i"||c=="o"||c=="u");

// var array = "ADAAAA";
// var str2 = array.split("");
// var count = 0;
// var result = str2.filter((array)=> array=="A");
// console.log("A =",result.length);
// var result2 = str2.filter((array)=> array=="D");
// console.log("D =",result2.length);


// var string1 = "TENET"
// console.log(string1==string1.split(" ").reverse().join(" ")?"Palindrome":"Not Palindrome");

// console.log("Movie: INCEPTION".replace("INCEPTION","TENET"));


var even = odd = count = 0;
var key = 2, 
arr = [1,2,3,4,5];
for(var i=0; i<5; i++){
    if(arr[i]%2==0)
        even+=arr[i];
    else
        odd+=arr[i];
}
console.log(even,odd);
brr = [2,2,3,4,2];
for(var i=0; i<5; i++){
    if(brr[i]==key){
        count+=1;
    }
}

console.log(brr.filter(value=>value==key).length);


// arr = [23,45,56,49,90]
// console.log(arr.every(value=>value >32)?"YES":"NO")


// const arr = [1,3,5]

// arr[100] = 199
// arr.length //101

let arr = [1,2,4]
const brr = arr;
arr = []
console.log(brr.map(value=>value+1))




arr = [1,2,3,4,5];

arr.map(value==2?"Yes":"no");
console.log(arr.reduce(((x,y)=>x*y),1));
console.log(arr.reduce(((x,y)=>x+y),0));

arr = [32,33,16,40];
console.log(arr.filter(value=>value>18));


var number = [1,2,3,4,5,6,7,8,9,10];

console.log(number.filter(value=>value%2==0).map(value=>value*5));
console.log(number.reduce(((x,y)=>x+y),0));


const result = numbers.reduce(function(acc, cur) {
    acc = acc + cur;
    return acc;
}, 0)

console.log(result)


// console.log(number.map((value)=> value*value));
// console.log(number.filter((value)=>value > 5));


//slice splice
// slice = it does not affect your original array, 
// it will return you a new array
// it takes two params, first will be start index from where you want to remove elements
// second parameter would be the last index till you want to remove the elements

// splice = it affects your original array
// it will also return new array
// it takes 2 params , first param is the start index from where you want to remove the element
// next param will be that how many elements you want to remove



// var vowels = ["a", "e", "i", "o", "u"];
// console.log("original array", vowels);
// var resultAfterSlice = vowels.slice(1, 3);
// console.log("new array slice(1,3)", resultAfterSlice, "original array", vowels);


// var resultAfterSplice = vowels.splice(1, 3);
// console.log("new array splice(1,3)", resultAfterSplice, "original array", vowels);

var number = [1,2,3,4,5,6,7,8,9,10];

console.log(number.slice(2,8)); // return elements between passing index as a array
number.splice(2, 0, "item1", "item2") 

console.log(number);







var number = [1,2,3,4,5,6,7,8,9,10]

console.log(number.pop());
console.log(number.push(10));


console.log(number.shift());
console.log(number.unshift(10));

const result = number.some( (value) => value > 5);
console.log(result);
const result1 = number.every( (value) => value > 5);
console.log(result1);


function subtract(){
    console.log("Inside subtract");
}

function sum(a, b) {
    console.log("variable value", a);
    b();
}


sum(10, subtract) //subtract is known as callback function here
//callback














(function(){
    var a = b = 3;

})();

console.log(typeof a!=='undefined');
console.log(typeof b!=='undefined');
var girl = function(){
    console.log(x);
    var x = 20;
};



var x = 21;
girl();
console.log("A"+x);
function girl(){
    console.log(x);
    var x = 20;
}


var x = 21;
a();
b();
console.log(a);
function a(){
     x = 20
    console.log(x);
}
function b(){
     x = 40
    console.log(x);
}

function fact(n){
    var answer = 1;
    while(n>0){
        answer = answer * n;
        n--; 
    }
    return answer;
}
console.log(fact(5));






/*function result(a,b){
    return (a%10 == 0 || b%10 == 0) ? true : false;
}
console.log(result(12,20));

function grade(marks){
    if(marks <= 10){
        return "E";
    }else if(marks<=20){
        return "D";
    }else if(marks<=30){
        return "C";
    }else if(marks<=40){
        return "B";
    }else{
        return "A";
    }
}

console.log(grade(10));


function grades(marks){
    switch (true) {
        case marks<=10:
            return "E";
            break;

        case marks<=20:
            return "D";
            break;
    
        case marks<=30:
            return "C";
            break;
    
        case marks<=40:
            return "B";
            break;
    
        case marks<=50:
            return "A";
            break;                            
        default:
            break;
    }    
}

console.log(grades(40));
age < 18 ? "not eligible" : "eligible"


function area(radius){
    return 3.14*radius*radius;
}

function result(a){
    return ((a*4 + 10)%5)/2;
}

console.log(result(26));


function fun1(){
    console.log("Statement");
}

function sum(a,b){
    console.log(a+b);
}

function sentance(first, last, age){
    return first + " " + last + " is " + age + " year old";

}



fun1();
sum(3,4);
console.log(sentance("Aman","Sinha",46));








n = 10;
i=2;
while(i<n){
    if(n%i==0){
        console.log(false);
        break;
    }
    i++;
}

let num = 102345;
let sum = 0;
while(num!=0){
    sum = sum + num%10;
    num = parseInt(num/10);
}

console.log(sum);


val = 345654;
count = 0;
while(val!=0){
    if(val%10==5){
        count++;
    }
    val = parseInt(val/10);
}
console.log(count);





for(let i=0; i<5; i++){
    for(let j=0; j<i; j++){
        console.log("*");
    }
    console.log(i);
}


let i = 1;
do{
    console.log("2");    
    if(i%3==1){
        console.log(i);
    }
    i++;
    
}while(i<10);


//console.log(5==5);

console.log(4567%10);

let a = 5;
let b = 3;
let result = (a < 10) && (a > b);
console.log(result);

a = 12
b = 20;
if(a%10==0 && b%10==0){
    console.log(true);
}else if(a/10==0 || b/10==0){
    console.log(true);
}else{
    console.log(false);
}

"Problem:A school has 
"Problem:Take age from user and check whether he/she is eligible for vote or Not 
"Problem:Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.



Input:*  2  3
+  1  7


Output:6
8"
"Problem:
PrepBuddy wants you to get familiar with various Relational operators. He provides you with two numerical values X and Y and your task is to find the relation between them that is,
 X ​is smaller than Y 
X ​is greater thanY
X ​is equal toY

Input:
4 6

Output:
4 is smaller than 6
"


// Left Shift - a << b
// Sign Propagating Right Shift - a >> b
// Zero fill Right shift - a >>> b


// AND GATE  (*) a.b
//if both the values are true then only output will be true else it will be false 

// 0 0 = 0
// 0 1 = 0
// 1 0 = 0
// 1 1 = 1


// OR GATE (+) a+b
//if either of any two values are true then the output will be true, even if both the values are true then also it will be true

// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 1



// XOR GATE 
//only either of the two values should be true to get true in the output

// 0 0 = 0
// 0 1 = 1
// 1 0 = 1
// 1 1 = 0


console.log(x);
var x = 10;

let x;
console.log(x);
console.log(x + y);
console.log(x * y);
console.log(x % y);

let z = 10;
console.log(z);
let name2 = "Hello!";
console.log(name2);
let a = 20.5;
console.log(a);


const p;
p = 10;
console.log(p);

//window.alert("Hello! World");

console.log("Fun is not Easy!");

var number = 2;
function Square (n){
    var res = n*n;
    return res;
}

var result = Square(3);
console.log(result);

function area(r){
    var areaCircle = 3.14*r*r;
    return areaCircle;
}
var length = 30;
var breath = 20;
var areaCir = area(40);

console.log(areaCir);
*/
