function compute()
{
    p = document.getElementById("principal").value;
    i = document.getElementById("interest").value;
    t = document.getElementById("years").value;

    var final = (p*i*t)/100

    var finalll = "The final value is " + final

    document.getElementById("output").innerHTML=finalll;
}
        

