angular.module('video-player')

.component('app', {
  bindings: {
    data: '<',
    yo: '<'
  },
  controller: function($scope, youTube) {
    // console.log(this);
    console.log(window.exampleVideoData);
    this.test = 'test';
    this.videoArr = window.exampleVideoData;
    // console.log(youTube.log());
    // this.hack = youTube.search('kevin', this);
    this.hack = youTube.search('kevin', function (response) {
      this.videoArr = response.data.items;
      this.mainVid = response.data.items[0];
    }.bind(this));

    console.log(this);
    console.log('hacks', this.hack);
    this.searchString = '';

    this.changeSearch = function(string) {
      this.searchString = string;
      console.log(string);
      youTube.search(string, function (response) {
        this.videoArr = response.data.items;
        this.mainVid = response.data.items[0];
      }.bind(this));
    }.bind(this);
    
    this.mainVid = this.videoArr[0];

    this.changeMainVideo = function(index) {
      console.log('index', index);
      this.mainVid = this.videoArr[index];
    }.bind(this);

  
    
    

    // logging: function () {console.log(this.exampleData, "hello");}
  },
  templateUrl: 'src/templates/app.html'


  // templateURL: "src/templates/app.html"
  // TODO
});
