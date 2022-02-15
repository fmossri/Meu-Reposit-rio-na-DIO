# Método, Filter e Reduce

- Métodos importantes para Arrays



## Map

y = f(x)

Mapping function

y= 2x



1   -   2

2   -   4

3   -   6

- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem

### Sintaxe

array.map(callback, thisArg)

callback(item, index, array)

- Callback função a ser executada em cada elemento; tem acesso ao item, index e array -> index e array são opcionais
- thisArg(opcional): valor de 'this' dentro da função callback apenas se quiser fazer uma operação que vai variar de acordo com o objeto que você tem, e precisa que essa operação seja feita dentro do objeto.

### Map x forEach

//Usando Map

const array = [1, 2, 3, 4, 5];

array.map((item)=> item * 2); // retorno: [2, 4, 6, 8, 10];



//Usando forEach

array.forEach((item) => item * 2); // retorno: undefined -> necessario colocar essa operação dentro de uma constante para obter o retorno da função.



## Filter

- Cria um novo array com os itens que passaram pelas condições
- Não modifica o array original



### Sintaxe

array.filter(callback, thisArg);

- Callback: função a ser operada em cada elemento
- thisArg: valor de 'this' dentro da função de callback

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã'));

//retorno: ['maçã fuji', 'maçã verde'];



## Reduce

- Executa uma função em todos os elementos do array, retornando um valor único. o valor retornado pode ser uma array, mas pode também ser uma string, um número, etc



### Sintaxe

array.reduce(callbackFn, initialValue)



- Callback: função a ser executada a partir do acumulador

- initialValue(opcional): valor sobre o qual o retorno final irá atuar

const callbackFn = function (accumulator, currentValue, index, array) {

​	accumulator += currentValue;

}

array.reduce(callbackFn, initialValue);
