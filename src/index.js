import "./style.css";
import renderPage from "./page-load";
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

function navEvents() {
  const homeTab = document.getElementById("home");
  const menuTab = document.getElementById("menu");
  const contactTab = document.getElementById("contact");

  homeTab.addEventListener("click", renderHome);
  menuTab.addEventListener("click", renderMenu);
  contactTab.addEventListener("click", renderContact);
}

function pageLoad() {
  renderPage();
  renderHome();
  navEvents();
}

pageLoad();
