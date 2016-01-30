jQuery(document).ready(function() {
	$(".nav-ul>li").mouseenter(function(){
	 	$(this).find(".nav-list-box,.nav-signal").stop().fadeIn("slow");
	});
	
	$(".nav-ul>li").mouseleave(function(){
	 	$(this).find(".nav-list-box,.nav-signal").stop().fadeOut("slow");
	});

	setTimeout(function() {
		$(".promotion").slideUp("slow");
	}, 8000);

	$(".promotionup").click(function() {
		$(".promotion").slideUp("slow");
	});
});