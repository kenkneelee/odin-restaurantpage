export default function loadLocations() {
    const content = document.getElementById("content");
    const locationsLink = document.getElementById("link2");


    const locationsContainer = document.createElement("div");
    locationsContainer.textContent = "test locations";

    locationsLink.addEventListener("click", () => {
        content.innerHTML="";
        content.appendChild(locationsContainer);
        
    })
}