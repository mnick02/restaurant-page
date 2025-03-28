
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

    return container;
}