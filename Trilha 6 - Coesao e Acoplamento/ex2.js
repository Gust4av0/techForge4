// 2. Gerenciamento de Usuários e Notificações
// Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.
// Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
// Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
// Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.
var NotificacaoEmail = /** @class */ (function () {
    function NotificacaoEmail() {
    }
    NotificacaoEmail.prototype.enviarEmail = function (nome, email) {
        console.log("Enviando email para ".concat(email, ":"));
        console.log("Ol\u00E1, ".concat(nome, ". Bem-vindo ao nosso sistema!"));
    };
    return NotificacaoEmail;
}());
var GerenciadorUsuarios = /** @class */ (function () {
    function GerenciadorUsuarios(notificacao) {
        this.usuarios = [];
        this.notificacao = notificacao;
    }
    GerenciadorUsuarios.prototype.criarUsuario = function (nome, email) {
        this.usuarios.push({ nome: nome, email: email });
        console.log("Usu\u00E1rio ".concat(nome, " criado com sucesso."));
        this.notificacao.enviarEmail(nome, email);
    };
    GerenciadorUsuarios.prototype.listarUsuarios = function () {
        console.log("Usuários cadastrados:");
        this.usuarios.forEach(function (usuario) {
            console.log("Nome: ".concat(usuario.nome, ", Email: ").concat(usuario.email));
        });
    };
    return GerenciadorUsuarios;
}());
var notificacaoEmail = new NotificacaoEmail();
var gerenciadorUsuarios = new GerenciadorUsuarios(notificacaoEmail);
gerenciadorUsuarios.criarUsuario("Gustavo Marcolin Soares", "gustavomarcolin2005@gmail.com");
gerenciadorUsuarios.listarUsuarios();
