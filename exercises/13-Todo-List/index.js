// Your code here
let input = document.getElementById('addToDo');
let u = document.getElementById('ulID');
input.addEventListener('keydown', (e) => {
    if (e.target.value.trim().length != 0 && e.key === 'Enter') {
        let l = document.createElement('li');
        l.innerHTML = `<span><i class="fa fa-trash"></i></span> ${e.target.value}`;
        l.addEventListener('click', (e) => {
            l.parentNode.removeChild(l)
        })
        u.appendChild(l);
        e.target.value = ''
    } 
})
for (let li of u.children) {
    li.addEventListener('click', (e) => {
        li.parentNode.removeChild(li)
    })
}