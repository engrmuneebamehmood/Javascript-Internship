
/*
fetch api

let p = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response) => {
        console.log("it is status " ,response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()


}).then((value2) => {
        console.log(value2)
})


let p2 = fetch("https://goweather.herokuapp.com/weather/Ny")

p.then((response) => { 
        return response.json()

}).then((response) => {
        console.log(response)
})

*/

//post request
/*

const createTodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
            title: "muneeba",
            body: 'javascript',
            userId: 54,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(54))
}

mainFunc()
*/

//cookie
/*
console.log(document.cookie)
document.cookie = "name=muneeba"
document.cookie = "uni=fjwu"
document.cookie = "skill=web"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)


// Storing data in Session Storage
sessionStorage.setItem('username', 'John');
sessionStorage.setItem('isLoggedIn', true);

// Retrieving data from Session Storage
const username = sessionStorage.getItem('username');
const isLoggedIn = sessionStorage.getItem('isLoggedIn');

console.log(username); 
console.log(isLoggedIn); 

// Storing data in Local Storage
localStorage.setItem('theme', 'dark');
localStorage.setItem('fontSize', '16px');

// Retrieving data from Local Storage
const theme = localStorage.getItem('theme');
const fontSize = localStorage.getItem('fontSize');

console.log(theme); 
console.log(fontSize); 


// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")

sessionStorage.setItem('username', 'John');
sessionStorage.setItem('isLoggedIn', true);

// Retrieving data from Session Storage
const username = sessionStorage.getItem('username');
const isLoggedIn = sessionStorage.getItem('isLoggedIn');

console.log(username); 
console.log(isLoggedIn); 

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}

*/

//note reminder

 let n = localStorage.getItem("note")
 alert("Your note is " + n)

 let a = prompt("Enter your note")
 if (a)
  {         localStorage.setItem("note", a)
 }
