let a=first.getAttribute("class")
console.log(a)

let b=first.hasAttribute("class")
console.log(b)

console.log(first.hasAttribute("class"))
console.log(first.getAttribute("class"))
console.log(first.setAttribute("skill" , "web"))

console.log(first.getAttribute("skill"))
console.log(first.hasAttribute("skill"))
console.log(first.removeAttribute("skill"))
console.log(first.hasAttribute("skill"))


console.log(first.dataset)

console.dir(document.getElementById("first"))
console.log(document.getElementById("first"))

console.log(first.innerHTML)
console.log(first.outerHTML)

console.log(document.body.textContent)



let a= document.getElementsByTagName("div")[0]
a.innerHTML=a.innerHTML + '<h1> MUNEEBA MEHMOOD</h1>'


let a = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
//a.append(div);
 //a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);*/

/*alert("hello")

document.write("hello world")

setTimeout(function()
    {
alert("I am yourt alert")

    },2000)





document.write("hello world")

let b= setTimeout(function()
{
alert("I am yourt alert")

},2000)

/*


c=prompt("wanna run timeout?")
if ("n"==c)
{
    clearTimeout(b)
}

console.log(b)



let b=setInterval(function()
{
    alert("i am set interval")
},2000)


c=prompt("wanna run timeinterval?")
if ("n"==c)
{
    clearInterval(b)
}

console.log(b)

*/


  
  
  

