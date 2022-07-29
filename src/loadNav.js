import logo from "./images/logo.png";

export default function loadNav() {
    const body = document.getElementsByTagName("body")[0];

    const nav = document.createElement("div");
    nav.id = "nav";
    const mainLogo = document.createElement("img");
    mainLogo.id = "mainLogo";
    mainLogo.src = logo;
    const links = document.createElement("ul");
    links.id = "links";
    const link1 = document.createElement("li");
    link1.id = "link1";
    const link2 = document.createElement("li");
    link2.id = "link2";
    const link3 = document.createElement("li");
    link3.id = "link3";
    const link4 = document.createElement("li");
    link4.id = "link4";

    link1.textContent = "Menu";
    link2.textContent = "Locations";
    link3.textContent = "About Us";
    link4.textContent = "Order Online";

    links.append(link1, link2, link3, link4);

    nav.append(mainLogo, links);

    body.prepend(nav);
}
