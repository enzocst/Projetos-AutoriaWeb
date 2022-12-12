var totalcandidatos = 0; 
var totalcandidatossim = 0; 
var totalcandidatosnao = 0;
function analisar(){
    var notaminimacandidato = 0;
    var nomecadidato = ""; 
    var notacandidato = 0; 
    notaminimacandidato = document.getElementById("notaminina").value;
    nomecadidato = document.getElementById("candidato").value;
    notacandidato = document.getElementById("nota").value;

    if (notaminimacandidato == "" || notaminimacandidato <= 0 || notaminimacandidato < 60){
        window.alert("Nota miníma está inválida");
        document.getElementById("notaminima").value="";
        totalcandidatosnao++;
        notaneg.innerHTML = String(totalcandidatosnao);
    }
    else if (nomecadidato == ""){
        window.alert("Nome do candidato está inválido");
        document.getElementById("candidato").value="";
        totalcandidatosnao++;
        notaneg.innerHTML = String(totalcandidatosnao);
    } 
    else if (notacandidato == "" || notacandidato <= 0){
        window.alert("Valor da nota está inválido");
        document.getElementById("nota").value="";
        totalcandidatosnao++;
        notaneg.innerHTML = String(totalcandidatosnao);
    } 
    else {
        totalcandidatossim = totalcandidatossim + 1;
        totalcandidatos = totalcandidatos + String(nomecadidato);
        analisados.innerHTML = String(totalcandidatos);
        aprovados.innerHTML = String(totalcandidatossim);
        document.getElementById('nomecandidato').value='';
        document.getElementById('notacandidato').value='';
        document.getElementById('notaminima').value='';
        document.getElementById('nomecandidato').focus();
    }
}
