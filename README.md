# Personal Blog Web App

This is a personal blog web application that allows users to create and view blog posts.

## Features

- Landing page with a form for creating new blog posts
- Form validation to ensure all fields are filled before submission
- Storage of blog post data using localStorage
- Posts page to view all blog entries
- Light mode/dark mode toggle
- Back button to navigate between pages
- Display of blog posts fetched from localStorage
- Blog post details including title, content, and author
- Footer with a link to the developer's portfolio

## Usage

1. **Landing Page:**
   - Upon loading the app, users are presented with a form containing fields for username, blog title, and blog content.

2. **Submitting a Form:**
   - When the form is submitted, the blog post data is stored in the browser's localStorage.
   - After submission, users are redirected to the posts page.

3. **Form Validation:**
   - If a user tries to submit the form without filling in all required fields (username, title, or content), they are prompted to complete the form.

4. **Posts Page:**
   - The posts page displays a header with a light mode/dark mode toggle and a "Back" button.
   - Clicking the toggle updates the page content's styles accordingly.
   - Clicking the "Back" button redirects users to the landing page to input more blog entries.

5. **Viewing Blog Posts:**
   - The main content of the posts page shows a list of blog posts pulled from localStorage.
   - Each blog entry includes the title, content, and author.

6. **LocalStorage:**
   - Viewing localStorage reveals a JSON array of blog post objects, each containing the author's username, post title, and content.

7. **Footer:**
   - The footer includes a link to the developer's portfolio.

## Installation

Clone the repository and open the `index.html` file in a web browser to use the application.

## Technologies Used

- HTML
- CSS
- JavaScript

## Developer

[Developer Name](https://github.com/Logan-New)
