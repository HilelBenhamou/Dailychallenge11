

var input = document.querySelector("input");
var addButton= document.querySelector("#addButton");
var clearButton= document.querySelector("#clearButton");
var ul = document.querySelector("ul");
var li=document.querySelector("li");


////////////////////////////////////////////////////////////

function writeItems (){
	var li= document.createElement("li");
	var span =document.createElement("span");
	var text = input.value;
	span.innerText=text;

	var but=document.createElement("button");
	but.textContent="X";
	but.addEventListener("click", removeChild);

	var invisiblebut= document.createElement("button");
	invisiblebut.textContent="Done";
	invisiblebut.addEventListener("click", linethrought);

	li.appendChild(span);
	li.appendChild(but);
	li.appendChild(invisiblebut)
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

function linethrought(){
	this.parentElement.setAttribute("class", "done");
}
///////////////////////////////////////////////////////////

//barer quand on clique dessus
