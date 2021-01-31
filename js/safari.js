
function emptyfield(id) {
    if ($(id).val() == '') {
        $(id).parent().css({ 'border': '1px solid red', 'margin-bottom': '0.5%' });
        $(id).parent().next('.errormsg').show().text('This field is required').css({
            'color': 'red', 'margin-bottom': '3%', 'padding-left': '5%', 'font-size': '18px', 'font-weight': '500'
        })
        haserror = true;
    }
    else {
        haserror = false;
  
    }
  
  }
  
  function checkemail(id) {
    var email = $(id).val();
    console.log(id)
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        $(id).parent().css({ 'border': '1px solid red', 'margin-bottom': '0.5%' });
        $(id).parent().next('.emailinfo').show().html('Email should contain @domain.com').css({
            'color': 'red', 'margin-bottom': '3%', 'padding-left': '5%', 'font-size': '18px', 'font-weight': '500'
        });
  
    }
    else {
        $(id).parent().css({ 'border': '1px solid green', 'margin-bottom': '4%' });
        $('.emailinfo').hide();
    }
  }
  
  $('input[type=email]').keyup(function () {
    checkemail(this)
  
  })
  
  $('.cname').keyup(function () {
    if ( $(this).val().match(/^[a-zA-Z\s]+$/) && $(this).val().length >= 3  && $(this).val().length <= 30){
        $(this).parent().css({'border':'1px solid green', 'margin-bottom': '4%' });
        $(this).parent().next('.errormsg').hide()
  
    }
    
    else{
        $(this).parent().css({'border':'1px solid red', 'margin-bottom': '0.5%' });
                $(this).parent().next('.errormsg').show().text('Please enter valid name ').css({
                    'color':'red','margin-bottom': '3%',  'padding-left': '5%', 'font-size':'18px', 'font-weight': '500'
             })
    }
  })
  $('input[type!=checkbox], textarea').focus(function () {
    $('.info').hide();
    $(this).parent().next('.errormsg').hide();
  
    $(this).parent().css({ 'border': '1px solid rgba(58,58,58,.3)', 'margin-bottom': '4%' });
  })
  $('.request').click(function (){
    $('#reservation').show();
    $('#safari').hide();
    console.log( $(this).parents('.safmain').children('.revimg').children('img').attr('src'));
    // $("#safariimg").removeAttr("src");
    $('#safariimg').attr('src',  $(this).parents('.safmain').children('.revimg').children('img').attr('src')) 
    $('#safariname').html($(this).parents('.safmain').children('.tname').children('h5').text())
    $('#pprice').html($(this).parents('.safmain').children('.tprice').children('.price').text())
    $('.person').html($(this).parents('.safmain').children('.tprice').children('.pricediv').children('.percount').text())
    console.log($(this).parents('.safmain').children('.tprice').children('.pricediv').children('.percount').text())
})

  
  $('#revsubmit').click(function () {
    emptyfield('#revname');
    emptyfield('#revemail');
    emptyfield('#revmsg');
  

    if (haserror) {
        return false;
    }
    else{
        $('#reservation').hide();
    
        $('#booking').show();
    }
  
  })