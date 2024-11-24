//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.calcularSalarioComBonus = function () {
        return this.salario + this.calcularBonus();
    };
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Gerente.prototype.calcularBonus = function () {
        return this.getSalario() * 0.10;
    };
    return Gerente;
}(Funcionario));
var Operario = /** @class */ (function (_super) {
    __extends(Operario, _super);
    function Operario(nome, salario) {
        return _super.call(this, nome, salario) || this;
    }
    Operario.prototype.calcularBonus = function () {
        return this.getSalario() * 0.05;
    };
    return Operario;
}(Funcionario));
function calcularSalarioComBonus(funcionários) {
    funcionários.forEach(function (funcionario) {
        console.log("Funcion\u00E1rio: ".concat(funcionario.getNome(), ", Sal\u00E1rio com B\u00F4nus: ").concat(funcionario.calcularSalarioComBonus()));
    });
}
var gerente = new Gerente("João", 5000);
var operario = new Operario("Zé", 2000);
calcularSalarioComBonus([gerente, operario]);
