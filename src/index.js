import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js"

// Load Home page when the site loads
loadHome();

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.action === "home") loadHome();
        if (btn.dataset.action === "menu") loadMenu();
        if (btn.dataset.action === "contact") loadContact();
    });
});
