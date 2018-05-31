function rjson(){
obj = { "table":"winners"};
dbParam = JSON.stringify(obj);
xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table id='SejunTable' class='ha'>"
        for (x in myObj) {
            txt += "<tr><td>" + myObj[x].type + "</td><td>" +
			+ myObj[x].wname + "</td><td>" +
            + myObj[x].author + "</td></tr>";
        }
        txt += "</table>" 
        document.getElementById("jsonTable").innerHTML = txt;
    }
}
xhr.open("GET", "sejun.json", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("x=" + dbParam);
}