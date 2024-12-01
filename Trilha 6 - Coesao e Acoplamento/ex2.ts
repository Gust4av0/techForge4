// 2. Gerenciamento de Usuários e Notificações
// Implemente uma classe UserManager que gerencie a criação de usuários e envie notificações por email.

// Inicialmente, coloque toda a lógica de criação e notificação na classe UserManager.
// Em seguida, refatore para dividir a responsabilidade de envio de notificação em uma classe EmailNotification.
// Objetivo: Aumentar a coesão separando a lógica de notificação e reduzir o acoplamento ao injetar EmailNotification na UserManager.
class NotificacaoEmail {
    enviarEmail(nome: string, email: string): void {
      console.log(`Enviando email para ${email}:`);
      console.log(`Olá, ${nome}. Bem-vindo ao nosso sistema!`);
    }
  }
class GerenciadorUsuarios {
  private usuarios: { nome: string; email: string }[];
  private notificacao: NotificacaoEmail;

  constructor(notificacao: NotificacaoEmail) {
    this.usuarios = [];
    this.notificacao = notificacao;
  }

  criarUsuario(nome: string, email: string): void {
    this.usuarios.push({ nome, email });
    console.log(`Usuário ${nome} criado com sucesso.`);
    this.notificacao.enviarEmail(nome, email);
  }

  listarUsuarios(): void {
    console.log("Usuários cadastrados:");
    this.usuarios.forEach((usuario) => {
      console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`);
    });
  }
}

const notificacaoEmail = new NotificacaoEmail();
const gerenciadorUsuarios = new GerenciadorUsuarios(notificacaoEmail);

gerenciadorUsuarios.criarUsuario("Gustavo Marcolin Soares", "gustavomarcolin2005@gmail.com");
gerenciadorUsuarios.listarUsuarios();
  