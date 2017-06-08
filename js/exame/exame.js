document.addEventListener("DOMContentLoaded", function () {
  if (!/manualexame/gi.test(window.location.pathname)) return;
  var pesquisa = '';
  var globalTimeout = null;
  document.querySelector('#pesquisarExames').addEventListener('keyup', function (ev) {
    if (globalTimeout != null) {
      clearTimeout(globalTimeout);
    }
    globalTimeout = setTimeout(function () {
      var pequisaNova = document.querySelector('#pesquisarExames').value;
      if (pequisaNova === pesquisa) return;
      pesquisa = pequisaNova;
      CriaExame(pesquisa)
      globalTimeout = null;
    }, 1000);
  });
  function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }
  manuaisExames = [];
  ManualExame.exames.exame.forEach(function (exame) {
    manuaisExames = manuaisExames.concat({
      codigo: exame.codigo[0],
      nome: exame.nome[0],
      manual: hex2a(exame.ManualExame),
      sigla: exame.siglaExame[0],
      prazo: exame.prazoRealizacao[0],
      material: exame.nmmaterial[0],
      secao: exame.nmsecao[0],
    });
  });
  function CriaExame(_pesquisa) {
    var table = criarTabela();
    criarHeadTable(table);
    var tabela = document.querySelector('.jarbas_IGE .tabelasIges .tabela');
    removeClass(tabela, 'elementNotVisible');
    var exameEspaco = document.querySelector('.jarbas_IGE .tabelasIges .exameEspaco');
    addClass(exameEspaco, 'elementNotVisible')
    tabela.innerHTML = '';
    tabela.appendChild(table);

    function criarHeadTable(table) {
      var thead = createElemente('thead');
      var tr = createElemente('tr');

      var thCodigo = createElemente('th');
      thCodigo.innerHTML = 'Código';
      addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

      var thNome = createElemente('th');
      thNome.innerHTML = 'Nome';
      addClass(thNome, 'mdl-data-table__cell--non-numeric');

      var thSiglaExame = createElemente('th');
      thSiglaExame.innerHTML = 'Sigla Exame';
      addClass(thSiglaExame, 'mdl-data-table__cell--non-numeric');



      tr.appendChild(thCodigo);
      tr.appendChild(thNome);
      tr.appendChild(thSiglaExame);

      thead.appendChild(tr);
      table.appendChild(thead);
      adicionaConteudoTable(table);
    }

    function adicionaConteudoTable() {
      var tbody = createElemente('tbody');
      manuaisExames.forEach(function (exame) {
        if (
          exame.codigo.toString().toLowerCase().indexOf(_pesquisa.toLowerCase()) != -1 ||
          exame.nome.toLowerCase().indexOf(_pesquisa.toLowerCase()) != -1 ||
          exame.sigla.toLowerCase().indexOf(_pesquisa.toLowerCase()) != -1
        ) {
          var tr = createElemente('tr');

          var thCodigo = createElemente('td');
          thCodigo.innerHTML = exame.codigo;
          addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

          var thNome = createElemente('td');
          thNome.innerHTML = exame.nome;
          addClass(thNome, 'mdl-data-table__cell--non-numeric');

          var thSiglaExame = createElemente('td');
          thSiglaExame.innerHTML = exame.sigla;
          addClass(thSiglaExame, 'mdl-data-table__cell--non-numeric');


          tr.appendChild(thCodigo);
          tr.appendChild(thNome);
          tr.appendChild(thSiglaExame);

          tr.onclick = onClickExame


          function onClickExame() {
            var div = createElemente("div");
            div.innerHTML = exame.manual;
            var tabela = document.querySelector('.jarbas_IGE .tabelasIges .tabela');
            addClass(tabela, 'elementNotVisible')
            var exameEspaco = document.querySelector('.jarbas_IGE .tabelasIges .exameEspaco');
            removeClass(exameEspaco, 'elementNotVisible')
            var nomeDoExame = document.querySelector('.jarbas_IGE .tabelasIges .nomeDoExame');
            var manualExame = document.querySelector('.jarbas_IGE .tabelasIges .manualExame');
            nomeDoExame.innerHTML = exame.nome;
            manualExame.innerHTML = '';
            manualExame.appendChild(div);
          }
          tbody.appendChild(tr);
        }
      });
      table.appendChild(tbody);
    }

    function criarTabela() {
      var table = createElemente("table");
      addClass(table, 'mdl-data-table');
      addClass(table, 'mdl-js-data-table');
      return table;
    }
  }
});

function createElemente(name) {
  return document.createElement(name);
}