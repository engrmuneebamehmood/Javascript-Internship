// promise

let promise = new Promise(function(resolve, reject) {
    alert("Hello , I am your promise")
    resolve(123)
})

console.log("First")
setTimeout(function() {
    console.log("Second ")
}, 2000)

console.log(" Third")
console.log(promise)


// then , catch


let p1 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                 console.log("I am a promise and I am resolved")
                resolve(true)
        }, 5000)
})

let p2 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                 console.log("I am a promise and I am rejected")
                reject(new Error("I am an error"))
        }, 5000)
})

// To get the value
p1.then((value) => {
        console.log(value)
})

// To catch the errors
 p2.catch((error) => {
         console.log("some error occurred in p2")
 })


p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})
*/

//////////////////////////////
 // Multiple Handlers

let p1 = new Promise((resolve, reject) => {
     alert("Hey I am P1 and i am not resolved ")

    setTimeout(() => {
            resolve(54);
    }, 2000)
})

p1.then(() => {
    console.log("p1 is taking 2 seconds")

    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(55)
            }, 4000)
    })
}).then((value) => { console.log(value) })

p1.then(() => {
    console.log("Congratulations this promise P1  is now resolved finaly")
})
*/


//////////// Callbacks



function performOperation(a, b, callback) {
    console.log("Performing the operation...");

    const result = callback(a, b);

    console.log("Result:", result);
}

// Callback function for addition
function add(a, b) {
    return a + b;
}

// Callback function for multiplication
function multiply(a, b) {
    return a * b;
}

performOperation(5, 3, add);     
performOperation(5, 3, multiply); 

*/


////////////////////////////

//promise API

//creating promise 1
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("I am first promise");
    }, 6000);
});

//creating promise2

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            // resolve("I am promise 2");
            reject(new Error(" Hey! i am an error"));
    }, 3000);
});

//creating promise3

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("I am third promise");
    }, 2000);
});

 p1.then((value) => {
         console.log(value)
 })

p2.catch((error) => {
        console.log("some error occurred in p2")
     })

p3.then((value) => {
        console.log(value)
})


// these are the 6 functions that promise API privides

let promise_all = Promise.all([p1, p2, p3])
let promise_all = Promise.allSettled([p1, p2, p3])
let promise_all = Promise.race([p1, p2, p3])
 let promise_all = Promise.resolve(6)

let promise_all = Promise.reject(new Error("I am the final error"))
promise_all.then((value) => {
    console.log(value)
})



// try catch example

setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
            setTimeout(()=>{ 
                    console.log(muneeba)  
            }, 100)
    }
    catch(err){
            console.log("i am catching error")
    }
    
    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." )
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking muneeba's detail.... Please wait..." )
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password is fetched.... Please wait..." )
    }, 4000) 

////////////////////////////////

//async await



    async function muneeba() {
        let RawalpindWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("37 degree")
                }, 2000)
        })

        let IslamabadWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("47 degree")
                }, 3000)
        })

        RawalpindWeather.then(alert)
        IslamabadWeather.then(alert)


        console.log("Fetching Rawalpindi Weather Please wait ...")
        let rwp = await  RawalpindWeather
        console.log("Fetched Rawalpindi Weather: " + rwp)



        console.log("Fetching Islamabad Weather Please wait ...")
        let isb = await IslamabadWeather
        console.log("Fetched Islamaabad Weather: " + isb)


        return [rwp,isb]
}

const day = async () => {
        console.log("Hey I am a day and I got weather ")
}

const main1 = async () => {
        console.log("Welcome to weather control room")
        let a = await muneeba()
        let b = await day()

}
main1()




//simple try catch
try {
    let age = prompt("Enter your age")
    age = Number.parseInt(age) 
    if(age>150){
    throw new ReferenceError("This is probably not true")
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("The script is still running")
