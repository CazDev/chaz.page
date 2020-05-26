var body = document.getElementsByTagName('body')[0];
body.innerHTML += '<img src="https://i.kym-cdn.com/entries/icons/mobile/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg" />'; 
body.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/V4MF2s6MLxY?rel=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
var audio = new Audio('audio_file.mp3');
audio.play();
document.write ("This is a xss vuln");
alert ("This is a xss vuln");