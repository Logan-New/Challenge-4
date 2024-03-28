document.addEventListener('DOMContentLoaded', function () {
  const postsContainer = document.getElementById('posts-container');
  const modeToggle = document.getElementById('mode-toggle');
  const backBtn = document.getElementById('back-btn');

  
  document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
    const modeToggle = document.getElementById('mode-toggle');
    const backBtn = document.getElementById('back-btn');

    // Check localStorage for existing posts data
    const postsData = JSON.parse(localStorage.getItem('posts')) || [];

    // Render posts
    function renderPosts() {
        postsContainer.innerHTML = '';
        postsData.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p class="author">By: ${post.username}</p>
                <p class="content">${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Initial render
    renderPosts();

    // Light/dark mode toggle
    modeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Back button navigation
    backBtn.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
  
  // Check localStorage for existing posts data
  
  const postsData = JSON.parse(localStorage.getItem('posts')) || [];

  // Render posts
  function renderPosts() {
      postsContainer.innerHTML = '';
      postsData.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
              <p>By: ${post.username}</p>
          `;
          postsContainer.appendChild(postElement);
      });
  }

  // Initial render
  renderPosts();

  // Light/dark mode toggle
  modeToggle.addEventListener('change', function () {
      document.body.classList.toggle('dark-mode');
  });

  // Back button navigation
  backBtn.addEventListener('click', function () {
      window.location.href = 'index.html';
  });
});
