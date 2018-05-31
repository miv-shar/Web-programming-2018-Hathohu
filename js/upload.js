function upload(file) {

  var xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    document.getElementById('progress').value = event.loaded/event.total*100;
	};
  }
  xhr.open("POST", "upload", true);
  xhr.send(file);

}
function invokeUpload(){
  document.forms.upload.onsubmit = function() {
		var input = this.elements.myfile;
		var file = input.files[0];
		if (file) {
		  upload(file);
		}
    return false;
	}
}
function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
 }