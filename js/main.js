// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Sample blog post data
const samplePosts = [
    {
        id: 1,
        title: "Getting Started with Modern JavaScript",
        excerpt: "Learn the fundamentals of modern JavaScript and how to use it to build amazing web applications.",
        author: "Jane Smith",
        date: "2024-02-15",
        tag: "JavaScript",
        image: "https://source.unsplash.com/random/600x400/?javascript",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "The Power of CSS Grid",
        excerpt: "Discover how CSS Grid can revolutionize your web layouts and make responsive design easier than ever.",
        author: "John Doe",
        date: "2024-02-10",
        tag: "CSS",
        image: "https://source.unsplash.com/random/600x400/?css",
        readTime: "7 min read"
    },
    {
        id: 3,
        title: "Building Scalable APIs with Node.js",
        excerpt: "Learn best practices for building robust and scalable APIs using Node.js and Express.",
        author: "Alex Johnson",
        date: "2024-02-05",
        tag: "Node.js",
        image: "https://source.unsplash.com/random/600x400/?nodejs",
        readTime: "8 min read"
    },
    {
        id: 4,
        title: "The Future of Web Development",
        excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
        author: "Sarah Williams",
        date: "2024-01-28",
        tag: "Web Dev",
        image: "https://source.unsplash.com/random/600x400/?webdevelopment",
        readTime: "6 min read"
    }
];

// Initialize the application
function init() {
    setupEventListeners();
    loadFeaturedPosts();
    loadRecentPosts();
    checkThemePreference();
}

// Set up event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Toggle body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile menu
function closeMobileMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle between light and dark theme
function toggleTheme() {
    // Add animation class
    themeToggle.classList.add('animate');
    
    // Toggle theme
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Remove animation class after animation completes
    setTimeout(() => {
        themeToggle.classList.remove('animate');
    }, 500);
}

// Check user's theme preference
function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        html.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        html.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Load featured posts
function loadFeaturedPosts() {
    const featuredPostsContainer = document.getElementById('featuredPosts');
    if (!featuredPostsContainer) return;
    
    const featuredPosts = samplePosts.slice(0, 3); // Get first 3 posts as featured
    
    const postsHTML = featuredPosts.map(post => `
        <article class="post-card">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <div class="post-meta">
                    <span class="post-tag">${post.tag}</span>
                    <span>${formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="pages/blog-post.html?id=${post.id}" class="btn-text">Read More</a>
            </div>
        </article>
    `).join('');
    
    featuredPostsContainer.innerHTML = postsHTML;
}

// Load recent posts
function loadRecentPosts() {
    const recentPostsContainer = document.getElementById('recentPosts');
    if (!recentPostsContainer) return;
    
    const recentPosts = [...samplePosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const postsHTML = recentPosts.map(post => `
        <article class="recent-post">
            <div class="recent-post-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="recent-post-content">
                <div class="post-meta">
                    <span class="post-tag">${post.tag}</span>
                    <span>${formatDate(post.date)}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="pages/blog-post.html?id=${post.id}" class="btn-text">Read More</a>
            </div>
        </article>
    `).join('');
    
    recentPostsContainer.innerHTML = postsHTML;
}

// Format date to a more readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Handle newsletter form submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (validateEmail(email)) {
        // In a real app, you would send this to your server
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
