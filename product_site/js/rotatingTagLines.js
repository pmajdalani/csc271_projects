// rotatingTaglines.js

document.addEventListener("DOMContentLoaded", () => {
    const taglines = [
        "Because why not?",
        "Serious about fun!",
        "Laughs guaranteed!",
        "Ridiculously fun, just for you!",
        "Your one-stop shop for absurdity!"
    ];
    let index = 0;

    const taglineElement = document.getElementById("tagline");

    // Set initial tagline
    taglineElement.textContent = taglines[index];

    setInterval(() => {
        index = (index + 1) % taglines.length;
        taglineElement.textContent = taglines[index];
    }, 4000); // Change every 4 seconds
});
