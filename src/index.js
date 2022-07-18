import './styles/style.css';
import logo from './images/logo.png';
import printStuff from './testFunction.js';
console.log("test");

const content = document.getElementById('content');
const mainLogo = new Image();
mainLogo.src = logo;
content.appendChild(mainLogo);
const btn = document.createElement('button');
btn.textContent = "Click me";
btn.onclick = printStuff;
content.appendChild(btn);

