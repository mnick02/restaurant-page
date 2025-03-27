import { homePage } from "./content";

console.log("Hello");
//set default homepage, use DOMCONTENt load event listener?

const content = document.getElementById("content");

document.addEventListener("DOMContentLoaded", async () => {
    try {
        content.innerHTML = "";
        const module = await import("./content"); 
        content.appendChild(module.homePage());
        console.log("WEello");
    }
    catch (error) {
        console.log("Error importing module: ", error);
    }
});

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", async () => {
    try {
        content.innerHTML = "";
        const module = await import("./content"); 
        content.appendChild(module.homePage());
        console.log("Sello");
    }
    catch (error) {
        console.log("Error importing module: ", error);
    }

});

//Find out why you are getting error in the console
const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", async () => {
    try {
        content.innerHTML = "";
        const module = await import("./content2"); 
        content.appendChild(module.two);
        console.log("Hello");
    }
    catch (error) {
        console.log("Error importing module: ", error);
    }

});

const contactBtn = document.querySelector(".contactBtn");
contactBtn.addEventListener("click", async () => {
    try {
        content.innerHTML = "";
        const module = await import("./content3"); 
        content.appendChild(module.three);
        console.log("Bello");
    }
    catch (error) {
        console.log("Error importing module: ", error);
    }

});

//Make one for each btn

//check if divcontent already exists from imprt
//check if you can clear divcontent
//dynamic imports?