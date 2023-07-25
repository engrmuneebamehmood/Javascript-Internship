// making function by arrow methood

const changebody=()=>


{

document.body.firstElementChild.computedStyleMap.background="pink"

}


/// dom 
let b=document.body
console.log("first child:" , b.firstChild)
console.log("first element child:" , b.firstElementChild)
console.log("last child:" , b.lastChild)
console.log("last element child:" , b.lastElementChild)

document.getElementsByTagName("nav")[0].firstElementChild.style.color="green"

//document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"
document.getElementsByTagName("nav")[0].lastElementChild.style.color="green"


Array.from(document.getElementsByTagName("li")).forEach((listitem)=>
{
    listitem.style.background="pink"
})
*/
