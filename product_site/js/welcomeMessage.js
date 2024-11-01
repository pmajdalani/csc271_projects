
document.addEventListener("DOMContentLoaded", () => {

    // Gets the hour of the day
    const hours = new Date().getHours();

    // Selects the content using query selector
    const welcome_text = document.querySelector("#welcome-text");


    // Decision process
    if (hours < 12) {
        welcome_text.textContent = "Good morning! Welcome to OddCommodities!"
    } else if (hours < 18 && hours > 12) {
        welcome_text.textContent = "Good Afternoon! Welcome to Oddcommodities!"
    } else {
        welcome_text.textContent = "Good evening! Welcome to OddCommodities!"
    }

});