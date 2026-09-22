const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// Hamburger menu
menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("show");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

// Current year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;

// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;