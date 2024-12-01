// 3. Sistema de Envio de Emails e Validação de Contato
// Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.
// Implemente a validação e o envio de email na mesma classe.
// Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
// Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.
var ValidadorContato = /** @class */ (function () {
    function ValidadorContato() {
    }
    ValidadorContato.prototype.validar = function (nome, email) {
        return nome.trim() !== "" && email.includes("@");
    };
    return ValidadorContato;
}());
var EnvioEmail = /** @class */ (function () {
    function EnvioEmail(validador) {
        this.validador = validador;
    }
    EnvioEmail.prototype.enviarEmail = function (nome, email, mensagem) {
        if (!this.validador.validar(nome, email)) {
            console.log("Contato inválido. Não foi possível enviar o email.");
            return;
        }
        console.log("Enviando email para ".concat(email, ":"));
        console.log("Ol\u00E1, ".concat(nome, "."));
        console.log("Mensagem: ".concat(mensagem));
    };
    return EnvioEmail;
}());
var validador = new ValidadorContato();
var envioEmail = new EnvioEmail(validador);
envioEmail.enviarEmail("Gustavo", "gustavomarcolin2005@gmail.com", "Bem vindo ao nosso sistema!");
envioEmail.enviarEmail("", "emailinvalido", "Esta mensagem não será enviada.");
