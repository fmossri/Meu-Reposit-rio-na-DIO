function palindromo(string1){
    let reverso = string1.split("").reverse().join("");
    console.log(reverso);
    string1 == reverso ? console.log(`${string1} é um palíndromo`): console.log(`${string1} não é um palíndromo`);


}

function outroPalindromo(string1){
    let stringInvertida = "";

    for (let i = string1.length - 1; i >= 0; i--){
        stringInvertida += string1[i];
    }

    string1 == stringInvertida ? console.log(`${string1} é um palíndromo`): console.log(`${string1} não é um palíndromo`);
}
let nome = "Ovo";
let frase = "O Merlim foi expulso"

palindromo(nome);
outroPalindromo(frase);