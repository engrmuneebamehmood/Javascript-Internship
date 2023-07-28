//getter setter
/*
class Animal{
    constructor(name){

        this._name=name
    }

    fly()
    {
        alert("i am flying")
    }
    get name()
    {
        return this._name
    }

    set name(newname)
    {
         this._name=newname

    }
}

let a= new Animal("muneeba")
a.fly()
console.log(a.name)
a.name="tuba"
console.log(a.name)


//instance of operator

console.log(a instanceof Animal)



//iife
let a= ()=>
{
    return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(54)
    },3000)
})
}


(  async()=>
{
    let b= await a()
    console.log(b)
    let c= await a()
    console.log(c)
})
()



//destructuring

let arr=[3,5,8,9,0]

let [a,b , ...rest]=arr


console.log(a,b,rest)

// spread
//it makes  the array as key value pair
let array1=[1,2,3,4,5]
let obj1={...array1}
console.log(obj1)

function sum( v1,v2,v3)
{
    return v1+v2+v3
}
console.log(sum(...array1))

*/


/*
//scope
let a=8;
{
    console.log(a)//it is block level scope
    let b=7// can not be accessed outside the scope
}
console.log(b)// it is out of scope


function f()
{
    let c=20
    console.log(c)
}
f()
*/




//hoisting
/*
sum(2,7)

function sum(a,b)
{
console.log(a+b)

}
*/

//closures

let name="tuba"
function myname()
{
    let name="muneeba"
    {
        let name="musfirah"
        console.log( "My name is " + name)
    }

    console.log( "My name is " + name)
}
console.log( "My name is " + name)


function outerFunction() {
    const outerVariable = 'I am from the outer function!';
  
    function innerFunction() {
      console.log(outerVariable); // Inner function can access `outerVariable`
    }
  
    return innerFunction; // Returning the inner function
  }


  let of=outerFunction()
  of()
  let inf=innerFunction()
  inf()
 

