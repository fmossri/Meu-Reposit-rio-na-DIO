const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const botao = document.getElementById('botao');


const getCats = async () => {
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));
    
    return data.webpurl;
    console.log(data.webpurl);
};
    /*try {
    const data = await fetch(BASE_URL);
    const json = await data;

    return json.webpurl;
    }
    catch(e) {
        console.log(e.message);
    }
};*/

const loadImg = async () => {
    const imagem = document.getElementById('imagem');
    imagem.src = await getCats();
    console.log(await getCats());
    console.log(imagem.src);
}
botao.addEventListener('click', loadImg());

loadImg();
/*async function fetchGatos() {
    const response = await fetch('https://thatcopy.pw/catapi/rest', {method:'GET', cache:'no-cache'
    }) 
        .then(response => response.json())

    document.getElementById('imagem').src = response.url;
    
}

document.getElementById('botao').addEventListener(click, fetchGatos());*/