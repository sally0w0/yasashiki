$(function() {
  $('.menu-btn').on('click', function() {
    if ($('.hamburger-menu').hasClass('active')) {
      $('.hamburger-menu').removeClass('active');
    } else {
      $('.hamburger-menu').addClass('active');
    }
  });
  
  

  $('#mainVisual').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
});

// メインビジュアルの差し替え
$(function() {
	var elem = $('.imageReplace');
	var sp = '_sp.';
	var pc = '_pc.';
	var replaceWidth = 767;

	function imageSwitch() {
		var windowWidth = parseInt($(window).width());
		$(elem).each(function() {
			var thisItem = $(this);
			if(windowWidth >= replaceWidth) {
				thisItem.attr('src', thisItem.attr('src').replace(sp, pc));
			} else {
				thisItem.attr('src', thisItem.attr('src').replace(pc, sp));
			}
		});
	}
	imageSwitch();

	var resizeTimer;
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			imageSwitch();
		}, 200);
	});
});



// スクロールの設定
$(function() {
    var topBtn = $('#pageTop');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
			topBtn.stop().animate({'pageTop' : '20px'}, 200); 
        } else {
			topBtn.fadeOut();
			
        }
	});
	//スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



// ページトップボタン
$(function () {
  const topBtn = $("#page-top");
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,      },
      500
    );
    return false;
});


  $(function(){
    // サムネールをクリック
    $(".swichText a").click(function(){
      // 拡大画像のsrc属性に、選択したa要素のhref属性を入れる
      $("p img").attr("src", $(this).attr("href"));
    
    
      return false;	
    });
  });

  $(function(){
    $('#contents div[id != "tab1"]').hide();
    
    // タブをクリック
    $(".resize a").click(function(){
      // 一度全てのコンテンツを非表示にする
      $("#contents div").hide();
  
      // 選択されたコンテンツを再表示する
      $($(this).attr("href")).show();
      
      // 現在のcurrentクラスを削除
      $(".current").removeClass("current");
      
      // 選択されたタブ（自分自身）にcurrentクラスを追加
      $(this).addClass("current");


      var targetTop = $('#contents').offset().top;
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
  
      
      return false;
    });
  
  });

});
