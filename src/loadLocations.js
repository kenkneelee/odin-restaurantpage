export default function loadLocations() {
    const content = document.getElementById("content");
    const locationsLink = document.getElementById("link2");

    const locationsContainer = document.createElement("div");

    locationsLink.addEventListener("click", () => {
        content.textContent = "";
        locationsContainer.textContent = "";
        locationsContainer.id = "locationCards";
        const header = document.createElement("h2");
        header.textContent = "Locations";
        content.appendChild(header);

        newLocation(
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500253.8940782755!2d165.1124803551673!3d11.606692031548878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sBikini%20Atoll!5e0!3m2!1sen!2sca!4v1658369392555!5m2!1sen!2sca",
            "Krusty Krab Headquarters",
            "580153 Kelp Street",
            "Bikini Bottom, Bikini Atoll",
            "Marshall Islands"
        )
        newLocation(
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941093.9866484386!2d-110.62640117691875!3d22.87097633047577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4b5a91c34de5%3A0xf7bf3797fd3be21c!2sThe%20Krusty%20Krab!5e0!3m2!1sen!2sca!4v1658367259779!5m2!1sen!2sca",
            "Krusty Krab Mexico",
            "808 Sponge Street",
            "La Paz, Cabo San Lucas",
            "Mexico"
        )
        newLocation(
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696704.0904601718!2d-123.41284267545255!3d46.991147639083316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549173f5fbb6f051%3A0x834bf57336883662!2sBikini%20Bottom%20Tanning%20Salon!5e0!3m2!1sen!2sca!4v1658370434268!5m2!1sen!2sca",
            "Bikini Bottom Tanning Salon & Pizza",
            "69420 Capitol Boulevard SE",
            "Seattle, Washington",
            "United States"
        )

        content.appendChild(locationsContainer);
    });


    function newLocation(iframe, name, address, city, country){
        const location = document.createElement("div");
        location.classList.add("locationCard");

        const iframeMap = document.createElement("iframe");
        iframeMap.src=iframe;
        iframeMap.style="border:0";
        location.appendChild(iframeMap);

        const info = document.createElement("div");
        info.classList.add("locationInfo");
        const infoHead = document.createElement("h3");
        infoHead.textContent = name;
        const infoAddress = document.createElement("div");
        infoAddress.textContent = address;
        const infoCity = document.createElement("div");
        infoCity.textContent = city;
        const infoCountry = document.createElement("div");
        infoCountry.textContent = country;
        info.append(infoHead, infoAddress, infoCity, infoCountry);
        location.appendChild(info);
        locationsContainer.appendChild(location);
    }

}

