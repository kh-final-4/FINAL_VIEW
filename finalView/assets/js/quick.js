
$(function(){
    $('.basket').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 30 + '%'
        },function(){
            $('.sidebar_menu').hide(); 
        }); 
    });

    $(".up_arrow").click(function(){
        window.scrollTo({top:0, behavior:"smooth"})
    })
})

