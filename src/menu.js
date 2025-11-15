function loadMenu() {
    const content = document.getElementById("content");
    content.textContent = "";

    const menuList = [
        ["Butter Chicken Pie", "Butter chicken filling inside a British-style flaky pie crust.", 12.99],
        ["Tandoori Fish & Chips", "Crispy tandoori batter served with masala fries.", 10.50],
        ["Curry Shepherd’s Pie", "Classic shepherd’s pie infused with mild curry spices.", 11.25],
        ["Chicken Tikka Sandwich", "Tikka-marinated chicken in a soft brioche bun.", 8.99],
        ["Masala Jacket Potato", "Baked potato stuffed with spicy Indian-style veggies.", 7.50],
        ["Korma Mac & Cheese", "Creamy British mac & cheese blended with korma sauce.", 9.25],
        ["Naan Panini", "Garlic naan pressed with grilled vegetables & cheese.", 6.99],
        ["Tea Masala Scones", "British scones infused with chai masala flavors.", 5.50],
        ["Spicy Lamb Wellington", "Lamb wrapped in puff pastry with aromatic Indian spices.", 14.50],
        ["Paneer Burger", "Paneer patty with mint mayo in a toasted bun.", 9.99],
    ];

    menuList.forEach(([name, description, price]) => {
        content.appendChild(createMenuItem(name, description, price));
    });
}

function createMenuItem(name, description, price) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const title = document.createElement("h3");
    title.classList.add("menu-title");
    title.textContent = name;

    const desc = document.createElement("p");
    desc.classList.add("menu-desc");
    desc.textContent = description;

    const cost = document.createElement("span");
    cost.classList.add("menu-price");
    cost.textContent = `£${price}`;

    item.appendChild(title);
    item.appendChild(desc);
    item.appendChild(cost);

    return item;
}



export default loadMenu;
