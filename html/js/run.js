$(document).ready(function () {
	/*main_visual*/
	//메인비주얼
	$('.main_banner').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('#slick-log strong').text(i);
		$('#slick-log span').text(slick.slideCount);
	});
	var xpaused = false;
	var previous = 0;
	$(".slick-control").on("click", function () {
		if (xpaused) {
			$(".main_slick").slick("play");
			$(this).text("정지");
		} else {
			$(".main_slick").slick("pause");
			$(this).text("시작");
		}
		xpaused = !xpaused;
		$(this).toggleClass("paused");
	});

	$('.main_slick').slick({
		arrow: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: $(".fb-prev"),
		nextArrow: $(".fb-next"),
		autoplaySpeed: 5000,


	});

});

/*오늘의 의사일정 날짜구하기*/
$(document).ready(function () {
	var date = new Date();
	var year = date.getFullYear();
	var month = new String(date.getMonth() + 1);
	var day = new String(date.getDate());

	// 한자리수일 경우 0을 채워준다. 
	if (month.length == 1) {
		month = "0" + month;
	}
	if (day.length == 1) {
		day = "0" + day;
	}

	$(".a2-year").html(year);
	$(".a2-m").html(month);
	$(".a2-d").html(day);
});
/*sns tab */
$(document).ready(function () {
	//for tab 1
	$('.e-slider').slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1080, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2
				}
					},
			{
				breakpoint: 480, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1
				}
					}
				]
	});

	// for tab 2
	$('.e-slider2').slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1080, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2
				}
					},
			{
				breakpoint: 480, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1
				}
					}
				]
	});

	// for tab 2
	$('.e-slider3').slick({
		dots: false,
		infinite: true,
		arrows: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1080, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2
				}
					},
			{
				breakpoint: 480, //화면 사이즈 480px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1
				}
					}
				]


	});


	//tabbed content in homepage - featured product
	$('.sns_tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('.sns_tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
		$('.products-wrapper').slick('setPosition');


	});
	if (window.location.hash.length > 0) {
		var hash_str = window.location.hash.split("#")[1];
		$('.tab-link[data-tab=' + hash_str + ']').click();

	}

	//탭 접근성


});

/*실시간 의회소식*/
$(document).ready(function () {
	$('.realtime_slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.slick-log2 strong').text(i);
		$('.slick-log2 span').text(slick.slideCount);
	});
	var xpaused = false;
	var previous = 0;
	$(".slick-control2").on("click", function () {
		if (xpaused) {
			$(".realtime_slider").slick("play");
			$(this).text("정지");
		} else {
			$(".realtime_slider").slick("pause");
			$(this).text("시작");
		}
		xpaused = !xpaused;
		$(this).toggleClass("paused");
	});

	$('.realtime_slider').slick({
		arrow: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: $(".fb-prev2"),
		nextArrow: $(".fb-next2")

	});
});




//공지사항 fiter js
$(function () {
	var $filter = $('.filter');
	var $tab = $('.filter a');
	var $offers = $('.boxGroup .filiter_box')

	$filter.on('click touch', '.all', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.hide();
		$offers.fadeIn(0);
	});

	$filter.on('click touch', '.filter01', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.show();
		$offers.fadeOut(0);
		$offers.filter('.filter01').fadeIn(0);

	});



	$filter.on('click touch', '.filter02', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.show();
		$offers.fadeOut(0);
		$offers.filter('.filter02').fadeIn(0);

	});

	$filter.on('click touch', '.filter03', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.show();
		$offers.fadeOut(0);
		$offers.filter('.filter03').fadeIn(0);

	});

	$filter.on('click touch', '.filter04', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.show();
		$offers.fadeOut(0);
		$offers.filter('.filter04').fadeIn(0);

	});

	$filter.on('click touch', '.filter05', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.show();
		$offers.fadeOut(0);
		$offers.filter('.filter05').fadeIn(0);

	});

	$filter.on('click touch', '.filter06', function (e) {
		e.preventDefault();
		$tab.removeClass('current');
		$(this).addClass('current');

		$offers.show();
		$offers.fadeOut(0);
		$offers.filter('.filter06').fadeIn(0);

	});



});





/*snb 메뉴 */
$(document).ready(function () {
	$('.snb_drop  .dep1 > a').click(function () {
		$(this).next('.dep2').slideToggle(100);
		$(this).parent().toggleClass('on');
		$(this).parent().siblings('.dep1').removeClass('on');
		$(this).parent().siblings().children('.dep2:visible').slideUp(0);
		$(this).parent().siblings().children('.dep2').children('li').removeClass('active')
		$(this).parent().siblings().children('.dep2').children('li').removeClass('active')

	});

	$('.snb_drop  .dep2 >  li > a').click(function () {
		$(this).parent().toggleClass('active');

	});
	$('.snb_drop  .dep2 >  li > a').mouseenter(function () {
		$(this).parent().parent().addClass('active');

	});
});


$(document).ready(function () {
	$('.dep_list  .dep1 > a').click(function () {
		$(this).next('.dep2').slideToggle(100);
		$(this).parent().toggleClass('on');
		$(this).parent().siblings('.dep1').removeClass('on');
		$(this).parent().siblings().children('.dep2:visible').slideUp(0);

	});
});

$(document).ready(function () {
	$('.dep3_list  .dep2 li > a').click(function () {
		$(this).next('ul.dep3').slideToggle(100);
		$(this).parent().toggleClass('on');
		$(this).parent().siblings('.dep2').removeClass('on');
		$(this).parent().siblings().children('.dep3:visible').slideUp(0);

	});




	//경기도 의원회 메인 js
	/*main_visual*/
	$('.committee_member_slider ul').slick({
		arrow: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1250, //화면 사이즈 
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 6
				}
					},
			{
				breakpoint: 960, //화면 사이즈 
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 5
				}
					},
			{
				breakpoint: 800, //화면 사이즈 
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 4
				}
					},
			{
				breakpoint: 640, //화면 사이즈 
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 3
				}
					},
			{
				breakpoint: 480, //화면 사이즈 
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2
				}
					}



				]


	});
	/*오늘의 의사일정 날짜구하기*/
	$(document).ready(function () {
		var date = new Date();
		var year = date.getFullYear();
		var month = new String(date.getMonth() + 1);
		var day = new String(date.getDate());

		// 한자리수일 경우 0을 채워준다. 
		if (month.length == 1) {
			month = "0" + month;
		}
		if (day.length == 1) {
			day = "0" + day;
		}

		$(".todayDate").html(year + "." + month + "." + day)

		;
	});


	$(document).ready(function () {
		/*main_visual*/
		//메인비주얼
		$('.foreign_main_slick ul').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$('#slick-log strong').text(i);
			$('#slick-log span').text(slick.slideCount);
		});
		var xpaused = false;
		var previous = 0;
		$(".slick-control").on("click", function () {
			if (xpaused) {
				$(".foreign_main_slick ul").slick("play");
				$(this).text("정지");
			} else {
				$(".foreign_main_slick ul").slick("pause");
				$(this).text("시작");
			}
			xpaused = !xpaused;
			$(this).toggleClass("paused");
		});

		$('.foreign_main_slick  ul').slick({
			arrow: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			prevArrow: $(".fb-prev"),
			nextArrow: $(".fb-next"),
			fade: true,
			autoplaySpeed: 5000,


		});

		$('.foreign_main_s2 ul').slick({
			arrow: true,
			slidesToShow: 9,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [ // 반응형 웹 구현 옵션
				{
					breakpoint: 1024, //화면 사이즈 960px
					settings: {
						//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
						slidesToShow: 6
					}
					},
				{
					breakpoint: 780, //화면 사이즈 960px
					settings: {
						//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
						slidesToShow: 4
					}
					},
				{
					breakpoint: 640, //화면 사이즈 768px
					settings: {
						//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
						slidesToShow: 2
					}
					}
				]


		});

		$('.foreign_member_slider ul').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$('#slick-log2 strong').text(i);
			$('#slick-log2 span').text(slick.slideCount);
		});
		var xpaused = false;
		var previous = 0;
		$(".slick-control2").on("click", function () {
			if (xpaused) {
				$(".foreign_member_slider ul").slick("play");
				$(this).text("정지");
			} else {
				$(".foreign_member_slider ul").slick("pause");
				$(this).text("시작");
			}
			xpaused = !xpaused;
			$(this).toggleClass("paused");
		});


		$('.foreign_member_slider ul').slick({
			arrow: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,


		});

	});

	/*어린의 의회*/
	/*main_visual*/
	//메인비주얼
	$('.child_slider ul').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('#slick-log strong').text(i);
		$('#slick-log span').text(slick.slideCount);
	});
	var xpaused = false;
	var previous = 0;
	$(".slick-control").on("click", function () {
		if (xpaused) {
			$(".main_slick").slick("play");
			$(this).text("정지");
		} else {
			$(".main_slick").slick("pause");
			$(this).text("시작");
		}
		xpaused = !xpaused;
		$(this).toggleClass("paused");
	});

	$('.child_slider ul').slick({
		arrow: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: $(".fb-prev"),
		nextArrow: $(".fb-next"),
		autoplaySpeed: 5000,


	});





	/*서브 js*/

	/*파일 업로드 커스텀*/
	$(document).ready(function (e) {
		$(".filebox input[type='file']").change(function (e) {

			//div 내용 비워주기
			$(this).next().empty();

			var files = e.target.files;
			var arr = Array.prototype.slice.call(files);

			//업로드 가능 파일인지 체크
			for (var i = 0; i < files.length; i++) {
				if (!checkExtension(files[i].name, files[i].size)) {
					return false;
				}
			}

			preview(arr);


		}); //file change

		function checkExtension(fileName, fileSize) {

			var regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");
			var maxSize = 20971520; //20MB

			if (fileSize >= maxSize) {
				alert('파일 사이즈 초과');
				$(".filebox input[type='file']").val(""); //파일 초기화
				return false;
			}

			if (regex.test(fileName)) {
				alert('업로드 불가능한 파일이 있습니다.');
				$(".filebox input[type='file']").val(""); //파일 초기화
				return false;
			}
			return true;
		}

		function preview(arr) {
			arr.forEach(function (f) {

				//파일명이 길면 파일명...으로 처리
				var fileName = f.name;
				if (fileName.length > 20) {
					fileName = fileName.substring(0, 20) + "...";
				}
                

				//div에 이미지 추가
				var str = '<div style="display: inline-flex; padding: 5px;"><li>';
				str += '<span>' + fileName + '</span><br>';

				//이미지 파일 미리보기
				if (f.type.match('image.*')) {
					var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성
					reader.onload = function (e) { //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
						//str += '<button type="button" class="delBtn" value="'+f.name+'" style="">x</button><br>';
						str += '<img src="' + e.target.result + '" title="' + f.name + '" width=100 height=100 />';
						str += '</li></div>';
						$(str).appendTo('#preview');
					}
					reader.readAsDataURL(f);
				} else {
					$(str).appendTo('#preview');
				}
			}); //arr.forEach
		}
       
	});

/*파일업로드 2개 일때*/
    $(document).ready(function (e) {
		$(".filebox2 input[type='file']").change(function (e) {

			//div 내용 비워주기
			$(this).next().empty();

			var files = e.target.files;
			var arr = Array.prototype.slice.call(files);

			//업로드 가능 파일인지 체크
			for (var i = 0; i < files.length; i++) {
				if (!checkExtension(files[i].name, files[i].size)) {
					return false;
				}
			}

			preview(arr);


		}); //file change

		function checkExtension(fileName, fileSize) {

			var regex = new RegExp("(.*?)\.(exe|sh|zip|alz)$");
			var maxSize = 20971520; //20MB

			if (fileSize >= maxSize) {
				alert('파일 사이즈 초과');
				$(".filebox2 input[type='file']").val(""); //파일 초기화
				return false;
			}

			if (regex.test(fileName)) {
				alert('업로드 불가능한 파일이 있습니다.');
				$(".filebox2 input[type='file']").val(""); //파일 초기화
				return false;
			}
			return true;
		}

		function preview(arr) {
			arr.forEach(function (f) {

				//파일명이 길면 파일명...으로 처리
				var fileName = f.name;
				if (fileName.length > 20) {
					fileName = fileName.substring(0, 20) + "...";
				}
                

				//div에 이미지 추가
				var str = '<div style="display: inline-flex; padding: 5px;"><li>';
				str += '<span>' + fileName + '</span><br>';

				//이미지 파일 미리보기
				if (f.type.match('image.*')) {
					var reader = new FileReader(); //파일을 읽기 위한 FileReader객체 생성
					reader.onload = function (e) { //파일 읽어들이기를 성공했을때 호출되는 이벤트 핸들러
						//str += '<button type="button" class="delBtn" value="'+f.name+'" style="">x</button><br>';
						str += '<img src="' + e.target.result + '" title="' + f.name + '" width=100 height=100 />';
						str += '</li></div>';
						$(str).appendTo('#preview2');
					}
					reader.readAsDataURL(f);
				} else {
					$(str).appendTo('#preview2');
				}
			}); //arr.forEach
		}
	});

/*이미지 삭제 버튼
     $('.delBtn').click(function(){
            $(this).parent().remove();
 });*/
});

/*아코디언 메뉴*/
$(document).on('click', '.list_faq dt', function (e) {
	e.preventDefault();
	$(this).next().slideToggle(200);
	$(this).toggleClass('on');
	$(this).parent().siblings().children('dt').removeClass('on')
	$(this).parent().siblings().children('dd:visible').slideUp(200);

});

$(document).ready(function () {

	//팝업
	if ($('.laypop').is(":visible")) {
		// display : none가 아닐 경우
		$('body').addClass('layer').addClass('hidden');
	} else {
		$('body').removeClass('layer').removeClass('hidden');
	}

	$('.lay_hide').click(function () {
		$('.laypop').hide();
		$('body').removeClass('layer').removeClass('hidden');
	});

});


//갤러리 슬라이드
$(document).ready(function () {
	$('.slider-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		infinite: false,
		speed: 500,
		asNavFor: '.slider-thumb',
		arrows: true,
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',

	});
	$('.slider-thumb').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		asNavFor: '.slider-content',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		infinite: false,
		responsive: [ // 반응형 웹 구현 옵션
			{
				breakpoint: 1080, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 4,
					slidesToScroll: 4
				}
					},
			{
				breakpoint: 768, //화면 사이즈 768px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 2,
					slidesToScroll: 2
				}
					}
				]

		//snb mobile

	});


	//캘린더 버튼
	$('.calendar_btn li a').click(function () {
		$(this).parent('li').toggleClass('on');
	});


	// 상세검색
	$('.sd_btn').click(function () {
		$(this).toggleClass('on');
		
	if ($(".sd_btn").hasClass("on") === true) {

		// 속성값이 존재함.
		$(this).html('상세검색 닫기');
		$('.detail').show();
		$('.default').hide();
	} else {
		
		$(this).html('상세검색');
		$('.detail').hide();
		$('.default').show();
	}
	});

    //지역상담소 지도 hover시 
 $('#image-maps area').mouseover(function(){
      var showId = $(this).attr('id');
      $(showId).show();
 });
 
 $('#image-maps area').mouseout(function(){
      var hideId = $(this).attr('id');
      $(hideId).hide();
 });
    
    // 지역상담소 탭
   	// List Tab Navigation
	var $tab_list = $('.consulting_tab');
	$tab_list.removeClass('jx').find('ul ul').hide();
	$tab_list.find('li li.active').parents('li').addClass('active');
	$tab_list.find('li.active>ul').show();
	$tab_list.each(function(){
		var $this = $(this);
		$this.height($this.find('li.active>ul').height()+40);
	});
	function listTabMenuToggle(event){
		var $this = $(this);
		$this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
		$this.closest('.consulting_tab').height($this.next('ul').height()+40);
		if($this.attr('href') === '#'){
			return false;
		}
	}
	$tab_list.find('>ul>li>a').click(listTabMenuToggle).focus(listTabMenuToggle);
    
	//지역상담소 배너
	$('.consulting_banner ul').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.consulting_banner #slick-log strong').text(i);
		$('.consulting_banner #slick-log span').text(slick.slideCount);
	});
	var xpaused = false;
	var previous = 0;
	$(".cons-btn .slick-control").on("click", function () {
		if (xpaused) {
			$(".consulting_banner ul").slick("play");
			$(this).text("정지");
		} else {
			$(".consulting_banner ul").slick("pause");
			$(this).text("시작");
		}
		xpaused = !xpaused;
		$(this).toggleClass("paused");
	});

	$('.consulting_banner ul').slick({
		arrow: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
        dots:true,
		prevArrow: $(".fb-prev"),
		nextArrow: $(".fb-next"),
		autoplaySpeed: 5000,


	});
    
    /*기자실*/
    $(".press_main_visual ul").slick({
		fade:true,
		infinite: true,
		autoplay:true,
		arrows:false,
		autoplaySpeed: 10000,
		dots:true,
		customPaging: function (slider, i) {
			var title = $(slider.$slides[i]).data('title');
			return '<span class="dots__item">' + title + ' </span>';
		},
		dotsClass: 'slider-dots'
	});


});
