// JavaScript for Dynamic Product Loading

// Function to load products dynamically
function loadProducts() {
    // Fetching products from API or local data
    fetch('api/products')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '';
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
                productContainer.appendChild(productDiv);
            });
        });
}

// Reviews Data Management
function loadReviews(productId) {
    fetch(`api/reviews/${productId}`)
        .then(response => response.json())
        .then(data => {
            const reviewContainer = document.getElementById('review-container');
            reviewContainer.innerHTML = '';
            data.forEach(review => {
                const reviewDiv = document.createElement('div');
                reviewDiv.className = 'review';
                reviewDiv.innerHTML = `<p>${review.comment}</p><small>Rating: ${review.rating}</small>`;
                reviewContainer.appendChild(reviewDiv);
            });
        });
}

// Form Validation
function validateForm(form) {
    let valid = true;
    const inputs = form.elements;
    for (let input of inputs) {
        if (input.required && !input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
    return valid;
}

// WhatsApp Integration
function sendWhatsAppMessage(message) {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Smooth Scroll Animations with GSAP
function smoothScroll(target) {
    gsap.to(window, {duration: 1, scrollTo: target});
}

// Product Filtering
function filterProducts(criteria) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const meetsCriteria = product.textContent.toLowerCase().includes(criteria.toLowerCase());
        product.style.display = meetsCriteria ? 'block' : 'none';
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// Floating Button Interactions
document.getElementById('floating-button').addEventListener('click', () => {
    // Action for floating button
    sendWhatsAppMessage('Hello from Happy Mobile!');
});

// Initialize functions
loadProducts();


