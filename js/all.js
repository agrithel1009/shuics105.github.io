$(document).ready(function() {
	$('.top').click(function(){
		event.preventDefault();
		$('html,body').animate({scrollTop: 0},1600);
		return false;
	});
	$('.ham').click(function() {
		$('#topmenu').slideToggle(600);
	});
	$('#topmenu a').click(function() {
		$('#topmenu').slideUp(0);
	});
	$('.rightmenu a, #topmenu a').click(function(){
		event.preventDefault();
		var target = $(this).attr('href');
		var targetPos = $(target).offset().top;
		$('html,body').animate({scrollTop: targetPos}, 1600);
	});
	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		$('.rightmenu a').each(function(){
			var target = $(this).attr('href');
			var targetPos = $(target).offset().top;
			var targetHeight = $(target).outerHeight();
			if(targetPos <= scrollPos && (targetPos+targetHeight) > scrollPos){
				$('.rightmenu a').removeClass('here');
				$(this).addClass('here');
			}
		});
	});
	$('#inform a').click(function(){
		event.preventDefault();
		$('html,body').animate({scrollTop: $('#intro').offset().top}, 1800);
		return false;
	});
	$('.team-menu > ul > a').click(function() {
		event.preventDefault();
		$(this).parent().siblings().find('li').css("opacity","0");
		$(this).parent().find('li').css("opacity","1");
	});
	$('.curator2, .scarecrow2, .robot2, .lion2').ready(function() {
		$('.scarecrow2, .robot2, .lion2').hide();
	});
	$('.scarecrow').hover(function() {
		$('.scarecrow1').toggle();
		$('.scarecrow2').toggle();
	});
	$('.robot').hover(function() {
		$('.robot1').toggle();
		$('.robot2').toggle();
	});
	$('.lion').hover(function() {
		$('.lion1').toggle();
		$('.lion2').toggle();
	});
});