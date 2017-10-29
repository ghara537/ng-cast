angular.module('video-player')

.component('search', {
  bindings: {
    searchitem: '<'
  },
  controller: function() {
    this.searchButton = function() {
      this.searchitem(this.sometext);
      console.log('within search:', this.sometext);
    };
  },
  templateUrl: 'src/templates/search.html'
});
