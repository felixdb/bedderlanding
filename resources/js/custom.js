//@prepros-prepend libs/bootstrap.min.js
//@prepros-prepend libs/easing.js
//@prepros-prepend libs/slick.min.js
//@prepros-prepend libs/jquery.matchHeight.js
//@prepros-prepend libs/wow.min.js

 $('#hero-slider').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);    
});
$('#hero-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);    
});
$('#hero-slider').slick({
   autoplay: true,
   autoplaySpeed: 10000,
   arrows:false,
   dots: false,
   fade: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: false,
    pauseOnHover:false,
    pauseOnDotsHover: false,     
});
function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
            $this.removeClass($animationType);
        });
    });
}


