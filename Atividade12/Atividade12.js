/*Atividade12*/
var altura = parseFloat(prompt("Digite a altura do retangulo: "));
var base = parseFloat(prompt("Digite a base do retangulo: "));

function Retangulo (altura, base){
    this.altura = altura;
    this.base = base;

    this.calcular = function(){
        return base*altura;
    }
}

var retangulo = new Retangulo(altura, base);
alert("Base: " + retangulo.base + "\nAltura: " + retangulo.altura + "\nÁrea: " + retangulo.calcular()); 


/*Atividade12 parte 2*/
class Conta{
    constructor(){
        this.nome;
        this.banco;
        this.numConta;
        this.saldo
    }

    setNome(values){
        this.nome = values;
    }

    setBanco(values){
        this.banco = values;
    }

    setNumConta(values){
        this.numConta = values;
    }

    setSaldo(values){
        this.saldo = values;
    }

    getNome(){
        return this.nome;
    }

    getBanco(){
       return this.banco;
    }

    getNumConta(){
        return this.numConta;
    }

    getSaldo(){
       return this.saldo;
    }
}

class contaCorrente extends Conta{
    constructor(){
        super();
        this.saldoEspecial;
    }

    setSaldoEspecial(values){
        this.saldoEspecial = values;
    }

    getSaldoEspecial(){
        return this.saldoEspecial;
    }
}

class contaPoupanca extends Conta{
    constructor(){
        super();
        this.juros;
        this.dataVencimento;
    }

    setJuros(values){
        this.juros = values;
    }

    setDataVencimento(values){
        this.dataVencimento = values;
    }

    getJuros(){
        return this.getJuros;
    }

    getDataVencimento(){
        return this.dataVencimento;
    }
}

var nome, banco, numConta, saldo; 

function recebe(){
    nome = prompt("Digite o nome: ");
    banco = prompt("Digite qual o nome do banco: ");
    numConta = prompt("Digite o número da conta: ");  /*Ideia do Kaike da Fonseca*/
    saldo = prompt("Informe o saldo: ")
}

var x  = parseInt(prompt("Informe o tipo de conta: " + "\n1-Corrente" + "\n2-Poupança"));

    if(x==1){
        recebe();


        var saldoEspecial = parseFloat(prompt("Informe o saldo especial: "));
        var NovaContaCorrente = new contaCorrente();
        

        NovaContaCorrente.setNome(nome);
        NovaContaCorrente.setBanco(banco);
        NovaContaCorrente.setNumConta(numConta);
        NovaContaCorrente.setSaldo(saldo);
        NovaContaCorrente.setSaldoEspecial(saldoEspecial);

        alert("Nome da conta: " + NovaContaCorrente.getNome() + "\nNome do banco: " + NovaContaCorrente.getBanco() + "\nNúmero da conta: " + NovaContaCorrente.getNumConta() + 
        "\nSaldo: " + NovaContaCorrente.getSaldo() + "\nSaldo Especial: " + NovaContaCorrente.getSaldoEspecial());
    
    } else{
            recebe();

            var juros = parseFloat(prompt("Informe o juros: "));
            var dataVencimento = prompt("Informe data de vencimento: ");
            
            var NovaContaPoupanca = new contaPoupanca();
            
            NovaContaPoupanca.setNome(nome);
            NovaContaPoupanca.setBanco(banco);
            NovaContaPoupanca.setNumConta(numConta);
            NovaContaPoupanca.setSaldo(saldo);
            NovaContaPoupanca.setJuros(juros);
            NovaContaPoupanca.setDtVencimento(dataVencimento);

            alert("Nome da conta: " + NovaContaPoupanca.getNome() + "\nNome do banco: " + NovaContaPoupanca.getBanco() + "\nNúmero da conta: " + NovaContaPoupanca.getNumConta() + 
            "\nSaldo: " + NovaContaPoupanca.getSaldo() + "\nJuros: " + NovaContaPoupanca.getJuros() + "%" + "\nData de vencimento: " + NovaContaPoupanca.getDtVencimento());
        }
