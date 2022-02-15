# Orientação a Objetos

- O paradigma no JavaScript



### Paradigmas da Programação

- Formas de programar

- Imperativo - Procedural, Orientação a Objetos
- Declarativo - Programação funcional, banco de dados SQL

### Orientação a Objeto

- Os programas são 'objetos' que possuem uma série de propriedades.
- ex. objeto cidade com propriedades idade, população, etc

- 4 Pilares - Herança, Polimorfismo, Encapsulamento, Abstração

### Abstração

- "Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação com o mesmo".

Carro > veículo de rodas > veículo

### Herança

- Objeto filho herda propriedades e métodos do objeto pai.

### Encapsulamento 

- Cada classe tem propriedades e métodos independentes do restante do código.

### Polimorfismo

- Objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente quando invocamos seus métodos.



## OOJS

JavaScript orientado a objetos

- Protótipos e cadeias de protótipos
- Estrutura de classes em JS

### Protótipos

- Esqueleto de todos os objetos. Todos os objetos do JS herdarão propriedades e métodos de um protótipo.
- O objeto Object.prototype está no topo desta cadeia.

### Classes no JS

- Não existem nativamente; Todas as classes são objetos e a herança se dá por protótipos.
- syntatic sugar: sintaxe feita para facilitar a escrita
- constructor, getter e setter, super(), metódo

var Meal = function(food) {

​	this.food = food

}

Meal.prototype.eat = function() {

​	return 'humm'

} OLD

->->->

class Meal {

​	constructor (food) {

​		this.food = food

​	}

​	eat() {

​		return 'humm'

​	}

}NEW

