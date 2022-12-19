export default function renderMenu() {
  const middle = document.getElementById("middle");
  middle.textContent = "";

  const menuHeading = document.createElement("div");
  menuHeading.setAttribute("id", "menuHeading");
  menuHeading.textContent = "Menu";
  middle.appendChild(menuHeading);

  const menuGrid = document.createElement("div");
  menuGrid.setAttribute("id", "menuGrid");
  middle.appendChild(menuGrid);

  const dishOne = document.createElement("div");
  dishOne.setAttribute("class", "dish");
  menuGrid.appendChild(dishOne);
  const dishOneName = document.createElement("div");
  dishOneName.setAttribute("class", "dishName");
  dishOneName.textContent = "Quattro Formaggio (V)";
  dishOne.appendChild(dishOneName);
  const dishOneDesc = document.createElement("div");
  dishOneDesc.setAttribute("class", "dishDesc");
  dishOneDesc.textContent = "Goats cheese, gorgonzola, cheddar, and mozzarella";
  dishOne.appendChild(dishOneDesc);
  const dishOnePrice = document.createElement("div");
  dishOnePrice.setAttribute("class", "dishPrice");
  dishOnePrice.textContent = "£17";
  menuGrid.appendChild(dishOnePrice);

  const dishTwo = document.createElement("div");
  dishTwo.setAttribute("class", "dish");
  menuGrid.appendChild(dishTwo);
  const dishTwoName = document.createElement("div");
  dishTwoName.setAttribute("class", "dishName");
  dishTwoName.textContent = "Margherita (V)";
  dishTwo.appendChild(dishTwoName);
  const dishTwoDesc = document.createElement("div");
  dishTwoDesc.setAttribute("class", "dishDesc");
  dishTwoDesc.textContent =
    "Slow roasted tomatoes, basil, cheddar, and mozzarella";
  dishTwo.appendChild(dishTwoDesc);
  const dishTwoPrice = document.createElement("div");
  dishTwoPrice.setAttribute("class", "dishPrice");
  dishTwoPrice.textContent = "£15";
  menuGrid.appendChild(dishTwoPrice);

  const dishThree = document.createElement("div");
  dishThree.setAttribute("class", "dish");
  menuGrid.appendChild(dishThree);
  const dishThreeName = document.createElement("div");
  dishThreeName.setAttribute("class", "dishName");
  dishThreeName.textContent = "Hawaiian";
  dishThree.appendChild(dishThreeName);
  const dishThreeDesc = document.createElement("div");
  dishThreeDesc.setAttribute("class", "dishDesc");
  dishThreeDesc.textContent = "Serrano ham, pineapple, cheddar, and mozzarella";
  dishThree.appendChild(dishThreeDesc);
  const dishThreePrice = document.createElement("div");
  dishThreePrice.setAttribute("class", "dishPrice");
  dishThreePrice.textContent = "£18";
  menuGrid.appendChild(dishThreePrice);

  const dishFour = document.createElement("div");
  dishFour.setAttribute("class", "dish");
  menuGrid.appendChild(dishFour);
  const dishFourName = document.createElement("div");
  dishFourName.setAttribute("class", "dishName");
  dishFourName.textContent = "Pepperoni";
  dishFour.appendChild(dishFourName);
  const dishFourDesc = document.createElement("div");
  dishFourDesc.setAttribute("class", "dishDesc");
  dishFourDesc.textContent = "Double pepperoni, cheddar, and mozzarella";
  dishFour.appendChild(dishFourDesc);
  const dishFourPrice = document.createElement("div");
  dishFourPrice.setAttribute("class", "dishPrice");
  dishFourPrice.textContent = "£18";
  menuGrid.appendChild(dishFourPrice);

  const dishFive = document.createElement("div");
  dishFive.setAttribute("class", "dish");
  menuGrid.appendChild(dishFive);
  const dishFiveName = document.createElement("div");
  dishFiveName.setAttribute("class", "dishName");
  dishFiveName.textContent = "Pescatore";
  dishFive.appendChild(dishFiveName);
  const dishFiveDesc = document.createElement("div");
  dishFiveDesc.setAttribute("class", "dishDesc");
  dishFiveDesc.textContent =
    "King prawns, anchovies, tuna, black olives, cheddar, and mozzarella";
  dishFive.appendChild(dishFiveDesc);
  const dishFivePrice = document.createElement("div");
  dishFivePrice.setAttribute("class", "dishPrice");
  dishFivePrice.textContent = "£20";
  menuGrid.appendChild(dishFivePrice);
}
