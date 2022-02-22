# Assincronicidade

- Que não ocorre de forma simultânea
- JavaScript, por padrão, roda de maneira síncrona.

## Promises

- Objeto de processamento assíncrono
- Inicialmente seu valor é desconhecido. Ela pode, então ser resolvida ou rejeitada.



​					Resolved

Pending		.then()			Pending

Promise<							>Promise

​						.catch()

​					Rejected

- Pode ter 3 estados: Pending, Fulfilled, Rejected

### Estrutura

const myPromise = new Promise((resolve, reject) => {

​		window.setTimeout(() => {

​				resolve(console.log('Resolvida!'));

}, 2000);

});

### Manipulação

await myPromise

​				.then((result) => result + ' passando pelo then')

​				.then((result) => result + 'e agora acabou!')

​				.catch((err) => console.log(err.message));

//Após 2 segundos, retornará o valor

//"Resolvida passando pelo then e agora acabou!"

## Async/await

- Funções assíncronas precisam dessas duas palavras chave.

### Async

- Existe para definir funções assíncronas;
- Quando vc vai resolver uma 'promise' vc precisa dizer que a função vai ser assíncrona para usar a palavra 'await'

async function resolvePromise() {

​	const myPromise = new Promise((resolve,reject) => {

​		window.setTimeout(() => {

​			resolve('Resolvida');

}, 3000);

});

​	const resolved = await myPromise

​				.then((result) => result + ' passando pelo then')

​				.then((result) => result + ' e agora acabou!')

​				.catch((err) => console.log(err.message));

​	return resolved;

}

### Await

-  Parará o código para esperar a 'promise' ser resolvida;

### Utilizando o try... catch

...

try {

result = await myPromise

​		.then((result) => result + ' passando pelo then')

​		.then((result) => result + ' e agora acabou!')

} catch(err) {

result = err.message;

}

return result

...



## Consumindo APIs

### APIs

- Application Programing interface
- Uma forma de intermediar os resultados do back-end com o que é apresentado no front-end
- Possível acessá-las por meio de URLs.
- JSON: JavaScript Object Notation
- É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.

### Estrutura JSON

​	{

​		"description": "schema POST bank",

​		"type": "object",

​		"properties": {

​		"id": {

​			"type": "number",

​			"minimum": 0

​		},

​		"name": {

​			"type": "string"

​		}

​	}

}

### Fetch

fetch(url, options)

​	.then(response => response.json())

​	.then(json => console.log(json))

// retorna uma Promise

- Pesquisar na doc do JS os tipos de opções que podem ser utilizadas em uma requisição;
- Necessário sempre converter a resposta para .json, casa venha no tipo 'string';
- retorna uma Promise, portanto é preciso usar 'await' quando for utilizar o 'fetch';

### Operações no banco (POST, GET, PUT, DELETE, etc)

fetch ('https://endereco-api.com/', {

​	method: 'GET',

​	cache: 'no-cache',

})

​	.then(response => response.json())

​	.then(json => console.log(json))

// retorna uma Promise

fetch('https://endereco-api.com', {

​	method: 'POST',

​	cache: 'no-cache',

​	body: JSON.stringify(data)

})

​	.then(response => response.json())

​	.then(json => console.log(json))

// retorna uma Promise