$(function () {
$('.insta').clone().appendTo('.a1');
    $('.a1:first').find('.post img').attr('src','https://goo.gl/pnYKzy')
    $('.a1:first').find('.caption span').text('Khitma partner');
    $('.a1:eq(1)').find('.post img').attr('src','https://goo.gl/ebVC6W')
    $('.a1:eq(1)').find('.caption span').text('Sip your coffee quite silently Get lost into some appealing books pages');
    $('.a1:eq(2)').find('.post img').attr('src','https://goo.gl/CtfVAj')
    $('.a1:eq(2)').find('.caption span').text('Cupcakes can perform rites of pilgrimage too ');
    $('.a1:eq(3)').find('.post img').attr('src','https://goo.gl/Ch5atv')
    $('.a1:eq(3)').find('.caption span').text('Rest in Peace Ya Narges');
    $('.a1:eq(4)').find('.post img').attr('src','https://goo.gl/ZpfGSf');
    $('.a1:eq(4)').find('.caption span').text('I promised I will never compose poems on your eyes .. but I did');
$(window).on('scroll resize', function holy_nob() {
    var    wh = $(window).height();
    var    wt = $(window).scrollTop();
    var    wb = (wt + wh);
    
$('.lil-bar').fadeIn();
    $('.fade-scroll').each(function(){
        var   element = $(this);
        var    el_h = element.height();
        var    el_t = element.offset().top;
        var    el_b = (el_t + el_h);
        if((el_b > wt) && (el_t < wb)){
            element.addClass('animation');
        }
        else {
      element.removeClass('animation');
    }
          if (wt > el_t) {
      element.css('opacity', 1-(wt - el_t)/550);
    }
         if(wt > 10) {$('.navbar').addClass('navfar').find('span').addClass('mini')
                      $('.fa-instagram').addClass('bisc');
                             }
       
    else{
        $('.navbar').removeClass('navfar');
        $('.navbar span').removeClass('mini');
        $('.fa-instagram').removeClass('bisc');
    }
    });
});
    
    
}); //end
