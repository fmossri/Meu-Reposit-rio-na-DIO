# Sintaxe básica em JavaScript



## Variáveis

### Tipos primitivos

- Bool
- Number
- String
- Array
- Object
- Function
- null
- undefined

### Escopo

- Global - declaração fora de qualquer bloco, visibilidade disponível em todo o código;
- Local - declaração dentro de um bloco, visibilidade pode estar disponível ou não;

- var - global e local, valor alterável, pode declarar sem valor (undefined);
- let - local de bloco, valor alterável, pode declarar sem valor (undefined);
- const - local de bloco, somente leitura, valor inicial obrigatório.

### Regras de Uso

- iniciar com letras, underscore ou cifrão;
- camelCase ou separado_assim;
- não usar palavras reservadas (ex. var function);
- declarar variáveis no topo do bloco de código;

### Atribuição, Comparação, Comparação idêntica

- var a = 3; atribuição de valor; a = 4; mudou o valor de a;
- - x=y
  - x+=y
  - x-=y
  - x*=y
  - x/=y
  - x%=y
- a == 3; comparação de valores; nesse caso retornará true;
- var b = '3'; a === b; comparação total, de valor e tipo; nesse caso retornará false, pois 'a' guarda um inteiro, e 'b' uma string;
- a != b; confere se há diferença entre os valores; nesse caso retornará false; 
- a !== b; valor e tipos diferentes; no caso retornará true;

### Operadores aritméticos

- adição +

- subtração -

- multiplicação *

- divisão /

- módulo ou divisão inteira (retorna o resto) %

- potenciação **

- ++ incrementar

- -- decrementar

  

### Operadores relacionais

- maior que >
- menor que <
- maior ou igual a >=
- menor ou igual a <=

### Operadores lógicos

- && "e" - considera que todos os valores sejam true;
- || "ou" - considera que um ou outro seja true;
- ! "não" - inverte o valor de true para false ou vice-versa;

## Vetores e Objetos

### Array ou Vetores

let array = []; let array1 = [1, '1', true, array2[]]

### Manipulando Arrays

Métodos:

- array.forEach(function(item, index){instructions}) - itera por cada item de um array;
- array.push('novo item') - adiciona item ao final do array;
- array.pop() - remove do final do array;
- array.shift() - remove item do início;
- array.unshift('novo item') - adiciona item ao início;
- array.indexOf(valor) - retorna o índice de um valor;
- array.splice(início, fim, novo(s)Item(s)) - remove ou substitui um item pelo seu índice;
- array.slice(início, fim) - retorna uma parte de um array existente;

## Objetos

Dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves {}

- var xicara = {

  ​		cor: 'azul',

  ​		tamanho: 'p',

  ​		funcao: tomarCafe()

  }

- var object = {string: 'string', number: 1, boolean: true, array: ["array"], objetoInterno: {objetoInterno: "objeto interno"}}

### Manipulando Objetos

- var cor = xicara.cor;
- var tamanho = xicara.tamanho;
- var funcao = tomarCafe();
- console.log(object.objectInterno);
- var string = object.string; console.log(string)
- var arrayInterno = object.array; console.log(arrayInterno)
- var {} = object;
- var {string, boolean, objetoInterno} = object;

## Estruturas Condicionais

### If/else

- If (a > b) { return true;} else { return false;}
- If (a > b) {return 1;} else if (a < b){ return 2;} else{return 3;}
- a > b && a != 3 ? return true : return false;



if (condição) ? expressão1 : expressão2 

==

if (condição)

​	expressão1;

else

expressão2;



### Switch/case

switch(variavel){

​	case variavel = a > b:

​		return 1;

​		break;

​	case variavel = a < b;

​		return 2;

​		break;

​	default:

​		return 0;

}

## Estruturas de Repetição



### For, For/In, For/of

- For (expressãoInicial; condição; incremento){instruções;};

- For([indice] in [array ou objeto]){instruções;} - executa repetição a partir de uma propriedade:

- - for (let i in array){

    console.log(i); - imprimirá os indices de cada item em um array

    }

  - for (i in object){

    console.log(i); - percorrerá e imprimirá cada propriedade do objeto

    }

- For([indice] of [array]){instruções;} - executa repetição a partir de um valor; não se utiliza com objetos

- - for (i of array){

    console.log(i); - Imprimirá cada valor dentro da array;

    }

  - for (i of object.propriedade1) {

    console.log(i); - imprimirá o valor da propriedade 1 como se essa fosse uma array, então uma string virá separada por cada caractere.

    }

### While

- verifica a condição antes de executar as instruções:

var a = 0;

While (a < 10) {

​	a++;

console.log(a);

}

### Do while

- verifica a condição depois de executar as instruções:

var a = 0;

Do {

​	a++;

​	console.log(a);

} While (a < 10)



## Funções

- Blocos de comandos e instruções para a execução de determinadas tarefas.
- declara:

function nomeFuncao(){

​	${instrucao};

}

- chama:

nomeFuncao();

### Parâmetros

- parametros servem como variáveis de estado, sua atribuição pode ser feita durante a chamada da função:

function minhaFuncao(parametro){

${instrucao};

}

minhaFuncao(valorDoParametro); - o valor pode ser de qualquer tipo primitivo;



## Tipos de funções

### Função declarativa

- Funções de uso mais comum; deve ser declarada como function nomeFuncao(){};
- o nome da função é obrigatório;

### Expressões de funções

- funções atribuídas a expressões. Nomeação é opcional.

ex1. var funcao = function nomeFuncao(){;}

​		funcao();



ex2. var funcao = function(){};

​		funcao();



### Arrow Function

- Funções de expressão de sintaxe curta. Obrigatoriamente anônimas. deve ser declarada com parenteses, seguido de "=>" e chaves.

Ex.1 var funcao = () => {;}

​		funcao();

## Funções Aritméticas

Métodos nativos do JS:

- Number() - para converter valores em números;
- Prompt() - para registrar entradas de usuário; default interpreta como string
- Alert() - para mostrar mensagem ao usuário;
- Template Strings - para concatenar strings junto com expressões; entre crases. ('${variavel} texto `)
- stringMiaor = string1 + string2 -- concatena as strings