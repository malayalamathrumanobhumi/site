// Fetch the JSON data from the articles.json file
fetch('/data/articles.json')
    .then(response => response.json())
    .then(data => {
        // Find the object with the matching article_id
        const article = data.find(obj => obj.article_id === articleId);

        // Get the full URL of the image
        const imageUrl = "https://malayalamathrumanobhumi.netlify.app" + article.featured_imageUrl;

        // Remove the period from the URL and prepend the base URL
        const articleUrl = "https://malayalamathrumanobhumi.netlify.app/" + article.article_url.replace(/^\.\//, "");

        // Get the first 160 characters of the body
        const truncatedBody = article.body.substring(0, 160);

        // Render the data in the HTML
        document.title = article.title + ' | മലയാളമാതൃ മനോഭൂമി';
        document.querySelector('meta[name="description"]').setAttribute('content', truncatedBody);
        document.querySelector('meta[name="keywords"]').setAttribute('content', article.tags);
        document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);
        document.querySelector('meta[property="og:url"]').setAttribute('content', articleUrl);
        document.querySelector('link[rel="canonical"]').setAttribute('href', articleUrl);
        document.querySelector('meta[property="og:site_name"]').setAttribute('content', 'മലയാളമാതൃ മനോഭൂമി');

        // Offload the 'data' array from memory
        delete data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Delete the data array to free up memory
dataA = null;
dataB = null;

// Fetch the JSON data from JSONFILEA
fetch('/data/articles.json')
    .then(response => response.json())
    .then(data => {
        const article = data.find(obj => obj.article_id === articleId);
        const imageUrl = "https://malayalamathrumanobhumi.netlify.app" + article.featured_imageUrl;
        const articleUrl = "https://malayalamathrumanobhumi.netlify.app/" + article.article_url.replace(/^\.\//, "");
        const truncatedBody = article.body.substring(0, 160);

        // Render the article content in the HTML
        document.querySelector('.artitle h1').textContent = article.title;
        document.querySelector('.featimaged img').setAttribute('src', imageUrl);
        document.querySelector('.artdate p').textContent = article.date;
        document.querySelector('.artbody').innerHTML = article.body;

        // Fetch the JSON data from JSONFILEB
        fetch('/data/author.json')
            .then(response => response.json())
            .then(authorData => {
                const author = authorData.find(obj => obj.author_id === article.author_id);
                const authorImageUrl = author.Image_URL;

                // Render the author information in the HTML
                document.querySelector('.author-image img').setAttribute('src', authorImageUrl);
                document.querySelector('.author-name').textContent = author.author_name;
                document.querySelector('.author-bio').textContent = author.Bio;
                document.querySelector('.author-social a:nth-child(1)').setAttribute('href', author.Facebook);
                document.querySelector('.author-social a:nth-child(2)').setAttribute('href', author.Twitter);
                document.querySelector('.author-social a:nth-child(3)').setAttribute('href', author.linkedIn);
                document.getElementById('policy').textContent = author.Policy;

                // Render the additional data in the HTML
                document.querySelector('.category p').textContent = article.category;
                document.querySelector('.arttags p').textContent = article.tags;
                document.querySelector('.authorid p').textContent = author.author_id;
                document.querySelector('.vuukleid p').textContent = article.vukkle_id;
                document.querySelector('.articleid p').textContent = article.article_id;

                // Delete the data array to free up memory
                data = null;
            })
            .catch(error => {
                console.error('Error fetching data from JSONFILEB:', error);
            });
    })
    .catch(error => {
        console.error('Error fetching data from JSONFILEA:', error);
    });



