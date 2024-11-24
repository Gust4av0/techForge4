//Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

class Temperatura{
    private valor: number;

    constructor(valor: number){
        this.valor = valor;
    }

    converteFahrenheit(){
        const fahreinheit = this.valor * 9 / 5 + 32;
        console.log("Valor em Fahreinheit: " + fahreinheit + "F");
    }
    converteKelvin(){
        const kelvin = this.valor + 273.15;
        console.log("Valor em Kelvin: " + kelvin + "K");
    }
}

const temp1 = new Temperatura(25);
temp1.converteFahrenheit();
temp1.converteKelvin();