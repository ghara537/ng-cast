angular.module('video-player')

.component('app', {
  bindings: {
    data: '<',
    yo: '<'
  },
  controller: function() {
    // console.log(this);
    console.log(window.exampleVideoData);
    this.test = 'test';
    this.videoArr = window.exampleVideoData;
    
    

    // logging: function () {console.log(this.exampleData, "hello");}
  },
  templateUrl: 'src/templates/app.html'


  // templateURL: "src/templates/app.html"
  // TODO
});
