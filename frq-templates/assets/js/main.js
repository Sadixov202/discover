$(document).ready(function () {
  $('select').material_select();



  $(".user_tab_settings").click(function (e) {
    e.stopPropagation();
    $(".settings_submenu").fadeToggle(300);
  })
  $("body").click(function () {
    $(".settings_submenu").fadeOut(300);
  });

  $(".settings_submenu").click(function (e) {
    e.stopPropagation();
  });

  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  $(".information_company .list_inner").last().css("border", "0");
  $(".information_company .company_tour_page .item_result").last().css("border", "0");

  $(".select_icon").click(function (e) {
    e.stopPropagation();
    $(this).find(".dropdown_iconbox").slideToggle(100);

  })

  $(".stars").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".loc_ul").slideUp(300);
    $(".hot_ul").slideUp(300);
    $(".sub_ul").slideUp(300);
    $(".val_ul").slideUp(300);
    $(".selec_ul").fadeOut(300);
    $(".star_ul").slideToggle(300);
  });


  $(".otel_stars").click(function (e) {
    e.preventDefault();
    $(".otel_star_ul").slideToggle(300);
  });

  $("body").click(function () {
    $(".star_ul").slideUp(300);
  });
  $(".star_ul").click(function (e) {
    e.stopPropagation();
  });

  $("body").click(function () {
    $(".dropdown_iconbox").hide();
  });

  // $(".chat_box_inner").mCustomScrollbar("scrollTo", "bottom", {

  // });

  $(".li_icon .more_").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".star_ul").slideUp(300);
    $(".hot_ul").slideUp(300);
    $(".loc_ul").slideUp(300);
    $(".val_ul").slideUp(300);
    $(".selec_ul").fadeOut(300);
    $(".s_star_ul").fadeOut(300);
    $(".sub_ul").fadeToggle(300);
  })
  $("body").click(function () {
    $(".sub_ul").fadeOut(300);
  });
  $(".sub_ul").click(function (e) {
    e.stopPropagation();
  });

  $(".currency .valute").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".star_ul").slideUp(300);
    $(".hot_ul").slideUp(300);
    $(".loc_ul").slideUp(300);
    $(".sub_ul").slideUp(300);
    $(".selec_ul").fadeOut(300);
    $(".s_star_ul").fadeOut(300);
    $(".val_ul").fadeToggle(300);

  })
  $("body").click(function () {
    $(".val_ul").fadeOut(300);
  });
  $(".val_ul").click(function (e) {
    e.stopPropagation();
  });

  $(".main_ul  .location").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".star_ul").slideUp(300);
    $(".hot_ul").slideUp(300);
    $(".sub_ul").slideUp(300);
    $(".val_ul").slideUp(300);
    $(".selec_ul").fadeOut(300);
    $(".loc_ul").slideToggle(300);
  })
  $("body").click(function () {
    $(".loc_ul").slideUp(300);
  });
  $(".loc_ul").click(function (e) {
    e.stopPropagation();
  });

  // $(".main_ul .stars").click(function (e) {
  //   event.preventDefault();
  //   e.stopPropagation();
  //   $(".star_ul").slideToggle(300);
  // });

  // $("body").click(function () {
  //   $(".star_ul").slideUp(300);
  // });
  // $(".star_ul").click(function (e) {
  //   e.stopPropagation();
  // });

  //Reklam banner//
    $(".reklam_blog").last().css("margin-bottom","0")


    

  $(".hotels").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".star_ul").slideUp(300);
    $(".loc_ul").slideUp(300);
    $(".sub_ul").slideUp(300);
    $(".val_ul").slideUp(300);
    $(".selec_ul").fadeOut(300);
    $(".hot_ul").slideToggle(300);
  })
  $("body").click(function () {
    $(".hot_ul").slideUp(300);
  });
  $(".hot_ul").click(function (e) {
    e.stopPropagation();
  });

  


  $("header .burger i").click(function () {
    $(".mobile_menu").css("left", "0");
    $(".overlay").css("opacity", ".6");
    $(".overlay").css("z-index", "99");
  })
  $(".header .burger i").click(function () {
    $(".mobile_menu").css("left", "-100%");
    $(".overlay").css("opacity", "0");
    $(".overlay").css("z-index", "0");
  });

  $(".c_valute").click(function (e) {
    e.preventDefault();
    $(".sec_ul").slideToggle(500);
    if ($(".c_valute .pull-right").text() == "expand_more") {
      $(".c_valute .pull-right").text("expand_less")
    } else {
      $(".c_valute .pull-right").text("expand_more")
    }
  })



  $(" #hotel_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });

  $(" #houses_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });

  $(" #restauran_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });
  $(" #enter_tours").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });
  $(" #tours_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });
  $(" #betwen_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: true,
    margin: 20,
    navText: ['<i class="material-icons">keyboard_arrow_left</i>', '<i class="material-icons">keyboard_arrow_right</i>'],
  });

  $(" #events_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });

  $(" #trans_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });


  $(" #tur_pak_sld").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    pagination: false,
    autoplay: true,
    autoPlayTimeOut: 300,
    dots: false,
    margin: 20,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1,
        nav: !1
      },
      700: {
        items: 2,
        nav: !1
      },
    }
  });

  var navHeader = document.querySelectorAll("footer .up .main_ul h2");
  var i;

  for (i = 0; i < navHeader.length; i++) {
    navHeader[i].addEventListener("click", function () {

      if (window.innerWidth < 992) {

        this.classList.toggle("color");

        var menu = this.nextElementSibling;

        if (menu.style.maxHeight) {
          menu.style.maxHeight = null;
        } else {
          menu.style.maxHeight = menu.scrollHeight + "px";
        }
      }

    });
  }


  $(".selec_loc").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".selec_ul").fadeToggle(300);
    $(".s_star_ul").fadeOut(300);
    $(".sub_ul").fadeOut(300);
    $(".val_ul").fadeOut(300);
  })
  $("body").click(function () {
    $(".selec_ul").fadeOut(300);
  });
  $(".selec_ul").click(function (e) {
    e.stopPropagation();
  });


  $(".selec_stars").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".s_star_ul").fadeToggle(300);
    $(".selec_ul").fadeOut(300);
    $(".sub_ul").fadeOut(300);
    $(".val_ul").fadeOut(300);


  })
  $("body").click(function () {
    $(".s_star_ul").fadeOut(300);
  });
  $(".s_star_ul").click(function (e) {
    e.stopPropagation();
  });


  $("#m_p a").click(function (e) {
    e.preventDefault();
    $(".map_pop").css("opacity", ".6");
    $(".map_pop").show();
    $(".map_box").show();
  })
  $(".map_box .close_map").click(function () {
    $(".map_pop").css("opacity", "0");
    $(".map_pop").hide();
    $(".map_box").hide();
  });

  $('#aniimated-thumbnials').lightGallery({
    thumbnail: true
  });

  $(".cav_box ").click(function () {
    if ($(".cav_box i").text() == "favorite_border") {
      $(".cav_box i").text("favorite");
      $(".cav_box").css("background-color", "#ff7800");
      $(".cav_box i").css("color", "white");
      $(".cav_box span").css("color", "white");
    } else {
      $(".cav_box i").text("favorite_border");
      $(".cav_box").css("background-color", "#f4f4f4");
      $(".cav_box i").css("color", "#ff7800");
      $(".cav_box span").css("color", "#ff7800");
    }
  })


  $(".favorit_box ").click(function () {
    if ($(".favorit_box i").text() == "favorite_border") {
      $(".favorit_box i").text("favorite");
      $(".favorit_box").css("background-color", "#ff7800");
      $(".favorit_box i").css("color", "white");
      $(".favorit_box span").css("color", "white");
    } else {
      $(".favorit_box i").text("favorite_border");
      $(".favorit_box").css("background-color", "#f4f4f4");
      $(".favorit_box i").css("color", "#ff7800");
      $(".favorit_box span").css("color", "#ff7800");
    }
  })

  $(".main_info .loc_right").last().css("border-bottom", "none");

  $(".hotel_detil .more_b").click(function (e) {
    e.preventDefault();
    $(this).siblings(".service_list").find(".passive").toggleClass("active");
  })

  $(".comm_sec .more_com").click(function (e) {
    e.preventDefault();
    $(this).siblings(".comments_area").find(".passive").slideToggle(300);
  })

  $(".comment_slide .more_com").click(function (e) {
    e.preventDefault();
    $(this).parent(".comments_area").find(".passive").slideToggle(300);
  })

  $(".blog_sec .more_com").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().find(".passive").slideToggle(300);
  })
  $(".oth_news  .more_com").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().find(".passive").slideToggle(300);
  })
  $(".others_sec .more_cav").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().find(".passive").slideToggle(300);
  })


  $(".done .li_box .add_place").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".done .li_box .add_place").parent().siblings(".add_list").addClass("hide_box");
    $(this).parent().siblings(".add_list").removeClass("hide_box")
    $(this).parent().siblings(".add_list").fadeIn(300);
    if ($(this).parent().siblings(".add_list").innerHeight() >= 369) {
      $(this).parent().siblings(".add_list").css("overflow-y", "scroll");
      $(this).parent().siblings(".add_list").css("height", "369");
    }
  })

  $("body").click(function () {
    $(".done .add_list").fadeOut(300);
  });
  $(".done .add_list").click(function (e) {
    e.stopPropagation();
  });



  $(".li_box").hover(function () {
    $(this).siblings(".hover_box").addClass("active_hover");
  }, function () {
    $(this).siblings(".hover_box").removeClass("active_hover");
  });







  if ($(".loc_ul").innerHeight() >= 233) {
    //find the img in this div and hide it
    $(".loc_ul").css("overflow-y", "scroll");
    $(".loc_ul").css("height", "233px");
  }

  if ($(".hot_ul").innerHeight() >= 233) {
    //find the img in this div and hide it
    $(".hot_ul").css("overflow-y", "scroll");
    $(".hot_ul").css("height", "233px");
  }



  $(".filter_list .left .style a").click(function (e) {
    e.preventDefault();
    $(this).parent().find(".hidden").removeClass("hidden")
  })

 

  $(".more_tours a").click(function (e) {
    e.preventDefault();

    $(this).parent().parent().siblings(".none").slideToggle(300)
  })
});
$("header .right-menu .li").last().css("margin-right", "0");


$(function () {
  $('#datetimepicker5').datetimepicker({
    format: 'DD/MM/YYYY'
  });
});
$(function () {
  $('#datetimepicker4').datetimepicker({
    format: 'DD/MM/YYYY'
  });
});

////Star hover effect////

/* 1. Visualizing things on Hover - See next part for action on click */
$('#stars li').on('mouseover', function () {
  var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

  // Now highlight all the stars that's not after the current hovered star
  $(this).parent().children('li.star').each(function (e) {
    if (e < onStar) {
      $(this).addClass('hover');
    } else {
      $(this).removeClass('hover');
    }
  });

}).on('mouseout', function () {
  $(this).parent().children('li.star').each(function (e) {
    $(this).removeClass('hover');
  });
});


/* 2. Action to perform on click */
$('#stars li').on('click', function () {
  var onStar = parseInt($(this).data('value'), 10); // The star currently selected
  var stars = $(this).parent().children('li.star');

  for (i = 0; i < stars.length; i++) {
    $(stars[i]).removeClass('selected');
  }

  for (i = 0; i < onStar; i++) {
    $(stars[i]).addClass('selected');
  }

  // JUST RESPONSE (Not needed)


});
///////////////////////////////////////////////////////////////
$("body").on('click touchend', function (event){
  $(".loc_ul").slideUp(300);
  $(".star_ul").slideUp(300);
  $(".hot_ul").slideUp(300);
 });

$(function () {
  OverlayScrollbars(document.querySelectorAll('.form_section'), {});
  OverlayScrollbars(document.querySelectorAll('.route_plan'), {});
  OverlayScrollbars(document.querySelectorAll('.chat_box_inner'), {});

});