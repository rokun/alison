$(document).ready(function(){
$(".submenu").hover(function() {
	//$(this).css({'z-index' : '10'});
	$(this).addClass("hover").stop()
		.animate({
			
		}, 300);
	
	$(".main_body").addClass("fondo").stop()
		.animate({
			opacity: 0.5
		}, 300);
	
	
	} , function() {
	//$(this).css({'z-index' : '0'});
	$(this).removeClass("hover").stop()
		.animate({
			
		}, 400);
	$(this).find("img").addClass("hover").stop()
		.animate({
			
		}, 400);
	
	$(".main_body").addClass("fondo").stop()
	.animate({
		opacity: 1
	}, 400);
});


$(".heel").click(function() {
	//$(this).css({'z-index' : '10'});
	$(this).addClass("hover").stop()
		.animate({
		}, 300);
	
	$(".displayface").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px',
			'display': 'block'
		}, 300);
	
	} , function() {
	//$(this).css({'z-index' : '0'});
	$(this).removeClass("hover").stop()
		.animate({
			width: '280px',
			height: '560px',
			'margin-left': '0',
			'margin-top': '0',
			'margin-right': '40px'
		}, 400);
	$(this).find("img").addClass("hover").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 400);
	$(this).find("h2").addClass("hover").stop()
		.animate({
			'margin-top': '0px'
		}, 400);
	$(".animate2").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 400);
	$(".animate2").css({ opacity: 1 });
	$(".welcome_box").addClass("fondo").stop()
	.animate({
		width: '280px',
		height: '560px'
	}, 400);
	$(".animation_body").addClass("fondo").stop()
	.animate({
		opacity: 1
	}, 400);
});


//Larger thumbnail preview 

/*$(".animate1").hover(function() {
	//$(this).css({'z-index' : '10'});
	$(this).addClass("hover").stop()
		.animate({
			width: '380px',
			height: '750px',
			'margin-left': '-40px',
			'margin-right': '0px',
			'margin-top': '-50px'
		}, 300);
	$(this).find("img").addClass("hover").stop()
		.animate({
			width: '380px',
			height: '750px'
		}, 300);
	$(this).find("h2").addClass("hover").stop()
		.animate({
			'margin-top': '45px'
		}, 300);
	$(".animate2").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 300);
	$(".animate2").css({ opacity: 0.7 });
	$(".welcome_box").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 300);
	
	} , function() {
	//$(this).css({'z-index' : '0'});
	$(this).removeClass("hover").stop()
		.animate({
			width: '280px',
			height: '560px',
			'margin-left': '0',
			'margin-top': '0',
			'margin-right': '40px'
		}, 400);
	$(this).find("img").addClass("hover").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 400);
	$(this).find("h2").addClass("hover").stop()
		.animate({
			'margin-top': '0px'
		}, 400);
	$(".animate2").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 400);
	$(".animate2").css({ opacity: 1 });
	$(".welcome_box").addClass("fondo").stop()
	.animate({
		width: '280px',
		height: '560px'
	}, 400);
});*/







$(".animate2").hover(function() {
	//$(this).css({'z-index' : '10'});
	$(this).addClass("hover").stop()
		.animate({
			width: '380px',
			height: '750px',
			'margin-left': '-90px',
			'margin-right': '0px',
			'margin-top': '-50px'
		}, 300);
	$(this).find("img").addClass("hover").stop()
		.animate({
			width: '380px',
			height: '750px'
		},300);
	$(this).find("h2").addClass("hover").stop()
		.animate({
			'margin-top': '45px'
		}, 300);
	$(".animate1").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 300);
	$(".animate1").css({ opacity: 0.7 });
	$(".animation_body").addClass("fondo").stop()
		.animate({
			opacity: .8,
			'background-color': '#000'
	}, 400);
	$(".welcome_box").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 300);
	
	} , function() {
	//$(this).css({'z-index' : '0'});
	$(this).removeClass("hover").stop()
		.animate({
			width: '280px',
			height: '560px',
			'margin-left': '0',
			'margin-right': '0',
			'margin-top': '0'
		}, 400);
	$(this).find("img").addClass("hover").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 400);
	$(this).find("h2").addClass("hover").stop()
		.animate({
			'margin-top': '0px'
		}, 400);
	$(".animate1").addClass("fondo").stop()
		.animate({
			width: '280px',
			height: '560px'
		}, 400);
	$(".animate1").css({ opacity: 1 });
	$(".welcome_box").addClass("fondo").stop()
	.animate({
		width: '280px',
		height: '560px'
	}, 400);
	$(".animation_body").addClass("fondo").stop()
	.animate({
		opacity: 1
	}, 400);
});

});


