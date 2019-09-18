let body = document.body
// don't need to do querySelector since document only
// has head and body so we can use dot notation.

let div = document.createElement('div');
let p = document.createElement('p');
p.innerText = "This is my paraparagraph!"

// Google how to add a class name with dom manipulation.

div.className = 'card';

div.appendChild(p);
body.appendChild(div);

// Can do any styling here with JS
body.style.background = "purple" // to do them one by one or can do all at once
body.style = 'box-shadow: 0 0 15px black; height: 300px;'

console.log('div', div);
