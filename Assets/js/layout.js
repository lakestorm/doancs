$(document).ready(function(){
    $('.tab-content-item').hide();
    $('.tab-content-item:first-child').show();
    $('.nav-tabs li').click(function(){
        $('.nav-tabs li').removeClass('active');
        $(this).addClass('active');

        let id_tab_content = $(this).find('a').attr('href');
        $('.tab-content-item').hide();
        $(id_tab_content).fadeIn();
        return false;
    });
});

