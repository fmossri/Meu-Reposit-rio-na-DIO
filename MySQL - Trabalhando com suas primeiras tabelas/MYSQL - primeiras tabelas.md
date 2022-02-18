# MySQL

objetivo: Criar uma tabela e manipular seus dados com comandos MySQL no phpMyAdmin



## Modelo Relacional

- Surgiu na década de 60 por Edgar Codd

- As tabelas são compostas por entidades, atributos e chaves. Cada entidade tem seus atributos, que são únicos, e uma chave.
- As chaves permitem o relacionamento entre os dados

ex. 

entidade pessoa, atributos nome e altura

### Porque usar tabelas?

- Dados organizados de forma estruturada
- Dados atômicos - O dado é único, e não pode existir em nenhum outro lugar
- Consulta e manipulação de dados simplificados



### Ferramentas

- MySQL - banco de dados gratuito
- phpMyAdmin - sistema gerenciador de banco de dados



### Criando tabelas

- CREATE TABLE
- Tipos: INT, VARCHAR, DATETIME
- CREATE TABLE pessoa (nome varchar(20), nascimento date);
- id INT NOT NULL PRIMARY KEY AUTOINCREMENT


### Inserindo Dados

- INSERT INTO
- Indicar as colunas que serão preenchidas e os respectivos valores
- INSERT INTO pessoas (nome, nascimento) VALUES ('Nathally', '1990-05-22');

## Selecionando dados

### Select e Update

- SELECT * FROM pessoa
- SELECT name FROM pessoa
- SELECT name, nascimento FROM pessoa



- UPDATE pessoa SET nome = 'Nathally Souza' - todos os valores de nome serão atualizados
- UPDATE pessoa SET nome = 'Nathally Souza' WHERE id=1; - atualiza o campo nome da pessoa de id=1;

## Deletando e ordenando dados

### DELETE

- DELETE FROM pessoas WHERE id=1;
- Não tem comando reverso
- Boa prática para se precaver:

SELECT * FROM pessoa WHERE id=5;

- verifica se a informação está correta,

- substitui SELECT * FROM por DELETE FROM:

DELETE FROM pessoa WHERE id=5;



### ORDER BY

- Ordena a forma como as informações serão exibidas - de forma crescente ou decrescente; por padrão, crescente.

- SELECT * FROM pessoa ORDER BY nome (DESC);

### ALTER TABLE

- ALTER TABLE 'pessoa' ADD 'genero' VARCHAR(1) NOT NULL AFTER 'nascimento';



## Agrupando

- Pode contar quantas informações atendem um determinado critério
- SELECT COUNT (qtd), GENERO FROM pessoas GROUP BY genero;

- 