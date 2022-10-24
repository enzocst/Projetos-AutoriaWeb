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
    if (name != null && name != "")
    {
    divexibirnome.innerHTML = string("Olá" + name + "! Tudo bem?");
    }
}
function somar()
{
    var numero1 = parseInt(window.prompt ("Digite um numero"));
    var numero2 = parseInt(window.prompt ("Digite outro numero"));
    var resultado = numero1 + numero2;
    divexibirnome.innerHTML = string(resultado);

}