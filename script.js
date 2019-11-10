

var input = document.querySelector("input");
var addButton= document.querySelector("#addButton");
var clearButton= document.querySelector("#clearButton");
var ul = document.querySelector("ul");

function writeItems (){
	var li= document.createElement("li");
	var span =document.createElement("span");
	var buttonx=document.createElement("button");
	// buttonx.setAttribute("onclick",removeChild(this))
	var text = input.value;
	span.innerText=text;
	buttonx.textContent="X";
	li.appendChild(span);
	li.appendChild(buttonx);
	ul.appendChild(li);
}
addButton.addEventListener("click", writeItems);


function clearAll(){
	ul.innerHTML="";
}
clearButton.addEventListener("click", clearAll);

// function removeChild(x){
// console.log("toto")}
