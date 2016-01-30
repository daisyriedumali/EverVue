$(function() {
	$(window).scroll(function(){
	  if($(document).scrollTop()>=60){
		$(".navbar-default").css({background : "#fff"});
		$(".navlinks li a").css({color: "#333"});
	  }else{
	    $(".navbar-default").css({background : "none"});
	    $(".navlinks li a").css({color: "#fff"});
	  }
	});
});
