document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('blog-form');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      if (username && title && content) {
          const postData = {
              username: username,
              title: title,
              content: content
          };

          // Get existing posts from localStorage or initialize an empty array
          const posts = JSON.parse(localStorage.getItem('posts')) || [];

          // Add new post data to the array
          posts.push(postData);

          // Save updated posts array to localStorage
          localStorage.setItem('posts', JSON.stringify(posts));

          // Redirect to the posts page
          window.location.href = 'blog.html';
      } else {
          alert('Please complete all fields');
      }
  });
});