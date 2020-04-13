require('../src/style.css');
import bodyContent from '../src/body-content.html'

document.getElementById("body").innerHTML += bodyContent;

//Add freeCodeCamp script (cannot add to dynamically loaded HTML like body-content.html)
let fccScript = document.createElement('script');
fccScript.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
document.head.appendChild(fccScript);