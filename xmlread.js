doc=HUGOWINTBL.XMLDocument;
if(doc.readyState == 4) DisplayError();
else doc.onreadystatechange = DisplayError;
function DisplayError(){
    if(doc.readyState != 4) return;
    if(doc.parseError.errorCode){
        mess =
        "parseError.errorCode: " + doc.parseError.errorCode + "\n" +
        "parseError.filepos: " + doc.parseError.filepos + "\n" +
        "parseError.line: " + doc.parseError.line + "\n" +
        "parseError.linepos: " + doc.parseError.linepos + "\n" +
        "parseError.reason: " + doc.parseError.reason + "\n" +
        "parseError.srcText: " + doc.parseError.srcText + "\n" +
        "parseError.url: " + doc.parseError.url + "\n" +
        "";
        alert(mess);
    }
}