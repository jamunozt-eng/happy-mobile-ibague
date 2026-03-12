// script.js for Happy Mobile Website

// Product Data
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        imageUrl: 'image1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        imageUrl: 'image2.jpg',
    },
    // Add more products as needed
];

// Dynamic Product Grid Rendering
function renderProductGrid() {
    const grid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src='${product.imageUrl}' alt='${product.name}' />
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
        `;
        grid.appendChild(productCard);
    });
}

// Reviews Rendering
const reviews = [
    { author: 'John Doe', text: 'Great product!' },
    { author: 'Jane Smith', text: 'Very satisfied!' },
    // Add more reviews as necessary
];

function renderReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review';
        reviewItem.innerHTML = `<strong>${review.author}:</strong> ${review.text}`;
        reviewsContainer.appendChild(reviewItem);
    });
}

// Form Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;
    console.log(`Message from ${name}: ${message}`);
    // Add further form handling logic here (e.g., send to server)
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// GSAP Animations Initialization
gsap.from('.product-card', { duration: 0.5, opacity: 0, stagger: 0.2 });

// WhatsApp Link Generation
function generateWhatsAppLink(message) {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return url;
}