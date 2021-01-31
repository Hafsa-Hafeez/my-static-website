$(document).ready(function () {
    $('.ques').click(function () {
      $(this).children('.gap').children('.fa').toggleClass('fa-angle-down fa-angle-up')
      $(this).next('.ans').slideToggle(500);
    })
})