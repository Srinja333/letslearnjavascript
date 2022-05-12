//1. ways to print in js
// alert("me");
//document.write("hello guys")
//console.log("hello world");


//2. js console api
//console.log("hello world", 4 + 6, "another log");
//console.warn("get out");
//console.error("this is an error");

//3. js variables
//what are variables?-containers to store data values

/* multi 
 line 
comment*/

var no1 = 90;
var no2 = 80;
//console.log(no1+no2);

//4. datatypes in js
//numbers
var num1 = 90;
var num2 = 80;

//string
var str1 = "i am a boy";
var str2 = 'i am a girl';

//objects
var marks = {
    ravi: 90,
    srinjay: 100,
    ayan: 80
}
//console.log(marks);

//boolean
var a = true;
var b = false;

//console.log(a,b);

///undefined
//var und=undefined;
var und;
//console.log(und);

//null
var n = null;
//console.log(n);


/*at a very heigh level,there are two types of datatypes
in js
1.primitive data types:undefined,null,number,string,boolean,symbol
2.reference data types:arrays and objects
*/

//arrays
var arr = [1, 2, "srinju", 4, 5];
//console.log(arr);

//operators in js
//arithmetic operators
var c = 90;
// var d=2;
// console.log("the value of c+d is",c+d);
// console.log("the value of c-d is",c-d);
// console.log("the value of c*d is",c*d);
// console.log("the value of c/d is",c/d);

//assignment operators
var e = c;
//e+=2;
//e-=2;//e=e-2
//e*=2;
//e/=2;
//console.log(e);

//comparison operators
var x = 34;
var y = 56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

//logical operators

//logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//logical not
// console.log(!false);
// console.log(!true);

//function in js

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
//DRY=do not repeat yourself
c1 = avg(2, 4);
c2 = avg(5, 15);
//console.log(c1,c2);

//conditionals in js
var age = 22;
//single if statement
//if(age>18)
// {
//     console.log( "u can drink rasna water");
// }
//if-else statement
// if(age>18)
// {
//     console.log( "u can drink rasna water");
// }
// else{
//     console.log( "u can not drink rasna water");
// }

//if-else 
// age=70;
// if(age>18 && age<=35)
// {
//     console.log("adult");
// }
//  else if( age>5 && age<=18)
// {
//     console.log("teenager");
// }
// else if(age>60 && age<200)
// {
//     console.log("old");
// }
// else if(age>35)
// {
//     console.log("middle age");
// }
// else{
//     console.log("kid");
// }
// console.log("end of ladder");


// //excercise

// function rasnawaterdrink(age)
// {
//     if(age>=18)
// {
//     console.log("u can drink");
// }
//  else if( age>25)
// {
//    console.log("u can drink also");
// }
// else if(age>35)
// {
//     console.log("u can drink bro");
// }
// else if(age>45)
// {
//     console.log("u can drink uncle");
// }
// else{
//     console.log("no u cant drink");
// }
// }

// rasnawaterdrink(80);

var arr = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//     if(i==2)
//     //break;
//      continue;
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element);
// })


// const ac = 0;//u can't update it
// ac++;
// //ac=ac+1;
// let j = 0;//scope in block only
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;

// } while (j < arr.length);


//array methods
let myarr = ["fan", "kites", 32, null, true];
//console.log(myarr.length);
//myarr.pop();
//myarr.push("aryan");
//myarr.shift();//remove 1st element and print the remaning elements
const newlen = myarr.unshift("yan");//unshift alone just add new element if we use it in console.log we get array new length
//console.log(newlen);
//console.log(myarr);

//string methods
let mystr = "ayan is a good boy good";
// console.log(mystr.length);
// console.log(mystr.indexOf("ayan"));
// console.log(mystr.lastIndexOf("good"));
// console.log(mystr.slice(0,3));
d = mystr.replace("good", "bad");//it replacE only first occurance of the particular string
//console.log(d);


//dates in js
let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

//DOM
let elem = document.getElementById('click');
//console.log(elem);

let elemclass = document.getElementsByClassName('container');
//console.log(elemclass);
//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn=document.getElementsByTagName('div');
// console.log(tn);

// createdElement=document.createElement('p');
// createdElement.innerText="this is created para";
// tn[0].appendChild(createdElement);

// createdElement2=document.createElement('b');
// createdElement2.innerText="this is created bold";
// tn[0].replaceChild(createdElement2,createdElement);

//removeChild(element);-->removes an element

//Selecting using Query
// sel=document.querySelector('.container');
// console.log(sel);
// sel=document.querySelectorAll('.container');
// console.log(sel);
// function clicked()
// {
//     console.log("the button was clicked");
// }
// window.onload=function(){
//     console.log("the document  was loaded");
// }

//Events in Js
//  firstcontainer.addEventListener('click',function(){
//      document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>";
//     console.log("clicked on container");
//  });

// firstcontainer.addEventListener("mouseover",function(){
//     console.log("Mouse on container");
// });

// firstcontainer.addEventListener("mouseout",function(){
//     console.log("Mouse out of container");
// });


// let prevhtml=document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener("mouseup",function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevhtml;
//     console.log("Mouse up of container");
// });

//  firstcontainer.addEventListener("mousedown",function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked </b>";
//     console.log("Mouse down of container");
// });

//Arrow functions
// function summ(a,b)
// {
//     return a+b;
// }
// summ=(a,b)=>{
//     return a+b;
// }
// logkaro=()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<b> set intervel fired </b>";
//     console.log("u r log");
// }


//SetTimeout and setinterval
//clr=setTimeout(logkaro,5000);//set time which after my function get start
//clr=setInterval(logkaro,3000);//set time for repeatedly work
//use clearTimeout(clr)/clearInterval(clr) to cancel setTimeout/setInterval

//js localStorage
// localStorage.getItem('name')

// localStorage

// localStorage.clear()

// localStorage.setItem('name','srinju')

// localStorage.getItem('name')

// localStorage.removeItem('name');

// localStorage.clear()


//json 
// obj = { name: "harry", length: 1, a: { this: 'tha"t' } }//json supports only double quotes,not single quotes so it gives in console with double quotes only
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// persed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(persed);

//Templates literals - Backticks
a=80;
console.log(`this is  my ${a}`);



















