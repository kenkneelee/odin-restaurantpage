export default function loadMenu() {
    const content = document.getElementById("content");
    const menuLink = document.getElementById("link1");


    const menuContainer = document.createElement("div");
    menuContainer.textContent = "test";

    menuLink.addEventListener("click", () => {
        content.innerHTML="";
        content.appendChild(menuContainer);
    })
}