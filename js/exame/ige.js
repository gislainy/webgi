document.addEventListener("DOMContentLoaded", function () {
  if (!/ige/gi.test(window.location.pathname)) return;
  var ige = 'igeespecifica';
  var pesquisa = '';
  var globalTimeout = null;
  document.querySelector('#pesquisarIge').addEventListener('keyup', function (ev) {
    if (globalTimeout != null) {
      clearTimeout(globalTimeout);
    }
    globalTimeout = setTimeout(function () {
      pesquisa = document.querySelector('#pesquisarIge').value;
      CriaIgE()
      globalTimeout = null;
    }, 1000);
  });
  document.querySelector('#igeespecifica').addEventListener('click', function (ev) {
    ige = 'igeespecifica';
    CriaIgE()
  });
  document.querySelector('#painelIge').addEventListener('click', function (ev) {
    ige = 'painelIge';
    CriaIgE()
  });

  CriaIgE();

  function CriaIgE() {
    var table = criarTabela();
    criarHeadTable(table);
    var tabela = document.querySelector('.jarbas_IGE .tabelasIges .tabela');
    tabela.innerHTML = '';
    tabela.appendChild(table);

    function criarHeadTable(table) {
      var thead = createElemente('thead');
      if (ige == 'painelIge') {
        var tr = createElemente('tr');

        var thSeq = createElemente('th');
        thSeq.innerHTML = 'Seq';
        addClass(thSeq, 'mdl-data-table__cell--non-numeric');

        var thDescricao = createElemente('th');
        thDescricao.innerHTML = 'Descrição';
        addClass(thDescricao, 'mdl-data-table__cell--non-numeric');

        var thCodigo = createElemente('th');
        thCodigo.innerHTML = 'Código';
        addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

        var thClasse = createElemente('th');
        thClasse.innerHTML = 'Classe';
        addClass(thClasse, 'mdl-data-table__cell--non-numeric');

        var thPrazo = createElemente('th');
        thPrazo.innerHTML = 'Prazo';
        addClass(thPrazo, 'mdl-data-table__cell--non-numeric');

        var thAtivo = createElemente('th');
        thAtivo.innerHTML = 'Ativo';
        addClass(thAtivo, 'mdl-data-table__cell--non-numeric');
        var thRodape = createElemente('th');
        thRodape.innerHTML = 'Rodapé';
        addClass(thRodape, 'mdl-data-table__cell--non-numeric');

        tr.appendChild(thSeq);
        tr.appendChild(thDescricao);
        tr.appendChild(thCodigo);
        tr.appendChild(thClasse);
        tr.appendChild(thPrazo);
        tr.appendChild(thAtivo);
        tr.appendChild(thRodape);

        thead.appendChild(tr);
        table.appendChild(thead);

        adicionaConteudoTable(table);
      }
      if (ige == 'igeespecifica') {
        var tr = createElemente('tr');

        var thSeq = createElemente('th');
        thSeq.innerHTML = 'Seq';
        addClass(thSeq, 'mdl-data-table__cell--non-numeric');

        var thDescricao = createElemente('th');
        thDescricao.innerHTML = 'Descrição';
        addClass(thDescricao, 'mdl-data-table__cell--non-numeric');

        var thCodigo = createElemente('th');
        thCodigo.innerHTML = 'Código';
        addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

        var thClasse = createElemente('th');
        thClasse.innerHTML = 'Classe';
        addClass(thClasse, 'mdl-data-table__cell--non-numeric');

       
        var thPrazo = createElemente('th');
        thPrazo.innerHTML = 'Prazo';
        addClass(thPrazo, 'mdl-data-table__cell--non-numeric');

        var thAtivo = createElemente('th');
        thAtivo.innerHTML = 'Ativo';
        addClass(thAtivo, 'mdl-data-table__cell--non-numeric');
        var thRodape = createElemente('th');
        thRodape.innerHTML = 'Rodapé';
        addClass(thRodape, 'mdl-data-table__cell--non-numeric');

        tr.appendChild(thSeq);
        tr.appendChild(thDescricao);
        tr.appendChild(thCodigo);
        tr.appendChild(thClasse);
        tr.appendChild(thPrazo);
        tr.appendChild(thAtivo);

        thead.appendChild(tr);
        table.appendChild(thead);
        adicionaConteudoTable(table);
      }
    }

    function adicionaConteudoTable() {
      var tbody = createElemente('tbody');
      if (ige == 'painelIge') {
        IGEPainel.forEach(function (ige) {
          if (
            ige.seq.toString().toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.descricao.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.codigo.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.classe.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.prazo.toString().toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.ativo.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.rodape.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1
          ) {
            var tr = createElemente('tr');

            var thSeq = createElemente('td');
            thSeq.innerHTML = ige.seq;
            addClass(thSeq, 'mdl-data-table__cell--non-numeric');

            var thDescricao = createElemente('td');
            thDescricao.innerHTML = ige.descricao;
            addClass(thDescricao, 'mdl-data-table__cell--non-numeric');

            var thCodigo = createElemente('td');
            thCodigo.innerHTML = ige.codigo;
            addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

            var thClasse = createElemente('td');
            thClasse.innerHTML = ige.classe;
            addClass(thClasse, 'mdl-data-table__cell--non-numeric');


            var thPrazo = createElemente('td');
            thPrazo.innerHTML = ige.prazo;
            addClass(thPrazo, 'mdl-data-table__cell--non-numeric');

            var thAtivo = createElemente('td');
            thAtivo.innerHTML = ige.ativo;
            addClass(thAtivo, 'mdl-data-table__cell--non-numeric');

            var thRodape = createElemente('td');
            thRodape.innerHTML = ige.rodape;
            addClass(thRodape, 'mdl-data-table__cell--non-numeric');

            tr.appendChild(thSeq);
            tr.appendChild(thDescricao);
            tr.appendChild(thCodigo);
            tr.appendChild(thClasse);
            tr.appendChild(thPrazo);
            tr.appendChild(thAtivo);
            tr.appendChild(thRodape);


            tbody.appendChild(tr);
          }
        });
      }
      if (ige == 'igeespecifica') {
        IGEEspecifica.forEach(function (ige) {
          if (
            ige.seq.toString().toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.descricao.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.codigo.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.classe.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.prazo.toString().toLowerCase().indexOf(pesquisa.toLowerCase()) != -1 ||
            ige.ativo.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1
          ) {

            var tr = createElemente('tr');

            var thSeq = createElemente('td');
            thSeq.innerHTML = ige.seq;
            addClass(thSeq, 'mdl-data-table__cell--non-numeric');

            var thDescricao = createElemente('td');
            thDescricao.innerHTML = ige.descricao;
            addClass(thDescricao, 'mdl-data-table__cell--non-numeric');

            var thCodigo = createElemente('td');
            thCodigo.innerHTML = ige.codigo;
            addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

            var thClasse = createElemente('td');
            thClasse.innerHTML = ige.classe;
            addClass(thClasse, 'mdl-data-table__cell--non-numeric');


            var thPrazo = createElemente('td');
            thPrazo.innerHTML = ige.prazo;
            addClass(thPrazo, 'mdl-data-table__cell--non-numeric');

            var thAtivo = createElemente('td');
            thAtivo.innerHTML = ige.ativo;
            addClass(thAtivo, 'mdl-data-table__cell--non-numeric');

            tr.appendChild(thSeq);
            tr.appendChild(thDescricao);
            tr.appendChild(thCodigo);
            tr.appendChild(thClasse);
            tr.appendChild(thPrazo);
            tr.appendChild(thAtivo);

            tbody.appendChild(tr);
          }
        });
      }
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