document.addEventListener("DOMContentLoaded", function () {
  var rewind = document.querySelector('.js_slider');
  var slider1 = document.querySelector('.slider1');
  if (slider1)
    var demoSlider = new slider('.slider1', {
      transition: {
        effect: 'fadeIn',
        easing: 'linear'
      }
    });
});
