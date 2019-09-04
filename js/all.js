$(document).ready(function() {
	$('.top').click(function(){
		event.preventDefault();
		$('html,body').animate({scrollTop: 0},1600);
		return false;
	});
	$('.top1').click(function(){
		event.preventDefault();
		$('html,body').css("opacity","0.7");
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
	$(function(){
		var $block = $('#frame'),
			$slide = $block.find('.slide'),
			$ul = $slide.find('ul'),
			_width = $slide.width(),
			_left = _width * -1,
			_animateSpeed = 400;
		$ul.find('li:first').before($ul.find('li:last')).end().css({
			left: _left,
			width: _width * ($ul.find('li').length+1)
		});
		$block.find('a.prev').click(function(){
			$ul.stop(false,true).animate({'left':_left+_width},_animateSpeed,function(){
				$ul.find('li:first').before($ul.find('li:last')).end().css('left',_left);
			});
			return false;
		});
		$block.find('a.next').click(function(){
			$ul.stop(false,true).animate({'left':_left-_width},_animateSpeed, function(){
				$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
			});
			return false;
		});
		$block.find('a').focus(function(){
			this.blur();
		});
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