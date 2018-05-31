function populatePre(url) {
    "use strict";
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById("poetry").textContent = this.responseText;
    };
    xhr.open("GET", url, true);
    xhr.send();
}
populatePre("poetry.txt");