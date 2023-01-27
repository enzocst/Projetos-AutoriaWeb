var fase1 = [];
var fase2 = [];
var fase3 = [];
var fase4 = [];
var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var fase1Counter = 0;
var fase2Counter = 0;
var fase3Counter = 0;
var fase4Counter = 0;
function verificar() {
    var ano = document.getElementById("anofilme").value;
    if (ano == "") {
        window.alert("Coloque um ano");
    }
    else {
        if (ano >= 2008 && ano <= 2012) {
            fase1[x1] = ano;
            fase1Counter++;
            x1++;
        }
        else if (ano >= 2013 && ano <= 2015) {
            fase2[x2] = ano;
            fase2Counter++;
            x2++;
        }
        else if (ano >= 2016 && ano <= 2019) {
            fase3[x3] = ano;
            fase3Counter++;
            x3++;
        }
        else if (ano >= 2020 && ano <= 2023) {
            fase4[x4] = ano;
            fase4Counter++;
            x4++;
        }
        else {
            window.alert("Coloque um ano entre 2008 e 2023.")
        }
    }
}
function resultado1() {
    var i = 0;
    conteudo1.innerHTML = "";
    while (i <= (x1 - 1)) {
        conteudo1.innerHTML = "";
        conteudo1.innerHTML = conteudo1.innerHTML + String(fase1[i]) + "<br>";
        i++;
        conteudo1.innerHTML = "Quantidade de filmes: " + fase1Counter + "<br>" + conteudo1.innerHTML;
    }
}
function resultado2() {
    var i = 0;
    conteudo2.innerHTML = "";
    while (i <= (x2 - 1)) {
        conteudo2.innerHTML = "";
        conteudo2.innerHTML = conteudo2.innerHTML + String(fase2[i]) + "<br>";
        i++;
        conteudo2.innerHTML = "Quantidade de filmes: " + fase2Counter + "<br>" + conteudo2.innerHTML;
    }
}
function resultado3() {
    var i = 0;
    conteudo3.innerHTML = "";
    while (i <= (x3 - 1)) {
        conteudo3.innerHTML = conteudo3.innerHTML + String(fase3[i]) + "<br>";
        i++;
        conteudo3.innerHTML = "Quantidade de filmes: " + fase3Counter + "<br>" + conteudo3.innerHTML;
    }
}
function resultado4() {
    var i = 0;
    conteudo4.innerHTML = "";
    while (i <= (x4 - 1)) {
        conteudo4.innerHTML = conteudo4.innerHTML + String(fase4[i]) + "<br>";
        i++;
        conteudo4.innerHTML = "Quantidade de filmes: " + fase4Counter + "<br>" + conteudo4.innerHTML;
    }
}
function maior() {
    var maior = fase1Counter;
    var array = "fase1";
    if (fase2Counter > maior) {
        maior = fase2Counter;
        array = "fase2";
    }
    if (fase3Counter > maior) {
        maior = fase3Counter;
        array = "fase3";
    }
    if (fase4Counter > maior) {
        maior = fase4Counter;
        array = "fase4";
    }
    if (maior === 0) {
        window.alert("Arrays vazios");
    } else {
        window.alert("Array com maior quantidade de informações registradas: " + array);
    }
}

function menor() {
    var menor = fase1Counter;
    var array = "fase1";
    if (fase2Counter < menor) {
        menor = fase2Counter;
        array = "fase2";
    }
    if (fase3Counter < menor) {
        menor = fase3Counter;
        array = "fase3";
    }
    if (fase4Counter < menor) {
        menor = fase4Counter;
        array = "fase4";
    }
    if (menor === 0) {
        window.alert("Arrays vazios");
    } else {
        window.alert("Array com menor quantidade de informações registradas: " + array);
    }
}
function compara() {
    if (fase1Counter == fase2Counter && fase1Counter == fase3Counter && fase1Counter == fase4Counter) {
        window.alert("Arrays com a mesma quantidade de informações registradas.");
    } else {
        maior();
        menor();
    }
}
