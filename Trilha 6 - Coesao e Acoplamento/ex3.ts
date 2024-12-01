// 3. Sistema de Envio de Emails e Validação de Contato
// Crie uma classe EmailSender que envie emails para contatos e valide as informações de contato.

// Implemente a validação e o envio de email na mesma classe.
// Em seguida, separe a validação em uma classe ContactValidator e injete-a em EmailSender.
// Objetivo: Melhorar a coesão separando a lógica de validação e reduzir o acoplamento.
class ValidadorContato {
    validar(nome: string, email: string): boolean {
      return nome.trim() !== "" && email.includes("@");
    }
  }
class EnvioEmail {
  private validador: ValidadorContato;

  constructor(validador: ValidadorContato) {
    this.validador = validador;
  }

  enviarEmail(nome: string, email: string, mensagem: string): void {
    if (!this.validador.validar(nome, email)) {
      console.log("Contato inválido. Não foi possível enviar o email.");
      return;
    }

    console.log(`Enviando email para ${email}:`);
    console.log(`Olá, ${nome}.`);
    console.log(`Mensagem: ${mensagem}`);
  }
}

const validador = new ValidadorContato();
const envioEmail = new EnvioEmail(validador);

envioEmail.enviarEmail("Gustavo", "gustavomarcolin2005@gmail.com", "Bem vindo ao nosso sistema!");
envioEmail.enviarEmail("", "emailinvalido", "Esta mensagem não será enviada.");
  
  