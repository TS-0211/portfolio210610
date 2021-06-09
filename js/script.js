
// visit　タグ切り替え
$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.visit-wrapper [data-category]');

  $filters.on('click', function (event) {
    // デフォルト機能を無効化
    event.preventDefault();
    var $this = $(this);

    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');


    $boxes.removeClass('is-animated')
      .fadeOut().promise().done(function () {
        $boxes.filter('[data-category ="' + $filterTime + '"]')
          .addClass('is-animated').fadeIn();
      });
  }
  );
});


// season　スライド
$(function () {
  function toggleChangeBtn() {
    var slideIndex = $('.season-box').index($('.season-box.active'));
    $('.slide-button').show();
    if (slideIndex == 0) {
      $('.prev').hide();
    } else if (slideIndex == 3) {
      $('.next').hide();
    }
  }

  toggleChangeBtn();

  // 進むボタンをクリックしたときの処理
  $('.next').click(function () {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active box-open');
    $displaySlide.next().addClass('active box-open');
    toggleChangeBtn();
  });
  // 戻るボタンをクリックしたときの処理
  $('.prev').click(function () {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active box-open');
    $displaySlide.prev().addClass('active box-open');
    toggleChangeBtn();
  });
});





// photos モーダル
$(function () {
  $('.modalOpen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      $('.g-navi').fadeOut();
      return false;
    });
  });
  $('.modalClose').on('click', function () {
    $('.modal-window').fadeOut();
    $('.g-navi').fadeIn();
    return false;
  });
});
