export default function renderContact() {
  const middle = document.getElementById("middle");
  middle.textContent = "";

  const contactHeading = document.createElement("div");
  contactHeading.setAttribute("id", "contactHeading");
  contactHeading.textContent = "Contact Us";
  middle.appendChild(contactHeading);

  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");
  middle.appendChild(contactContent);

  const contactForm = document.createElement("form");
  contactForm.setAttribute("id", "contactForm");
  contactContent.appendChild(contactForm);

  const nameDiv = document.createElement("div");
  nameDiv.setAttribute("id", "nameDiv");
  contactForm.appendChild(nameDiv);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  nameDiv.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("placeholder", "Please enter your name here");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("required", "true");
  nameDiv.appendChild(nameInput);

  const numberDiv = document.createElement("div");
  numberDiv.setAttribute("id", "numberDiv");
  contactForm.appendChild(numberDiv);

  const numberLabel = document.createElement("label");
  numberLabel.setAttribute("for", "number");
  numberLabel.textContent = "Contact No.";
  numberDiv.appendChild(numberLabel);

  const numberInput = document.createElement("input");
  numberInput.setAttribute("type", "tel");
  numberInput.setAttribute("id", "number");
  numberInput.setAttribute("placeholder", "e.g. 01234 567890");
  numberInput.setAttribute("name", "number");
  numberInput.setAttribute("required", "true");
  numberDiv.appendChild(numberInput);

  const queryDiv = document.createElement("div");
  queryDiv.setAttribute("id", "queryDiv");
  contactForm.appendChild(queryDiv);

  const queryLabel = document.createElement("label");
  queryLabel.setAttribute("for", "query");
  queryLabel.textContent = "Query";
  queryDiv.appendChild(queryLabel);

  const queryInput = document.createElement("textarea");
  queryInput.setAttribute("id", "query");
  queryInput.setAttribute("rows", "10");
  queryInput.setAttribute("name", "query");
  queryInput.setAttribute("placeholder", "Please type your query here");
  queryInput.setAttribute("required", "true");
  queryDiv.appendChild(queryInput);

  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.setAttribute("type", "submit");
  submit.textContent = "Submit";
  contactForm.appendChild(submit);

  const address = document.createElement("div");
  address.setAttribute("id", "address");
  address.textContent =
    "The Clay Oven,\r\n42 Brook Street,\r\nEast Westerly,\r\nShirehampton,\r\nEW23 7RD\r\n\r\nTel: 01835 663290";
  contactContent.appendChild(address);
}
