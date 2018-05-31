/*only allows drop, when nuber of elements does not exceed limitations*/
function allowDrop(ev) {
	if (document.getElementById("contdraginside").childElementCount<document.getElementById("contdraginside").dataset.maxItems  ){
		ev.preventDefault();}
}
/*allows drop without limitations*/
function allowDrop2(ev) {
	ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
/*simpy moves element to othe dragable zone*/
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
/*copys(clones) element into dragable zone*/
function copydrop(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text");
  var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = data +"clone";
  ev.target.appendChild(nodeCopy);
}
/*resets copy drop page, by removing all elements that have been copied*/
function reset(){
	var myNode = document.getElementById("contdraginside");
	myNode.innerHTML = '';
}
/*gets name and size of files draged to the zone*/
function dropHandler(ev) {		
  ev.preventDefault();
  var info = "";
  if (ev.dataTransfer.items) {
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        info += file.name + " " + file.size + "bytes<br>";
      }
    }
  } else {
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      info += ev.dataTransfer.files[i].name + " " + file.size + "bytes<br>";
    }
  } 
  document.getElementById("inf").innerHTML = info;
  removeDragData(ev)
}
function removeDragData(ev) {
  console.log('Removing drag data')

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    ev.dataTransfer.items.clear();
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
  }
}