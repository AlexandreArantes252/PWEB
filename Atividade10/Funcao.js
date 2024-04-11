/* - Atividade 1
var varNumber1 = prompt("Digite o 1º Numero: ");
var varNumber2 = prompt("Digite o 2º Numero: ");
var varNumber3 = prompt("Digite o 3º Numero: ");

function maior(varNumber1, varNumber2, varNumber3) {
        if(varNumber1 > varNumber2){
            return(varNumber1);
        }else if(varNumber2 > varNumber3){
            return(varNumber2);
        }else if(varNumber3 > varNumber1){
            return(varNumber3);
        }
    }

    alert("O maior número é: " + maior(varNumber1, varNumber2, varNumber3)); */



/* - Atividade 2
var order = [3];


for(var i = 0; i < 3; i++){
    order[i] = prompt("Digite o numero para ser ordenado: ");
}

function ordenar(matriz){
    matriz.sort(function(a,b){return a-b});
    alert("Os numeros ordenados são: " + matriz[0] + " " + matriz[1] + " " + matriz[2]);
}

ordenar(order); */



/* - Atividade 3

var palavra = prompt("Digite a palavra para verificar se é um Palindromo: ");
var reverterString;

function palindromo(palavra) {
    palavra = palavra.replace(/\s/g, '').toLowerCase();
    reverterString = palavra.split('').reverse().join('');
    
    if (palavra === reverterString) {
        return ("é um Palindromo");
    } else {
        return ("não é um Palindromo");
    }
}

alert("Essa palavra: " + palindromo(palavra)); */

/* - Atividade 4
var varNumberA = parseInt(prompt("Digite o 1º valor: "));
var varNumberB = parseInt(prompt("Digite o 2º valor: "));
var varNumberC = parseInt(prompt("Digite o 3º valor: "));


function triangulo(varNumberA,varNumberB,varNumberC){
    if(Math.abs(varNumberB - varNumberC) < varNumberA && varNumberA < (varNumberB + varNumberC) && Math.abs(varNumberA - varNumberC) < varNumberB && varNumberB < (varNumberA + varNumberC) && Math.abs(varNumberA - varNumberB) < varNumberC && varNumberC < (varNumberA + varNumberB)){
        if(varNumberA == varNumberB && varNumberB == varNumberC){
            return ("é um triangulo equilatero");
        }else if(varNumberA != varNumberB && varNumberB != varNumberC && varNumberA != varNumberC){
            return ("é um triangulo escaleno");
        }else{
            return ("é um trinagulo isoceles");
        }
    } else{
            return ("Não é triangulo")
        }


}

    alert("Os números digitados são: " + triangulo(varNumberA, varNumberB, varNumberC)); */
