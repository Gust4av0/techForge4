//Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titulaConta, saldoConta) {
        this.titular = titulaConta;
        this.saldo = saldoConta;
    }
    ContaBancaria.prototype.depositar = function (dinheiroDepositado) {
        this.saldo += dinheiroDepositado;
    };
    ContaBancaria.prototype.sacar = function (dinheiroSacado) {
        this.saldo -= dinheiroSacado;
    };
    ContaBancaria.prototype.consultaSaldo = function () {
        console.log("Saldo atual: R$".concat(this.saldo));
    };
    return ContaBancaria;
}());
var pessoa = new ContaBancaria("Gustavo", 0);
pessoa.depositar(100);
pessoa.consultaSaldo();
pessoa.sacar(80);
pessoa.consultaSaldo();
