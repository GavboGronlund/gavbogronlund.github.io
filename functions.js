
// wwww : 195.74.38.62
var check = 0;


$(document).ready(function(){
	//$('body').click(

	//	function() {
			if(!check){
				check = true;
	    $({blurRadius: 40}).animate({blurRadius: 0}, {
	        duration: 3000,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            $('#background').css({ "filter": "blur("+this.blurRadius+"px)", "-webkit-filter": "blur("+this.blurRadius+"px)"  }, "medium");
	            //$('#background').css({ "filter": "grayscale(100%) blur("+this.blurRadius+"px)", "-webkit-filter": "grayscale(100%) blur("+this.blurRadius+"px)"  }, "medium");
	        }
	    });
	}
	//});

	
	var backgroundDice = Math.floor(Math.random() * 3) + 1;
	console.log(backgroundDice);
	switch(backgroundDice) {
	    case 1:
	        document.getElementById("background").src="gavbo1.jpg";
	        break;
	    case 2:
	        document.getElementById("background").src="gavbo2.jpg";
	        
	        break;
	    case 3:
	        document.getElementById("background").src="gavbo3.jpg";
	        
	        break;

	}
});	

			

