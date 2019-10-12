var bought = 0;
var not_bought = 0;

window.onload = startup;

function startup(){
    console.log("STARTUP");
    document.getElementById("close").style.display = "none";
}
function didBuy(){
    bought++;
    console.log('test');
    document.getElementById("failure?").innerHTML = "wow, you really succumbed to your impulses. what. a. failure.";
    appear();
    //document.getElementById("close").innerHTML = "close window";
}

function didNotBuy(){
    not_bought++;
    console.log('didn\'t buy item');
    document.getElementById("failure?").innerHTML = "congrats, you stood up to your impulses!";
    appear();
    //document.getElementById("close").innerHTML = "close window";
   // window.close();
}
function closewindow(){
    console.log("test");
    window.close();
}

function appear() {
    var x = document.getElementById("close");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

