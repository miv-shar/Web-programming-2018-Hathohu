$("document").ready(function(){
    $.getJSON(".json",function(result){
		$.each(result,function(i, field){
			$("#jsonTable").append(field + "");
			}); 
		});
	});