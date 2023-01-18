var fase1 = [];
var fase2 = [];
var fase3 = [];
var fase4 = [];
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
function verificar() {
    var ano = document.getElementById("anofilme").value;
    if (ano == "") {
        window.alert("Coloque um ano");
    }
    else {
        if (ano >= 2008 && ano <= 2012) {
            fase1[x1] = ano;
            x1++;
        }
        else if (ano >= 2013 && ano <= 2015) {
            fase2[x2] = ano;
            x2++;
        }
        else if (ano >= 2016 && ano <= 2019) {
            fase3[x3] = ano;
            x3++;
        }
        else if (ano >= 2020 && ano <= 2023) {
            fase4[x4] = ano;
            x4++;
        }
        else {
            window.alert("Coloque um ano entre 2008 e 2023.")
        }
    }
}
function resultado1() {
    var i = 0;
    while (i <= (x1 - 1)) {
        conteudo1.innerHTML = conteudo1.innerHTML + String(fase1[i]) + "<br>";
        i++;
    }
}
function resultado2() {
    var i = 0;
    while (i <= (x2 - 1)) {
        conteudo2.innerHTML = conteudo2.innerHTML + String(fase2[i]) + "<br>";
        i++;
    }
}
function resultado3() {
    var i = 0;
    while (i <= (x3 - 1)) {
        conteudo3.innerHTML = conteudo3.innerHTML + String(fase3[i]) + "<br>";
        i++;
    }
}
function resultado4() {
    var i = 0;
    while (i <= (x4 - 1)) {
        conteudo4.innerHTML = conteudo4.innerHTML + String(fase4[i]) + "<br>";
        i++;
    }
}