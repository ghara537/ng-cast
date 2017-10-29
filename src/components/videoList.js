angular.module('video-player')
.component('videoList', {
  
  bindings: {
    clickhandler: '<',
    videos: '<',
    yee: '<'
  },
  controller: function() {
    // this.videos = window.exampleVideoData;

    // logging: function () {console.log(this.exampleData, "hello");}
  },
  templateUrl: 'src/templates/videoList.html' 
  
    

  // TODO
});

// ng-repeat="video in $ctrl.exampleData" video="video"