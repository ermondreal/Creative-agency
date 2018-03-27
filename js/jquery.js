(function($) {

$(document).ready(function() {

  var interval;
  var initialWidth = 0;
  var width = 1100;
  var pause = 3000;
  var animationSpeed = 1000;
  var currentSlide = 1;

  var $slider = $('#testimonial-content');
  var $sliderContainer = $slider.find('.slides');
  var $slides = $sliderContainer.find('.slide');

    interval = setInterval(function () {
      $sliderContainer.animate({'margin-left': '-=' + width}, animationSpeed);
          
          currentSlide++;
          if(currentSlide === $slides.length) {
            $sliderContainer.animate({'margin': + initialWidth}, animationSpeed);
            currentSlide = 1;
            console.log(currentSlide);
          }
        
    }, pause);

});

$(document).ready(function () {
  $('#toggle-click').on('click', function () {
    $('.title, .description').slideToggle();
  });
});

$(window).scroll(function () {
	if ($(document).scrollTop() > 1) {
		$('div.center-nav').addClass('sticky');
		$('nav#navbar').css('padding', '0');
		$('span.nav-btn').css('top', '15px');
	}else{
		$('div.center-nav').removeClass('sticky');
		$('nav#navbar').css('padding', '40px');
		$('span.nav-btn').css('top', '40px');
	}
});

$(window).load(function () {
	if ($(window).width() <=1200 ) {
		$('ul.show').css('display', 'none');
	}
});

$(window).resize(function () {
	if ($(window).width() <= 1200 ) {
		$('ul.show').css('display', 'none');
	}else{
		$('ul.show').css('display', 'block');
	}
});

$(document).ready(function () {
  $('span.nav-btn').click(function () {
    $('ul.show').slideToggle();
    console.log("ss");
  });
});

}) (jQuery)