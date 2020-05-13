var slid = 1;
var max = 3;
setTimeout(slider, 2000);
function slider()
{
    if(slid < max)
    {
        for(i = 1; i <= max; i++)
        {
            document.getElementById("slid-" + i).style.display = "none";
        }
        document.getElementById("slid-" + slid).style.display = "block";
        slid ++;
    }
    else if(slid == max)
    {
        for(i = 1; i <= max; i++)
        {
            document.getElementById("slid-" + i).style.display = "none";
        }
        document.getElementById("slid-" + slid).style.display = "block";
        slid = 1;
    }
    setTimeout(slider, 2000);
}