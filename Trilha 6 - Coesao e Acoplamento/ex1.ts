// 1. Separação de Responsabilidades em Classe de Pedido
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.

// Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
// Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.

class Carrinho {
    private itens: { nome: string; preco: number }[];
  
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(nomeItem: string, precoItem: number): void {
      this.itens.push({ nome: nomeItem, preco: precoItem });
    }
  
    calcularTotal(): number {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  
    obterItens(): { nome: string; preco: number }[] {
      return this.itens;
    }
  }
  
  class Pagamento {
    private status: string;
  
    constructor() {
      this.status = "Pendente";
    }
  
    processarPagamento(precoTotal: number): void {
      if (precoTotal > 0) {
        this.status = "Pago";
        console.log("Pagamento processado com sucesso.");
      } else {
        console.log("Não é possível processar o pagamento. O total é zero.");
      }
    }
  
    obterStatus(): string {
      return this.status;
    }
  }
  
  class Envio {
    private status: string;
  
    constructor() {
      this.status = "Não enviado";
    }
  
    atualizarStatus(novoStatus: string): void {
      this.status = novoStatus;
    }
  
    obterStatus(): string {
      return this.status;
    }
  }

  class Pedido {
  private carrinho: Carrinho;
  private pagamento: Pagamento;
  private envio: Envio;

  constructor() {
    this.carrinho = new Carrinho();
    this.pagamento = new Pagamento();
    this.envio = new Envio();
  }

  adicionarItem(nomeItem: string, precoItem: number): void {
    this.carrinho.adicionarItem(nomeItem, precoItem);
  }

  calcularTotal(): number {
    return this.carrinho.calcularTotal();
  }

  processarPagamento(): void {
    const total = this.calcularTotal();
    this.pagamento.processarPagamento(total);
  }

  atualizarStatusEnvio(status: string): void {
    this.envio.atualizarStatus(status);
  }

  exibirResumoPedido(): void {
    console.log("Resumo do Pedido:");
    console.log("Itens:", this.carrinho.obterItens());
    console.log("Preço Total:", this.calcularTotal());
    console.log("Status do Pagamento:", this.pagamento.obterStatus());
    console.log("Status do Envio:", this.envio.obterStatus());
  }
}

const pedido = new Pedido();
pedido.adicionarItem("Notebook", 1200);
pedido.adicionarItem("Mouse", 25);
pedido.calcularTotal();
pedido.processarPagamento();
pedido.atualizarStatusEnvio("Enviado");
pedido.exibirResumoPedido();
