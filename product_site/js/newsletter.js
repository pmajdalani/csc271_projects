let popupShown = false; // Flag to track if the popup has been shown

window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const rect = footer.getBoundingClientRect();

    // Check if the user has scrolled to the footer and the popup hasn't been shown
    if (rect.top < window.innerHeight && !popupShown) {
        // Create the popup
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <p>Subscribe to our newsletter for more laughs and updates!</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
            </form>
            <button class="close-popup">Close</button>
        `;
        document.body.appendChild(popup);

        // Mark the popup as shown
        popupShown = true;

        // Close button functionality
        document.querySelector('.close-popup').addEventListener('click', () => {
            popup.remove();
        });

        const form = document.querySelector('.newsletter-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            popup.remove();
            popupShown = true;
        });
    }
});
