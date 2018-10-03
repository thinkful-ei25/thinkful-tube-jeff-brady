const VideoList = (function(){
  
  function generateListItem (video) {
    return `
      <li data-id="${video.id}">
        <h3>${video.title}</h3>
          <div>
            <img src="${video.url}">
          </div>
      </li>
    `;
  }

  function render() {
    const results = Store.videos.map( item => generateListItem(item));
    $('.results').html(results);
  };

  function decorateResponse(response) {
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

  function handleFormSubmit() {
    $('form').submit(event => {
      event.preventDefault();
      const searchTerm = $(event.currentTarget).find('#search-term').val();
      $('#search-term').val('');
      Api.fetchVideos(searchTerm, response => {
        let addedVideo = decorateResponse(response);
        Store.setVideos(addedVideo);
        render();
      });
    });
  }

  function bindEventListeners() {
    handleFormSubmit();
  }

  return {
    render,
    bindEventListeners
  }
  

}());
