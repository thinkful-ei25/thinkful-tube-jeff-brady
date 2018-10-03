

const Api = (function() {
    const API_KEY = 'AIzaSyBOZ_IKeZUJBN2TbZbuWNWul8_yrO_WiFM';
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
    
    function fetchVideos(searchTerm, callback) {
            const query = {
              part: 'snippet',
              key: API_KEY,
              q: searchTerm,
          }
          
              $.getJSON(BASE_URL, query, callback);
          }
    return {
        fetchVideos
    }
        
}());