function cl() {
    if (document.getElementById('button1').textContent == 'Click') {
        document.getElementById('button1').innerHTML = 'Oh no';
        document.body.style.webkitAnimationPlayState = "paused";
        document.body.style.backgroundColor = "darkred";
    }
    else {
        document.getElementById('button1').innerHTML = 'Click';
        document.body.style.backgroundColor = "dimgrey";
        document.body.style.webkitAnimationPlayState = "running";
    }
}