export default function loadAbout() {
    const content = document.getElementById("content");
    const aboutLink = document.getElementById("link3");


    const aboutContainer = document.createElement("div");
    aboutContainer.textContent = "test about us";

    aboutLink.addEventListener("click", () => {
        content.innerHTML="";
        content.appendChild(aboutContainer);
        
    })
}