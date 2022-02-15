# Debugging

- em JavaScript

## Tipos de Erros

### ECMAScript Error

- Erros que acontecem em tempo de execução;
- Composto por mensagem, nome, linha e call stack

- Erros que abrem alertas no navegador ou no sistema operacional são ECMAScript Error

### DOMException

- Erros relacionados ao Document Object Model(DOM).
- Ocorre na relação entre o código JavaScript e uma página da web;
- Erros referentes a estrutura da sua árvore de elementos dentro de uma página da web

## Tratando Erros

- Diferença entre "Throw" e "return"
- Impelentação da declaração try/catch - principal saída para tratamento de erros

### Throw

- Funciona como o return, mas na forma de mensagem de erro.

function verificaPalindromo(string) {

​	if (!string) return "string inválida";na ausência do parâmetro, retornará uma string com a mensagem.

}

if (!string) throw "string inválida"; --- "String inválida" retornará como uma mensagem de erro no console, e não como uma string .

### Try... catch

function verificaPalindromo(string){

​	if (!string) throw "String inválida";

​	return string === string.split('').reverse().join('');

}

function tryCatchExemplo(string) {

​	try{

​		verificaPalindromo(string)

​	}

​	catch(e) {

​		console.log(e)

​	}

}

// Retornará String inválida escrito no console, e não uma string com esse conteúdo.

- O try/catch manipula o resultado da função quando ela não cumpre suas condições;

- testa uma função em busca de um erro;

- o catch permite a manipulação do erro ocorrido no blolco try;
- o console.log do exemplo poderia ser substituído por "throw e";, retornando a mensagem em vermelho, assinalada como erro.

### Finally

...

finally {

console.log('A string enviada foi: ' + string);

}

- uma palavra reservada opcional, que virá depois do try/catch, que executará um conjunto de instruções independente de ter ocorrido erro ou não;

## Criando Erros

### O objeto error

new Error(message, fileName, lineNumber)

// todos os parâmetros são opcionais; os nomes dos parâmetros variam de browser pra browser;

const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;

- Pode ter um nome:

MeuErro.name = "InvalidMessage";

throw MeuErro; // InvalidMessage: ...