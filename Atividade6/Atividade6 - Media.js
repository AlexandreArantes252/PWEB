
var nota1;
var nota2;
var nota3;
var nome;
var media 

nome = prompt("Qual o nome do aluno?");
nota1 = prompt("Qual a primeira nota?");
nota2 = prompt("Qual a segunda nota?");
nota3 = prompt("Qual a terceir nota?");

media = (((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(2));

alert("O aluno " + nome + "possui a media de " + parseFloat(media));

confirm("FATEC");