// Constructor for creating Book objects
function Book(title, image, description, link) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.link = link;
}

// Creating Book objects using the constructor
const books = [
    new Book(
        "The Walmart Atlas",
        "images/walmart-atlas.PNG",
        "A comprehensive guide to more than 4,300 Walmart stores, Supercenters, and Sam's Club stores in the United States. Includes state maps that provide a quick and easy way to locate stores and identify if gas or diesel fuel is available.",
        "https://www.amazon.com/Walmart-Atlas-Roundabout-Publications/dp/1885464452"
    ),
    new Book(
        "The Book of Useless Information",
        "images/uselessinfo-book.png",
        "Learn about the deadliest diseases of the 20th century, the craziest entertainment acts of all time, the world's most unusual museums, the most outlandish laws on the books, the biggest Hollywood blunders, the most dangerous jobs, and much more.",
        "https://www.amazon.com/Useless-Information-Editors-Publications-International/dp/1450807461"
    )
];

const booksContainer = document.getElementById('books-container');

// Rendering books dynamically
books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-entry';
    bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <img src="${book.image}" alt="${book.title}" width="500" height="300" />
        <p>${book.description}</p>
        <a href="${book.link}" target="_blank">${book.title} on Amazon</a>
    `;
    booksContainer.appendChild(bookDiv);
});
