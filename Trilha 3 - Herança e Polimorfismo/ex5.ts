//Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.

abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }
    abstract calcularBonus(): number;

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }

    getNome(): string{
        return this.nome;
    }
    getSalario(): number{
        return this.salario;
    }
}
class Gerente extends Funcionario{
    constructor(nome: string, salario: number){
        super(nome, salario);
    }
    calcularBonus(): number{
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario{
    constructor(nome: string, salario: number){
        super(nome, salario);
    }

    calcularBonus(): number{
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionários: Funcionario[]){
    funcionários.forEach(funcionario =>{
        console.log(`Funcionário: ${funcionario.getNome()}, Salário com Bônus: ${funcionario.calcularSalarioComBonus()}`);
    })
}

const gerente = new Gerente("João", 5000);
const operario = new Operario("Zé", 2000);
calcularSalarioComBonus([gerente, operario]);