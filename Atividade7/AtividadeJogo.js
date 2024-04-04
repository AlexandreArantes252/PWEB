
while (true){

    var respJogador = prompt("Insira as opções abaixo, para jogar: " + "\n" + "1-Pedra" + "\n" + "2-Papel" + "\n" + "3-Tesoura");
    var respMaquina = Math.floor(Math.random(0,1) * 3 + 1);

    if(respMaquina == 1){
        if(respJogador == 1){
            alert("\n" + "A maquina jogou: " + "Pedra" + "\n" + "\n" + "Voce jogou: " + "Pedra" + "\n" + "Empate");
        }else if(respJogador == 2){
            alert("\n" + "A maquina jogou: " + "Pedra" + "\n"  + "\n" + "Voce jogou: " + "Papel" + "\n" + "Voce ganhou");
        }else{
            alert("\n" + "A maquina jogou: " + "Pedra" + "\n"  + "\n" + "Voce jogou: " + "Tesoura" + "\n" + "Voce perdeu");
        }
    };

    if(respMaquina == 2){
        if(respJogador == 2){
            alert("\n" + "A maquina jogou: " + "Papel" + "\n"  + "\n" + "Voce jogou: " + "Papel" + "\n" + "Empate");
        }else if(respJogador == 3){
            alert("\n" + "A maquina jogou: " + "Papel" + "\n"  + "\n" + "Voce jogou: " + "Tesoura" + "\n" + "Voce ganhou");
        }else{
            alert("\n" + "A maquina jogou: " + "Papel" + "\n"  + "\n" + "Voce jogou: " + "Pedra" + "\n" + "Voce perdeu");
        }
    };

    if(respMaquina == 3){
        if(respJogador == 3){
            alert("\n" + "A maquina jogou: " + "Tesoura" + "\n"  + "\n" + "Voce jogou: " + "Tesoura" + "\n" + "Empate");
        }else if(respJogador == 1){
            alert("\n" + "A maquina jogou: " + "Tesoura" + "\n"  + "\n" + "Voce jogou: " + "Pedra" + "\n" + "Voce ganhou");
        }else{
            alert("\n" + "A maquina jogou: " + "Tesoura" + "\n"  + "\n" + "Voce jogou: " + "Papel" + "\n" + "Voce perdeu");
        }
    };

    if(confirm("Deseja jogar novamente?")){
        resultOfFight = null;
    } else {
        break;
    }

}


