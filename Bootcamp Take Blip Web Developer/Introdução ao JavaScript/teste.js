//comentário de linha única (CRTL + /; pode selecionar várias linhas)
//var y = 0;
var x = 1;
/* comentário de múltiplas linhas 
var y = 0;
var x = 1; */
var z = 2;

//Sintaxe de uma função
function soma(a, b) {
    console.log(a + b);
    return a + b;
}

soma(x, z);

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${numeros[i]} não é par`)
        }
    }
    console.log("os números pares são", evenNums);

}

let numeros = [1, 2, 4, 5, 7, 8];

returnEvenValues(numeros);