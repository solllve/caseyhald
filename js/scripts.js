// Variables
var $links = $('.menu li a');
var $portfolioToggle = $('[data-toggle="portfolio"]');
var $contactMe = $('[data-toggle="contact-me"]');
var $portfolioClose = $('[data-toggle="portfolio--close"]');
var $portfolio = $('.work');
var $body = $('body');
var $logo = $('.logo');
var $gif = $('[data-src="gif"]');
var $imgThumb = $('.img--thumb').not('.--full');
var $modalFull = $('.img--thumb.--full');
var $workBody = $('.work');

$logo.fadeIn(2000);

$portfolioToggle.mouseover(function(){
  $body.addClass('gradient-bg');
});

$logo.click(function(){
  $portfolio.slideDown();
  $portfolio.find('.work__container').delay(500).fadeIn(1000);
});

$portfolioToggle.click(function(){
  $portfolio.slideDown();
  $portfolio.find('.work__container').delay(500).fadeIn(1000);
});

$contactMe.click(function(){
  $('[data-toggle="show--contact"]').removeClass('--hide');
  $('.contact-container').addClass('--slideLeft');
});

$portfolioClose.click(function(){
  $portfolio.slideUp();
  $portfolio.find('.work__container').hide();
});

$links.mouseout(function(){
  $body.removeClass('gradient-bg');
});

$(window).scroll(function() {
   var hT = $('[data-toggle="load_gifs"]').offset().top,
       hH = $('[data-toggle="load_gifs"]').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $gif.fadeIn(1000);
   }
   else {
     $gif.hide();
   }
});

$imgThumb.mouseover(function(e){
  var $this = $(this);
  $this.addClass('--floating');
});

$imgThumb.mouseout(function(e){
  var $this = $(this);
  $this.removeClass('--floating');
});

$imgThumb.click(function(e){
  var $this = $(this);
  var $imgURL = $this.find('img').attr('src');
  var $modal = $('.img--thumb.--full');
  $modal.removeClass('--hide');
  $modal.html('<img src="'+ $imgURL +'" />');
  $workBody.addClass('blur');
});

$modalFull.click(function(e){
  var $this = $(this);
  $this.addClass('--hide');
  $this.html('');
  $workBody.removeClass('blur');
});
