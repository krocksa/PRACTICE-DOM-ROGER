let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let msj = document.createElement('div');
	msj.style.background = "yellow";
	msj.innerHTML = "Hello World";
	document.body.appendChild(msj)
});