function loadXMLDoc() {
  var xhr = new XMLHttpRequest(); 	
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };    
  
  xhr.open("GET", "hugo-winners.xml", true);
  xhr.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Type</th><th>Works Name</th><th>Author</th></tr>";
  var x = xmlDoc.getElementsByTagName("row");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("wname")[0].childNodes[0].nodeValue +
    "</td><td>" +
	x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("HugoTable").innerHTML = table;
}