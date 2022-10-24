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
    divexibirnome.innerHTML = string("Olá" + name + "! Tudo bem?");
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