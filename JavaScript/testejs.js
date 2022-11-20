//  window.alert("Boa tarde galera!")
function exibir_janela_alerta()
{
    var name = window.prompt ("Por favor digite seu nome aqui primeiro", "<Seu nome aqui>");
    if (name !=null && name !="")
    {
//    window.alert("Olá" + name + "! Tudo brother?");
    } else {
//        window.alert("Digita o texto animal!!")
    }
}
function exibir_num_objbody()
{
    var name = window.prompt ("Por favor digite seu nome aqui primeiro", "<Seu nome aqui>");
    if (name != null && name != "");
    {
    divexibirnome.innerHTML = String("Olá" + name + "! Tudo bem?");
    }
}
function somar(){
    var numero1 = parseInt(window.prompt ("Digite um número."));
    while (isNaN(numero1)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero1 = parseInt(window.prompt ("Digite um número."));
    }
    var numero2 = parseInt(window.prompt ("Digite outro número."));
    while (isNaN(numero2)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero2 = parseInt(window.prompt ("Digite outro número."));
    }
    var resultado = numero1 + numero2;
    divexibirresultado.innerHTML = String(resultado);
}
function subtrair(){
    var numero1 = parseInt(window.prompt ("Digite um número."));
    while (isNaN(numero1)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero1 = parseInt(window.prompt ("Digite um número."));
    }
    var numero2 = parseInt(window.prompt ("Digite outro número."));
    while (isNaN(numero2)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero2 = parseInt(window.prompt ("Digite outro número."));
    }
    var resultado = numero1 - numero2;
    divexibirresultadosub.innerHTML = String(resultado);
}
function multiplicar(){
    var numero1 = parseInt(window.prompt ("Digite um número."));
    while (isNaN(numero1)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero1 = parseInt(window.prompt ("Digite um número."));
    }
    var numero2 = parseInt(window.prompt ("Digite outro número."));
    while (isNaN(numero2)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero2 = parseInt(window.prompt ("Digite outro número."));
    }
    var resultado = numero1 * numero2;
    divexibirresultadomulti.innerHTML = String(resultado);
}
function dividir(){
    var numero1 = parseInt(window.prompt ("Digite um número."));
    while (isNaN(numero1)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero1 = parseInt(window.prompt ("Digite um número."));
    }
    var numero2 = parseInt(window.prompt ("Digite outro número."));
    while (isNaN(numero2)){
        window.alert("Ops, vc não digitou um número inteiro!")
        var numero2 = parseInt(window.prompt ("Digite outro número."));
    }
    var resultado = numero1 / numero2;
    divexibirresultadodiv.innerHTML = String(resultado);
}
function validaridade(){
    var idade = parseInt(window.prompt("Informe a idade da pessoa"));
    if (idade > 0 && idade >= 120) {
        window.alert("A idade é válida")
    } 
    else {
        window.alert("A idade não é válida");
    }
    var altura = parseFloat(window.prompt("Informe a altura da pessoa"))
    if (altura >= 1.20 && altura <= 2.30) {
        window.alert("A altura é válida")
    }
    else {
        window.alert("A altura não é válida");
    }
    divexibirresultadovalida.innerHTML = String(resultado);
}
function validarvalores(){
    var opcao = window.prompt("Validar: Idade - I; Altura - H; Idade e altura - T")
    validaridade(Option);
}.