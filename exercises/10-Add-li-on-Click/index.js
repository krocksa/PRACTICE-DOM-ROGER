let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let creat = document.querySelector("#myList")
	let aux = document.createElement("li");
	let c = document.createTextNode("Forth Element")
	aux.appendChild(c)
	creat.appendChild(aux)
	document.body.appendChild(creat)
});
