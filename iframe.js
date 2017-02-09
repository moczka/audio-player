window.onload = function(){

  var audioIcon = document.getElementById('audioIcon'),
      loadBtn = document.getElementById('load'),
      inputURL = document.getElementById('audio-url'),
      audioTag = document.createElement('audio');
      audioTag.src = "https://cdn.rawgit.com/moczka/assetloader/a95e24bd/assets/sounds/victory.mp3";

      audioTag.oncanplaythrough = function(){
        audioIcon.className = "loaded";
        audioIcon.addEventListener('mouseover', handleHover, false);
      };

      function handleHover(){
        audioTag.play();
        console.log("Playing song");
      }

      loadBtn.onclick = function(){

        if(!inputURL.value) return;

            audioIcon.removeEventListener('mouseover', handleHover, false);
            audioIcon.className = "loading";
            audioTag.src = inputURL.value;


            console.log(audioTag);
            console.log(inputURL.value);

      };

};
