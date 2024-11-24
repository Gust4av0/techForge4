//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titulaConta: string, saldoConta: number){
        this.titular = titulaConta;
        this.saldo = saldoConta;
    }
    depositar(dinheiroDepositado: number){
        this.saldo += dinheiroDepositado;
    }
    sacar(dinheiroSacado: number){
        this.saldo -= dinheiroSacado;
    }
    consultaSaldo(){
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

let pessoa = new ContaBancaria("Gustavo", 0);
pessoa.depositar(100);
pessoa.consultaSaldo();
pessoa.sacar(80);
pessoa.consultaSaldo();
