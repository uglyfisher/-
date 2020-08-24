$('.u1').on('click', function () {
    if (!$('#zs1').hasClass('play')) {
      $('#zs1').addClass('play');
      $('#zs2').removeClass('play');
      $('#zs3').removeClass('play');
      $('.u1').css("background-color", "#87CEFA");
      $('.u2').css("background-color", "#fff");
      $('.u3').css("background-color", "#fff");
    }
  })
  $('.u2').on('click', function () {
    if (!$('#zs2').hasClass('play')) {
      $('#zs2').addClass('play');
      $('#zs1').removeClass('play');
      $('#zs3').removeClass('play');
      $('.u2').css("background-color", "#87CEFA");
      $('.u1').css("background-color", "#fff");
      $('.u3').css("background-color", "#fff");
    }
  })
  $('.u3').on('click', function () {
    if (!$('#zs3').hasClass('play')) {
      $('#zs3').addClass('play');
      $('#zs2').removeClass('play');
      $('#zs1').removeClass('play');
      $('.u3').css("background-color", "#87CEFA");
      $('.u2').css("background-color", "#fff");
      $('.u1').css("background-color", "#fff");
    }
  })