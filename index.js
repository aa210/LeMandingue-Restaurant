$(document).ready(function() {
    

$(".nav-top").fadeIn(1000, function()
    {
 /*$("").fadeIn(1000); */
  $(".orderAd").animate({'opacity':'1'},1000).slideDown(3000); 
});
$(function() {
    $(window).scroll( function(){  
        $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it 
            bottom_of_window = bottom_of_window + 250;  
            if( bottom_of_window > bottom_of_object ){  
                //$(this).animate({'opacity':'1'},400);
 $(this).animate({'opacity':'1'},400).slideDown(3000);       
            }
        }); 
    });
});
/*
$(".title").animate({'opacity':'1'}, 500, function()
    {
$(function() {
    $(window).on("scrollstart",function(){ 
        $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            //Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  
            bottom_of_window = bottom_of_window + 250;  
            if( bottom_of_window > bottom_of_object ){   
                $(this).animate({'opacity':'1'},400);       
            }
        }); 
    });
});*/
/*$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});*/
 });
