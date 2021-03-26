const container = document.querySelector('.container');
const para = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para1 = document.createElement('p');


container.appendChild(para);
container.appendChild(h3);
div.appendChild(h1);
div.appendChild(para1);
// adds to the parentNode ('container'), reference to 'div' before 'para',
// that where already added to element 'div' on lines 11 and 12.
container.insertBefore(div, para);

div.setAttribute('style', 'borderColor: black; background: pink');
div.textContent = "I'm in a div";
para1.textContent = 'ME TOO!';
h3.style.color = 'blue';
h3.textContent = "I'm blue";
para.style.color = 'red';
para.textContent = "Hey I'm red";

