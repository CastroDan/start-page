$(window).on('load', function ()
{
    startTime();
})

function startTime()
{
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    checkSec(s);
    setPaper(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}

function checkTime(i)
{
    if (i < 10) {i = "0" + i};
    return i;
}

function setPaper(h)
{
    if (h <= 6 || h > 20)
    {
        $("html").css("background-image", "url(img/minecraft-night.jpg)");
    }
    else if (h <= 11)
    {
        $("html").css("background-image", "url(img/minecraft-morning.png)");
    }
    else if (h <= 16)
    {
        $("html").css("background-image", "url(img/minecraft-underhang.jpg)");
    }
    else {
        $("html").css("background-image", "url(img/minecraft.png)");
    }
}

function checkSec(i)
{
    if (i%2 == 1) {
        document.getElementById('clock').style.color = "white";
    }
    else {document.getElementById('clock').style.color = "grey"};
}