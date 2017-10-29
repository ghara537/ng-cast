angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    theVideo: '<'
  },
  controller: function() {
    // this.url = this.video + 
    // logging: function () {console.log(this.exampleData, "hello");}
  },

  templateUrl: 'src/templates/videoPlayer.html' 


});
