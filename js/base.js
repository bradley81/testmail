jQuery(function($){
    //scrolltop bar setting
    var $backtop = $(".back-page-top");
    $(window).scroll(function(){
        if ($(this).width() > 767){
            if ($(this).scrollTop() > 300){
                $backtop.fadeIn(200);
            }else{
                $backtop.fadeOut(200);
            }
        }
    });
    $(".go-top").on("click",function(){
        $("html,body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });

   //notice show hide
    var $noticeMoreBtn = $('.noticebox__moreBtn'),
    $noticebox = $('.noticebox__listbox'),
    $gradient = $('.noticebox__gradient'),
    defHeight = $noticebox.height();
    $noticeMoreBtn.on("click",function(){
        $(this).parent().find('.noticeMoreBtn__icon').toggleClass('closed');
        $noticebox.toggleClass('sethight');
        $gradient.toggle();
        return false;
    });
});