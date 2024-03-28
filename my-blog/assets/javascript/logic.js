// scripts.js
const contentDiv = document.getElementById('content');
const toggleMode = document.getElementById('toggle-mode');

// Dummy data for blog posts
const blogPosts = [
    { title: 'First Post', content: 'This is my first blog post.' },
    { title: 'Second Post', content: 'This is my second blog post.' },
    { title: 'Third Post', content: 'This is my third blog post.' }
];

// Function to render blog posts
function renderBlogPosts(posts) {
    contentDiv.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        contentDiv.appendChild(postElement);
    });
}

// Initial render
renderBlogPosts(blogPosts);

// Function to toggle dark mode
toggleMode.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Function to navigate to Add Post page
function goToAddPostPage() {
    window.location.href = 'add_post.html';
}