const meuBotao = document.getElementById('mode-selector');
const corpo = document.getElementsByTagName('body');
const rodape = document.getElementsByTagName('footer');
const titulo = document.getElementById('page-title');
const darkModeClass = 'dark-mode';
/*
function alternaModo() {

    meuBotao.classList.toggle("dark-mode");
    corpo[0].classList.toggle("dark-mode");
    rodape[0].classList.toggle("dark-mode");

    if (titulo.innerHTML.includes('Light')){
        titulo.innerHTML = "Dark Mode ON"
        meuBotao.innerHTML = "Light Mode";
        return;
    }
    else {
        titulo.innerHTML = "Light Mode ON";
        meuBotao.innerHTML = "Dark Mode";
        return;
    }

}
meuBotao.addEventListener('click',alternaModo); 
*/

function alternaModo() {
    alternaClasses();
    alternaTextos();
}

function alternaClasses() {
    meuBotao.classList.toggle(darkModeClass);
    corpo[0].classList.toggle(darkModeClass);
    rodape[0].classList.toggle(darkModeClass);
}

function alternaTextos() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if (meuBotao.classList.contains(darkModeClass)){
        meuBotao.innerHTML = lightMode;
        titulo.innerHTML = darkMode + ' ON';
        return;
    }
    else {
        meuBotao.innerHTML = darkMode;
        titulo.innerHTML = lightMode + ' ON';
    }
}

meuBotao.addEventListener('click',alternaModo); 