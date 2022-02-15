# DOM no JS



### DOM

- Document Object Model - Árvore de elementos de um documento html; a raíz é 'document', a tag raiz é 'html';

### BOM

- Browser Object Model - tudo o que está dentro do objeto window;
- Árvore de dependencias que existe dentro da janela. O DOM está dentro dela;

- window é a raiz, e abaixo dela estão document, history, location, screen, navigator;



## Métodos do DOM

- Métodos para interagir com os elementos html

### Estrutura HTML

- Tag
- Classe - Identificadores de elementos repetidos
- Id - identificador único

## Selecionando os elementos de uma página

### getElementBy

- document.getElementById('id'); - retorna o elemento
- document.getElementByTagname('tag'[indice]); - retorna um array
- document.getElementByClassName('class');  - retorna um array

### querySelector

- document.querySelectorAll('.primeira-classe . segunda-classe')
- document.querySelectorAll('li .opcao');

### Adicionar e deletar elementos

- document.createElement(element) - cria novo elemento html
- document.removeChild(element) - remove um elemento
- document.appendChild(element) - adiciona um elemento
- document.replaceChild(new, old) - substitui um elemento

## Manipulando Estilos

Element.classList - representa a lista de classes

< div id="meu-elemento" class="classe" >

//resto do codigo aqui

< /div>

const meuElemento = document.getElementById("meu-elemento");

- meuElemento.classList.add("novo-estilo"); - adiciona a classe "novo-estilo"

- meuElemento.classList.remove("classe") - remove a classe "classe"

- meuElemento.classList.toggle("dark-mode") - Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça

### CSS

Acessando diretamente o CSS de um elemento

- document.getElementsByTagName("p").style.color = "blue";

## Eventos

Qualquer tipo de ação que um usuário faz numa página da web



### Tipos

- Eventos de mouse - mouseover, mouseout
- Eventos de clique - click, dbclick(cliques duplos)
- Eventos de atualização - Change (quando um valor de um campo mudar, load (ao terminar de carregar uma página)

### Event Listener

Diretamente no JS, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

const botao = document.getElementById("meuBotao");

botao.addEventListener("click," outraFuncao);

### Atributo HTML

Especifica a função a ser chamada diretamente no elemento HTML

- Eventos no html ganham o prefixo on: onmouseover, onmouseout, ondbclick, etc

< html >

< body >

< h1 onclick="mudaTexto(this)" >Clique aqui!< /h1 >

< script >

​	function mudaTexto(id) {

​	id.innerHTML = "Mudei!";

}

< / script >

< /body >

< /html >





