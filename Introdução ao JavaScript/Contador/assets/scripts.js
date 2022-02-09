 
 //cria variável para armazenar o elemento span
 var currentNumberWrapper = document.getElementById('currentNumber');
 //cria variável de contador
 var currentNumber = 0;
 //cria constante para armazenar o botão de adicionar
const adiciona = document.getElementById('adicionar');
//cria eventlistener de clique para o botão de adicionar
adiciona.addEventListener("click", increment);
//cria constante para armazenar o botão de subtrair
const subtrai = document.getElementById('subtrair');
//cria eventlistener de clique para o botão de subtrair
subtrai.addEventListener("click", subtract);

//função para incrementar o número do contador, com limite em 10
function increment() {
    if (currentNumber <= 9) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    changeColor();
}

//função para diminuir o número do contador, com limite em -10
function subtract() {
    if (currentNumber >= -9) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    changeColor();
}

//Função para mudar a cor do número, vermelho abaixo de zero, e preto acima.
function changeColor() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    }
    else if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "black";
    }
}
