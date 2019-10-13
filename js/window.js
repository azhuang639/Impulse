var bought = 0;
var not_bought = 0;
var num_yes = 0;
var num_no = 0;
var price;
var today;
var date;
console.log('HERE HERE wee');

var example = ['If you saved and invested this money now, in ten years, you would have $',
    'You could have bought this many Costco Hot Dogs:',
    'You could have bought this many Chipotle Burritos:',
    'You could have bought this many gallons of gas:'];
var cost = [0,1.5,8,2.50];
// window.onload = startup;

//setting up database

let pricesArray;
chrome.storage.local.get(['prices'], function(result) {
   pricesArray = result.prices ? result.prices : [];
});
chrome.storage.local.set({'prices':pricesArray}, function() {
    let data = pricesArray;
    console.log("successfully stored array" + data);
});

let productsArray;
chrome.storage.local.get(['products'], function(result) {
    productsArray = result.products ? result.products : [];
});
chrome.storage.local.set({'products':productsArray}, function() {
    let data = productsArray;
    console.log("successfully stored array" + data);
});

let isImpulsesArray;
chrome.storage.local.get(['isImpulses'], function(result) {
    isImpulsesArray = result.isImpulses ? result.isImpulses : [];
});
chrome.storage.local.set({'isImpulses':isImpulsesArray}, function() {
    let data = isImpulsesArray;
    console.log("successfully stored array" + data);
});

let datesArray;
chrome.storage.local.get(['dates'], function(result) {
    datesArray = result.dates ? result.dates : [];
});
chrome.storage.local.set({'dates':datesArray}, function() {
    let data = datesArray;
    console.log("successfully stored array" + data);
});

/*
let pricesArray = chrome.storage.local.get('prices') ?
    JSON.parse(chrome.storage.local.get('prices')) : [];
chrome.storage.local.set('prices', JSON.stringify(pricesArray));

let productsArray = chrome.storage.local.get('products') ?
    JSON.parse(chrome.storage.local.get('products')) : [];
chrome.storage.local.set('products', JSON.stringify(productsArray));

let datesArray = chrome.storage.local.get('dates') ?
    JSON.parse(chrome.storage.local.get('dates')) : [];
chrome.storage.local.set('dates', JSON.stringify(datesArray));

let isImpulsesArray = chrome.storage.local.get('isImpulses') ?
    JSON.parse(chrome.storage.local.get('isImpulses')) : [];
chrome.storage.local.set('isImpulses', JSON.stringify(isImpulsesArray));
*/

function startup(x){
    document.getElementById('impulse-logo').src = chrome.extension.getURL('assets/impulse.png');

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
            document.getElementById('possible').classList.toggle('impulse-fade');
            document.getElementById('saved').classList.toggle('impulse-fade');
        }, 4500);
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

            document.getElementById('possible').classList.toggle('impulse-fade');
            document.getElementById('saved').classList.toggle('impulse-fade');

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
    setTimeout(function() {
        document.getElementById("q2").classList.toggle('show-hidden');
    }, 100);
    // document.getElementById("q2").classList.toggle('shofw-hidden');
}

function no1(){
    num_no++;
    document.getElementById("q2").style.display = "block";
    document.getElementById("no1").className += " impulse-clicked";
    setTimeout(function() {
        document.getElementById("q2").classList.toggle('show-hidden');
    }, 100);
    // document.getElementById("q2").classList.toggle('show-hidden');
}

function yes2(){
    num_yes++;
    document.getElementById("q3").style.display = "block";
    document.getElementById("yes2").className += " impulse-clicked";
    setTimeout(function() {
        document.getElementById("q3").classList.toggle('show-hidden');
    }, 100);
    // document.getElementById("q3").classList.toggle('show-hidden');
}

function no2(){
    num_no++;
    document.getElementById("q3").style.display = "block";
    document.getElementById("no2").className += " impulse-clicked";
    setTimeout(function() {
        document.getElementById("q3").classList.toggle('show-hidden');
    }, 100);
    // document.getElementById("q3").classList.toggle('show-hidden');
}

function yes3(){
    num_no++;
    document.getElementById("q4").style.display = "block";
    document.getElementById("yes3").className += " impulse-clicked";
    setTimeout(function() {
        document.getElementById("q4").classList.toggle('show-hidden');
    }, 100);
    // document.getElementById("q4").classList.toggle('show-hidden');
}

function no3(){
    num_yes++;
    document.getElementById("q4").style.display = "block";
    document.getElementById("no3").className += " impulse-clicked";
    setTimeout(function() {
        document.getElementById("q4").classList.toggle('show-hidden');
    }, 100);
    // document.getElementById("q4").classList.toggle('show-hidden');
}
function yes4(){
    document.getElementById("yes4").className += " impulse-clicked";
    num_no++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "Don't worry, this doesn't seem to be an impulsive purchase.";
        document.getElementById("impulse-close").style.display = "block";
        setTimeout(function() {
            document.getElementById("hidden-impulse-button").classList.toggle('show-hidden');
        }, 100);
        // document.getElementById("hidden-impulse-button").classList.toggle('show-hidden');

    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulsive purchase. Don't buy it!";
        document.getElementById("buy?").style.display = "block";
        setTimeout(function() {
            document.getElementById("buy?").classList.toggle('show-hidden');
        }, 100);
        // document.getElementById("buy?").classList.toggle('show-hidden');
    }
}

function no4(){
    document.getElementById("no4").className += " impulse-clicked";
    num_yes++;
    if (num_yes>=2)
    {
        document.getElementById("good?").innerHTML =
            "Don't worry, this isn't an impulse purchase.";
        document.getElementById("impulse-close").style.display = "block";
        setTimeout(function() {
            document.getElementById("impulse-close").classList.toggle('show-hidden');
        }, 100);
        // document.getElementById("impulse-close").classList.toggle('show-hidden');
    }
    else
    {
        document.getElementById("failure?").innerHTML =
            "This is an impulsive purchase. Don't buy it!";
        document.getElementById("buy?").style.display = "block";
        setTimeout(function() {
            document.getElementById("buy?").classList.toggle('show-hidden');
        }, 100);
        // document.getElementById("buy?").classList.toggle('show-hidden');
    }
}


function didBuy(){
    pricesArray.push(price_val);
    chrome.storage.local.set({'prices': pricesArray});

    productsArray.push(product);
    chrome.storage.local.set({'products': productsArray});

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    datesArray.push(date);
    chrome.storage.local.set({'dates': datesArray});

    isImpulsesArray.push(true);
    chrome.storage.local.set({'isImpulses': isImpulsesArray});

    document.getElementById("did-buy").className += " impulse-clicked";
    bought++;
    console.log('test');
    document.getElementById("failure?").innerHTML =
        "Very well; sometimes you simply need to treat yourself!";
    close_appear();
    //document.getElementById("close").innerHTML = "close window";
}

function didNotBuy(){
    pricesArray.push(price_val);
    chrome.storage.local.set({'prices': pricesArray});

    productsArray.push(product);
    chrome.storage.local.set({'products': productsArray});

    today = new Date();
    date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    datesArray.push(date);
    chrome.storage.local.set({'dates': datesArray});

    isImpulsesArray.push(false);
    chrome.storage.local.set({'isImpulses': isImpulsesArray});

    document.getElementById("did-not-buy").className += " impulse-clicked";
    not_bought++;
    console.log('didn\'t buy item');
    document.getElementById("failure?").innerHTML =
        "Congrats for controlling your impulses! Please exit this tab.";
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
        setTimeout(function() {
            document.getElementById("impulse-close").classList.toggle('show-hidden');
        }, 100);
        // document.getElementById("impulse-close").classList.toggle('show-hidden');
    } else {
        x.style.display = "none";
    }
}

