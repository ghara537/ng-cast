angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    theindex: '<',
    handleclick: '<',
    video: '<'
  },
  controller: function() {
    this.something = 'something';
    // this.executeClick = this.handleclick($index);
    // this.video = window.exampleVideoData[0];
    // debugger;
  },

  templateUrl: 'src/templates/videoListEntry.html'
  // template: 
  //   `<li class="video-list-entry media">
  //     <div class="media-left">
  //       <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
  //     </div>
  //     <div class="media-body">
  //       <div class="video-list-entry-title">{{$ctrl.video.snippet.title}}</div>
  //       <div class="video-list-entry-detail">Video Description</div>
  //     </div>
  //   </li>`

  // TODO
});
