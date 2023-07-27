//oop 
/*
let a = {
    name:"Muneeba",
    lan:"javascript"

}
console.log(a)
let p={
    run:()=>
    {
        alert("run")
    }
}
a.__proto__=p// making p
a.run()

p.__proto__={
    name2:"tuba"

}

a.__proto__=p
a.run()
console.log(a.name2)

//classes and objects and constructor

class Railway
{
    constructor(name,trnum)
    {
        this.name=name
        this.trnum=trnum
    
    
        alert("constructor called")
    }
    
    submit()
    {
        alert(this.name +"submitted" +this.trnum)
    }
    cancel()
    {
        alert(this.name+"cancelled" + this.trnum)
    }

    
}
//railway is class , muneeba tuba are objects

let muneeba=new Railway("i am muneeba", 1234)



let tuba=new Railway("i am tuba",9876)


muneeba.submit()
tuba.submit()
tuba.cancel()

//


class Railway
{
    constructor(name,trnum,address)
    {
        this.name=name
        this.trnum=trnum
        this.address=address

        alert("constructor called")
    }
    
    submit()
    {
        alert(this.name +" has submitted "+" "+this.trnum +" "+ this.address)
    }
    cancel()
    {
         alert(this.name+" has cancelled" +" "+ this.trnum +" "+ this.adress)
         this.trnum=0 
    }

    
}

let muneeba=new Railway( " muneeba" , 123 , "abc")
muneeba.submit()
muneeba.cancel()



class Animal
{
    constructor( name,color)
    {
        this.name=name
        this.color=color
    }

run()
{
    console.log(this.name+ " can run")

}

eat()
{
    console.log(this.name+ " can eat")
}
}

class monkey extends Animal{
    play()
    {
        console.log(this.name + "can play")
    }
 }

let ani=new Animal("rabbit", "red")
ani.run()
ani.eat()

let mm=new monkey("mmmmmm")

mm.play()
mm.eat()
mm.run()
 


//methood over riding

// Superclass
class Animal {
  makeSound() {
    console.log("Generic animal sound");
  }
}

// Subclass
class Dog extends Animal {
  makeSound() {
    console.log("Woof woof!");
  }
}

let dog = new Dog();
dog.makeSound();

  
  






//over riding constructors

// Superclass
class Shape {
  constructor(color) {
    this.color = color;
  }
}

// Subclass
class Circle extends Shape {
  constructor(color, radius) {
    super(color); // Call the constructor of the superclass
    this.radius = radius;
  }
}

let  redCircle = new Circle("red", 5);
console.log(redCircle.color); 
console.log(redCircle.radius); 


//static



//getter setter

*/

class calculate {
  static add(a, b) {
    return a + b;
  }
}

console.log(calculate.add(3, 5));