(function(window) {
  const speakWord = "Good Bye";
  const byeSpeaker = {};
    
    byeSpeaker.speak = function() {
      console.log(speakWord + " " + byeSpeaker.name);
}
window.byeSpeaker = byeSpeaker

})(window);
