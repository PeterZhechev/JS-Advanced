function getArticleGenerator(articles) {

    return function showNext() {
        let contentElement = document.getElementById('content');
        let articleElement = document.createElement('article');

        if (articles.length > 0) {
            let currentEl = articles.shift();
            articleElement.textContent = currentEl;
            contentElement.appendChild(articleElement);
        }
    }
}
