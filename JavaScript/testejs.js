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