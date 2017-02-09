window.onload = function(){

    var btn = document.getElementById('removeFrame'),
        container = document.getElementById('container'),
        iframe = document.createElement('iframe');
        iframe.src="iframe.html";

    container.appendChild(iframe);

    btn.addEventListener('click', function(){

        if(btn.innerHTML === "Remove"){
          container.removeChild(iframe);
          btn.innerHTML = "Append";
        }else{
          container.appendChild(iframe);
          btn.innerHTML = "Remove";
        }

    }, false);

};
