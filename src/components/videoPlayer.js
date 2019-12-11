angular.module('video-player')
.component('videoPlayer', {
  controller: function () {
  //this.video='window.exampleVideoData[0]';
  this.getVideo=function(video){
    return 'https://www.youtube.com/embed/'+video.id.videoId
  }
  //this.test = this.getVideo(this.bindings.video)
  },
  
  templateUrl : "src/templates/videoPlayer.html",
  bindings: {
    video: "<",    
}
});
