function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('poetry').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('poetry.txt');