
var num1;
var num2;
var soma;
var sub;
var produto;
var div;
var resto;


num1 = prompt("Digite o primeiro numero: ");
num2 = prompt("Digite o segundo numero: ");


soma = (parseInt(num1) + parseInt(num2));
sub = (parseInt(num1) - parseInt(num2));
produto = (parseInt(num1) * parseInt(num2));
div = (parseFloat(num1) / parseFloat(num2));
resto = (parseFloat(num1) % parseFloat(num2));



alert("Soma: " + soma + "\n"
     + "Subtração: " + sub + "\n"
     + "Produto: " + produto + "\n"
     + "Divisão: " + div + "\n"
     + "Resto: " + resto);

