let heading=document.getElementsByClassName("title")[2]
console.log(heading.innerText);
console.log(heading);
let para=document.getElementsByClassName("para");
console.log(para.innerText);
console.log(para);
let tag=document.getElementsByClassName("para");
console.log(para.innerText);
console.log(tag);
let changeHeading= document.getElementsByClassName("tittle")[4] ;
console.log(changeHeading);
changeHeading.innerText="Hii Sanskar"    //Reads only text >> It can not create element
 
changeHeading.innerHTML="<i><strong>Hii Sanskar</strong></i>"   // It reads only HTML >> can create elements
changeHeading.style.color= "red"
changeHeading.style.background= "yellow"
changeHeading.style.fontSize= "56px"
changeHeading.style.padding= "100px"
 
 
 
let addPara= document.createElement("p")
addPara.innerText="Dikshant asdasdsad Dikshant asdasdsadDikshant asdasdsad";
document.body.appendChild(addPara)
addPara.style.color= "red"
addPara.style.background= "yellow"
addPara.style.fontSize= "56px"
addPara.style.padding= "100px"
 
let addBtn= document.createElement("Button");
addBtn.innerText="Click Me"
document.body.appendChild(addBtn)
 
addBtn.style.color= "red"
addBtn.style.background= "black"
addBtn.style.fontSize= "26px"
addBtn.style.padding= "20px"
 
 
document.getElementById("para").remove();
 
 
 
// we Updated the data
//  we deleted the data
// we create the elemnts
//  we Read the data
// We tried to acess the data