var bought = 0;
var not_bought = 0;
var num_yes = 0;
var num_no = 0;
var price;
console.log('HERE HERE wee');
// window.onload = startup;

//setting up database
let pricesArray = localStorage.getItem('prices') ?
    JSON.parse(localStorage.getItem('prices')) : [];
localStorage.setItem('prices', JSON.stringify(pricesArray));

let productsArray = localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) : [];
localStorage.setItem('products', JSON.stringify(productsArray));

let datesArray = localStorage.getItem('dates') ?
    JSON.parse(localStorage.getItem('dates')) : [];
localStorage.setItem('dates', JSON.stringify(datesArray));

let isImpulsesArray = localStorage.getItem('isImpulses') ?
    JSON.parse(localStorage.getItem('isImpulses')) : [];
localStorage.setItem('isImpulses', JSON.stringify(isImpulsesArray));

//how to parse through data
//const data = JSON.parse(localStorage.getItem('prices'));

function startup(x){
    console.log('STARTUP WHAT?');
    console.log(x);
    document.getElementById("impulse-close").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("buy?").style.display = "none";

    document.getElementById("yes1").addEventListener('click', yes1);
    document.getElementById("no1").addEventListener('click', no1);
    document.getElementById("yes2").addEventListener('click', yes2);
    document.getElementById("no2").addEventListener('click', no2);
    document.getElementById("yes3").addEventListener('click', yes3);
    document.getElementById("no3").addEventListener('click', no3);
    document.getElementById("yes4").addEventListener('click', yes4);
    document.getElementById("no4").addEventListener('click', no4);
    document.getElementById("did-buy").addEventListener('click', didBuy);
    document.getElementById("did-not-buy").addEventListener('click', didNotBuy);
    document.getElementById("impulse-close").addEventListener('click', closeWindow);
    price = x;
    document.getElementById("dis").innerHTML =
        "$"+price_val;
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
            "This shouldn't be an impulse purchase. ";
        document.getElementById("impulse-close").style.display = "block";
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulse purchase. Don't buy it ";
        document.getElementById("buy?").style.display = "block";
    }
}

function no4(){
    num_yes++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "This shouldn't be an impulse purchase. ";
        document.getElementById("impulse-close").style.display = "block";
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulse purchase. Don't buy it ";
        document.getElementById("buy?").style.display = "block";
    }
}


function didBuy(){
    pricesArray.push(price_val);
    localStorage.setItem('prices', JSON.stringify(pricesArray));
    bought++;
    console.log('test');
    document.getElementById("failure?").innerHTML =
        "wow, you really succumbed to your impulses. what. a. failure.";
    close_appear();
    //document.getElementById("close").innerHTML = "close window";
}

function didNotBuy(){
    pricesArray.push(price_val);
    localStorage.setItem('prices', JSON.stringify(pricesArray));

    not_bought++;
    console.log('didn\'t buy item');
    document.getElementById("failure?").innerHTML =
        "congrats, you stood up to your impulses!";
    close_appear();
    //document.getElementById("close").innerHTML = "close window";
   // window.close();
}

function closeWindow(){
    document.getElementById('impulse-window').style.display = 'none';
    document.getElementById('impulse-overlay').style.display = 'none';

    // Tell click event listener that impulse window was already show
    const impulseChecked = document.createElement('div');
    impulseChecked.id = 'impulse-checked';
    impulseChecked.style.display = 'none';
    document.getElementsByTagName('body')[0].append(impulseChecked);
}

function close_appear() {
    var x = document.getElementById("impulse-close");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

