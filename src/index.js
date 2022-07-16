import './styles/style.css';
import logo from './images/logo.png';
console.log("test");

const content = document.getElementById('content');
const mainLogo = new Image();
mainLogo.src = logo;
content.appendChild(mainLogo);