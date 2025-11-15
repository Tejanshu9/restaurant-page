import restaurantPic from "./img/resturant.png";

// This function creates the Home page content
function loadHome() {

    const content = document.getElementById("content");

    // Clear previous content
    content.textContent = "";

    // Create title
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-title");
    restaurantName.textContent = "The Royal Prince Platter";

    // Create description
    const tagRestaurant = document.createElement("div");
    tagRestaurant.classList.add("restaurant-tag");
    tagRestaurant.textContent = "Where Tradition Meets Taste.";

    // Create image
    const restaurantImage = document.createElement("img");
    restaurantImage.classList.add("restaurant-image");
    restaurantImage.src = restaurantPic;
    restaurantImage.alt = "Restaurant interior photo";

    // Append everything to the content box
    content.appendChild(restaurantName);
    content.appendChild(restaurantImage);
     content.appendChild(tagRestaurant);
}

// Export the function so index.js can use it
export default loadHome;
