/*
	Simple function which displays an headband at the top of the html page, prettyer than use alert(). 

	!! jQuery's import is required in the page's <head> !!

	Yous should put this function in your <head>, your script file, or at the top of your <body>

	The call has this typical look :  
	fancyAlert({bgColor:"background color", txtColor:"text color", height:"height", fontSize:"font size", length: duration in seconds, msg="your message"})
	For example :
	
	fancyAlert({bgColor:"#FE3123", txtColor:"#222", height:"85px", fontSize:"20px", length: 3, msg="Hi everybody !"})

	©BDeliers, février 2017
	http://bdeliers.com	
*/

function fancyAlert (args) {
	var length = parseInt(args.length) * 1000;

	var fancyAlert = $("<span class=\"fancyAlert\" style=\"display:none; text-align: center; top: 0; left: 0; position: fixed; z-index: 10000; margin-left: 15px;\" ></span>");

	fancyAlert.css("background-color", args.bgColor);
	fancyAlert.css("height", args.height);
	fancyAlert.css("width", $("body").css("width"));
	fancyAlert.css("line-height", args.height);
	fancyAlert.css("color", args.txtColor);
	fancyAlert.css("font-size", args.fontSize);
	fancyAlert.text(args.msg);

	$("body").prepend(fancyAlert);
	fancyAlert.fadeIn(700);

	fancyAlert.delay(length).fadeOut(500, function(){fancyAlert.remove()});
}