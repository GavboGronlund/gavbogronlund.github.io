
// wwww : 195.74.38.62
var check = 0;

$(document).ready(function(){
$("h1").hover(
function() {
$("h1").stop().animate({"opacity": "0.5"}, "medium");
});

});


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
	            $('#background').css({ "filter": "grayscale(100%) blur("+this.blurRadius+"px)"  }, "medium");
	        }
	    });
	}
	//});

});	

			

