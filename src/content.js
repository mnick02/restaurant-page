import SanjiImage from './sanji.png';

export function homePage() {
    const content = document.getElementById("content");

    const head = document.createElement("h1");
    head.classList.add("header");
    head.textContent = "Hello, this is the best restaurant";
    content.appendChild(head);

    const paraText = document.createElement("p");
    paraText.classList.add("text");
    paraText.textContent = "Come eat some of the most fantastic food in the whole world at...";
    content.appendChild(paraText);

    const newPara = document.createElement("p");
    newPara.style.fontStyle = 'italic';
    newPara.classList.add("text");
    newPara.textContent = "FOOD & STUFF!!!"
    content.appendChild(newPara);

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = SanjiImage;
    image.width = 300;
    image.height = 200;
    content.appendChild(image);
}
