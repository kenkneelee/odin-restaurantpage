export default function loadOrder() {
    const content = document.getElementById("content");
    const orderLink = document.getElementById("link4");

    const orderContainer = document.createElement("div");

    orderLink.addEventListener("click", () => {
        content.textContent = "";
        orderContainer.textContent = "";
        orderContainer.id = "orderOnline";
        const header = document.createElement("h2");
        header.textContent = "Order Online";
        content.appendChild(header);

        const orderContent = document.createElement("div");
        orderContent.id = "orderContent";
        const subHead = document.createElement("h3");
        subHead.textContent = "Order now through one of our partners:";
        const uber = document.createElement("img");
        uber.src =
            "http://yeoldeorchard.com/wp-content/uploads/2020/04/5310366-uber-eats-logo-png-and-vector-logo-download-uber-eats-png-3500_3500_preview.png";
        const doordash = document.createElement("img");
        doordash.src =
            "https://toppng.com/uploads/preview/doordash-logo-11609359542nd1g660y5t.png";
        const skip = document.createElement("img");
        skip.src =
            "https://pbs.twimg.com/profile_images/1451592207295787014/HG87IRDA_400x400.jpg";
        orderContent.append(subHead, uber, doordash, skip);

        orderContainer.appendChild(orderContent);

        content.appendChild(orderContainer);
    });
}
