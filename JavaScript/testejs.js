window.alert("Boa tarde galera!")
function exibir_janela_alerta()
{
    var name = window.prompt ("Por favor digite seu nome aqui primeiro", "<Seu nome aqui>");
    if (name !=null && name !="")
    {
    window.alert("Olá" + name + "! Tudo brother?");
    } else {
        window.alert("Digita o texto animal!!")
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
