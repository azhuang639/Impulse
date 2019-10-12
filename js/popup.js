console.log('Popup opened');

<<<<<<< Updated upstream
//calculating weekly, monthly, and lifetime purchases
var sum = 0.00;
let pricesArray = localStorage.getItem('prices') ?
    JSON.parse(localStorage.getItem('prices')) : [];
localStorage.setItem('prices', JSON.stringify(pricesArray));
pricesArray.forEach(item => {
    sum+= parseFloat(item);
})
document.getElementById("lifetime").innerHTML =
    "$"+sum;


var active = true;
=======
let active;
chrome.storage.local.get({active: true}, function(result) {
    active = result.active;
    loading(document.getElementById('pause'));
});

// var active = chrome.storage.local.get('active') ? localStorage.getItem('active') : 'true';
>>>>>>> Stashed changes

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('pause');
    var clearLink = document.getElementById('clearStorage');
    var showStats = document.getElementById('stats');
    clearLink.addEventListener('click', function() {
        clearStorage();
<<<<<<< Updated upstream
    })
    showStats.addEventListener('click', function() {
        insertWindow();
    })
    link.addEventListener("load", function() {
        loading(link);
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    localStorage.clear();
}


function insertWindow() {

    newPopup('../html/webview.html');

}

function newPopup(url) {
    popupWindow = window.open(url,'popUpWindow',
        'height=300,width=400,left=10,top=10,' +
        'resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,' +
        'location=no,directories=no,status=yes')
=======
    chrome.storage.local.clear();
>>>>>>> Stashed changes
}