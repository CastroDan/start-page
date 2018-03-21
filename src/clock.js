$(window).on('load', function () {
    startTime();
})

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    checkSec(s);
    setPaper(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}

function setPaper(h){
    if (h < 7 || h >= 20) {
        $("html").css("background-image", "url(img/minecraft-night.jpg)");
    }

    else {
        $("html").css("background-image", "url(img/minecraft.png)");;
    }
}

function checkSec(i){
    if (i%2 == 1) {
        document.getElementById('clock').style.color = "white";
    }
    else {document.getElementById('clock').style.color = "grey"};
}