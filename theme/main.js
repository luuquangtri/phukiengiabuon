
// scroll top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 154) {
      $('header .nav').addClass('fixed');
    } else {
      $('header .nav').removeClass('fixed');
    }
  });
  $(function() {
    var pgurl = window.location.href.substr(window.location.href
        .lastIndexOf("/") + 1);
    $(".navbar-nav li a,#mobile-menu li a").each(function() {
      if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
        $(this).addClass("active-2");
    })
  });
});
jQuery(document).ready(function ($) {
  $("#mobile-menu").mobileMenu({
      MenuWidth: 250,
      SlideSpeed: 300,
      WindowsMaxWidth: 767,
      PagePush: true,
      FromLeft: true,
      Overlay: true,
      CollapseMenu: true,
      ClassName: "mobile-menu"
  });
});       

$(document).ready(function(){
  if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }
})
  

