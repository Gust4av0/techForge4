//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais
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
var Animal = /** @class */ (function () {
    function Animal(energia) {
        this.energia = energia;
    }
    Animal.prototype.comer = function (comida) {
        this.energia += comida;
    };
    Animal.prototype.statusEnergia = function () {
        console.log("Energia: ".concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leao.prototype.comer = function (comida) {
        this.energia -= 10;
        _super.prototype.comer.call(this, comida);
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Passaro.prototype.comer = function (comida) {
        _super.prototype.comer.call(this, comida);
    };
    return Passaro;
}(Animal));
function mostrarEnergias(animais) {
    animais.forEach(function (animal) {
        animal.statusEnergia();
    });
}
var leao = new Leao(50);
var passaro = new Passaro(50);
leao.comer(20);
passaro.comer(20);
mostrarEnergias([leao, passaro]);
