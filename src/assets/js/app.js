//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
// require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){

	$(function(){
		$('.ba-slider').slick(
		{
			infinite: true,
			slidesToShow: 1,
			dots:true,
			slidesToScroll: 1,
			slide: '.ba-slider__item',
			prevArrow: '.ba-slider__prev',
			nextArrow: '.ba-slider__next'
		});
		$('.bedroom-slider').slick(
		{
			infinite: true,
			slidesToShow: 1,
			dots:true,
			slidesToScroll: 1,
			slide: '.bedroom-slider__item',
			prevArrow: '.bedroom-slider__prev',
			nextArrow: '.bedroom-slider__next'
		});
	});

})(jQuery);






















