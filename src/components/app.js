angular.module('video-player')
.component('app', {
  // TODO
  controller: function () {
    this.selectVideo=function(){}
    this.searchResults=function(){}
    this.currentVideo=window.exampleVideoData[0]
    this.videos = window.exampleVideoData
    this.setCurrentVideo=(video)=>{
        this.currentVideo=video;
        //console.log(video)
    }
  },
  
  templateUrl: "src/templates/app.html"
 
});
