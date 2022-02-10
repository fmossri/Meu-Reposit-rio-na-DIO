var botao = document.getElementById('botao');
botao.addEventListener("click", adicionaTarefa);
var lista = document.getElementById('lista');

function adicionaTarefa() {
    var tarefa = document.getElementById('tarefa').value;
    lista.innerHTML += "<div><input type='checkbox'><p>"+ tarefa + "</p></div>";
}
