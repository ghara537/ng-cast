angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function() {
    // this.url = this.video + 
    // logging: function () {console.log(this.exampleData, "hello");}
  console.log(this);
  },

  templateUrl: 'src/templates/videoPlayer.html' 


});
