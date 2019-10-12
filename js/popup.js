console.log('Popup opened');

var active = true;

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('pause');
    var clearLink = document.getElementById('clearStorage');
    var showStats = document.getElementById('stats');
    clearLink.addEventListener('click', function() {
        clearStorage();
    })
    showStats.addEventListener('click', function() {
        insertWindow();
    })
    link.addEventListener("load", function() {
        loading(link);
    });
    link.addEventListener('click', function() {
        reverse(link);
    });
});

function reverse(element) {
    if (active) {
        element.className = "resume";
        element.innerHTML = "Resume Impulse";
        active = false;
    } else {
        element.className = "pause";
        element.innerHTML = "Pause Impulse";
        active = true;
    }
}

function loading(element) {
    if (!active) {
        element.className = "resume";
        element.innerHTML = "Resume Impulse";
    }
}

function clearStorage() {
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
}