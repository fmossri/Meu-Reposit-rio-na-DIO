# Coleções

- Map e Set - Coleções "chaveadas"



## Map

### Estrutura

- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop

### Métodos

const myMap = new Map()



myMap.set('apple', 'fruit');

//Map(1) {"apple"=>'fruit'}

myMap.get(apple);

//"fruit"

myMap.delete("apple");

//true

myMap.get("apple");

//undefined

### Map x Objeto

- Maps podem ter chaves de qualquer tipo; objetos sempre tem chaves no formato de string
- Maps possuem a propriedade length; obj não, vc precisa iterar por todas as propriedades para saber quantas tem;
- Maps sã mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido; obj é utilizado quando o valor da chave é conhecido
- Os valores são necessariamente do mesmo tipo; no objeto não é necessário

## Set

### Estrutura

- Estruturas que armazenam valores únicos

### Métodos

- Adicionar, consultar e deletar

const mySet = new Set();

mySet.add(1);

mySet.add(5);



mySet.has(1);

//true

mySet.has(3);

//false

mySet.delete(5);

### Set x Array

- Possui valores únicos, que não podem ser repetidos no mesmo set;
- Ao invés de length, size retorna o número de registros do set;
- Não possui os métodos map, filter, reduce, etc.