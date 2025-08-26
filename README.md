# Ank's Review - A Modern Blogging Platform

Welcome to Ank's Review, a clean, responsive, and modern blogging website built with HTML5, CSS3, and JavaScript. This project serves as a frontend template that can be easily integrated with a backend system.

## Features

- **Fully Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Modern UI/UX**: Clean and intuitive user interface with smooth animations.
- **Semantic HTML5**: Properly structured with semantic elements for better SEO and accessibility.
- **No Dependencies**: Built with vanilla JavaScript - no jQuery or other frameworks required.
- **Modular Code**: Well-organized codebase for easy maintenance and extension.

## Project Structure

```
blogging-website/
├── index.html          # Homepage
├── css/
│   ├── styles.css      # Main stylesheet
│   └── responsive.css  # Responsive styles and media queries
├── js/
│   ├── main.js         # Core functionality
│   └── blog.js         # Blog-specific functionality
├── images/             # Image assets
└── pages/
    ├── about.html      # About page
    ├── Review.html     # Review page
    └── Category.html   # Category template
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code, Sublime Text, etc.)
- (Optional) A local web server for development

### Installation

1. **Clone the repository** or download the source code
   ```bash
   git clone https://github.com/yourusername/blogging-website.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd blogging-website
   ```

3. **Open in your browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server:
     ```bash
     # Using Python's built-in server
     python -m http.server 8000
     # Then visit http://localhost:8000
     ```

## Development

### Adding New Blog Posts

1. Open the `js/blog.js` file
2. Add a new post object to the `blogPosts` array with the following structure:
   ```javascript
   {
       id: 5, // Unique ID
       title: "Your Post Title",
       content: "<p>Your post content in HTML format</p>",
       excerpt: "A short excerpt of your post",
       author: "Author Name",
       date: "YYYY-MM-DD",
       tags: ["Tag1", "Tag2"],
       image: "path/to/image.jpg",
       readTime: "X min read",
       category: "Category Name"
   }
   ```

### Customizing Styles

- Main styles are in `css/styles.css`
- Responsive styles and media queries are in `css/responsive.css`
- Color schemes can be modified in the `:root` selector in `styles.css`

### Adding New Pages

1. Create a new HTML file in the `pages/` directory
2. Copy the basic structure from an existing page
3. Update the content and links as needed
4. Add any page-specific styles in the `<style>` section or in the main CSS files

## Backend Integration

This template is designed to be easily integrated with a backend. The following API endpoints are suggested:

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/:id` - Get a specific blog post
- `POST /api/posts` - Create a new blog post
- `PUT /api/posts/:id` - Update a blog post
- `DELETE /api/posts/:id` - Delete a blog post
- `POST /api/comments` - Add a comment to a post
- `GET /api/categories` - Get all categories
- `GET /api/tags` - Get all tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 10+)
- Chrome for Android (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for placeholder images
- [Normalize.css](https://necolas.github.io/normalize.css/) for consistent styling across browsers

---

Happy Blogging! 🚀
