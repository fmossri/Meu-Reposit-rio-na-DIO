# MySQL - Consultas com Join

- Consultas com várias tabelas
- INNER JOIN  e OUTER JOIN
- LEFT JOIN e RIGHT JOIN
- Cláusula UNION - Unir várias consultas diferentes

### JOIN e AS

SELECT * FROM videos_canais AS vc 

JOIN videos AS v ON vc.fk_video = v.id_video

JOIN canais AS c ON vc.fk_canal = c.id_canal;

### INNER JOIN

- INNER JOIN = JOIN
- Retorna os valores presentes na consulta, ou seja, não traz nenhum campo sem relacionamento: se existir um video que não está em nenhum canal, ele não será exibido. Para exibir esses valores fora de relacionamentos, é necessário usar OUTER JOIN

### OUTER JOIN

- Necessário declarar acompanhado de RIGHT, LEFT, FULL ou CROSS
- Mais comumente, RIGHT ou LEFT

### RIGHT E LEFT JOIN

- Especificam qual tabela trará informações sem relacionamentos;
- por exemplo, videos LEFT OUTER JOIN canais trará todos os vídeos, mostrando a quais canais pertencem, e declarando null para aqueles vídeos que não existem em canais. No mesmo exemplo, RIGHT OUTER JOIN traria todos os canais com seus respectivos vídeos, declarando null para canais sem vídeo.

### UNION

- Só pode ser usado quando o número de colunas da consulta é igual
- serve para fazer mais de uma consulta ao mesmo tempo