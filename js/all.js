$(document).ready(function() {
	$('.menu').click(function() {
		$('#menu').slideToggle(600);
	});
	$('#menu a').click(function() {
		$('#menu').slideUp(0);
	});
	$('a#if').click(function(){
		$('html,body').animate({scrollTop:$('#inform').offset().top},800);
		return false;
	});
	$('a#it').click(function(){
		$('html,body').animate({scrollTop:$('#intro').offset().top},800);
		return false;
	});
	$('a#tm').click(function(){
		$('html,body').animate({scrollTop:$('#team').offset().top},800);
		return false;
	});
	$('a#cr').click(function(){
		$('html,body').animate({scrollTop:$('#curation').offset().top},800);
		return false;
	});
	$('a#fb').click(function(){
		$('html,body').animate({scrollTop:$('#feedback').offset().top},800);
		return false;
	});
	$('a#sp').click(function(){
		$('html,body').animate({scrollTop:$('#sponsor').offset().top},800);
		return false;
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
	$('#team1').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team1_intro').siblings().hide();
		$('.team1_intro').fadeIn(500);
	});
	$('#team2').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team2_intro').siblings().hide();
		$('.team2_intro').fadeIn(500);
	});
	$('#team3').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team3_intro').siblings().hide();
		$('.team3_intro').fadeIn(500);
	});
	$('#team4').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team4_intro').siblings().hide();
		$('.team4_intro').fadeIn(500);
	});
	$('#team5').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team5_intro').siblings().hide();
		$('.team5_intro').fadeIn(500);
	});
	$('#team6').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team6_intro').siblings().hide();
		$('.team6_intro').fadeIn(500);
	});
	$('#team7').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team7_intro').siblings().hide();
		$('.team7_intro').fadeIn(500);
	});
	$('#team8').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team8_intro').siblings().hide();
		$('.team8_intro').fadeIn(500);
	});
	$('#team9').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team9_intro').siblings().hide();
		$('.team9_intro').fadeIn(500);
	});
	$('#team10').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team10_intro').siblings().hide();
		$('.team10_intro').fadeIn(500);
	});
	$('#team11').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team11_intro').siblings().hide();
		$('.team11_intro').fadeIn(500);
	});
	$('#team12').click(function(){
		event.preventDefault();
		$('.team-menu').hide();
		$('.team12_intro').siblings().hide();
		$('.team12_intro').fadeIn(500);
	});
	$('.back').click(function(){
		event.preventDefault();
		$(this).parent().parent().hide();
		$('.team-menu').fadeIn(500);
	});
});