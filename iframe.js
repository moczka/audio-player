window.onload = function(){

  var audioIcon = document.getElementById('audioIcon'),
      audioEl = (function(){

    var tag = document.createElement('audio');
        tag.src = "https://cdn.rawgit.com/moczka/assetloader/a95e24bd/assets/sounds/victory.mp3";

        return tag;

  })();

  window.AUDIO = audioEl;

  audioEl.oncanplaythrough = function(){

    audioIcon.className = "loaded";
    audioIcon.addEventListener('mouseover', handleHover, false);

  };

  function handleHover(){
    audioEl.play();
    console.log("hello");
  }

};
