// Variables
const $links = $('.menu li a');
const $portfolioToggle = $('[data-toggle="portfolio"]');
const $contactMe = $('[data-toggle="contact-me"]');
const $portfolioClose = $('[data-toggle="portfolio--close"]');
const $portfolioCloseContact = $('[data-toggle="portfolio--close-contact"]');
const $contactClose = $('[data-toggle="contact--close"]');
const $portfolio = $('.work');
const $body = $('body');
const $logo = $('.logo');
const $gif = $('[data-src="gif"]');
const $imgThumb = $('.img--thumb').not('.--full');
const $modalFull = $('.img--thumb.--full');
const $workBody = $('.work');
const $contactContainer = $('.contact-container');
const $contactDataToggle = $('[data-toggle="show--contact"]');

//Functions
function showPortfolio() {
  $portfolio.slideDown();
  $portfolio.find('.work__container').delay(500).fadeIn(1000);
}
function closePortfolio() {
  $portfolio.hide();
  $portfolio.find('.work__container').hide();
}
function showContact() {
  $contactDataToggle.removeClass('--hide');
  $contactContainer.addClass('--slideDown').show();
}
function closeContact() {
  $contactContainer.fadeOut(1000);
  $contactDataToggle.delay(1000).addClass('--hide');
}

//Miscellaneous
$logo.fadeIn(2000);

//Commands
$portfolioToggle.mouseover(function(){
  $body.addClass('gradient-bg');
});

$logo.click(function(){
  $portfolio.slideDown();
  $portfolio.find('.work__container').delay(500).fadeIn(1000);
});

$portfolioToggle.click(function(){
  showPortfolio();
});

$contactMe.click(function(){
  showContact();
});

$contactClose.click(function(){
  closeContact();
});

$portfolioClose.click(function(){
  closePortfolio();
});

$portfolioCloseContact.click(function(){
  showContact();
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

window.onresize = function(event) {
  var $thumbnails = $('.portfolio-thumbnails__thumbnail');
  if ($(window).width() < 960) {
     $thumbnails.addClass('--tablet');
  }
  else {
    $thumbnails.removeClass('--tablet');
  }
};
