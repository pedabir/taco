jQuery(document).ready(function($) {
    // Клик на элемент по которому и будет совершаться
    // действие открытие и закрытие sidebar
    $('.icon-menu').click(function(e) {
      // Класс sidebar
      var sidebar = $('.menu');
      // Ширина sidebar
      var sidebarWidth = $('.menu').width();
      // Добавляем класс open
      $('.wrapper').addClass('open');
      // Проверяем, если в sidebar свойство left не равна ширины его то выполняються
      // следующие действия
      if (sidebar.css('left') != sidebarWidth) {
        // Добавляем ему класс open
        sidebar.addClass('open');
        var firstClick = true;
        // Скрипт который будет закрывать sidebar при клике на любое место
        $(document).bind('click.myEvent', function(e) {
          if (!firstClick && $(e.target).closest('.sidebar').length == 0) {
            // Удаляем класс open
            sidebar.removeClass('open');
            // Удаляем класс open
            $('.wrapper').removeClass('open');
            $(document).unbind('click.myEvent');
          }
          firstClick = false;
        });
      }
      e.preventDefault();
    });
  });
