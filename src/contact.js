function loadContact() {
    const content = document.getElementById("content");
    content.textContent = ""; // Clear old content

    // Wrapper container
    const container = document.createElement("div");
    container.classList.add("contact-container");

    // Title
    const title = document.createElement("h1");
    title.classList.add("contact-title");
    title.textContent = "About";

    // About text
    const about = document.createElement("p");
    about.classList.add("contact-about");
    about.textContent = "The Royal Prince Platter brings together the richness of Indian tradition and the charm of British dining. Our mission is simple — to serve dishes that feel warm, familiar, and unforgettable. Every plate is crafted with fresh ingredients, bold flavours, and a touch of modern creativity. Whether you're visiting for a family dinner, a casual outing, or a quiet evening tea, we aim to give every guest a cozy, royal experience.";

    // Address
    const address = document.createElement("div");
    address.classList.add("contact-section");
    address.innerHTML = `
        <h3>Address</h3>
        <p>Royal Prince Platter<br>
        123 King’s Avenue,<br>
        London, SW1A 1AA,<br>
        United Kingdom</p>
    `;

    // Contact
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-section");
    contactInfo.innerHTML = `
        <h3>Contact Us</h3>
        <p><strong>Phone:</strong> +44 20 7946 1234<br>
        <strong>Email:</strong> contact@royalprinceplatter.co.uk<br>
        <strong>Opening Hours:</strong><br>
        Mon–Fri: 11:00 AM – 10:00 PM<br>
        Sat–Sun: 9:00 AM – 11:00 PM</p>
    `;

    // Append everything
    container.appendChild(title);
    container.appendChild(about);
    container.appendChild(address);
    container.appendChild(contactInfo);

    content.appendChild(container);
}

export default loadContact;
