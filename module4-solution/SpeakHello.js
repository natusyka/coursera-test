(function(window) {
  const speakWord = "Hello";
  const helloSpeaker = {};    
    
    helloSpeaker.speak = function() {
      console.log(speakWord + " " + helloSpeaker.name);
    }

    window.helloSpeaker = helloSpeaker;
    
})(window);
