document.addEventListener("DOMContentLoaded", function () {
  var tmSlider;
  var sliderPrincipalHoda5 = document.querySelector('.sliderPrincipalHoda5');
  if(!sliderPrincipalHoda5) return;
  sliderPrincipalHoda5.querySelector('.hoda5_left').addEventListener('click', function () {
    proximoSliderHoda5(-1);
  });

  sliderPrincipalHoda5.querySelector('.hoda5_right').addEventListener('click', function () {
    proximoSliderHoda5(1);
  });

  timeOutSlider();

  function proximoSliderHoda5(direcao) {
    timeOutSlider();
    var sliderHoda5 = Array.prototype.slice.call(sliderPrincipalHoda5.querySelectorAll('.sliderHoda5'));
    sliderHoda5.some(function (slider, idx) {
      if (hasClass(slider, 'sliderHoda5Active')) {
        var proximoSlider;
        proximoSlider = idx + direcao;
        if (proximoSlider < 0) proximoSlider = sliderHoda5.length - 1;
        if (proximoSlider > (sliderHoda5.length - 1)) proximoSlider = 0;

        removeClass(slider, 'sliderHoda5Active');
        addClass(sliderHoda5[proximoSlider], 'sliderHoda5Active');
        return true;
      }
    });
  }

  function timeOutSlider() {
    if (tmSlider) clearTimeout(tmSlider)
    tmSlider = setTimeout(function () {
      proximoSliderHoda5(1)
    }, 10000)
  }
});
