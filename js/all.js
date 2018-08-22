$(document).ready(function () {
  //header color changed
    $(window).on("scroll", function () {
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if (scrollDistance > 80) {
            $header.addClass("header--colored");
        } else {
            $header.removeClass("header--colored");
        }
    });
  //wow plugin setup
  if (screen.width > 768) {
    new WOW().init();
    };
  //FAB
    $(".fab_icon").click(function () {
      $("html,body").animate({
        scrollTop: 0
      }, 100);
    });
})