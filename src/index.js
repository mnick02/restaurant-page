import { content, head, paraText, newPara, image } from "./content";

console.log("Hello");

const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", async () => {
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

//check if divcontent already exists from imprt
//check if you can clear divcontent
//dynamic imports?