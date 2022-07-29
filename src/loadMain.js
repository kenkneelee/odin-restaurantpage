export default function loadMain() {
    const content = document.getElementById("content");
    const mainLink = document.getElementById("mainLogo");

    load();

    mainLink.addEventListener("click", () => {
        load();
    });

    function load(){
        content.textContent = "";
        const header = document.createElement("h2");
        header.textContent="Welcome to the Krusty Krab Pizza";

        const mainImg = document.createElement("img");
        mainImg.src="https://wallpapercave.com/wp/wp4553573.jpg";
        mainImg.style.maxWidth="60%";
        mainImg.id="mainImg";

        const motto = document.createElement("h2");
        motto.textContent="It's the pizza for you and me.";
        
        content.append(header,mainImg, motto);
    }
}
