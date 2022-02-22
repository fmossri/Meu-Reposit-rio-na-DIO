function igualdadeSomaComparacao(n1, n2){
    let igualdade;
    let soma = n1 + n2;
    let maiorQue10;
    let menorQue20;
    
    n1 == n2 ? igualdade = "são" : igualdade = "não são";
    soma < 10 ? maiorQue10 = "menor que" : maiorQue10 = "maior que";
    if (soma == 10){
        maiorQue10 = "igual a";
    }
    soma < 20 ? menorQue20 = "menor que" : "maior que";
    if (soma == 20){
        menorQue20 = "igual a";
    }


    console.log(`Os números ${n1} e ${n2} ${igualdade} iguais. Sua soma é ${soma}, que é ${maiorQue10} 10 e ${menorQue20} 20.`);
    alert(`Os números ${n1} e ${n2} ${igualdade} iguais. Sua soma é ${soma}, que é ${maiorQue10} 10 e ${menorQue20} 20.`);
}

var num1 = Number(prompt("Insira um número: "));
var num2 = Number(prompt("Insira um número: "));

igualdadeSomaComparacao(num1, num2);


