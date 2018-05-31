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
		x=0;
        txt = "<table id='SejunTable' class='ha'><tr>";
		for (x in myObj) {
            txt += '<th>' + x + '</th>';
            }
		txt+="</tr>"
        for (x in myObj['winners']['row']) {
            txt += "<tr><td>" + myObj['winners']['row'][x].type + "</td><td>"
			+  myObj['winners']['row'][x].wname + "</td><td>" 
			+ myObj['winners']['row'][x].author + "</td></tr>";
        }
        txt += "</table>" 
        document.getElementById("jsonTable").innerHTML = txt;
		}
	};
	xmlhttp.open("GET", "sejun.json", true);
	xmlhttp.send();
	}