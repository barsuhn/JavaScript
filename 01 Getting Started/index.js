console.log('JavaScript läuft');

let content = document.getElementById('content');
let sample = document.getElementById('sample');

content.textContent = "Dieser Text wurde von einem JavaScript Programm eingefügt.";

for (let i=0; i < 10; ++i)
{
    let clone = sample.cloneNode(true);
    clone.removeAttribute('id');
    
    content.appendChild(clone);    
}

console.log(sample);
console.log(content);