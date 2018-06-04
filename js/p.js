$(document).ready(function(){
	$.get("poetry.txt", function(data){
		$("#stih").append(data);
	});
});