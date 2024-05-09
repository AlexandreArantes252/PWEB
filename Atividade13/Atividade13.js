function mDown(obj) {
    document.getElementById('titulo').innerHTML = "Janela Quebrada";
    obj.src = "janelaquebra.png"

}

function mMove(obj) {
    document.getElementById('titulo').innerHTML = "Janela Aberta";
    obj.src = "janelaaberta.png"
}

function mOut(obj) {
    document.getElementById('titulo').innerHTML = "Janela Fechada";
    obj.src = "janelafechada.png";
}

