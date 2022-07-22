import "./styles/style.css";
import printStuff from "./testFunction";
import navBg from "./images/bgSlate.jpg";
// import map1 from "./images/map1.jpeg"

import loadNav from "./loadNav";
loadNav();

import loadFooter from "./loadFooter";
loadFooter();

// menu module
const menuPics = document.getElementsByClassName("menuPic");
console.log(menuPics);

for (let i=0; i< menuPics.length; i++) {
    let menuPicture = require(`./images/menu/menu${i}.png`);
    menuPics[i].src = menuPicture;
}



// const mapPin1 = document.getElementById("mapPin1");
// mapPin1.src = map1;

// nav.style.backgroundImage = 'url (' + navBg + ')';

// const content = document.getElementById('content');
// const mainLogo = new Image();
// mainLogo.src = logo;
// content.appendChild(mainLogo);
// const btn = document.createElement('button');
// btn.textContent = "Click me";
// btn.onclick = printStuff;
// content.appendChild(btn);
