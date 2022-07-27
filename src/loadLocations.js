export default function loadLocations() {
    const content = document.getElementById("content");
    const locationsLink = document.getElementById("link2");

    const locationsContainer = document.createElement("div");
    locationsContainer.textContent = "test locations";

    locationsLink.addEventListener("click", () => {
        content.textContent = "";
        locationsContainer.textContent = "";
        locationsContainer.id = "locationCards";
        const header = document.createElement("h2");
        header.textContent = "Locations";
        content.appendChild(header);

        // Location 1
        const location1 = document.createElement("div");
        location1.classList.add("locationCard");

        const iframe1 = document.createElement("iframe");
        iframe1.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500253.8940782755!2d165.1124803551673!3d11.606692031548878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sBikini%20Atoll!5e0!3m2!1sen!2sca!4v1658369392555!5m2!1sen!2sca";
        iframe1.style = "border: 0";
        location1.appendChild(iframe1);

        const info1 = document.createElement("div");
        info1.classList.add("locationInfo");
        const info1head = document.createElement("h3");
        info1head.textContent = "Krusty Krab Headquarters";
        const info1address = document.createElement("div");
        info1address.textContent = "580153 Kelp Street";
        const info1city = document.createElement("div");
        info1city.textContent = "Bikini Bottom, Bikini Atoll";
        const info1country = document.createElement("div");
        info1country.textContent = "Marshall Islands";
        info1.appendChild(info1head);
        info1.append(info1address);
        info1.append(info1city);
        info1.append(info1country);
        location1.appendChild(info1);

        locationsContainer.appendChild(location1);

        // Location 2
        const location2 = document.createElement("div");
        location2.classList.add("locationCard");

        const iframe2 = document.createElement("iframe");
        iframe2.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941093.9866484386!2d-110.62640117691875!3d22.87097633047577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4b5a91c34de5%3A0xf7bf3797fd3be21c!2sThe%20Krusty%20Krab!5e0!3m2!1sen!2sca!4v1658367259779!5m2!1sen!2sca";
        iframe2.style = "border: 0";
        location2.appendChild(iframe2);

        const info2 = document.createElement("div");
        info2.classList.add("locationInfo");
        const info2head = document.createElement("h3");
        info2head.textContent = "Krusty Krab Mexico";
        const info2address = document.createElement("div");
        info2address.textContent = "808 Sponge Street";
        const info2city = document.createElement("div");
        info2city.textContent = "La Paz, Cabo San Lucas";
        const info2country = document.createElement("div");
        info2country.textContent = "Mexico";
        info2.appendChild(info2head);
        info2.append(info2address);
        info2.append(info2city);
        info2.append(info2country);
        location2.appendChild(info2);

        locationsContainer.appendChild(location2);

        // Location 3
        const location3 = document.createElement("div");
        location3.classList.add("locationCard");

        const iframe3 = document.createElement("iframe");
        iframe3.src =
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696704.0904601718!2d-123.41284267545255!3d46.991147639083316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549173f5fbb6f051%3A0x834bf57336883662!2sBikini%20Bottom%20Tanning%20Salon!5e0!3m2!1sen!2sca!4v1658370434268!5m2!1sen!2sca";

        iframe3.style = "border: 0";
        location3.appendChild(iframe3);

        const info3 = document.createElement("div");
        info3.classList.add("locationInfo");
        const info3head = document.createElement("h3");
        info3head.textContent = "Bikini Bottom Tanning Salon & Pizza";
        const info3address = document.createElement("div");
        info3address.textContent = "69420 Capitol Boulevard SE";
        const info3city = document.createElement("div");
        info3city.textContent = "La Paz, Cabo San Lucas";
        const info3country = document.createElement("div");
        info3country.textContent = "Mexico";
        info3.appendChild(info3head);
        info3.append(info3address);
        info3.append(info3city);
        info3.append(info3country);
        location3.appendChild(info3);

        locationsContainer.appendChild(location3);

        content.appendChild(locationsContainer);
    });
}

{
    /* <h2>Locations</h2>
<div id="locationCards">
    <div class="locationCard">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500253.8940782755!2d165.1124803551673!3d11.606692031548878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x644c2180a24fadbf%3A0x4c3f21ce9753a027!2sBikini%20Atoll!5e0!3m2!1sen!2sca!4v1658369392555!5m2!1sen!2sca"
            max-width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="locationInfo">
            <h3>Krusty Krab Headquarters</h3>
            <div>580153 Kelp Street</div>
            <div>Bikini Bottom, Bikini Atoll</div>
            <div>Marshall Islands</div>
        </div>
    </div>

    <div class="locationCard">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941093.9866484386!2d-110.62640117691875!3d22.87097633047577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4b5a91c34de5%3A0xf7bf3797fd3be21c!2sThe%20Krusty%20Krab!5e0!3m2!1sen!2sca!4v1658367259779!5m2!1sen!2sca"
            max-width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="locationInfo">
            <h3>Krusty Krab Mexico</h3>
            <div>808 Sponge Ave</div>
            <div>La Paz,Cabo San Lucas</div>
            <div>Mexico</div>
        </div>
    </div>

    <div class="locationCard">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696704.0904601718!2d-123.41284267545255!3d46.991147639083316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549173f5fbb6f051%3A0x834bf57336883662!2sBikini%20Bottom%20Tanning%20Salon!5e0!3m2!1sen!2sca!4v1658370434268!5m2!1sen!2sca"
            max-width="100%"
            height="auto"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="locationInfo">
            <h3>Bikini Bottom Tanning Salon & Pizza</h3>
            <div>69420 Capitol Blvd SE</div>
            <div>Seattle, WA</div>
            <div>United States</div>
        </div>
    </div>
</div> */
}
