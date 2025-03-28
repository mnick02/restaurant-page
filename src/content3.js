
export function contactPage() {
    const container = document.createElement("div");

    const head = document.createElement("h1");
    head.classList.add("menuHead");
    head.textContent = "Contact";
    container.appendChild(head);


    const contactContainer = document.createElement("div");
    contactContainer.classList.add("item");
    container.appendChild(contactContainer);

    const contactName = document.createElement("h3");
    contactName.classList.add("itemHead");
    contactName.textContent = "Bobby Awesome Guy";
    contactContainer.appendChild(contactName);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = "Chef";
    contactContainer.appendChild(description);

    const description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = "555-605-4456";
    contactContainer.appendChild(description2);
    
    const description3 = document.createElement("p");
    description3.classList.add("description");
    description3.textContent = "awesomeGuy50@bmail.com";
    contactContainer.appendChild(description3);


    const con2Container = document.createElement("div");
    con2Container.classList.add("item");
    container.appendChild(con2Container);

    const conName = document.createElement("h3");
    conName.classList.add("itemHead");
    conName.textContent = "Notty Real";
    con2Container.appendChild(conName);

    const description4 = document.createElement("p");
    description4.classList.add("description");
    description4.textContent = "Owner";
    con2Container.appendChild(description4);

    const description5 = document.createElement("p");
    description5.classList.add("description");
    description5.textContent = "554-555-2247";
    con2Container.appendChild(description5);
    
    const description6 = document.createElement("p");
    description6.classList.add("description");
    description6.textContent = "notyRealer340@bmail.com";
    con2Container.appendChild(description6);

    return container;
}