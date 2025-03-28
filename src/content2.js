export function menuPage() {
    //const content = document.getElementById("content");
    const container = document.createElement("div");

    const head = document.createElement("h1");
    head.classList.add("menuHead");
    head.textContent = "Menu";
    container.appendChild(head);


    const main = document.createElement("h2");
    main.classList.add("main");
    main.textContent = "Main Dishes";
    container.appendChild(main);



    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item");
    container.appendChild(itemContainer);

    const itemHeader = document.createElement("h3");
    itemHeader.classList.add("itemHead");
    itemHeader.textContent = "Burger Blast";
    itemContainer.appendChild(itemHeader);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "A burger with a powerful punch! Topped with blue cheese and hot sauce, and a patty made from various undisclosed items, this burger is sure to rock your world!";
    itemContainer.appendChild(description);

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "$15";
    itemContainer.appendChild(price);

    const burDiv = document.createElement("div");
    burDiv.classList.add("box");
    itemContainer.appendChild(burDiv);




    const drink = document.createElement("h2");
    drink.classList.add("drinks");
    drink.textContent = "Drinks";
    container.appendChild(drink);



    const drinkContainer = document.createElement("div");
    drinkContainer.classList.add("item");
    container.appendChild(drinkContainer);

    const drinkHeader = document.createElement("h3");
    drinkHeader.classList.add("itemHead");
    drinkHeader.textContent = "Sunset Suprise";
    drinkContainer.appendChild(drinkHeader);

    const description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = "A cool, sweet punch made with real fruit and metal! Start your night, day, or life off right with this drink!";
    drinkContainer.appendChild(description2);

    const price2 = document.createElement("p");
    price2.classList.add("price");
    price2.textContent = "$8";
    drinkContainer.appendChild(price2);

    const burDiv2 = document.createElement("div");
    burDiv2.classList.add("box");
    drinkContainer.appendChild(burDiv2);

    //price 
    //div box
    //food title


    const sides = document.createElement("h2");
    sides.classList.add("sides");
    sides.textContent = "Sides";
    container.appendChild(sides);


    const sideContainer = document.createElement("div");
    sideContainer.classList.add("item");
    container.appendChild(sideContainer);

    const sideHeader = document.createElement("h3");
    sideHeader.classList.add("itemHead");
    sideHeader.textContent = "Ocean Spray Fries and Sides";
    sideContainer.appendChild(sideHeader);

    const description3 = document.createElement("p");
    description3.classList.add("description");
    description3.textContent = "Golden fries, crisped to perfection with real sea salt and seaweed, and even a special secret sauce!";
    sideContainer.appendChild(description3);

    const price3 = document.createElement("p");
    price3.classList.add("price");
    price3.textContent = "$7";
    sideContainer.appendChild(price3);

    const burDiv3 = document.createElement("div");
    burDiv3.classList.add("box");
    sideContainer.appendChild(burDiv3);






    return container;
}
//Where to export to?