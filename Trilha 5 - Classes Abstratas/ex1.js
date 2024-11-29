// 1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].
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
// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
// Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(nome) {
        var _this = _super.call(this) || this;
        _this.nomeProjeto = nome;
        return _this;
    }
    Project.prototype.addTask = function (task) {
        if (this.tasks.includes(task)) {
            console.log("A tarefa do projeto ".concat(task, " j\u00E1 foi adicionada!"));
        }
        else {
            this.tasks.push(task);
            console.log("Tarefa do projeto ".concat(task, " adicionada"));
        }
    };
    Project.prototype.listTasks = function () {
        return Array.from(this.tasks);
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks(tarefa) {
        var _this = _super.call(this) || this;
        _this.nomeTarefa = tarefa;
        return _this;
    }
    DailyTasks.prototype.addTask = function (task) {
        if (this.tasks.includes(task)) {
            console.log("A tarefa di\u00E1ria j\u00E1 foi adicionada: ".concat(task));
        }
        else {
            this.tasks.push(task);
        }
    };
    DailyTasks.prototype.listTasks = function () {
        return Array.from(this.tasks);
    };
    return DailyTasks;
}(TaskManager));
var projeto1 = new Project("Desenvolvimento SoftWare");
projeto1.addTask("Front end");
projeto1.addTask("Back end");
projeto1.addTask("Back end");
var tarefas = new DailyTasks("Tarefas Diárias");
tarefas.addTask("Exercício");
tarefas.addTask("Exercício");
tarefas.addTask("Daily");
console.log(projeto1.listTasks(), tarefas.listTasks());
