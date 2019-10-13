console.log('Popup opened');

//calculating weekly, monthly, and lifetime purchases
var sum = 0.00;
let pricesArray = localStorage.getItem('prices') ?
    JSON.parse(localStorage.getItem('prices')) : [];
localStorage.setItem('prices', JSON.stringify(pricesArray));
pricesArray.forEach(item => {
    sum+= parseFloat(item);
});


let active;
chrome.storage.local.get({active: true}, function(result) {
    active = result.active;
    loading(document.getElementById('pause'));
});

// var active = chrome.storage.local.get('active') ? localStorage.getItem('active') : 'true';

document.addEventListener('DOMContentLoaded', function() {
    // careful with using += to modify innerHTML, it'll remove all event listeners i think
    document.getElementById("lifetime").innerHTML =
      "$"+sum;


    var link = document.getElementById('pause');
    var clearLink = document.getElementById('clearStorage');
    var showStats = document.getElementById('stats');
    clearLink.addEventListener('click', function() {
        clearStorage();
    });
    showStats.addEventListener('click', function() {
        insertWindow();
    });
    // link.addEventListener("load", function() {
    //     loading(link);
    // });
    link.addEventListener('click', function() {
        reverse(link);
    });
});

function reverse(element) {
    if (active) {
        element.className = "resume";
        element.innerHTML = "Resume Impulse";
        active = false;
        chrome.storage.local.set({'active': active});
    } else {
        element.className = "pause";
        element.innerHTML = "Pause Impulse";
        active = true;
        chrome.storage.local.set({'active': active});
    }
}

function loading(element) {
    if (!active) {
        element.className = "resume";
        element.innerHTML = "Resume Impulse";
    }
}

function clearStorage() {
    chrome.storage.local.clear();
    if (!active) {
        reverse(document.getElementById('pause'));
    }
}


function insertWindow() {

    newPopup('../html/webview.html');

}

function newPopup(url) {
    popupWindow = window.open(url,'popUpWindow',
        'height=300,width=400,left=10,top=10,' +
        'resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,' +
        'location=no,directories=no,status=yes')
}