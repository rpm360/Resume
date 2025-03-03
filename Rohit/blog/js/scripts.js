document.addEventListener('DOMContentLoaded', function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blog-posts');
            posts.forEach(post => {
                const article = document.createElement('article');
                const title = document.createElement('h2');
                const summary = document.createElement('p');
                const link = document.createElement('a');

                title.textContent = post.title;
                summary.textContent = post.summary;
                link.textContent = 'Read more';
                link.href = post.link;

                article.appendChild(title);
                article.appendChild(summary);
                article.appendChild(link);
                blogPostsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});