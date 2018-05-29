function upload(file) {

  var xhr = new XMLHttpRequest();
  xhr.upload.onprogress = function(event) {
    document.getElementById('progress').value = event.loaded/event.total*100;
  }
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log("success");
    } else {
      log("error " + this.status);
    }
  };
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