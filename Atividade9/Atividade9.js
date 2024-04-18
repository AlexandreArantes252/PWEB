var altura = prompt("Digite sua Altura: ");
var peso = prompt("Digite sua Peso: ");
altura = parseFloat(altura);
peso = parseFloat(peso);

function IMC(a, p){
    totalIMC = p/Math.pow(a,2);
    return totalIMC
}



    var resultado = IMC(altura, peso);
    resultado = Math.round(resultado,1);
    alert(resultado);

    switch (true){
        case resultado < 18.5:
            alert("Magreza");
            break;
        
        case resultado > 18.5 && resultado < 24.9:
            alert("Normal");
            break;

        case resultado > 24.9 && resultado < 29.9:
            alert("Sobrepeso");
            break;

        case resultado > 29.9 && resultado < 39.9:
            alert("Obesidade");
            break;

        case resultado > 39.9:
            alert("Obresidade Grave");
            break;

        default:
            alert("Nenhum dos cados");
    }
