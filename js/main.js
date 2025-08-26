// Movie data
const movies = [
    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 9.2,
        genre: "Comedy • Drama",
        description: "Wes Anderson's masterpiece combines visual perfection with heartfelt storytelling in this whimsical tale of friendship and adventure at a legendary European hotel.",
        image: "images/GrandBudapestHotel.jpeg"
    },
    {
        title: "Blade Runner 2049",
        year: 2017,
        rating: 8.7,
        genre: "Sci-Fi • Thriller",
        description: "A stunning visual sequel that honors its predecessor while forging its own path through questions of humanity and identity in a dystopian future.",
        image: "images/BladeRunner2049.png"
    },
    {
        title: "Parasite",
        year: 2019,
        rating: 9.5,
        genre: "Thriller • Drama",
        description: "Bong Joon-ho's thriller masterfully weaves social commentary with suspense in this Palme d'Or winning examination of class divide.",
        image: "images/Parasite.jpg"
    }
];

// Reviews data
const reviews = [
    {
        title: "The Grand Budapest Hotel",
        rating: 4.5,
        genre: "Comedy, Drama",
        date: "August 20, 2025",
        excerpt: "Wes Anderson's visual masterpiece combines quirky humor with heartfelt storytelling in this tale of a legendary concierge and his protégé.",
        image: "../images/GrandBudapestHotel.jpeg",
        link: "#"
    },
    {
        title: "Blade Runner 2049",
        rating: 5,
        genre: "Sci-Fi, Thriller",
        date: "August 15, 2025",
        excerpt: "Denis Villeneuve's stunning sequel expands the Blade Runner universe with breathtaking visuals and profound questions about humanity.",
        image: "../images/BladeRunner2049.png",
        link: "#"
    },
    {
        title: "Parasite",
        rating: 5,
        genre: "Thriller, Drama",
        date: "August 10, 2025",
        excerpt: "Bong Joon-ho's genre-defying masterpiece about class struggle is as hilarious as it is harrowing, with brilliant performances throughout.",
        image: "../images/Parasite.jpg",
        link: "#"
    }
];

// Categories data
const categories = [
    {
        icon: "🎭",
        title: "Classic Cinema",
        description: "Timeless films that defined cinema history"
    },
    {
        icon: "🚀",
        title: "Sci-Fi & Fantasy",
        description: "Exploring otherworldly narratives and futures"
    },
    {
        icon: "😱",
        title: "Horror & Thriller",
        description: "Heart-pounding cinema that pushes boundaries"
    },
    {
        icon: "🎬",
        title: "Independent Films",
        description: "Unique voices and artistic storytelling"
    }
];

// Generate star rating HTML
function getStarRating(rating) {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 0.5 ? '½' : '';
    const emptyStars = 5 - Math.ceil(rating / 2);
    return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
}

// Render movies
function renderMovies() {
    const moviesContainer = document.getElementById('featured-movies');
    if (!moviesContainer) return;

    moviesContainer.innerHTML = movies.map(movie => {
        // Ensure the image path is correct based on the current page
        const imagePath = movie.image.startsWith('/') ? 
            movie.image : 
            `../${movie.image}`;
            
        return `
        <article class="movie-card">
            <div class="movie-poster">
                <img src="${imagePath}" alt="${movie.title}" onerror="this.onerror=null; this.src='${imagePath.replace('../', '')}'">
            </div>
            <div class="movie-info">
                <div class="movie-meta">
                    <div class="movie-rating">
                        ${'★'.repeat(Math.floor(movie.rating / 2))}${movie.rating % 2 >= 0.5 ? '½' : ''}
                        <span>${movie.rating}/10</span>
                    </div>
                    <div class="movie-year">${movie.year}</div>
                </div>
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-genre">${movie.genre}</div>
                <p class="movie-description">${movie.description}</p>
                <a href="#" class="read-more">Read Full Review</a>
            </div>
        </article>`;
    }).join('');
}

// Render reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;

    reviewsContainer.innerHTML = reviews.map(review => {
        // Ensure the image path is correct based on the current page
        const imagePath = review.image.startsWith('/') ? 
            review.image : 
            `../${review.image}`;
            
        return `
        <article class="review-card">
            <div class="review-image">
                <img src="${imagePath}" alt="${review.title}" onerror="this.onerror=null; this.src='${imagePath.replace('../', '')}'">
            </div>
            <div class="review-content">
                <div class="review-meta">
                    <span class="review-genre">${review.genre}</span>
                    <span class="review-date">${review.date}</span>
                    <div class="review-rating">
                        ${'★'.repeat(Math.floor(review.rating))}${review.rating % 1 === 0.5 ? '½' : ''}
                        <span>${review.rating}/5</span>
                    </div>
                </div>
                <h2 class="review-title">${review.title}</h2>
                <p class="review-excerpt">${review.excerpt}</p>
                <a href="${review.link}" class="read-more">Read Full Review</a>
            </div>
        </article>`;
    }).join('');
}

// Render categories
function renderCategories() {
    const categoriesContainer = document.getElementById('categories');
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category-card">
            <span class="category-icon">${category.icon}</span>
            <h3>${category.title}</h3>
            <p>${category.description}</p>
        </div>
    `).join('');
}

// Setup theme toggle
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Update copyright year
function updateCopyrightYear() {
    document.querySelectorAll('#current-year').forEach(element => {
        element.textContent = new Date().getFullYear();
    });
}

// Initialize the page
function init() {
    renderMovies();
    renderReviews();
    renderCategories();
    updateCopyrightYear();
    setupThemeToggle();
    setupMobileMenu();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', init);