perguntas = ['asdasd'];
document.addEventListener("DOMContentLoaded", function () {
  if (!/perguntasfrequentes/gi.test(window.location.pathname)) return;
  Array.prototype.slice.call(document.querySelectorAll('.perguntaDrop')).forEach(function (element) {
    element.addEventListener('click', function (event) {
      var element = event.target.parentNode;
      if (hasClass(element, 'perguntaItemIndice'))
        var respostaItem = element.querySelector('.respostaItemIndice.elementNotVisible');
      else
        var respostaItem = element.querySelector('.respostaItem.elementNotVisible');

      if (respostaItem) {
        removeClass(respostaItem, 'elementNotVisible');
        addClass(respostaItem, 'itemCalculadoraFull');
      }
      else {
        if (hasClass(element, 'perguntaItemIndice'))
          var respostaItem = element.querySelector('.respostaItemIndice.itemCalculadoraFull');
        else
          var respostaItem = element.querySelector('.respostaItem.itemCalculadoraFull');

        addClass(respostaItem, 'elementNotVisible');
        removeClass(respostaItem, 'itemCalculadoraFull');
      }
    });
  });
});