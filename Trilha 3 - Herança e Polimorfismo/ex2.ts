//Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

class FiguraGeometrica {
    calcularArea(){};
}

class Circulo extends FiguraGeometrica{
    private raio: number;

    constructor(raio: number){
        super();
        this.raio = raio;
    }
    calcularArea(){
        console.log("A área é: " + Math.PI * this.raio ** 2);
    }
}

class Quadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): void {
        console.log("A área do quadrado é: " + this.lado ** 2);
    }
}
class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;

    constructor(base: number, altura: number){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        console.log("A área do triângulo é: " + (this.base * this.altura) / 2);
    }
}
function imprimirAreas(figuras){
    figuras.forEach(figura => {
        console.log(`Figura: ${figura.calcularArea()}`);
    });
}

const circulo = new Circulo(5);
circulo.calcularArea();
const quadrado = new Quadrado(4);
quadrado.calcularArea();
const triângulo = new Triangulo(6,3);
triângulo.calcularArea();


imprimirAreas([circulo,quadrado, triângulo]);