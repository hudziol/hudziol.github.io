function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* function checkCookie()
{
    var user = getCookie("username");
    if (user != "")
    {
        alert("Welcome again " + user);
    }
    else
    {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null)
        {
            setCookie("username", user, 365);
        }
    }
} */

var slid = 1;
var max = 3;
setTimeout(slider, 1);
function slider()
{
    if(slid < max)
    {
        for(i = 1; i <= max; i++)
        {
            document.getElementById("slid-" + i).style.display = "none";
            document.getElementById("slid-title-" + i).style.display = "none";
        }
        document.getElementById("slid-" + slid).style.display = "block";
        document.getElementById("slid-title-" + slid).style.display = "block";
        slid ++;
    }
    else if(slid == max)
    {
        for(i = 1; i <= max; i++)
        {
            document.getElementById("slid-" + i).style.display = "none";
            document.getElementById("slid-title-" + i).style.display = "none";
        }
        document.getElementById("slid-" + slid).style.display = "block";
        document.getElementById("slid-title-" + slid).style.display = "block";
        slid = 1;
    }
    setTimeout(slider, 4000);
}

//var img = this.document.getElementById("img-1");
//var img = document.getElementsByClassName("galer-img");
//var img = document.querySelectorAll(".galer-img");
//var num;
//img.onclick = imgMax;
/* for(i=0; i<10; i++)
{
    img[i].onclick = imgMax;
    console.log(i);
}

function imgMax()
{
    console.log("Img");
    //var imgScreen = document.createElement("div");
    //imgScreen.src;
} */

window.onload = alert;

function alert(klik)
{
    if(klik == 1)
    {
        document.getElementById("alert").style.display = "none";
        setCookie("alert", "1", 365);
    }
    else
    {
        var alert = getCookie("alert");
        if(alert == 1)
        {
            document.getElementById("alert").style.display = "none";
        }
        else
        {
            //document.getElementById("alert").style.display = "block";
        }
    }
}

function wizyty()
{
    var liczbaWejsc = Number(getCookie("visit"));
    var wejscia = liczbaWejsc + 1;
    setCookie("visit", wejscia, "9999")
    console.log(wejscia);
}