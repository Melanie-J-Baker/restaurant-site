export default function renderHome() {
  const middle = document.getElementById("middle");
  middle.textContent = "";

  const desc = document.createElement("div");
  desc.setAttribute("id", "desc");
  desc.setAttribute("class", "mainText");
  desc.textContent =
    "Our pizzas are made by hand, using only the very finest of ingredients. They are then baked in the wood-fired clay oven at the heart of our cosy restaurant.";

  const homeBottom = document.createElement("div");
  homeBottom.setAttribute("id", "homeBottom");

  const homeImage = document.createElement("img");
  homeImage.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  );
  homeImage.setAttribute(
    "alt",
    "A big ball pf pizza dough on a dark floured board"
  );
  homeImage.setAttribute("id", "doughImage");
  homeBottom.appendChild(homeImage);

  const openHours = document.createElement("div");
  openHours.setAttribute("id", "hours");
  homeBottom.appendChild(openHours);

  const hoursHeading = document.createElement("h2");
  hoursHeading.setAttribute("id", "hoursHeading");
  hoursHeading.textContent = "Opening Hours";
  openHours.appendChild(hoursHeading);

  const times = document.createElement("div");
  times.setAttribute("id", "times");
  openHours.appendChild(times);

  const monday = document.createElement("div");
  monday.setAttribute("class", "day");
  monday.textContent = "Monday";
  times.appendChild(monday);

  const mondayHours = document.createElement("div");
  mondayHours.setAttribute("class", "hour");
  mondayHours.textContent = "11am to 10.30pm";
  times.appendChild(mondayHours);

  const tuesday = document.createElement("div");
  tuesday.setAttribute("class", "day");
  tuesday.textContent = "Tuesday";
  times.appendChild(tuesday);

  const tuesdayHours = document.createElement("div");
  tuesdayHours.setAttribute("class", "hour");
  tuesdayHours.textContent = "11am to 10.30pm";
  times.appendChild(tuesdayHours);

  const wednesday = document.createElement("div");
  wednesday.setAttribute("class", "day");
  wednesday.textContent = "Wednesday";
  times.appendChild(wednesday);

  const wednesdayHours = document.createElement("div");
  wednesdayHours.setAttribute("class", "hour");
  wednesdayHours.textContent = "11am to 10.30pm";
  times.appendChild(wednesdayHours);

  const thursday = document.createElement("div");
  thursday.setAttribute("class", "day");
  thursday.textContent = "Thursday";
  times.appendChild(thursday);

  const thursdayHours = document.createElement("div");
  thursdayHours.setAttribute("class", "hour");
  thursdayHours.textContent = "11am to 10.30pm";
  times.appendChild(thursdayHours);

  const friday = document.createElement("div");
  friday.setAttribute("class", "day");
  friday.textContent = "Friday";
  times.appendChild(friday);

  const fridayHours = document.createElement("div");
  fridayHours.setAttribute("class", "hour");
  fridayHours.textContent = "11am to 11.30pm";
  times.appendChild(fridayHours);

  const saturday = document.createElement("div");
  saturday.setAttribute("class", "day");
  saturday.textContent = "Saturday";
  times.appendChild(saturday);

  const saturdayHours = document.createElement("div");
  saturdayHours.setAttribute("class", "hour");
  saturdayHours.textContent = "11am to 11.30pm";
  times.appendChild(saturdayHours);

  const sunday = document.createElement("div");
  sunday.setAttribute("class", "day");
  sunday.textContent = "Sunday";
  times.appendChild(sunday);

  const sundayHours = document.createElement("div");
  sundayHours.setAttribute("class", "hour");
  sundayHours.textContent = "12pm to 10.00pm";
  times.appendChild(sundayHours);

  middle.appendChild(desc);
  middle.appendChild(homeBottom);
}
