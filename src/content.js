import cloud from './cloud.png';

export function homePage() {
    //const content = document.getElementById("content");
    const container = document.createElement("div");

    const head = document.createElement("h1");
    head.classList.add("header");
    head.textContent = "Sunset Burger Bar";
    container.appendChild(head);

    const paraText = document.createElement("p");
    paraText.classList.add("text");
    paraText.textContent = "Sunset Burger Bar has the best burger and bar! Awesome burgers and bar! And burgers! And bar! burger bar and bar and burger! Sunset maybe there as well depending on day and time... But always bar and burger!";
    container.appendChild(paraText);




    const hourContainer = document.createElement("div");
    hourContainer.classList.add("hours");
    container.appendChild(hourContainer);

    const hoursHeader = document.createElement("h3");
    hoursHeader.classList.add("hourHead");
    hoursHeader.textContent = "Hours";
    hourContainer.appendChild(hoursHeader);

    const monday = document.createElement("p");
    monday.classList.add("monday");
    monday.textContent = "Monday: 8am - 7pm"
    hourContainer.appendChild(monday);

    const tuesday = document.createElement("p");
    tuesday.classList.add("tuesday");
    tuesday.textContent = "Tuesday: 8am - 7pm"
    hourContainer.appendChild(tuesday);
    
    const wednesday = document.createElement("p");
    wednesday.classList.add("wednesday");
    wednesday.textContent = "Wednesday: 8am - 7pm"
    hourContainer.appendChild(wednesday);

    const thursday = document.createElement("p");
    thursday.classList.add("thursday");
    thursday.textContent = "Thursday: 8am - 7pm"
    hourContainer.appendChild(thursday);

    const friday = document.createElement("p");
    friday.classList.add("friday");
    friday.textContent = "Friday: 8am - 7pm"
    hourContainer.appendChild(friday);

    const saturday = document.createElement("p");
    saturday.classList.add("saturday");
    saturday.textContent = "Saturday: 7am - 10pm"
    hourContainer.appendChild(saturday);

    const sunday = document.createElement("p");
    sunday.classList.add("sunday");
    sunday.textContent = "Sunday: Closed"
    hourContainer.appendChild(sunday);

    const locContainer = document.createElement("div");
    locContainer.classList.add("location");
    container.appendChild(locContainer);

    const locHead = document.createElement("h3");
    locHead.classList.add("locHead");
    locHead.textContent = "Location";
    locContainer.appendChild(locHead);

    const location = document.createElement("p");
    location.classList.add("locTxt");
    location.textContent = "153 Sunset Drive, Sunnyville, California";
    locContainer.append(location);




    const image = document.createElement("img");
    image.classList.add("image");
    image.src = cloud;
    image.width = 100;
    image.height = 100;
    container.appendChild(image);

    const image2 = document.createElement("img");
    image2.classList.add("image2");
    image2.src = cloud;
    image2.width = 100;
    image2.height = 100;
    container.appendChild(image2);

    return container;
}
