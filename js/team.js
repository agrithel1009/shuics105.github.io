$(document).ready(function(){
	$('.team_intro').ready(function(){
		$('.team_intro').fadeIn(1000);
	});
	$('.ham').click(function() {
		$('#topmenu').slideToggle(600);
	});
	$('#topmenu a').click(function() {
		$('#topmenu').slideUp(0);
	});
	$('.rightmenu a, #topmenu a').click(function(){
		var target = $(this).attr('href');
		var targetPos = $(target).offset().top;
		$('html,body').animate({scrollTop: targetPos}, 1600);
	});
	$('.bye').ready(function(){
		$('.bye').fadeIn(1000);
	});
});