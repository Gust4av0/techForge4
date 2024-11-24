//Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().

class Veiculo {
    mover(){
        console.log("O Veículo está se movendo");
    }
}


class Carro extends Veiculo{
    mover(){
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo{
    mover(){
        console.log("A bicicleta está pedalando");
    }
}

const veiculo1 = new Carro();
veiculo1.mover();
const bike = new Bicicleta();
bike.mover();