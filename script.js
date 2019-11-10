

var input = document.querySelector("input");
var addButton= document.querySelector("#addButton");
var clearButton= document.querySelector("#clearButton");
var ul = document.querySelector("ul");

////////////////////////////////////////////////////////////

function writeItems (){
	var li= document.createElement("li");
	var span =document.createElement("span");
	var text = input.value;
	span.innerText=text;

	var but=document.createElement("button");
	but.textContent="X";
	but.addEventListener("click", removeChild);

	li.appendChild(span);
	li.appendChild(but);
	ul.appendChild(li);
	input.value="";
}
addButton.addEventListener("click", writeItems);

///////////////////////////////////////////////////////////

function clearAll(){
	ul.innerHTML="";
}
clearButton.addEventListener("click", clearAll);

////////////////////////////////////////////////////////////

function removeChild(){
	this.parentElement.remove();
	// li.innerHTML="";
}
