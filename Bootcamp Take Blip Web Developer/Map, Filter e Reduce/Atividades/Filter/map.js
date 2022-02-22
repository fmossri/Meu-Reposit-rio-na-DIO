const meuArray = [1, 2, 3, 4, 5];

const maca = {
    value: 2
}
const laranja = {
    value: 3
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

console.log('this -> maçã', mapComThis(meuArray, maca));
console.log('this -> laranja', mapComThis(meuArray, laranja));
console.log(mapSemThis(meuArray));

//Filter
function filtraPares(arr) {
    return arr.filter(callback);
} 

//essa função poderia ser dada dentro dos parenteses de arr.filter, acima
function callback(item) {
    return item % 2 === 0;
}

console.log(filtraPares(meuArray));
//Reduce
function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}
console.log(somaNumeros(meuArray));



//Minhas tentativas
console.log(meuArray.map((item) => item * 2));

console.log(meuArray.filter((item) => item % 2 == 0));

const somaArray = meuArray.reduce(function(prev, current){ return prev + current;});
console.log(somaArray)
//meuArray.reduce(function() => accumulator += currentValue)
//meuArray.reduce(somaArray);

function verificaSaldo(precos, saldo) {
    const total = precos.reduce(function(prev, current){return prev + current});
    
    if (total >= saldo) { 
        console.log('Saldo insuficiente');
    }

}