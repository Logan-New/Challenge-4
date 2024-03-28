document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
    const modeToggle = document.getElementById('mode-toggle');
    const backBtn = document.getElementById('back-btn');
    const body = document.body;
  
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
    modeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
      localStorage.setItem('mode', currentMode);
    });
  
    // Back button navigation
    backBtn.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
    
    // Set initial mode based on localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
      body.classList.add('dark-mode');
    }
  });

