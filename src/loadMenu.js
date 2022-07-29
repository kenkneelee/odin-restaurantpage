import menu1 from "./images/menu/menu1.png";
import menu2 from "./images/menu/menu2.png";
import menu3 from "./images/menu/menu3.png";
import menu4 from "./images/menu/menu4.png";
import menu5 from "./images/menu/menu5.png";

export default function loadMenu() {
    const content = document.getElementById("content");
    const menuLink = document.getElementById("link1");

    const menuContainer = document.createElement("div");
    menuContainer.textContent = "test";

    menuLink.addEventListener("click", () => {
        content.textContent = "";
        menuContainer.textContent = "";
        menuContainer.id = "menuItems";
        const header = document.createElement("h2");
        header.textContent = "Menu";
        content.appendChild(header);

        newItem(
            menu1,
            "Krusty Krab Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "19"
        );
        newItem(
            menu2,
            "Pioneer Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "23"
        );
        newItem(
            menu3,
            "Bikini Atoll Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "17"
        );
        newItem(
            menu4,
            "Sandy Cheeks Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "27"
        );
        newItem(
            menu5,
            "Sweet Victory Pizza",
            "This is a sample description for the 'za. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat congue vehicula. Nullam ultricies egestas metus ac accumsan. Pellentesque mauris quam, iaculis id massa quis, aliquet imperdiet odio.",
            "29"
        );
        content.appendChild(menuContainer);
    });

    function newItem(imgId, name, description, price) {
        const item = document.createElement("div");
        item.classList.add("menuItem");

        const itemImage = document.createElement("img");
        itemImage.classList.add("menuPic");
        itemImage.id = String(imgId);
        itemImage.src = imgId;

        const itemDescription = document.createElement("div");
        itemDescription.classList.add("itemDescription");
        const infoName = document.createElement("h3");
        infoName.textContent = name;
        const infoDesc = document.createElement("p");
        infoDesc.textContent = description;
        itemDescription.append(infoName, infoDesc);

        const itemPrice = document.createElement("div");
        itemPrice.textContent = price;

        item.append(itemImage, itemDescription, itemPrice);
        menuContainer.appendChild(item);
    }
}

/* <h2>Menu</h2>
                <div id="menuItems">
                    <div class="menuItem">
                        <img id="menu1" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Krusty Krab Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">19</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu2" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Pioneer Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">23</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu3" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Bikini Atoll Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">17</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu4" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Sandy Cheeks Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">27</div>
                    </div>
                    <div class="menuItem">
                        <img id="menu5" class="menuPic" />
                        <div class="itemDescription">
                            <h3>Sweet Victory Pizza</h3>
                            <p>
                                This is a sample description for the 'za. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus volutpat congue vehicula. Nullam
                                ultricies egestas metus ac accumsan.
                                Pellentesque mauris quam, iaculis id massa quis,
                                aliquet imperdiet odio.
                            </p>
                        </div>
                        <div class="itemPrice">29</div>
                    </div>
                    <div id="credit">
                        <a
                            href="https://www.freepik.com/vectors/pizza-toppings"
                        >
                            Pizza toppings vector created by pch.vector -
                            www.freepik.com</a
                        >
                    </div>
                </div> */
