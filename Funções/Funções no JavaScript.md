# Função

- funções comuns fazem hoisting!

### Estrutura

function nome(parametros) {

​		instruções;

​		return;

}

- "variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela"
- Return interrompe a função

### Função anônima

const soma = function (a, b) {

​		return a + b;

}

soma(1, 2); //

soma(5, 4); //

### Função autoinvocada

IIFE (Immediately Invoked Function Expression)

(

function() {

​		let name = "Digital Inovation One";

​		return name;

}

)();

- "Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada".
- Também pode receber parâmetros ou ser armazenada em variável

(

function(a, b) {

​	return a + b;

}

)(1, 2);

// 3

### Callbacks

- Função passada como argumento para outra
- Callbacks dão mais controle sobre a ordem de chamadas

const calc = function( orepacao, num1, num2){

​	return operacao(num1, num2);

}

const soma = function(num1, num2) {

​		return num1 + num2;

}

const sub = function(num1, num2) {

​		return num1 - num2;

}

const resultSoma = calc(soma, 1, 2);

const resultSub = calc(sub, 1, 2);



console.log(resultSub); // -1

console.log(resultSoma); // 3

## Parâmetros

### Valores padrão

- Valor padrão usado caso o usuário não envie um parâmetro opcional

Pré-ES2015:

function exponencial(array, num) {

if (num === undefined){

num = 1; ///

}}

Pós-ES2015:

function exponencial(array, num = 1///) 

### Objeto "arguments"

- Um array com todos os parâmetros passados quando a função foi invocada

function findMax() {

let max = -Infinity;

}

for (let i = 0; i < arguments.length; i++) {

​	if (arguments[i] > max) {

​		max = arguments[i];

​	}

​	return max;

}

function showArgs() {

return arguments;

}

showArgs(1, 2, [2, 3, 4], "string")

Arguments(4) [1, 2, Array(3), "string", callee: f, Symbol(Symbol.iterator): f]

0: 1

1: 2

2: (3) [2, 3, 4]

3: "string"



## Arrays



### Spread 

- uma forma de lidar separadamente com elementos"

function sum(x, y, z) {

​		return x + y + z;

}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

- usando reticências, ele separa os elementos do array numbers entre os parâmetros da função sum

- "O que era parte de um array se torna um elemento independente."

### Rest

- ...args

- Combina os argumentos em um array

function confereTamanho(...args) {

​		console.log(args.length)

}



confereTamanho() // 0

confereTamanho(1, 2) // 2

confereTamanho(3, 4, 5) // 3



## Objetos

### Desestruturação de Objeto

- "Entre chaves {}, podemos filtrar os dados que nos interessam em um objeto."

const user = {

id: 42,

displayName: 'jdoe',

fullName: {

firstname: 'John',

lastname: 'Doe'

}};

function userId({id}){

​	return id;

}

function getFullName({fullName: {firstName:first, lastName: last}}) {

​	return `${first} ${last}`;

}

userId(user)

// 42

getFullName(user)

// John Doe



## Loops

### If/Else

- É possível armazenar a condição em uma constante por legibilidade do código. 

const ehNegativo = num < 0;

if (ehNegativo) {

​	resultado = false;

}

else {

​	resultado = true;

}

function numeroPositivo(num){

const ehNegativo = num < 0;

const maiorQueDez = num > 10;

if(ehNegativo) {

​	return "esse número é negativo!";

}else if (!ehNegativo && maiorQueDez) {

​	return "Esse número é positivo e maior que 10!"

}

​	return "Esse número é positivo!";

}

### Switch/case

- Para casos com muitas verificações, economiza espaço em relação ao if
- Equivale a uma comparação de tipo e valor (===) sempre
- Sempre precisa de um valor "default"
- Ideal para quando se precisa comparar muitos valores

function getAnimal(id) {

switch(id){

​	case 1:

​		return "cão";

​	case 2:

​		return "gato";

​	case 3: 

​		return "pássaro";

​	default:

​		return "peixe";

​	}

}

getAnimal(1) // cão

getAnimal(4) // peixe

getAnimal("1") // peixe

### For

- Loop através de elementos iteráveis (arrays, strings).

### For in

- Loop entre propriedades enumeráveis de um objeto

function forInExemplo(obj){

​	for (prop in obj) {

​		console.log(prop)     /// console.log(obj[prop]) para retornar os valores, e não as propriedades

​	}

}

const meuObjeto = {

nome: "João",

idade: "20",

cidade: "Salvador"

}

forInExemplo(meuObjeto);

//nome

//idade

//cidade

### For of

- Loop entre estruturas iteráveis (arrays, strings)

function logLetras(palavra) {

​	for (letra of palavra){

​		console.log(letra);

​	}

} retornará cada letra da palavra

### While

- Executa instruções até que a condição se torne falsa; a verificação é feita antes da instrução ser realizada.



### Do While

- Executa a instrução até que se torne falsa, mas sempre executa pelo menos uma vez; a verificação é feita após a instrução

## This

- Palavra reservada que é uma referencia de contexto;

const pessoa = {

​	firstName: "André",

​	lastName: "Soares",

​	id: 1,

​	fullName: function() {

​		return this.firstName + " " + this.lastName;

​	},

​	getId: function() {

​		return this.id;

​	}

};

- No caso "this" refere-se ao objeto pessoa

- Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

  - Em um método de objeto ela se refere ao próprio objeto dono do método

  - Sozinha se refere ao objeto global, o objeto pai de todo o documento (em navegadores, window)

  - Dentro de uma função ela se referirá ao objeto global, objeto pai da função

  - Dentro de um evento, se referirá ao elemento html que recebeu o evento;

    ## Manipulando o valor de this

    

  ### Call

  - passa a uma função um valor para this

  const pessoa = {

  ​	nome: 'Miguel',

  };

  const animal = {

  ​	nome: 'Murphy',

  };

  function getSomething() {

  console.log(this.nome);

  }

  getSomething.call(pessoa);

  // Miguel

- É possível passar parâmetros para essa função separando-os por vírgulas:

const myObj = {num1: 2, num2: 4};

function soma(a, b) {console.log(this.num1 + this.num2 + a + b);

}

soma.call(myObj, 1, 5);

// 12

### Apply

- Como a call, mas se ao passar argumentos, eles são passados dentro de um array:

const myObj = {num1: 2, num2: 4};

function soma(a, b) {

​	console.log(this.num1 + this.num2 + a + b);

}

soma.apply(myObj, [1, 5]);

### Bind

- Clona a estrutura da função onde é chamada e aplica o valor do obj passado como parâmetro:

const retornaNomes = function () {

return this.nome;

};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();

// Bruno

## Arrow functions

const helloWorld = function(){

return "Hello World";

} 

equivalente a-->

const helloWorld = () => {return "Hello World";

}

- Quando a arrow function é muito pequena e possuir apenas 1 linha, ela retorna o que está depois da seta:

const helloWorld = () = "Hello World";

- Quando a função possui apenas um parâmetro, pode-se dispensar os parênteses:

const soma = (a, b) => a + b;

soma(4, 6);

// 10

const algo = a => a;

algo("coisa");

// "coisa"

- Não faz hoisting

### Outras restrições

- valor 'this' sempre será o objeto global. Call, Apply e Bind não funcionam;
- Não existe o objeto "arguments";
- O construtor (ex: new MeuObjeto()) também não funciona.