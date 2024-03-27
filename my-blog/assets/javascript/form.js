document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = blogForm.querySelector('#username').value;
        const title = blogForm.querySelector('#title').value;
        const content = blogForm.querySelector('#content').value;

        if (username && title && content) {
            const post = {
                username: username,
                title: title,
                content: content
            };
            
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(post);
            localStorage.setItem('posts', JSON.stringify(posts));

            window.location.href = 'blog.html';
        } else {
            alert('Please complete all fields');
        }
    });
});