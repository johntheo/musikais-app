function changeAudio(sourceUrl) {
    var audio = $("#player");      
    $("#mp3_src").attr("src", "http://musikais.com/music/" + sourceUrl);
    /****************/
    audio[0].pause();
    audio[0].load();//suspends and restores all audio element
    audio[0].play();
    /****************/
}