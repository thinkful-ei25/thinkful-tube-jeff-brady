//decorate
//generate
//render

const videoList = (function () {
    // Keep variable private in closure scope
    const decorateResponse = function(response) {
        // console.log(response); //test response
        const returnItems = response.items; 
        let results = returnItems.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            url: item.snippet.thumbnails.default.url
        }));
      // console.log(results); //test response
      return results;
      };
    //Keep variable private in closure scope
    const generateVideoItemHtml = function(video) {
        return `<li data-id="${video.id}">
        <h3>${video.title}</h3>
        <div>
          <img src="${video.url}">
        </div>
        </li>
        `;
        };
    //Keep variable private in closure scope
    const render = function() {

        const results = store.videos.map( item => generateVideoItemHtml(item));
        $('.results').html(results);
        };

    return {
        decorateResponse,
        generateVideoItemHtml,
        render
    };
})();

videoList.decorateResponse();
videoList.generateVideoItemHtml();
videoList.render();


//On index.js, commented out lines 64-74, 85-93, 116-120


