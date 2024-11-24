//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

class Agenda {
    private compromissos: string[];

    constructor(compromissos: string[]){
        this.compromissos = compromissos;
    }

    adicionarCompromisso(compromisso: string): void{
        this.compromissos.push(compromisso);
    }
    listarCompromissos(): void {
        console.log("Compromissos:");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
    }
}

const pessoa = new Agenda(["Ir ao médico"]);
pessoa.listarCompromissos();
pessoa.adicionarCompromisso("Churrasco na Sexta");
pessoa.listarCompromissos();