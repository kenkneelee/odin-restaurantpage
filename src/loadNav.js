import logo from "./images/logo.png";

export default function loadNav() {
    const content = document.getElementById("content");

    const nav = document.createElement("div");
    nav.id="nav";
    const mainLogo = document.createElement("img");
    mainLogo.id="mainLogo";
    mainLogo.src = logo;
    const links = document.createElement("ul");
    links.id="links";
    const link1 = document.createElement("li");
    const link2 = document.createElement("li");
    const link3 = document.createElement("li");
    const link4 = document.createElement("li");

    link1.textContent = "Menu";
    link2.textContent = "Locations";
    link3.textContent = "About Us";
    link4.textContent = "Order Online";

    links.appendChild(link1);
    links.appendChild(link2);
    links.appendChild(link3);
    links.appendChild(link4);


    nav.appendChild (mainLogo);
    nav.appendChild (links);

    content.appendChild(nav);
    // return element
}