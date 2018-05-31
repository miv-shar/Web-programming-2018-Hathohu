// function rjson(){
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
    // var txt = "";
	// var x;
	// if (this.readyState === 4 && this.status === 200) {
        // var myObj = JSON.parse(this.responseText);
        // txt += "<table id='SejunTable' class='ha'>";
        // for (x in myObj) {
            // txt += "<tr><td>" + myObj[x].type + "</td><td>" +
			// + myObj[x].wname + "</td><td>" +
            // + myObj[x].author + "</td></tr>";
        // }
        // txt += "</table>" 
        // document.getElementById("jsonTable").innerHTML = txt;
    // };
// }
// xhr.open("GET", "sejun.json", true);
// xhr.send();
// }
function rjson(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
		var myObj = JSON.parse(this.responseText);
		var x, txt;
        txt = "<table id='SejunTable' class='ha'><tr>";
		for (name in myObj) {
            table += '<th>' + name + '</th>';
            }
		table+="</tr>"
        for (x in myObj['row']) {
            txt += "<tr><td>" + myObj[x].type + "</td><td>" +
			+ myObj[x].wname + "</td><td>" +
            + myObj[x].author + "</td></tr>";
        }
        txt += "</table>" 
        var myObj = JSON.parse(this.responseText);
        document.getElementById("jsonTable").innerHTML = myObj.name;
		}
	};
	xmlhttp.open("GET", "sejun.json", true);
	xmlhttp.send();
	}