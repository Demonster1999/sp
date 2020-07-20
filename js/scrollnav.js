tooltip_options={
    delay: { "show": 500, "hide": 100 },
    trigger: 'manual',
    animate:false,
    container:'body'
}

$('li.active').tooltip(tooltip_options).tooltip('enable')




function changeDot() {
    const scrollValue = $(window).scrollTop();
    const heightSec2 = $('#about').offset().top;
    const heightSec3 = $('#services').offset().top;
    const heightSec4 = $('#contact').offset().top;
    $('li').tooltip('hide');
    if (scrollValue < heightSec2) {
        $('nav li').not('.dot1').removeClass('active');
        $('.dot1').addClass('active');
        $('li.active').tooltip('show');
    } else if (scrollValue < heightSec3) {
        $('nav li').not('.dot2').removeClass('active');
        $('.dot2').addClass('active');
        $('li.active').tooltip('show');
    } else if (scrollValue < heightSec4) {
        $('nav li').not('.dot3').removeClass('active');
        $('.dot3').addClass('active');
        $('li.active').tooltip('show');
    } else  {
        $('nav li').not('.dot4').removeClass('active');
        $('.dot4').addClass('active');
        $('li.active').tooltip('show');
    }
    
}

$(window).on("scroll", changeDot)

$('nav li').on('click', function () {
    const goToSection = '.s' + $(this).attr('id');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top + 1
       
    })
   
})

