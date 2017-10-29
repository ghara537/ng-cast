angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, successCallback) {
    var dataObject = {
      q: query,
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: true,
      type: 'video',
      part: 'snippet', 
      maxResults: 5
    };
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      part: 'snippet',
      params: dataObject
    }).then(successCallback, {

      // console.log(response.data.items);
      // app.videoArr = response.data.items;
      // return response.data.items;
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
  };

  this.log = function() {
    console.log(window.YOUTUBE_API_KEY);
    return window.YOUTUBE_API_KEY;
  };
});
