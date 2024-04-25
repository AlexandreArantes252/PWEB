var Funcionario = new Object();
        Funcionario.matricula = "0030482213043";
        Funcionario.nome = "Alexandre";
        Funcionario.funcao = "Programador"

        alert(`matricula=${Funcionario.matricula} \n nome=${Funcionario.nome}  \n funcao=${Funcionario.funcao}`);


var Funcionario1 = {
    matricula: "0030482213043",
    nome: "Alexandre",
    funcao: "Programador"};
alert("Matricula=" + Funcionario1.matricula + "\n" + "Nome=" + Funcionario1.nome + "\n" + "Função=" + Funcionario1.matricula);


function funcionario(matricula, nome, funcao){
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
    this.Dados = function (){
        return "Matricula=" + this.matricula + "\n" + "Nome=" + this.nome + "\n" + "Função=" + this.funcao;
    }
}

var Funcionario2 = new funcionario("0030482213043", "Alexandre", "Programador");
alert(Funcionario2.Dados());

