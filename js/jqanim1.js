  $( function() {
    $( "button#GO" ).on( "click", function() {
		//1 - hide/show list
		$( "#sh").toggle(1000);
		//2 - big-small
		var oSize = "10px";
		if ($("#bs").css('fontSize') != oSize) {
		 $("#bs").animate({
			fontSize: oSize,
			backgroundColor: gray
		 }, 1000);
        }
		else{
		 $("#bs").animate({
			fontSize: "40px",
			backgroundColor: white		
		 },1000)
		}
		//3 - 
		
    });
  }	 );