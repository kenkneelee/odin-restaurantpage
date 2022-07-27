export default function loadOrder() {
    const content = document.getElementById("content");
    const orderLink= document.getElementById("link4");


    const orderContainer = document.createElement("div");
    orderContainer.textContent = "test order";

    orderLink.addEventListener("click", () => {
        content.innerHTML="";
        content.appendChild(orderContainer);
        
    })
}