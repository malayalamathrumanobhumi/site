$(document).ready(function() {
    var articlesUrl = '/data/articles.json';
    var articles = [];

    // Fetch articles JSON data
    $.getJSON(articlesUrl, function(data) {
        articles = data;
    });

    
// Handle search input changes
$('#searchInput').on('input', function(event) {
    var query = $(this).val().toLowerCase();
    var results = [];

    if (query.length > 0) {
        results = articles.filter(function(article) {
            return (
                article.title.toLowerCase().includes(query) ||
                article.body.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.tags.toLowerCase().includes(query) ||
                article.author_bio.toLowerCase().includes(query) ||
                article.author_name.toLowerCase().includes(query) ||
                article.featured_imageUrl.toLowerCase().includes(query) ||
                article.article_url.toLowerCase().includes(query)
            );
        });
    }

    displayResults(results);
});

// Handle search form submission
$('#searchForm').on('submit', function(event) {
    event.preventDefault();
    performSearch();
});

// Perform search and display results
function performSearch() {
    var query = $('#searchInput').val().toLowerCase();
    var results = [];

    if (query.length > 0) {
        results = articles.filter(function(article) {
            return (
                article.article_id.toLowerCase().includes(query) ||
                article.title.toLowerCase().includes(query) ||
                article.body.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.tags.toLowerCase().includes(query) ||
                article.author_bio.toLowerCase().includes(query) ||
                article.author_name.toLowerCase().includes(query) ||
                article.featured_small_image_Url.toLowerCase().includes(query) ||
                article.article_url.toLowerCase().includes(query)
            );
        });
    }

    displayResults(results);
}

// Display search results
function displayResults(results) {
    var resultsContainer = $('#results');
    resultsContainer.empty();

    if (results.length > 0) {
        $.each(results, function(index, article) {
            var imageUrl = article.featured_imageUrl;
            var title = article.title;
            var articleUrl = article.article_url.replace('./contents', '/contents');

            var resultItem = $('<div>').addClass('result-item');
            var imageLink = $('<a>').attr('href', articleUrl);
            var image = $('<img>').attr('src', imageUrl).addClass('result-image');
            imageLink.append(image);

            var titleLink = $('<a>').attr('href', articleUrl).text(title).addClass('result-title');

            resultItem.append(imageLink);
            resultItem.append(titleLink);
            resultItem.append('<hr>'); // Add <hr> tag after each result item
            resultsContainer.append(resultItem);
        });
    } else {
        resultsContainer.html('<p>ഒരു ഫലവും കണ്ടെത്താനായില്ല.</p>');
    }
}




});
