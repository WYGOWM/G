// import Math;
var numClicks = 0;

function nextPage() {
    window.location.href = "yes.html";
}


function noPage() {
    if (numClicks >= 3) {
        window.location.href = "no.html";
    } else {
        numClicks += 1;
        moveButton();
    }
}

function homePage() {
    window.location.href = "index.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}
