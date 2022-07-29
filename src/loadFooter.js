export default function loadFooter() {
    const body = document.getElementsByTagName("body")[0];
    const footer = document.createElement ("footer")
    const footerText = document.createElement("p");
    footerText.innerHTML = `Made by
    <a href="https://github.com/kenkneelee">Kenny Lee</a>
    for
    <a href="https://www.theodinproject.com/"
        >The Odin Project.</a
    >`
    footer.appendChild(footerText);
    body.appendChild(footer);
}

