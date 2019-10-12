console.log('Popup opened');

var active = true;

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('pause');
    var clearLink = document.getElementById('clearStorage');
    clearLink.addEventListener('click', function() {
        clearStorage();
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