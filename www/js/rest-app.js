
	$("#play").click(function() {
		 alert('button clicked');
	    $.ajax({
	        url: "http://servidor-musikais.rhcloud.com/recommendation/get/10/10"
	    }).then(function(data, status, jqxhr) {
	       //changeAudio(data.musicName);
	       //var element = document.getElementById('info2');
	       //element.innerHTML = 'Musica: '  + data.musicName;


	       var audio = $("#player");      
		    $("#mp3_src").attr("src", 'http://musikais.com/music/' + data.musicName);
		    /****************/
		    audio[0].pause();
		    audio[0].load();//suspends and restores all audio element
		    audio[0].play();
		    /****************/
	       console.log(jqxhr);
	    });
	}
