import SanjiImage from './sanji.png';

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

    const newPara = document.createElement("p");
    newPara.style.fontStyle = 'italic';
    newPara.classList.add("text");
    newPara.textContent = "FOOD & STUFF!!!"
    hourContainer.appendChild(newPara);

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = SanjiImage;
    image.width = 300;
    image.height = 200;
    container.appendChild(image);

    return container;
}
