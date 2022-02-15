function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa = {
    nome: "Norma",
    idade: 32
}

console.log(calculaIdade.call(pessoa, 5));
console.log(calculaIdade.apply(pessoa,[8]));