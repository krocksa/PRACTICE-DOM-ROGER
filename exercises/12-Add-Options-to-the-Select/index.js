let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let creat = document.getElementById("mySelect");
for(let i = 0; i<countries.length; i ++){
    let crea = document.createElement("option");
    crea.innerHTML = countries[i]
    crea.value = countries[i]
    creat.appendChild(crea);
}
creat.addEventListener('change', function (event) {
    alert(event.target.value)
})