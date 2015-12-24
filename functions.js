
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

	
	var backgroundDice = Math.floor(Math.random() * 11) + 1;
	console.log(backgroundDice);
	document.getElementById("background").src="images/gavbo"+backgroundDice+".jpg";
});	




			

