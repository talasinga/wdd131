/* ================================
   Temple Album - W04
   filtered-temples.js
================================ */

/* ---------- Temple Data ---------- */

const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C. Temple",
        location: "Washington D.C., United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú Temple",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Nuku'alofa Tonga Temple",
        location: "Nuku'alofa, Tonga",
        dedicated: "1983-08-09",
        area: 21184,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/c8f512a0cc754f5b051de23c98b37c001cdc379f/full/800%2C/0/default"
    },

    {
        templeName: "Apia Samoa Temple",
        location: "Apia, Samoa",
        dedicated: "1983-08-05",
        area: 18691,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ad9cc8cae1de942b70eba26bfc65ccc35ea576e1/full/800%2C/0/default"
    },

    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/7761e87183d3a9d62055ebb8b18035d6f7441789/full/800%2C/0/default"
    }
];


/* ---------- HTML Elements ---------- */

const container = document.querySelector("#temples-container");
const filterButtons = document.querySelectorAll("[data-filter]");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");


/* ---------- Display Temples ---------- */

function displayTemples(templeList) {

    container.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("article");

        card.classList.add("temple-card");

        const title = document.createElement("h3");

        title.textContent = temple.templeName;


        const image = document.createElement("img");

        image.src = temple.imageUrl;

        image.alt = `${temple.templeName} temple`;

        image.loading = "lazy";


        image.addEventListener("error", () => {
            image.alt = `Image unavailable for ${temple.templeName}`;
            image.classList.add("image-error");
        });


        const location = document.createElement("p");

        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;


        const dedicated = document.createElement("p");

        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${formatDate(temple.dedicated)}`;


        const area = document.createElement("p");

        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;


        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        container.appendChild(card);
    });
}


/* ---------- Format Date ---------- */

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


/* ---------- Filter Temples ---------- */

function filterTemples(filter) {

    let filteredTemples = temples;

    switch (filter) {

        case "old":
            filteredTemples = temples.filter((temple) => {
                return new Date(temple.dedicated).getFullYear() < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                return new Date(temple.dedicated).getFullYear() > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        case "home":
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}


/* ---------- Filter Button Events ---------- */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterTemples(button.dataset.filter);

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});


/* ---------- Mobile Menu ---------- */

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );
});


/* ---------- Footer ---------- */

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;


/* ---------- Initial Display ---------- */

displayTemples(temples);