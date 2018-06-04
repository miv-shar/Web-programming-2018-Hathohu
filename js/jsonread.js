$("document").ready(function(){
    $.getJSON("sejun.json",function(result){
		$.each(result,function(i, field){
			$("#jsonTable").append(field + "");
			}); 
		});
	});