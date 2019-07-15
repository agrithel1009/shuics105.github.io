$(document).ready(function() {
	$('.menu').click(function() {
		$('#menu').slideToggle(1200);
	});
	$('#menu a').click(function() {
		$('#menu').slideUp(0);
	});
});