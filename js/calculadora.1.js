document.addEventListener("DOMContentLoaded", function () {

    if (!/calculadora/gi.test(window.location.pathname)) return;
    qs('.indiceHoma').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.indiceHomaFull.elementNotVisible');
        if (indiceHomaFull) {
            itemCalculadoraFull();
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#insulina',
                '#glicemia',
            ];
            var camposHTML = [
                '.homeBetaResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.indiceHomaFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.homaBetaCalcular').addEventListener('click', function (event) {
        var insulina = qs('#insulina');
        var glicemia = qs('#glicemia');
        if (!insulina.value || !glicemia.value) return;
        insulina = parseFloat(insulina.value.replace(',', '.'));
        glicemia = parseFloat(glicemia.value.replace(',', '.'));
        var homaIr = (glicemia * 0.055 * insulina) / 22.5;
        var homaBeta = (20 * insulina) / ((glicemia * 0.0555) - 3.5);

        var homeBetaResultado = qs('.homeBetaResultado');
        if (!homeBetaResultado) return;
        addClass(homeBetaResultado, 'alert');
        addClass(homeBetaResultado, 'alert-success');
        homeBetaResultado.innerHTML = `
            HOMA-IR: `+ arredondar(homaIr, 2) + `
            <br>
            HOMA-BETA: ` + arredondar(homaBeta, 2);

    });
    qs('.homaBetaLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#insulina',
            '#glicemia',
        ];
        var camposHTML = [
            '.homeBetaResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
    qs('.superficieCorporal').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.superficieCorporalFull.elementNotVisible');
        if (indiceHomaFull) {
            itemCalculadoraFull();
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#altura',
                '#peso',
            ];
            var camposHTML = [
                '.superficieCorporalResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.superficieCorporalFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.superficieCorporalCalcular').addEventListener('click', function (event) {
        var altura = qs('#altura');
        var peso = qs('#peso');
        if (!altura.value || !peso.value) return;
        altura = parseInt(altura.value);
        peso = parseFloat(peso.value.replace(',', '.'));
        var superficieCorporal = 0.007184 * Math.pow(altura, 0.725) * Math.pow(peso, 0.425);

        var superficieCorporalResultado = qs('.superficieCorporalResultado');
        if (!superficieCorporalResultado) return;
        addClass(superficieCorporalResultado, 'alert');
        addClass(superficieCorporalResultado, 'alert-success');
        superficieCorporalResultado.innerHTML = `
            Superfície Corporal: `+ arredondar(superficieCorporal, 2) + `m²
            <br>`;
    });
    qs('.superficieCorporalLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#altura',
            '#peso',
        ];
        var camposHTML = [
            '.superficieCorporalResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
    qs('.filtracaoGlomerular').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.filtracaoGlomerularFull.elementNotVisible');
        if (indiceHomaFull) {
            itemCalculadoraFull();
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#pesoFiltracao',
                '#creatPlasm',
                '#idade',
            ];
            var camposHTML = [
                '.filtracaoGlomerularResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.filtracaoGlomerularFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.formulaCock').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.formulaCockFull.elementNotVisible');
        if (indiceHomaFull) {
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#pesoFiltracao',
                '#creatPlasm',
                '#idade',
            ];
            var camposHTML = [
                '.filtracaoGlomerularResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.formulaCockFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.formulaCockCalcular').addEventListener('click', function (event) {
        var pesoFiltracao = qs('#pesoFiltracao');
        var idade = qs('#idade');
        var creatPlasm = qs('#creatPlasm');
        if (!creatPlasm.value || !pesoFiltracao.value || !creatPlasm.value) return;
        pesoFiltracao = parseFloat(pesoFiltracao.value.replace(',', '.'));
        idade = parseInt(idade.value);
        creatPlasm = parseFloat(creatPlasm.value.replace(',', '.'));
        var filtracaoGlomerular = ((140 - idade) * pesoFiltracao) / (creatPlasm * 72);

        var filtracaoGlomerularResultado = qs('.formulaCockResultado');
        if (!filtracaoGlomerularResultado) return;
        addClass(filtracaoGlomerularResultado, 'alert');
        addClass(filtracaoGlomerularResultado, 'alert-success');
        filtracaoGlomerularResultado.innerHTML = `
            Homens (valor multiplicado por 1.00) = <strong>`+ arredondar(filtracaoGlomerular * 1.00, 2) + ` (mL/min)</strong>
            <br>
            Mulheres (valor multiplicado por 0.85) = <strong>`+ arredondar(filtracaoGlomerular * 0.85, 2) + ` (mL/min)</strong>
            <br>`;

    });
    qs('.formulaCockLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#pesoFiltracao',
            '#creatPlasm',
            '#idade',
        ];
        var camposHTML = [
            '.filtracaoGlomerularResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
    qs('.formulaMDRD').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.formulaMDRDFull.elementNotVisible');
        if (indiceHomaFull) {
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#pesoFiltracao',
                '#creatPlasm',
                '#idade',
            ];
            var camposHTML = [
                '.filtracaoGlomerularResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.formulaMDRDFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.formulaMDRDCalcular').addEventListener('click', function (event) {
        var idade = qs('#idadeMDRD');
        var creatinina = qs('#creatininaMDRD');
        var gereno = qs('input[name="generoMDRD"]:checked')
        var etnia = qs('input[name="etniaMDRD"]:checked')
        if (!idade.value || !creatinina.value || !gereno || !etnia) return;
        idade = parseInt(idade.value);
        creatinina = parseFloat(creatinina.value.replace(',', '.'));
        var equacaoMDRD = (175 * Math.pow(creatinina, -1.154)) * (Math.pow(idade, -0.203));
        if (gereno.value === 'mulherMDRD') equacaoMDRD = equacaoMDRD * 0.742;
        if (etnia.value === 'afrodescendenteMDRD') equacaoMDRD = equacaoMDRD * 1.212;
        var resultado = qs('.formulaMDRDResultado');
        if (!resultado) return;
        addClass(resultado, 'alert');
        addClass(resultado, 'alert-success');
        resultado.innerHTML = `
            Resultado: `+ arredondar(equacaoMDRD, 2) + ` ml/min/1.73 m²`;

    });
    qs('.formulaMDRDLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#idadeMDRD',
            '#creatininaMDRD',
        ];
        var camposHTML = [
            '.formulaMDRDResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
    qs('.formulaCKD').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.formulaCKDFull.elementNotVisible');
        if (indiceHomaFull) {
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#pesoFiltracao',
                '#creatPlasm',
                '#idade',
            ];
            var camposHTML = [
                '.formulaCKDResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.formulaCKDFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.formulaCKDCalcular').addEventListener('click', function (event) {
        var idade = qs('#idadeCKD');
        var creatinina = qs('#creatininaCKD');
        var gereno = qs('input[name="generoCKD"]:checked')
        var etnia = qs('input[name="etniaCKD"]:checked')
        if (!creatinina.value || !creatinina.value || !gereno || !etnia) return;
        idade = parseInt(idade.value);
        creatinina = parseFloat(creatinina.value.replace(',', '.'));
        var k = 0.9;
        var a = -0.411
        if (gereno.value === 'mulherCKD') {
            k = 0.7;
            a = -0.329
        }
        var equacaoCKD = 141 * Math.pow(Math.min((creatinina / k), 1), a) *
            Math.pow(Math.max((creatinina / k), 1), -1.209) *
            (Math.pow(0.993, idade));
        if (etnia.value === 'afrodescendenteCKD') equacaoCKD = equacaoCKD * 1.159;
        if (gereno.value === 'mulherCKD') equacaoCKD = equacaoCKD * 1.018;
        var resultado = qs('.formulaCKDResultado');
        if (!resultado) return;
        addClass(resultado, 'alert');
        addClass(resultado, 'alert-success');
        resultado.innerHTML = `
            Resultado: `+ arredondar(equacaoCKD, 2) + ` ml/min/1.73 m²`;

    });
    qs('.formulaCKDLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#idadeCKD',
            '#creatininaCKD',
        ];
        var camposHTML = [
            '.formulaCKDResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
    qs('.formulaSchwartz').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.formulaSchwartzFull.elementNotVisible');
        if (indiceHomaFull) {
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#alturaSchwartz',
                '#creatininaSchwartz',
            ];
            var camposHTML = [
                '.formulaSchwartzResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.formulaSchwartzFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.formulaSchwartzCalcular').addEventListener('click', function (event) {
        var altura = qs('#alturaSchwartz');
        var creatinina = qs('#creatininaSchwartz');
        var valueK = qs('input[name="valueKSchwartz"]:checked')
        if (!altura.value || !creatinina.value || !valueK) return;
        altura = parseInt(altura.value);
        creatinina = parseFloat(creatinina.value.replace(',', '.'));
        var k = 0.33;
        if (valueK.value === 'infantilTermSchwartz')
            k = 0.45;
        else if (valueK.value === 'adolescenteMulherSchwartz')
            k = 0.55;
        else if (valueK.value === 'adolescenteHomemSchwartz')
            k = 0.70;
        var equacaoSchwartz = (k * altura) / creatinina;
        var resultado = qs('.formulaSchwartzResultado');
        if (!resultado) return;
        addClass(resultado, 'alert');
        addClass(resultado, 'alert-success');
        resultado.innerHTML = `
           Clearance da creatinina: `+ arredondar(equacaoSchwartz, 2) + `   mL/min/1,73m²`;

    });
    qs('.formulaSchwartzLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#alturaSchwartz',
            '#creatininaSchwartz',
        ];
        var camposHTML = [
            '.formulaSchwartzResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
    qs('.imc').addEventListener('click', function (event) {
        var indiceHomaFull = qs('.imcFull.elementNotVisible');
        if (indiceHomaFull) {
            itemCalculadoraFull();
            removeClass(indiceHomaFull, 'elementNotVisible');
            addClass(indiceHomaFull, 'itemCalculadoraFull');
            var camposValue = [
                '#pesoIMC',
                '#alturaIMC',
            ];
            var camposHTML = [
                '.imcResultado'
            ];
            limparCamposValue(camposValue);
            limparCamposHTML(camposHTML);
        }
        else {
            indiceHomaFull = qs('.imcFull');
            addClass(indiceHomaFull, 'elementNotVisible');
            removeClass(indiceHomaFull, 'itemCalculadoraFull');
        }
    });
    qs('.imcCalcular').addEventListener('click', function (event) {
        var pesoIMC = qs('#pesoIMC');
        var alturaIMC = qs('#alturaIMC');
        if (!pesoIMC.value || !alturaIMC.value) return;
        pesoIMC = parseFloat(pesoIMC.value.replace(',', '.'));
        alturaIMC = parseFloat(alturaIMC.value.replace(',', '.'));
        var imc = pesoIMC / (alturaIMC * alturaIMC);

        var imcResultado = qs('.imcResultado');
        if (!imcResultado) return;
        addClass(imcResultado, 'alert');
        addClass(imcResultado, 'alert-success');
        imcResultado.innerHTML = `
            Seu IMC ficou em: ` + arredondar(imc, 2);
    });
    qs('.imcLimpar').addEventListener('click', function (event) {
        var camposValue = [
            '#pesoIMC',
            '#alturaIMC',
        ];
        var camposHTML = [
            '.imcResultado'
        ];
        limparCamposValue(camposValue);
        limparCamposHTML(camposHTML);
    });
});

function itemCalculadoraFull() {
    var itens = Array.prototype.slice.call(document.querySelectorAll('.itemCalculadoraFull'));
    if (!itens.length) return;
    itens.forEach(function (item) {
        addClass(item, 'elementNotVisible');
    });
}

function arredondar(number, casas) {
    if (!casas) casas = 0;
    casas = Math.pow(10, casas);
    number = number * casas;
    return Math.floor(number) / casas;
}

function qs(element) {
    return document.querySelector(element) || null;
}

function limparCamposValue(campos) {
    campos.forEach(function (campo) {
        var c = qs(campo);
        if (c) c.value = '';
    });
}

function limparCamposHTML(campos) {
    campos.forEach(function (campo) {
        var c = qs(campo);
        if (c) {
            c.innerHTML = '';
            removeClass(c, 'alert');
            removeClass(c, 'alert-success');
        }
    });
}


/*
Aquivo atualizado, pelo amor de Deus Jorge e Matheus
*/