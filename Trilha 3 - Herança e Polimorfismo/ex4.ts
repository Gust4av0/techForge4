//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais

class Animal {
    protected energia: number;

    constructor(energia: number){
        this.energia = energia;
    }
    comer(comida: number){
        this.energia += comida;
    }
    statusEnergia(){
        console.log(`Energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(comida: number) {
        this.energia -= 10;
        super.comer(comida);
    }
}
class Passaro extends Animal{
    comer(comida: number){
        super.comer(comida);
    }
}

function mostrarEnergias(animais: Animal[]){
    animais.forEach(animal => {
        animal.statusEnergia();
    })
}

const leao = new Leao(50);
const passaro = new Passaro(50);

leao.comer(20);
passaro.comer(20);
mostrarEnergias([leao, passaro]);