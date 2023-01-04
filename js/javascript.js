$(document).ready(function(){
    /*영화 타이틀 클릭시 변환*/
    $('.movie_title1').click(function(){
        $('.movie_title1').addClass('text_under');
        $('.movie_title2').removeClass('text_under');
        $('.movie_title3').removeClass('text_under');
        
        $('.cry_wrap').show();
        $('.love_wrap').hide();
        $('.moti_wrap').hide();
    });
    $('.movie_title2').click(function(){
        $('.movie_title2').addClass('text_under');
        $('.movie_title1').removeClass('text_under');
        $('.movie_title3').removeClass('text_under');
        
        $('.cry_wrap').hide();
        $('.love_wrap').show();
        $('.moti_wrap').hide();
    });
    $('.movie_title3').click(function(){
        $('.movie_title3').addClass('text_under');
        $('.movie_title1').removeClass('text_under');
        $('.movie_title2').removeClass('text_under');

        $('.cry_wrap').hide();
        $('.love_wrap').hide();
        $('.moti_wrap').show();
    });


    /* 노래 타이틀 클릭시 변환*/
    $('.cry_menu').click(function(){
        $('.cry_menu').addClass('menu_bold');
        $('.love_menu').removeClass('menu_bold');
        $('.moti_menu').removeClass('menu_bold');

        $('.music_list').show();
        $('.music_list2').hide();
        $('.music_list3').hide();
    });
    $('.love_menu').click(function(){
        $('.cry_menu').removeClass('menu_bold');
        $('.love_menu').addClass('menu_bold');
        $('.moti_menu').removeClass('menu_bold');

        $('.music_list').hide();
        $('.music_list2').show();
        $('.music_list3').hide();
    });
    $('.moti_menu').click(function(){
        $('.cry_menu').removeClass('menu_bold');
        $('.love_menu').removeClass('menu_bold');
        $('.moti_menu').addClass('menu_bold');

        $('.music_list').hide();
        $('.music_list2').hide();
        $('.music_list3').show();
    });

    /* 클릭 시 큰 이미지 변경 */
    
    /* 클릭 시 모바일 버전으로 보기 */
    function moblie(){
        // var width_size = window.outerWidth;
        
        // if(width_size <= 639){
        //     window.outerWidth = 639;
        // }
        window.resizeTo(screen.width-639);
    };
})