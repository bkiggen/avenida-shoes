import './sass/styles.scss';
import $ from 'jquery';

$(document).ready(function(){
  $( ".slogan" ).animate({
    opacity: 1,
    // left: "-=50",
    height: "show"
  }, 2000, function() {
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $( ".right-bar-1-items" ).animate({
        opacity: 1,
        // left: "-=50",
        height: "show"
      }, 2000, function() {
      });
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $(".shopNowButton").addClass("animated pulse infinite");
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
      $(".aboutPicture").show();
      $(".right-bar-about").show();
      $( ".aboutPicture" ).addClass("animated slideInLeft");
      $( ".right-bar-about").addClass("animated slideInRight delay-3s");
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 1500) {
      $(".right-bar-2-items").show();
      $("#thing1").addClass("animated rotateInDownLeft")
      $("#thing2").addClass("animated rotateInDownRight")
      $("#thing3").addClass("animated rotateInDownRight")
      $("#thing4").addClass("animated rotateInUpLeft")
      $("#thing5").addClass("animated rotateInUpRight")
    }
  });

$(window).scroll(function(){
  if ($(this).scrollTop() > 1700) {
  $(".user1").show();
  $(".user1").addClass("animated slideInUp")
}

  if ($(this).scrollTop() > 2200) {
    $(".user2").show();
  $(".user2").addClass("animated slideInUp")
  }
  if ($(this).scrollTop() > 2200) {
    $(".user3").show();
  $(".user3").addClass("animated slideInUp")
  }

  // if ($(this).scrollTop() < 1000) {
  // $(".socialMediaUserSection").hide();
  // $(".user1").removeClass("animated slideInUp delay-3s")
  // $(".user2").removeClass("animated slideInUp delay-4s")
  // $(".user3").removeClass("animated slideInUp delay-5s")
  // }
});

  // $(window).scroll(function(){
  //   if ($(this).scrollTop() > 2000) {
  //     $(".right-bar-2-items").show();
  //     $(".socialMediaSection").show()
  //   }
  // });





  });
