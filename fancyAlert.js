/*
	Simple function which displays an headband at the top of the html page, prettyer than use alert(). 

	!! jQuery's import is required in the page's <head> !!

	Yous should put this function in your <head>, your script file, or at the top of your <body>

	The call has this typical look :  
	fancyAlert({bgColor:"background color", txtColor:"text color", height:"height", fontSize:"font size", duration: duration in seconds, msg:"your message"})
	For example :
	
	fancyAlert({bgColor:"#FE3123", txtColor:"#222", height:"85px", fontSize:"20px", duration: 3, msg:"Hi everybody !"})

	©BDeliers, février 2017
	http://bdeliers.com	
*/

function fancyAlert (args) {
	var duration = parseInt(args.duration) * 1000;

	var fancyAlert = $("<span class=\"fancyAlert\" style=\"display:none; text-align: center; position: fixed; z-index: 10000;\" ></span>");

	fancyAlert.css({"background-color":args.bgColor, "height":args.height, "width":$("body").css("width"), \
			"line-height":args.height, "color":args.txtColor, "font-size":args.fontSize});
	fancyAlert.text(args.msg);

	$("body").prepend(fancyAlert);
	fancyAlert.fadeIn(700);

	fancyAlert.delay(duration).fadeOut(500, function(){fancyAlert.remove()});
}
