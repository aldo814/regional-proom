// 화면확대축소
var nowZoom = 100;
var zoomControl = {
    zoomOut: function () {
        nowZoom = nowZoom - 5;
        if (nowZoom <= 90) nowZoom = 90;
        zoomControl.zooms();
        $('.zoom-text > a').text(nowZoom + '%')
    },
    zoomIn: function () {
        nowZoom = nowZoom + 5;
        if (nowZoom >= 120) nowZoom = 120;
        zoomControl.zooms();
        $('.zoom-text > a').text(nowZoom + '%')
    },
    zoomReset: function () {
        nowZoom = 100;
        zoomControl.zooms();
        $('.zoom-text > a').text(nowZoom + '%')
    },
    zooms: function () {
        document.body.style.zoom = nowZoom + "%";
        if (nowZoom == 90) {
            alert("더 이상 축소할 수 없습니다.");
        }
        if (nowZoom == 120) {
            alert("더 이상 확대할 수 없습니다.");
        }
    }
}

$(window).resize(function (){

  // width값을 가져오기

  var width_size = window.outerWidth;
  

  // 800 이하인지 if문으로 확인

  if (width_size <= 1024) {

    $('#hd').addClass('mb');

  }else {
       $('#hd').removeClass('mb');
       $('body').removeClass('layer');
  }

})



$(document).ready(function () {
    // width값을 가져오기

  var width_size = window.outerWidth;
  

  // 800 이하인지 if문으로 확인

  if (width_size <= 1024) {

    $('#hd').addClass('mb');

  }else {
       $('#hd').removeClass('mb');
       $('body').removeClass('layer');
  }

    $('.menu_btn').click(function () {
        $('.all_menu').show()
        $('body').addClass('layer')
    });

    $('.am_close').click(function () {
        $('.all_menu').hide()
        $('body').removeClass('layer')
    });

    $('.m_menu_btn').click(function () {
        $('.gnb_wrap').show()
        $('body').addClass('layer')
    });

    $('.m_close').click(function () {
        $('.gnb_wrap').hide()
        $('body').removeClass('layer')
    });

    $('.gnbmenu_wrap').mouseover(function () {
        $(this).parent().addClass('on');
    });
    $('.gnbmenu_wrap').mouseleave(function () {
        $(this).parent().removeClass('on');
    });

    $('.depth3').mouseover(function () {
        $(this).parent().addClass('on');
    });
    $('.depth3').mouseleave(function () {
        $(this).parent().removeClass('on');
    });

    /*모바일 메뉴*/
    $(document).on('click', '.mb #gnb .depth1 a', function (e) {
        e.preventDefault();
        $(this).parent().children().children().children('.depth2').slideToggle(0); //dep2 ul
        $(this).toggleClass('on');
        $(this).parent().siblings().children('.depth1 > a').removeClass('on')
        $(this).parent().siblings().children().children().children('.depth2:visible').slideUp(0);

    });

    $(document).on('click', '.mb #gnb .depth2_li > a', function (e) {
        e.preventDefault();
        $(this).next('.depth3').slideToggle(0); //dep2 ul
        $(this).toggleClass('on'); $(this).parent().siblings().children('.depth2_li').removeClass('on')
        $(this).parent().siblings().children('.depth3:visible').slideUp(0)

    });

});


$(document).ready(function () {

    /*모바일 검색창*/
    $('.mb_search .mb_sch').click(function () {
        $(this).toggleClass('on');
        $('.sch_wrap').toggleClass('on');
        $('.mb_search .mb_close').addClass('on');
    });
});
