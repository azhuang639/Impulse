console.log('Popup opened');

//calculating weekly, monthly, and lifetime purchases

let lifeSum;
let monthSum;
let saveSum;
let currentDay;
let pastDay;
let pastDayArray;

chrome.storage.local.get(['prices'], function(result) {
    chrome.storage.local.get(['isImpulses'], function(impulseResult) {
        chrome.storage.local.get(['dates'], function(dateResult) {
            lifeSum = 0;
            monthSum = 0;
            saveSum = 0;
            pricesArray = result.prices ? result.prices : [];
            isImpulsesArray = impulseResult.isImpulses ? impulseResult.isImpulses : [];
            datesArray = dateResult.dates ? dateResult.dates : [];
            console.log("prices array is " + pricesArray);
            console.log("dates array is " + datesArray);
            console.log("isImpulses array is " + isImpulsesArray);
            for (i = 0; i < pricesArray.length; i++) {
                if (isImpulsesArray[i] == true) {
                    lifeSum += parseFloat(pricesArray[i]);
                    today = new Date();
                    currentDay = (today.getFullYear()*365) + (today.getMonth()*31) + (today.getDate());
                    pastDayArray = datesArray[i].split("-");
                    pastDay = (parseInt(pastDayArray[0])*365) + (parseInt(pastDayArray[1])*31) + (parseInt(pastDayArray[2]));
                    if (currentDay-pastDay <= 31) {
                        monthSum += parseFloat(pricesArray[i]);
                    }
                } else {
                    saveSum += parseFloat(pricesArray[i]);
                }
            }
            document.getElementById("lifetime").innerHTML = "$" + Number.parseFloat(lifeSum).toFixed(2);
            document.getElementById("saved").innerHTML = "$" + Number.parseFloat(saveSum).toFixed(2);
            document.getElementById("monthly").innerHTML = "$" + Number.parseFloat(monthSum).toFixed(2);
        });
    });
});

let active;
chrome.storage.local.get({active: true}, function(result) {
    active = result.active;
    loading(document.getElementById('pause'));
});

// var active = chrome.storage.local.get('active') ? localStorage.getItem('active') : 'true';


document.addEventListener('DOMContentLoaded', function() {
    // careful with using += to modify innerHTML, it'll remove all event listeners i think

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
        'height=600,width=1100,left=10,top=10,' +
        'resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,' +
        'location=no,directories=no,status=yes')
}