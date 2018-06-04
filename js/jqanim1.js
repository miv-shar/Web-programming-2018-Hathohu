  $( function() {
    $( "button#GO" ).on( "click", function() {
		//1 - hide/show list
		$( "#sh").toggle(1000);
		//2 - big-small
		var oSize = "5px";
		if ($("#bs").css('fontSize') != oSize) {
		 $("#bs").animate({
			fontSize: oSize
		 }, 1000);
        }
		else{
		 $("#bs").animate({
			fontSize: "40px"	
		 },1000)
		}
		//3 - color		
		 // $("#rdble").animate({
			// color: '#fff'
		 // }, 1000);
		if ($("#rdble").css('color') == 'rgb(255, 255, 255)') {
		 $("#rdble").animate({
			color: "#333333"
		 }, 1000);
        }
		else{
		 $("#rdble").animate({
			color: "#fff"
		 },1000)
		}
    });
  }	 );