$(document).ready(function() {
	$('.menu').click(function() {
		$('#menu').slideToggle(600);
	});
	$('#menu a').click(function() {
		$('#menu').slideUp(0);
	});
	$('a#if').click(function(){
		$('html,body').animate({scrollTop:$('#inform').offset().top},800);
	});
	$('a#it').click(function(){
		$('html,body').animate({scrollTop:$('#intro').offset().top},800);
	});
	$('a#tm').click(function(){
		$('html,body').animate({scrollTop:$('#team').offset().top},800);
	});
	$('a#cr').click(function(){
		$('html,body').animate({scrollTop:$('#curation').offset().top},800);
	});
	$('a#fb').click(function(){
		$('html,body').animate({scrollTop:$('#feedback').offset().top},800);
	});
	$('a#sp').click(function(){
		$('html,body').animate({scrollTop:$('#sponsor').offset().top},800);
	});
	$('.curator > li').ready(function() {
		$('.curator > li').hide();
	});
	$('.curator').click(function() {
		event.preventDefault();
		$(this).find('li').fadeIn(800);
	});
	$('.team-list > li > ul').ready(function() {
		$('.team-list > li > ul').hide();
	});
	$('.team-list > li > a').click(function() {
		event.preventDefault();
		$(this).parent().siblings().find('ul').slideUp();
		$(this).parent().find('ul').slideToggle();
	});
	$('.team-list > li > a').ready(function() {
		$('.curator2').hide();
		$('.scarecrow2').hide();
		$('.robot2').hide();
		$('.lion2').hide();
	});
	$('.curator').hover(function() {
		$('.curator1').toggle();
		$('.curator2').toggle();
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
	$('#team4').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team4_intro').fadeIn(500);
	});
	$('.back').click(function(){
		event.preventDefault();
		$('.team4_intro').hide();
		$('.team-menu').fadeIn(500);
	});
});