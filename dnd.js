function allowDrop(ev) {
	if (document.getElementById("contdraginside").childElementCount<document.getElementById("contdraginside").dataset.maxItems  ){
		ev.preventDefault();}
}
function allowDrop2(ev) {
	ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function copydrop(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = data +"clone";
  ev.target.appendChild(nodeCopy);
}
function reset(){
var myNode = document.getElementById("contdraginside");
myNode.innerHTML = '';
}