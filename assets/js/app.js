
///_Popup Открытие разных блоков с кнопкой закрыть_________________________________________________________________________________________________________________________________________________________________
$(document).ready(function () {
    function Popup() {
        this.modal = $('.modal');
        this.overlay = $('.overlay');


        var popup = this;

        this.open = function (content) {
            popup.modal.html(content + '<div class="close-popup"> &times;</div>');
            popup.overlay.addClass('open');
            popup.modal.addClass('open');
        }

        this.close = function () {
            popup.overlay.removeClass('open');
            popup.modal.removeClass('open');
        }
        $(document).on('click', '.close-popup', popup.close);
        this.overlay.on('click', popup.close);

    }


    var p = new Popup({
        modal: '.modal',
        overlay: '.overlay',
        closeBtn: '.close-popup'
    });



    $('.text').on('click', function () {
        var form = $('.content').html();
        p.open(form);
    });
    $('.write').on('click', function () {
        p.open('форма отправки сообщения');
    });

///_-----------------------_________________________________________________________________________________________________________________________________________________________________


/////////////resources страницв_____________________________________________________________________________________________________________



function tabsBlock() {
    $('.tab').click(function () {
        let id = $(this).attr('data-tab'),
            content = $('.tab__block[data-tab="' + id + '"]');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tab__block').removeClass('show');
        content.addClass('show');
    });

};
tabsBlock();




///_------select-----------------_________________________________________________________________________________________________________________________________________________________________


    $('.select__header').click(function() {
        $(this).parent('.select').toggleClass('is-active');
        $(this).find('.select__icon').toggleClass('roto');
       
    });

    $('.select__item').click(function() {
        var text = $(this).text();
        var select = $(this).closest('.select');
        var icon = select.find('.select__icon');
        var currentText = select.find('.select__current');
        currentText.text(text);
        select.removeClass('is-active');
        icon.removeClass('roto');
        
    });


       




///_----------showMore-------------_________________________________________________________________________________________________________________________________________________________________
$('.show-more').on('click', function() {
    let items = $(this).data('items is-visible') || 3; 
    items += 3;
    $(this).data('items is-visible', items);
    
    const visItems = $('.block').children(':lt(' + items + ')'); 
    
    visItems.addClass('is-visible');
  
    if (items >= $('.item').length) { 
        $('.show-more').css('display', 'none'); /// или    $('.show-more').addClass('show-more-off');
    }
  });


///_-----------------------_________________________________________________________________________________________________________________________________________________________________




///_-----------------------_________________________________________________________________________________________________________________________________________________________________




///_-----------------------_________________________________________________________________________________________________________________________________________________________________
});