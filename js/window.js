var bought = 0;
var not_bought = 0;
var num_yes = 0;
var num_no = 0;
var price;
console.log('HERE HERE wee');

var example = ['If you saved and invested this money now, in ten years, you would have $',
    'You could have bought this many Costco Hot Dogs:',
    'You could have bought this many Chipotle Burritos:',
    'You could have bought this many gallons of gas:'];
var cost = [0,1.5,8,2.50];
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
    document.getElementById("possible").innerHTML = example[3];
    document.getElementById("saved").innerHTML = "" + Math.floor(price/cost[3])+"";
    cost[0] = (Math.round(price_val * (Math.pow(1.10, 10))));
    textSequence(0);

}




function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("possible").innerHTML = example[i];
            if (i == 0)
            {
                document.getElementById("saved").innerHTML = "" + cost[0] +"." ;
            }
            else
            {
                document.getElementById("saved").innerHTML = "" + Math.floor(price/cost[i])+"";
            }
            textSequence(++i);
        }, 5000); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}
function yes1(){
    num_yes++;
    document.getElementById("yes1").className += " impulse-clicked";
    document.getElementById("q2").style.display = "block";
}

function no1(){
    num_no++;
    document.getElementById("q2").style.display = "block";
    document.getElementById("no1").className += " impulse-clicked";
}

function yes2(){
    num_yes++;
    document.getElementById("q3").style.display = "block";
    document.getElementById("yes2").className += " impulse-clicked";
}

function no2(){
    num_no++;
    document.getElementById("q3").style.display = "block";
    document.getElementById("no2").className += " impulse-clicked";
}

function yes3(){
    num_no++;
    document.getElementById("q4").style.display = "block";
    document.getElementById("yes3").className += " impulse-clicked";
}

function no3(){
    num_yes++;
    document.getElementById("q4").style.display = "block";
    document.getElementById("no3").className += " impulse-clicked";
}
function yes4(){
    document.getElementById("yes4").className += " impulse-clicked";
    num_no++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "Don't worry, it isn't an impulse purchase.";
        document.getElementById("impulse-close").style.display = "block";
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulse purchase. Don't buy it!";
        document.getElementById("buy?").style.display = "block";
    }
}

function no4(){
    document.getElementById("no4").className += " impulse-clicked";
    num_yes++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "Don't worry, it isn't an impulse purchase.";
        document.getElementById("impulse-close").style.display = "block";
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulse purchase. Don't buy it!";
        document.getElementById("buy?").style.display = "block";
    }
}


function didBuy(){
    pricesArray.push(price_val);
    localStorage.setItem('prices', JSON.stringify(pricesArray));

    productsArray.push(product);
    localStorage.setItem('products', JSON.stringify(productsArray));

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    datesArray.push(date);
    localStorage.setItem('dates', JSON.stringify(datesArray));

    isImpulsesArray.push(true);
    localStorage.setItem('isImpulses', JSON.stringify(isImpulsesArray));

    document.getElementById("did-buy").className += " impulse-clicked";
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

    productsArray.push(product);
    localStorage.setItem('products', JSON.stringify(productsArray));

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    datesArray.push(date);
    localStorage.setItem('dates', JSON.stringify(datesArray));

    isImpulsesArray.push(false);
    localStorage.setItem('isImpulses', JSON.stringify(isImpulsesArray));

    document.getElementById("did-not-buy").className += " impulse-clicked";
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

