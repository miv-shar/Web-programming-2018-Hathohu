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