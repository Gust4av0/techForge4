//Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.
var Agenda = /** @class */ (function () {
    function Agenda(compromissos) {
        this.compromissos = compromissos;
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        this.compromissos.push(compromisso);
    };
    Agenda.prototype.listarCompromissos = function () {
        console.log("Compromissos:");
        this.compromissos.forEach(function (compromisso, index) {
            console.log("".concat(index + 1, ". ").concat(compromisso));
        });
    };
    return Agenda;
}());
var pessoa = new Agenda(["Ir ao médico"]);
pessoa.listarCompromissos();
pessoa.adicionarCompromisso("Churrasco na Sexta");
pessoa.listarCompromissos();
