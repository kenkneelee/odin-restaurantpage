export default function loadAbout() {
    const content = document.getElementById("content");
    const aboutLink = document.getElementById("link3");

    const aboutContainer = document.createElement("div");
    aboutContainer.textContent = "test about us";

    aboutLink.addEventListener("click", () => {
        content.textContent = "";
        aboutContainer.textContent = "";
        aboutContainer.id = "aboutUs";
        const header = document.createElement("h2");
        header.textContent = "About Us";
        content.appendChild(header);

        const aboutContent = document.createElement("div");
        aboutContent.id = "aboutContent";
        const aboutHead = document.createElement("h3");
        aboutHead.textContent = "A tradition of Excellence";
        const aboutImage1 = document.createElement("img");
        aboutImage1.src =
            "https://static.wikia.nocookie.net/spongebob/images/8/8d/Pizza_Delivery_background-26.JPG/";
        const aboutP1 = document.createElement("p");
        aboutP1.textContent =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, velit sed auctor malesuada, ipsum mi euismod magna, at blandit dui libero at magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque in est in mauris mollis varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ullamcorper leo ac mauris sagittis gravida. Praesent rhoncus faucibus felis non ultricies. Proin neque ipsum, mattis sed ex vitae, sagittis auctor purus. Curabitur non odio augue. Mauris odio lectus, tempus dictum leo eu, fermentum malesuada arcu.";
        const aboutImage2 = document.createElement("img");
        aboutImage2.src =
            "https://static.wikia.nocookie.net/spongebob/images/7/73/Pizza_Delivery_background-28.JPG/";
        const aboutP2 = document.createElement("p");
        aboutP2.textContent =
            "Nam a pellentesque magna, sit amet tempus orci. Fusce tincidunt ante ac augue vestibulum molestie. Praesent ac nisi nec tellus ultrices elementum. Sed tempor ultricies tristique. Sed iaculis, ligula vitae pellentesque sagittis, metus nisi dictum lacus, nec volutpat ipsum velit vel lectus. Sed quis felis finibus, dictum augue a, porttitor nisl. Mauris id congue turpis.";
        const aboutImage3 = document.createElement("img");
        aboutImage3.src =
            "https://static.wikia.nocookie.net/spongebob/images/4/49/Pizza_Delivery_background-15.JPG/";
        const aboutP3 = document.createElement("p");
        aboutP3.textContent =
            "Donec ut sem a nunc ultrices tempus sed ac diam. Nulla non orci non mi tincidunt suscipit. Quisque dapibus ante sapien, interdum pharetra mauris elementum eget. Maecenas vulputate vehicula purus eget sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Maecenas et est non tortor dapibus blandit. Suspendisse luctus velit ex, quis condimentum ligula congue vitae. Fusce ex orci, congue id feugiat dignissim, elementum at turpis. Vestibulum faucibus sollicitudin porttitor. Nullam consectetur, nisi nec interdum scelerisque, erat erat iaculis nisl, nec tincidunt nibh tortor ut risus. Duis facilisis malesuada tortor vel porttitor.";

        aboutContent.append(
            aboutHead,
            aboutImage1,
            aboutP1,
            aboutImage2,
            aboutP2,
            aboutImage3,
            aboutP3
        );
        // aboutContent.appendChild(aboutHead);
        // aboutContent.appendChild(aboutImage1);
        // aboutContent.appendChild(aboutP1);
        // aboutContent.appendChild(aboutImage2);
        // aboutContent.appendChild(aboutP2);
        // aboutContent.appendChild(aboutImage3);
        // aboutContent.appendChild(aboutP3);

        aboutContainer.appendChild(aboutContent);

        content.appendChild(aboutContainer);
    });
}

/* <h2>About Us</h2>
<div id="aboutUs">
    <div id="aboutContent">
        <h3>A tradition of excellence</h3>
        <img
            src="https://static.wikia.nocookie.net/spongebob/images/8/8d/Pizza_Delivery_background-26.JPG/"
        />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam volutpat, velit sed auctor malesuada,
            ipsum mi euismod magna, at blandit dui libero at
            magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Quisque in est in mauris mollis
            varius. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nulla ullamcorper leo ac mauris
            sagittis gravida. Praesent rhoncus faucibus felis
            non ultricies. Proin neque ipsum, mattis sed ex
            vitae, sagittis auctor purus. Curabitur non odio
            augue. Mauris odio lectus, tempus dictum leo eu,
            fermentum malesuada arcu.
        </p>
        <img
            src="https://static.wikia.nocookie.net/spongebob/images/7/73/Pizza_Delivery_background-28.JPG/"
        />
        <p>
            Nam a pellentesque magna, sit amet tempus orci.
            Fusce tincidunt ante ac augue vestibulum molestie.
            Praesent ac nisi nec tellus ultrices elementum. Sed
            tempor ultricies tristique. Sed iaculis, ligula
            vitae pellentesque sagittis, metus nisi dictum
            lacus, nec volutpat ipsum velit vel lectus. Sed quis
            felis finibus, dictum augue a, porttitor nisl.
            Mauris id congue turpis.
        </p>
        <img
            src="https://static.wikia.nocookie.net/spongebob/images/4/49/Pizza_Delivery_background-15.JPG/"
        />
        <p>
            Donec ut sem a nunc ultrices tempus sed ac diam.
            Nulla non orci non mi tincidunt suscipit. Quisque
            dapibus ante sapien, interdum pharetra mauris
            elementum eget. Maecenas vulputate vehicula purus
            eget sollicitudin. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia
            curae; Aliquam erat volutpat. Maecenas et est non
            tortor dapibus blandit. Suspendisse luctus velit ex,
            quis condimentum ligula congue vitae. Fusce ex orci,
            congue id feugiat dignissim, elementum at turpis.
            Vestibulum faucibus sollicitudin porttitor. Nullam
            consectetur, nisi nec interdum scelerisque, erat
            erat iaculis nisl, nec tincidunt nibh tortor ut
            risus. Duis facilisis malesuada tortor vel
            porttitor.
        </p>
    </div>
</div> */
