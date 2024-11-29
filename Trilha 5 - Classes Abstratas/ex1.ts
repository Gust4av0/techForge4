// 1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
// Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos

abstract class TaskManager{
    public tasks: string[];

    constructor(){
        this.tasks = [];
    }

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager{
    private nomeProjeto: string;

    constructor(nome: string){
        super();
        this.nomeProjeto = nome;
    }

    addTask(task: string): void {
        if(this.tasks.includes(task)){
            console.log(`A tarefa do projeto ${task} já foi adicionada!`)
        }else {
            this.tasks.push(task);
            console.log(`Tarefa do projeto ${task} adicionada`)
        }
    }
    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}
class DailyTasks extends TaskManager {
    public nomeTarefa: string;

    constructor(tarefa: string){
        super();
        this.nomeTarefa = tarefa;
    }
    
    addTask(task: string): void {
        if(this.tasks.includes(task)){
            console.log(`A tarefa diária já foi adicionada: ${task}`);
        }else {
            this.tasks.push(task);
        }
    }
    listTasks(): string[] {
        return Array.from(this.tasks);
    }

}

const projeto1 = new Project("Desenvolvimento SoftWare");
projeto1.addTask("Front end");
projeto1.addTask("Back end");
projeto1.addTask("Back end");


const tarefas = new DailyTasks("Tarefas Diárias");
tarefas.addTask("Exercício");
tarefas.addTask("Exercício");
tarefas.addTask("Daily");

console.log(projeto1.listTasks(), tarefas.listTasks());