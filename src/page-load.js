export default function renderPage() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  header.textContent = "The Clay Oven";

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  const home = document.createElement("button");
  home.setAttribute("id", "home");
  home.textContent = "HOME";
  nav.appendChild(home);

  const menu = document.createElement("button");
  menu.setAttribute("id", "menu");
  menu.textContent = "MENU";
  nav.appendChild(menu);

  const contact = document.createElement("button");
  contact.setAttribute("id", "contact");
  contact.textContent = "CONTACT";
  nav.appendChild(contact);

  const middle = document.createElement("div");
  middle.setAttribute("id", "middle");

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  footer.textContent = "Made with \u2661 by Mel Baker";

  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(nav);
  content.appendChild(middle);
  content.appendChild(footer);
}
