$(window).scroll(function () {
    var positiontop = $(document).scrollTop();
    if ((positiontop > 200) && (positiontop < 400)) {
        $("#aright").addClass("animate__animated animate__slideInRight");
        $("#aleft").addClass("animate__animated animate__slideInLeft");
    }

    if ((positiontop > 500) && (positiontop < 700)) {
        $("#card9").addClass("animate__animated animate__slideInLeft");
        $("#card10").addClass("animate__animated animate__slideInUp");
        $("#card11").addClass("animate__animated animate__slideInUp");
        $("#card12").addClass("animate__animated animate__slideInRight");
      }

})