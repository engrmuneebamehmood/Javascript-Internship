
console.log("muneeba mehmood")
var a=45
console.log(a)


/////////////////////////////////////
let b="internship"
console.log(b)

// scopes:
 let abc= 20 // abc has a global scope, abc is a global variable

function outer() {
  let x = 10;// x has a functional scope,  x is a local variable of outer
  
// outer is a lexical environment for inner function and variable y
  
  function inner() {
    let y = 5; // y is a local variable of inner
    
    console.log("Inner: x + y =", x + y);
  }

  inner();
  console.log("Outer: x =", x);
}

outer();

//outer can not access the variable y
// inner can access variable x 
// outer is a lexical environment for inner becz inner was defined in it


// data types

let c=null;
let d=123
let e=true;
let f=BigInt("1588")
let g= undefined
let m= Symbol("I am doing my internshi[ at rippel berry")

console.log(a,b,c,d,e,f,g,m)
console.log(typeof(e)) // checking the type of variable

///////////////////////////
// making object, object is a non primitive data type

const item = {
  "muneeba": true,
  "giveup":false,
  "luck": 56,
  "hobby":undefined
}

  console.log(item["muneeba"])
  console.log(item)
  console.log(typeof(item))

  
//////////////////////////

// if else condition

let a=prompt("whats your age?")
if(a>20)
{
    alert("you can drive")
}
  else if( a>15 && a<20)
{
  alert("start learning driving")
}
else 
  {
    alert ("you can not drive")
}

///////////////////////
// switch statement

switch (a)
  {
    case 10:
      alert("you are 10")
break
    case 20:

    alert("you are 20")
      break
    default:
      alert("you are human")
  }
alert((a>70? "you are above 70" : "you are below  70"))



////////////////////////////////////////

let num=prompt("enter any number")
if(num%2==0 || num % 3==0 )
{
  alert("your number is divisible by 2 or 3")
  
}

else
{
 alert("your number is  not divisible by 2 or3")
  
}
////////////////////////////

//for loop
let sum=0

for(let a=0;a<4;a++)
  {

    sum+=(a+1)

  }
    console.log(sum)
    
 /////////////////////////

//while loop
let  c =2
let i =0
while(i<10)
  
  {
 console.log(c)
    i++
  }

///////////////////////////////////////// 
// do while loop
let m=0
do
  {
    console.log("muneeba")
m++
  }
  while(m<10)
  
  //////////////////////// 
  
function add(a,b)
{
  let sum =a+b
  console.log(sum)
}

add(5,6)

//////////////////////
// function

function average(x,y)
{
  let result =  1+  (x+y)/2
  console.log(result)
  console.log("doneeeeee")
}

average(2,4)
average(9,3)

//////////////////////////////
let marks={

  muneeba:50,
  musfirah:10,
  hana:80
}

//object,keys(marks).length

for (let i=0; i<Object.keys(marks).length ; i++)
  
{

console.log("marks of  "+ Object.keys(marks)[i] + ":" + marks[Object.keys(marks)[i]] )
  
}

////////////////////////////
let marks={

  muneeba:50,
  musfirah:10,
  hana:80
}



for (key in marks)
  {
    console.log("The marks of "+ key + " " + marks[key])
  }      

  
////////////////////////
let c=7
let num
while(num!=c)
  {
  
num=prompt ("enter number")
}
console.log("stop")

//////////////////////////

function average(a,b,c,d,e)
{
  let mean = a+b+c+d+e/5
  console.log("the mean of 5 numbers is : " + mean)
}


average(10,33,66,2,7)


/////////////////////


console.log("muneeba mehmood")
var a=45
console.log(a)

let b="internship"
console.log(b)

let c=null;
let d=123
let e=true;
let f=BigInt("1588")
let g= undefined
let m= Symbol("I am doing my internship at rippel berry")

console.log(a,b,c,d,e,f,g,m)
console.log(typeof(e))

/////////////////////////

const item = {
  "muneeba": true,
  "giveup":false,
  "luck": 56,
  "hobby":undefined
}

  console.log(item["muneeba"])
  console.log(item)

console.log(typeof(item))




///////////////////////////




let a=prompt("whats your age?")

if(a>20)
{
    alert("you can drive")
}
  else if( a>15 && a<20)
{
  alert("start learning driving")
}
else 
  {
    alert ("you can not drive")
}

////////


switch (a)
  {
    case 10:
      alert("you are 10")
break
    case 20:

    alert("you are 20")
      break
    default:
      alert("you are human")
  }
alert((a>70? "you are above 70" : "you are below  70"))


/////////


let num=prompt("enter any number")
if(num%2==0 || num % 3==0 )
{
  alert("your number is divisible by 2 or 3")
  
}

else
{
 alert("your number is  not divisible by 2 or3")
  
}
