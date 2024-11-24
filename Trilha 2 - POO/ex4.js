//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.
var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.converteFahrenheit = function () {
        var fahreinheit = this.valor * 9 / 5 + 32;
        console.log("Valor em Fahreinheit: " + fahreinheit + "F");
    };
    Temperatura.prototype.converteKelvin = function () {
        var kelvin = this.valor + 273.15;
        console.log("Valor em Kelvin: " + kelvin + "K");
    };
    return Temperatura;
}());
var temp1 = new Temperatura(25);
temp1.converteFahrenheit();
temp1.converteKelvin();
