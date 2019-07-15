$(document).ready(function() {
	$('.topmenu a').click(function() {
		$(this).addClass('here');
		$(this).parent().siblings().find('a').removeClass('here');
	});
	$('.menu').click(function() {
		$('#menu').slideToggle(600);
	});
	$('#menu a').click(function() {
		$('#menu').slideUp(0);
	});
	$('.curator > li').ready(function() {
		$('.curator > li').hide();
	});
	$('.curator').click(function() {
		event.preventDefault();
		$(this).find('li').slideToggle();
	});
	$('.topic-list > li > ul').ready(function() {
		$('.topic-list > li > ul').hide();
	});
	$('.topic-list > li > a').click(function() {
		event.preventDefault();
		$(this).parent().siblings().find('ul').slideUp();
		$(this).parent().find('ul').slideToggle();
	});
	$('.topic-list > li > a').ready(function() {
		$('.curator2').hide();
		$('.scarecrow2').hide();
		$('.robot2').hide();
		$('.lion2').hide();
	});
	$('.curator').hover(function() {
		$('.curator1').toggle();
		$('.curator2').toggle();
	});
	$('.topic-list > li > a.scarecrow').hover(function() {
		$('.scarecrow1').toggle();
		$('.scarecrow2').toggle();
	});
	$('.topic-list > li > a.robot').hover(function() {
		$('.robot1').toggle();
		$('.robot2').toggle();
	});
	$('.topic-list > li > a.lion').hover(function() {
		$('.lion1').toggle();
		$('.lion2').toggle();
	});
});