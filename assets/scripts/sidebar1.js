// Fetch the JSON file
fetch('/data/articles.json')
  .then(response => response.json())
  .then(data => {
    // Sort the objects based on the "date" key in descending order
    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Get the latest 21 objects with an offset of 1
    const slicedData = sortedData.slice(1, 22);
    
    // Get the sidebar template from the imported HTML
    const sidebarTemplate = document.getElementById('articles-list');
    
    // Render the data in the sidebar template
    slicedData.forEach(obj => {
      const { title, article_url, featured_small_image_Url } = obj;
      
      const li = document.createElement('li');
      
      const div1 = document.createElement('div');
      div1.className = 'sidebarnew';
      
      const div2 = document.createElement('div');
      div2.className = 'imageo';
      
      const a1 = document.createElement('a');
      a1.href = article_url;
      a1.title = title;
      
      const img = document.createElement('img');
      img.src = featured_small_image_Url;
      img.alt = title;
      
      a1.appendChild(img);
      div2.appendChild(a1);
      
      const div3 = document.createElement('div');
      div3.className = 'tex';
      
      const a2 = document.createElement('a');
      a2.href = article_url;
      a2.title = title;
      
      const h3 = document.createElement('h3');
      h3.textContent = title;
      
      a2.appendChild(h3);
      div3.appendChild(a2);
      
      div1.appendChild(div2);
      div1.appendChild(div3);
      li.appendChild(div1);
      sidebarTemplate.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
