//Função para verificar e substituir números pares em um vetor
function trocaPares(arrayDeNumeros){
    //verifica se o vetor está vazio
    if (arrayDeNumeros.length <= 0){
        return -1
    }
    //com um vetor válido, verifica se cada elemento é par, e o substitui por 0 se for.
    else {
        for (let i = 0; i < arrayDeNumeros.length; i++) {
    
            if (arrayDeNumeros[i] % 2 == 0 && arrayDeNumeros[i] != 0){
                arrayDeNumeros.splice(i , 1, 0);
            
            }
        }
        console.log(arrayDeNumeros);
    }
}

let numeros = [11, 2, 20, 2022, 1, 27, 28];
trocaPares(numeros);