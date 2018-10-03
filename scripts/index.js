'use strict';

$(document).ready(function() {
  VideoList.bindEventListeners();
});



// // const API_KEY = 'AIzaSyBOZ_IKeZUJBN2TbZbuWNWul8_yrO_WiFM';

// // const store = {
// //   videos: []
// // };

// // const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// // /**
// //  * @function fetchVideos
// //  * Async function, responsible for calling the Youtube API with jQuery, constructing
// //  * the correct query object, and passing along the callback into the AJAX call.
// //  * @param {string}   searchTerm
// //  * @param {function} callback
// //  */

// // const fetchVideos = function(searchTerm, callback) {
// //   const query = {
// //     part: 'snippet',
// //     key: API_KEY,
// //     q: searchTerm,
// //     // maxResults: 10
// // }

// //     $.getJSON(BASE_URL, query, callback);
// // };

// /**
//  * @function decorateResponse
//  * Uses Youtube API response to create an array of "decorated" video objects as 
//  * defined at the top of the file.
//  * @param   {object} response - should match Youtube API response shape
//  * @returns {array}
//  */


// const decorateResponse = function(response) {
//   // console.log(response); //test response
//   const returnItems = response.items; 
//   let results = returnItems.map(item => ({
//       id: item.id.videoId,
//       title: item.snippet.title,
//       url: item.snippet.thumbnails.default.url
//   }));
// // console.log(results); //test response
// return results;
// };

// // /**
// //  * @function generateVideoItemHtml
// //  * Template function, creates an HTML string from a single decorated video object
// //  * @param   {object} video - decorated video object
// //  * @returns {string} HTML 
// //  */

// // const generateVideoItemHtml = function(video) {
// // return `<li data-id="${video.id}">
// // <h3>${video.title}</h3>
// // <div>
// //   <img src="${video.url}">
// // </div>
// // </li>
// // `;
// // };

// // /**
// //  * @function addVideosToStore
// //  * Store modification function to set decorated video objects
// //  * @param {array} videos - decorated video objects
// //  */

// // const addVideosToStore = function(videos) {
// //   store.videos = videos;
// // };


// /**
//  * @function render
//  * Responsible for scanning store and rendering the video list to DOM
//  */

// const render = function() {

// const results = store.videos.map( item => generateVideoItemHtml(item));
// $('.results').html(results);
// };

// /**
//  * @function handleFormSubmit
//  * Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
//  * and 3) invokes render
//  */

// const handleFormSubmit = function() {

//   $('form').submit(event => {
//     event.preventDefault();
//     //access the value from the search form and store this 
//     const searchTerm = $(event.currentTarget).find('#search-term').val();
//     // console.log(`received query: ${searchTerm}`); //for Testing
//     $('#search-term').val('');
//     fetchVideos(searchTerm, function(response){
//       let addedVideo = decorateResponse(response);
//       addVideosToStore(addedVideo);
//       render();
//     });
//   }
//   );
// };

// // When DOM is ready:
// $(function () {
//   // TASK:
//   // 1. Run `handleFormSubmit` to bind the event listener to the DOM
//   handleFormSubmit();
// });
