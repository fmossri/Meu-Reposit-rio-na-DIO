### MySQL e Workbench

## Introdução ao command line

- O command line é a operação do nosso database via terminal
- O terminal é a primeira forma como se faz uma conexão com o banco de dados
- No mercado de trabalho, muitas vezes o servidor é operado apenas via terminal

### Operações básicas 

- Linux: /opt/lampp/bin/mysql -u root
- Windows/mac: mysql -u root
- caso o usuário tenha senha, adicione -p e digite a senha



- show databases - mostra todos os databases presentes na máquina
- use dio_mysql - seleciona o database dio_mysql
- show tables - mostra as tabelas do database
- exit - sai do 



- DROP table usuarios; - deleta a tabela usuários;

deleta sem aviso e sem reversão;

- DROP database teste; - deleta o banco de dados teste;

deleta sem aviso e sem reversão;

- boa prática manter backup das tabelas e banco de dados.

## Modelo Relacional

- Relacionar informações entre várias tabelas
- Atomizar as informações
- As chaves estrangeiras, 'foreign keys', permitem o relacionamento das tabelas
- uma tabela pode ter n 'foreign keys'

- Cada campo contém um único atributo; uma tabela nunca terá um campo como 'características', com vários atributos.

### INNER JOIN

- visualizar a comunicação entre as tabelas

SELECT * FROM pessoas JOIN cursos ON pessoas.fk_cursos = cursos.id_cursos



*** VERIFICAR ARQUIVO dio.sql
