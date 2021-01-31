$(document).ready(function () {
    $('.navbar-nav .nav-item').on('click', 'a', function () {
        var id = $(this).attr('href');
        $(id).show().siblings().hide();   
        $('#login').show()
        $('#navigationbar').show() 
        $('#footer').show() 
    })

    // $('.navbar-nav .nav-item a').click(function () {
    //     $(this).attr('href').show().siblings().hide();
    // })

})