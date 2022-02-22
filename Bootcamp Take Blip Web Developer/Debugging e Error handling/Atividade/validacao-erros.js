function confereParametros(arr, numero) {
    try {
        if (arguments.length < 2) throw new ReferenceError("Insira os parâmetros: (arr, numero)");
        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo 'object'");
        if (typeof numero !== 'number') throw new TypeError("Número precisa ser do tipo 'number'");
        if (arr.length !== numero) throw new RangeError("O tamanho de arr deve ser equivalente a numero");
        return arr;
        }
        

    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.name);
            console.log(e.stack);
        }
        else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.name);
            console.log(e.stack);
        }
        else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.name);
            console.log(e.stack);
        }
        else {
            console.log("Tipo de erro não esperado" + e);
        }
    }
}

const arrei = [1, 2, 3];

console.log(confereParametros());
console.log(confereParametros(arrei));
console.log(confereParametros(5, "5"));
console.log(confereParametros(5, 5));
console.log(confereParametros(arrei, "3"));
console.log(confereParametros(arrei, 4));
console.log(confereParametros(arrei, 3));