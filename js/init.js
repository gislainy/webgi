document.addEventListener("DOMContentLoaded", function () {
  var timeOut;
  document.querySelector('.android-content').addEventListener('scroll', function (ev) {
    var jarbas_logotipo = document.querySelector('.jarbas_logotipo');
    var jarbas_acesso_paciente = document.querySelector('.jarbas_acesso_paciente');

    if (ev.target.scrollTop >= 2 && !hasClass(jarbas_logotipo, 'shadow_logotipo_jarbas') && !timeOut) {
      addClass(jarbas_logotipo, 'shadow_logotipo_jarbas_transisao');
      addClass(jarbas_acesso_paciente, 'shadow_logotipo_jarbas_transisao');

      timeOut = setTimeout(function () {
        addClass(jarbas_logotipo, 'shadow_logotipo_jarbas');
        addClass(jarbas_acesso_paciente, 'shadow_logotipo_jarbas');
        setTimeout(function () {
          removeClass(jarbas_logotipo, 'shadow_logotipo_jarbas_transisao');
          removeClass(jarbas_acesso_paciente, 'shadow_logotipo_jarbas_transisao');
        }, 100);
      }, 450);
    }
    else if (ev.target.scrollTop < 2 && timeOut) {
      clearTimeout(timeOut);
      timeOut = null;
      removeClass(jarbas_logotipo, 'shadow_logotipo_jarbas');
      removeClass(jarbas_acesso_paciente, 'shadow_logotipo_jarbas');
    }
  });

  Array.prototype.slice.call(document.querySelectorAll('.mdl-tabs__tab')).forEach(function (tab) {
    tab.addEventListener('click', function () {
      var iframePaciente = document.querySelector('[name="iframe_paciente"]');
      iframePaciente.src = iframePaciente.src;

      var iframeMedico = document.querySelector('[name="iframe_medico"]');
      iframeMedico.src = iframeMedico.src;

      var iframeLaboratorio = document.querySelector('[name="iframe_laboratorio"]');
      iframeLaboratorio.src = iframeLaboratorio.src;

      var iframeClinica = document.querySelector('[name="iframe_clinica"]');
      iframeClinica.src = iframeClinica.src;

      var iframeValidador = document.querySelector('[name="iframe_validador"]');
      iframeValidador.src = iframeValidador.src;

    });
  });


  var pathName = window.location.pathname;
  var hash = window.location.hash;
  if (hash) {
    hash = hash.slice(1);
    // adicionaMenuAtivo();
    if (hash && hash != 'historia') {
      var element = document.querySelector('[name="' + hash + '"]');
      scrollTo(document.querySelector('.android-content'), element.offsetTop, 1000);
    }

    function scrollTo(element, to, duration) {
      var start = element.scrollTop,
        change = to - start,
        increment = 20;

      var animateScroll = function (elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
          setTimeout(function () {
            animateScroll(elapsedTime);
          }, increment);
        }
      };

      animateScroll(0);
    }
    function easeInOut(currentTime, start, change, duration) {
      currentTime /= duration / 2;
      if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    }
  }
  // else {
  //   if (pathName == '') $('.menuHistoria').addClass('menuAtivo');
  //   if (pathName == '/convenio.html') $('.menuConvenio').addClass('menuAtivo');
  // }

  // function adicionaMenuAtivo(hash) {
  //   var hash = window.location.hash;
  //   var menuAtivo;

  //   if (hash == '#historia') menuAtivo = 'Historia';
  //   if (hash == '#unidades') menuAtivo = 'Unidades';
  //   if (hash == '#contato') menuAtivo = 'Contato';
  //   if (hash == '#resultados_de_exames') menuAtivo = 'Resultado';

  //   // $('.menu' + menuAtivo).addClass('menuAtivo');
  // }


  // $('.menuJarbas').click(function (ev) {
  // });

  // var menuVisivel;
  // $('.android-content').scroll(function (ev) {
  //   if (!menuVisivel || (menuVisivel && !isScrolledIntoView(menuVisivel))) {
  //     if (menuVisivel) {
  //       menuVisivel.removeClass('menuAtivo');
  //       menuVisivel = null;
  //     }

  //     if (isScrolledIntoView($('[name="historia"]'))) menuVisivel = $('.menuHistoria');
  //     else if (isScrolledIntoView($('[name="unidades"]'))) menuVisivel = $('.menuUnidades');

  //     if (menuVisivel)
  //       menuVisivel.addClass('menuAtivo');
  //   }
  // });

  // function isScrolledIntoView(element, fullyInView) {
  //   var pageTop = $(window).scrollTop();
  //   var pageBottom = pageTop + $(window).height();
  //   var elementTop = element.offset().top;
  //   var elementBottom = elementTop + element.height();

  //   if (fullyInView === true) {
  //     return ((pageTop < elementTop) && (pageBottom > elementBottom));
  //   } else {
  //     return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  //   }
  // }
});


function hasClass(element, cls) {
  if (element)
    return element.classList.contains(cls);
}

function addClass(element, cls) {
  if (element)
    element.classList.add(cls);
}

function removeClass(element, cls) {
  if (element)
    element.classList.remove(cls);
}
