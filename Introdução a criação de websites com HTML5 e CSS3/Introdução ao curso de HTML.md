# Introdução a criação de websites com HTML5 e CSS3



# HTML

## Estrutura Básica

- < !DOCTYPE html >, < html > 
- < head > - metadados, título
- e < body > - conteúdo

## Semântica

- Section - seção genérica de conteúdo ex. lista de artigos
- header - cabeçalho da página ou de uma parte (ex .section)
- article - conteúdo relevante dentro da página ex. artigo de blog
- aside - conteúdo relacionado ao conteúdo principal da página ex. barra lateral
- footer - rodapé da página ou de parte da pagina ex. article, section
- h1 - h6 - importância de um título dentro da página

### Textos e links em HTML

- < p > - Parágrafos - suporta não apenas texto, mas código, vídeo, etc
- < a > - Âncora - interliga conteúdos. 2 Atributos relevantes: 
- - - Href - indica para onde a ancora aponta, entre páginas do site, sites externos ou  até e-mail (prefixo mailto:) e telefone(prefixo tel:)
    - target - serve para indicar como vai ser aberto. _blank diz para abrir o link em uma nova aba.

### Imagens

- < img >
- < img src="img/avatar.jpg" >
- < img alt ="Foto do avatar do usuário" >

### Listas

- < ul > - lista desordenada
- < ol > - lista ordenada

# CCS

- Regras de estilo para elementos ou grupos de elementos
- Uma regra CSS é formada por um seletor ou grupo de seletores(elementos HTML) e declarações sobre eles entre chaves.

### Seletores

- Seletores de tipos: h1, p, header, a
- IDs elementos únicos: id="header" -> "#header"
- classes - grupos de elementos: class="post-title" -> ".post-title"

### Box Model

- conteúdo - o que o bloco representa, texto, imagem, video, etc
- padding - espaçamento interno, entre a borda e o conteúdo
- borda
- margem - espaçamento externo, entre elementos, além da borda



## Estilizando Elementos

### Padding e Margin

- padding: 10px(geral);
- padding: 10px(eixo y) 5px(eixo x);
- padding: 15px(topo) 10px(direita) 5px(inferior) 0(esquerda);

​		ou

- padding-top, padding-right, padding-bottom, padding-left (mais usado quando 3 lados são iguais)

### Background

- background-color: green; ou #008800; ou background: #008800;
- background-image: url("bg.png");
- background-position: top;

*Mozila Developer Network, MDN

### Border

- Largura: px, cm, mm...
- Cor: blue, #0000ff...
- Estilo: solid, dotted, dashed...
- - - border: 3px solid blue;
    - border-top 2px dotted green;
    - border-right: 4px dashed pink;

- Border-width, border-color, border-style; ou border-top-width, border-top-color, etc.
- Border-radius - arredonda os cantos. unidades mais comuns: 10px ou x%

## Estilizando Textos

### font-family

- altera a fonte do elemento
- pode receber mais de uma declaração, para caso a primeira falhe.
- Web-safe fonts - Verdana e Arial

### font-size

- altera o tamanho do texto. font-size: 30px;

### font-style

- altera a aparencia. valor normal é padrão. font-style: italic; obs. recomendável verificar se a fonte suporta

### font-weight

- altera o peso do texto. existem palavras chaves e numéricos em fontes complexas. em fontes mais simples, normal e bold são suficientes 
- font-weight: bold;

### text-transform

- uppercase - todas maiúsculas
- lowercase - todas minúsculas
- capitalize - transforma a primeira letra de cada palavra em maiúscula

### text-decoration

- usado para dar destaque, cria linhas
- underline, overline e line-trough;



## Estilizando Listas

### list-style-type

- Altera o símbolo que marca cada item de uma lista

- list-style-type: square; - em uma lista desordenada altera o símbolo para quadrados
- list-style-type: upper-roman; - em uma lista ordenada, altera os números para algarismos romanos
- list-style-type: ""\1F44D";  - em uma lista desordenada, altera para um símbolo, um emoji
- list-style-type: url("rocket.png"); - em uma lista desordenada, altera o símbolo para uma imagem 

## Dimensão e Alinhamento

- Width
- Height



- max-width
- max-height



- margin



- text-align

