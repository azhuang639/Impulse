var bought = 0;
var not_bought = 0;
var num_yes = 0;
var num_no = 0;


window.onload = startup;

function startup(){
    console.log("STARTUP");
    document.getElementById("close").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
}

function yes1(){
    num_yes++;
    document.getElementById("q2").style.display = "block";
}

function no1(){
    num_no++;
    document.getElementById("q2").style.display = "block";
}

function yes2(){
    num_yes++;
    document.getElementById("q3").style.display = "block";
}

function no2(){
    num_no++;
    document.getElementById("q3").style.display = "block";
}

function yes3(){
    num_no++;
    document.getElementById("q4").style.display = "block";
}

function no3(){
    num_yes++;
    document.getElementById("q4").style.display = "block";
}
function yes4(){
    num_no++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "This shouldn't be an imps purchase. ";
        close_appear();
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulse purchase. Don't buy it ";
    }
}

function no4(){
    num_yes++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "This shouldn't be an impulse purchase. ";
        close_appear();
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulse purchase. Don't buy it ";
    }
}


function didBuy(){
    bought++;
    console.log('test');
    document.getElementById("failure?").innerHTML =
        "wow, you really succumbed to your impulses. what. a. failure.";
    close_appear();
    //document.getElementById("close").innerHTML = "close window";
}

function didNotBuy(){
    not_bought++;
    console.log('didn\'t buy item');
    document.getElementById("failure?").innerHTML =
        "congrats, you stood up to your impulses!";
    close_appear();
    //document.getElementById("close").innerHTML = "close window";
   // window.close();
}
function closewindow(){
    console.log("test");
    window.close();
}

function close_appear() {
    var x = document.getElementById("close");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

