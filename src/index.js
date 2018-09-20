import './sass/styles.scss';
import $ from 'jquery';

$(document).ready(function(){
  $( ".slogan" ).animate({
    opacity: 1,
    left: "-=50",
    height: "show"
  }, 2000, function() {
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 550) {
      $( ".right-bar-1-items" ).animate({
        opacity: 1,
        // left: "-=50",
        height: "show"
      }, 2000, function() {
      });
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 850) {
      $(".aboutPicture").show();
      $(".right-bar-about").show();
      $( ".aboutPicture" ).addClass("animated slideInLeft");
      $( ".right-bar-about").addClass("animated slideInRight delay-3s");
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 850) {
      $(".aboutPicture").show();
      $(".right-bar-about").show();
      $( ".aboutPicture" ).addClass("animated slideInLeft");
      $( ".right-bar-about").addClass("animated slideInRight delay-3s");
    }
  });





  });
