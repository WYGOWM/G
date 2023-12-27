var numClicks = 0;
var homePages = ["index.html", "index2.html", "index3.html"]
var noPages = ["no.html", "no2.html"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function nextPage() {
    window.location.href = "yes.html";
}


function noPage() {
    if (numClicks >= 3) {
        window.location.href = noPages[getRandomInt(2)];
    } else {
        numClicks += 1;
        moveButton();
    }
}

function homePage() {
    window.location.href = homePages[getRandomInt(3)];
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}
