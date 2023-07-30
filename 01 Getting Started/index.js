console.log('JavaScript läuft');

let content = document.getElementById('content');
let sample = document.getElementById('sample');
let x = document.getElementsByClassName('highlighted');
let y = document.getElementsByTagName('p');

content.textContent = "Dieser Text wurde von einem JavaScript Programm eingefügt.";

let count = prompt('Wie viele kopien des Textes sollen angezeigt werden', 0);

for (let i=0; i < count; ++i)
{
    let clone = sample.cloneNode(true);
    clone.removeAttribute('id');
    content.appendChild(clone);    
}

console.log(x);