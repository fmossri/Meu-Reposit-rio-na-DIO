# Variáveis e Tipos no JavaScript

- Atribuição de Valores - O que são variáveis, o que são constantes e diferença entre var const e let.
- Tipos - Primitivos e Não primitivos



### Case Type

Convenções e boas práticas

- Original Variable as String -		some awesome var
- Camel Case -                                 someAwesomeVar - comum no JavaScript
- Snake Case -                                 some_awesome_var
- Kebab Case -                                some-awesome-var
- Pascal Case -                                SomeAwesomeVar
- Upper Case Snake Case -           SOME_AWESOME_VAR - boa prática - utilizado para constantes

### Var e let

- var tem escopo global. antigamente era a única palavra reservada p/variáveis.
- let e const não existiam no início; têm escopo local de bloco:

var a = 1;

var b = 2;

if (a === 1) {

​	var a = 11; // o escopo é global

​	let b = 22; // o escopo é dentro do bloco "if"

console.log(a); // 11

console.log(b) // 22

}

console.log(a); // 11

console.log(b); // 2

- redeclaração só é possível com var;
- reatribuição é possível tanto para var quanto para let;
- todas variáveis seguem a regra camelCase.

### Hoisting

- Atribuir um valor a uma variável antes de declará-la;

- só é possível para a palavra var;

numberOne = 1;

console.log(numberOne + 2);

var numberOne;

- Se declarar let dará erro; se não declarar ou declarar depois, o próprio java script move a declaração para cima ou a cria quando o código é executado;

### Constantes

- Declarada em SNAKE_UPPER_CASE
- Escopo de Bloco
- Não faz hoisting
- Não pode ser modificado depois de declarado.



## Tipos

### Estruturas de Dados

- JS é uma linguagem de tipagem dinâmica e fraca.
- Não é necessário especificar o tipo antes de declarar o valor;
- É possível mudar o tipo de uma variável já declarada;

### Tipos de Dados no Java Script

- Divididos entre tipos primitivos e tipos compostos/não primitivos
- Tipos primitivos não tem métodos dentro dele, e são escritos em letras minúsculas
  - number, string, boolean
  - Empty, null e undefined, também conhecidos como Triviais/Outros Tipos de dado.
- Tipos não primitivos são objetos e arrays

### Strings

- Comumente utilizada para textos
- São sequencias de caracteres de todos os tipos
- Valores declarados entre aspas ou crases (aceita ${variável})
- tipo de dado iterável; toda string é uma array

string.concat(string2)

- let exemplo = "blablabla"
- let vazio = ""

tipo string

- let exemplo = new String("blablabla")

tipo objeto com todos os métodos disponíveis para strings

- string.split("") - separa a string caractere por caractere
- string.split(" ") - separa a string a cada espaço;
- string.include("pedaço") - verifica se existe dentro de string
- string.replace("?", "!") - retorna a string substituindo "?" por "!" 
- esses métodos não modificam a string, apenas retornam informações;

### Números

- Inteiros
- Decimais

- Math - objeto existente dentro do java script com vários métodos matemáticos. ex Math.PI

let cincoPorTres = 5 / 3

- Math.floor(cincoPorTres)

vai arrendondar para baixo

- Math.ceil(cincoPorTres)

arrendonda pra cima

numero.toString() - transforma número em string

### Booleanos

- Verdadeiro ou Falso
- Valida condicionais

### Arrays

- Vetores

let array = []

let array = new Array()

- array.includes(3) - verifica se há 3 dentro do array
- array.every(item=> item === 5) - verifica se todos itens são iguais a 5
- array.some(item => item === 5) - veirifca se algum dos itens é igual a 5
- array.reverse() - inverte os índices dos elementos

### Objetos

- Estrutura tipo "chave e valor", propriedade e valor; em outras estruturas de dados também se referem a esse tipo de estrutura como dicionário de dados, hash table ou hash map

let obj = {}

obj.name = "julia" - adiciona uma chave chamada name com valor "julia"

- Object.values(obj) - retorna uma lista com os valores de todas as propriedades do objeto
- Object.keys(obj) - retorna uma lista com o nome de todas as propriedades(chaves) do objeto

obj.name - retorna o valor da chave "name"

obj["name"] - idem



obj["numeroDeIrmaos"] = 3 - adiciona uma propriedade chamada numeroDeIrmaos com valor 3;



let mae = "nomeDaMae"

obj[mae] = "Bia"

=>

obj {nomeDaMae: "Bia"}



### Empty, null e undefined

não são nem true nem false.

- Empty - string declarada vazia: string = ""; Tipo: String
- null  - valor não foi inicializado; ele tem valor declarado propositalmente como nulo; Tipo: Object
- undefined - variável que o valor não foi definido. Tipo: Undefined