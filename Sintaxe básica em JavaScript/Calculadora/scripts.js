function calculadora() {
    const operacao = prompt("Escolha a operação:\n1: soma(+)\n2: subtração(-)\n3: multiplicação(*)\n4: divisão real(/)\n 5: divisão de inteiros(%)\n 6: Potenciação(**)\n");
    if (operacao > 0 && operacao < 7){
    var n1 = Number(prompt("digite o primeiro valor"));
    var n2 = Number(prompt("digite o segundo valor"));
    }
    else {
        alert("escolha entre 1 e 6");
        calculadora();

    }
    if (operacao == 1) {
        soma(n1, n2);
    }    
    else if (operacao == 2) {
        subtrai(n1, n2);
    }
    else if (operacao == 3) {
            multiplica(n1, n2);
    }
    else if (operacao == 4) {
        divide(n1, n2);
    }
    else if (operacao == 5) {
        modulo(n1, n2);
    }
    else if (operacao == 6) {
        eleva(n1, n2);
    }    
}

function soma(n1, n2){
    let resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtrai(n1, n2){
    let resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}
function multiplica(n1, n2){
    let resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}
function divide(n1, n2){
    let resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}
function modulo(n1, n2){
    let resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
}
function eleva(n1, n2){
    let resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`);
}

calculadora();