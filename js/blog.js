// Blog-specific JavaScript functionality

// Add Highlight.js for syntax highlighting
const loadHighlightJS = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css';
    document.head.appendChild(link);
    
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js';
    script.onload = () => {
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
    };
    document.head.appendChild(script);
};

// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Modern JavaScript",
        content: `
            <p>JavaScript has evolved significantly over the years, and modern JavaScript (ES6+) brings powerful features that make development more efficient and enjoyable. In this post, we'll explore some of the most important features you should know.</p>
            
            <h2>Let and Const</h2>
            <p>Gone are the days of using <code>var</code> for all variable declarations. Modern JavaScript introduces <code>let</code> and <code>const</code> for better scoping rules.</p>
            
            <pre><code>// Block-scoped variables
let count = 0;
const MAX_ATTEMPTS = 5;

// This will cause an error
// MAX_ATTEMPTS = 10;</code></pre>
            
            <h2>Arrow Functions</h2>
            <p>Arrow functions provide a more concise syntax for writing function expressions and lexically bind the <code>this</code> value.</p>
            
            <pre><code>// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>`,
        excerpt: "Learn the fundamentals of modern JavaScript and how to use it to build amazing web applications.",
        author: "Jane Smith",
        date: "2024-02-15",
        tags: ["JavaScript", "Web Development", "ES6+"],
        image: "https://source.unsplash.com/random/1200x600/?javascript",
        readTime: "5 min read",
        category: "JavaScript"
    },
    {
        id: 2,
        title: "The Power of CSS Grid",
        content: `
            <p>CSS Grid is a powerful layout system that allows you to design complex web layouts with ease. In this post, we'll explore how to use CSS Grid to create responsive and flexible designs.</p>
            
            <h2>Basic Grid Concepts</h2>
            <p>CSS Grid introduces a two-dimensional grid system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
            
            <pre><code>.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}</code></pre>`,
        excerpt: "Discover how CSS Grid can revolutionize your web layouts and make responsive design easier than ever.",
        author: "John Doe",
        date: "2024-02-10",
        tags: ["CSS", "Web Design", "Layout"],
        image: "https://source.unsplash.com/random/1200x600/?css",
        readTime: "7 min read",
        category: "CSS"
    },
    {
        id: 3,
        title: "Building Scalable APIs with Node.js",
        content: `
            <p>Node.js is a powerful platform for building scalable network applications. In this post, we'll explore best practices for creating robust and maintainable APIs with Node.js and Express.</p>
            
            <h2>Project Structure</h2>
            <p>Organizing your code properly is crucial for maintainability. Here's a recommended structure:</p>
            
            <pre><code>src/
  ├── config/         # Configuration files
  ├── controllers/    # Route controllers
  ├── middleware/     # Custom middleware
  ├── models/         # Database models
  ├── routes/         # Route definitions
  ├── services/       # Business logic
  └── utils/          # Utility functions</code></pre>`,
        excerpt: "Learn best practices for building robust and scalable APIs using Node.js and Express.",
        author: "Alex Johnson",
        date: "2024-02-05",
        tags: ["Node.js", "API", "Backend"],
        image: "https://source.unsplash.com/random/1200x600/?nodejs",
        readTime: "8 min read",
        category: "Node.js"
    },
    {
        id: 4,
        title: "The Future of Web Development",
        content: `
            <p>The web development landscape is constantly evolving. In this post, we'll explore the latest trends and technologies that are shaping the future of web development.</p>
            
            <h2>Progressive Web Apps (PWAs)</h2>
            <p>PWAs combine the best of web and mobile apps, offering offline capabilities, push notifications, and app-like experiences.</p>
            
            <h2>WebAssembly (Wasm)</h2>
            <p>WebAssembly allows running code written in multiple languages on the web at near-native speed.</p>`,
        excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
        author: "Sarah Williams",
        date: "2024-01-28",
        tags: ["Web Development", "Trends", "Future"],
        image: "https://source.unsplash.com/random/1200x600/?webdevelopment",
        readTime: "6 min read",
        category: "Web Development"
    }
];

// Load a specific blog post
function loadBlogPost() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        
        if (isNaN(postId) || postId <= 0) {
            throw new Error('Invalid post ID');
        }
        
        // Find the post with the matching ID
        const post = blogPosts.find(p => p.id === postId);
        
        if (!post) {
            throw new Error('Post not found');
        }
        
        // Update the page title
        document.title = `${post.title} | BlogSphere`;
        
        // Update the post content
        const titleElement = document.getElementById('post-title');
        const contentElement = document.getElementById('post-content');
        const categoryElement = document.getElementById('post-category');
        const dateElement = document.getElementById('post-date');
        const readTimeElement = document.getElementById('read-time');
        const authorElement = document.getElementById('author-name');
        const imageElement = document.getElementById('post-image');
        
        if (titleElement) titleElement.textContent = post.title;
        if (contentElement) contentElement.innerHTML = post.content;
        if (categoryElement) categoryElement.textContent = post.category;
        if (dateElement) dateElement.textContent = formatDate(post.date);
        if (readTimeElement) readTimeElement.textContent = post.readTime;
        if (authorElement) authorElement.textContent = post.author;
        if (imageElement) {
            imageElement.src = post.image;
            imageElement.alt = post.title;
            imageElement.loading = 'lazy';
        }
        
        // Update meta tags for social sharing
        updateMetaTags(post);
        
        // Initialize syntax highlighting after content is loaded
        if (typeof hljs !== 'undefined') {
            setTimeout(() => hljs.highlightAll(), 100);
        }
        
    } catch (error) {
        console.error('Error loading blog post:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <h2>Post Not Found</h2>
            <p>The requested blog post could not be found.</p>
            <a href="../index.html" class="btn btn-primary">Return to Home</a>
        `;
        
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.innerHTML = '';
            mainContent.appendChild(errorMessage);
        } else {
            window.location.href = '../index.html';
        }
    }
}

// Load related posts
function loadRelatedPosts() {
    const relatedPostsContainer = document.getElementById('relatedPosts');
    
    if (!relatedPostsContainer) return;
    
    // Get the current post ID
    const urlParams = new URLSearchParams(window.location.search);
    const currentPostId = parseInt(urlParams.get('id'));
    
    // Get related posts (exclude the current post)
    const relatedPosts = blogPosts
        .filter(post => post.id !== currentPostId)
        .slice(0, 3); // Get up to 3 related posts
    
    if (relatedPosts.length > 0) {
        const relatedPostsHTML = relatedPosts.map(post => `
            <article class="related-post">
                <div class="related-post-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                </div>
                <div class="related-post-content">
                    <div class="post-meta">
                        <span class="post-tag">${post.category}</span>
                        <span>${formatDate(post.date)}</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="blog-post.html?id=${post.id}" class="btn-text">Read More</a>
                </div>
            </article>
        `).join('');
        
        relatedPostsContainer.innerHTML = relatedPostsHTML;
    } else {
        relatedPostsContainer.innerHTML = '<p>No related posts found.</p>';
    }
}

// Format date to a more readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Update meta tags for social sharing
function updateMetaTags(post) {
    if (!post) return;
    
    const metaTags = {
        'description': post.excerpt,
        'og:type': 'article',
        'og:title': post.title,
        'og:description': post.excerpt,
        'og:image': post.image,
        'og:url': window.location.href,
        'og:site_name': 'BlogSphere',
        'article:published_time': new Date(post.date).toISOString(),
        'article:author': post.author,
        'twitter:card': 'summary_large_image',
        'twitter:title': post.title,
        'twitter:description': post.excerpt,
        'twitter:image': post.image
    };
    
    Object.entries(metaTags).forEach(([name, content]) => {
        updateMetaTag(name, content);
    });
}

// Helper function to update meta tags
function updateMetaTag(property, content) {
    let element = document.querySelector(`meta[property="${property}"]`) || 
                 document.querySelector(`meta[name="${property}"]`);
    
    if (element) {
        element.setAttribute('content', content);
    } else {
        element = document.createElement('meta');
        if (property.startsWith('og:')) {
            element.setAttribute('property', property);
        } else {
            element.setAttribute('name', property);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
    }
}

// Add syntax highlighting to code blocks
function highlightCodeBlocks() {
    if (typeof hljs !== 'undefined') {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
}

// Initialize any additional blog-specific functionality
function initBlog() {
    // Load Highlight.js for syntax highlighting
    loadHighlightJS();
    
    // Initialize any other blog-specific functionality here
    document.querySelectorAll('.btn-text, .btn').forEach(button => {
        button.addEventListener('click', (e) => {
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = '';
            }, 100);
        });
    });
}

// Initialize blog functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Check if we're on a blog post page
        if (window.location.pathname.includes('blog-post.html')) {
            loadBlogPost();
        } else {
            // Only load related posts on the blog post page
            loadRelatedPosts();
        }
        
        // Initialize blog functionality
        initBlog();
        
    } catch (error) {
        console.error('Error initializing blog:', error);
    }
});
