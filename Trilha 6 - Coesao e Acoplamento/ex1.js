// 1. Separação de Responsabilidades em Classe de Pedido
// Crie uma classe Order que gerencie informações de um pedido, como items, totalPrice, paymentStatus e shippingStatus.
// Inicialmente, faça com que a classe Order seja responsável por adicionar itens, calcular o preço total, processar o pagamento e atualizar o status do envio.
// Depois, refatore o código para criar três classes separadas (Cart, Payment, Shipping) e faça com que Order dependa dessas classes para realizar suas funções.
// Objetivo: Melhorar a coesão separando responsabilidades e reduzir o acoplamento.
var Carrinho = /** @class */ (function () {
    function Carrinho() {
        this.itens = [];
    }
    Carrinho.prototype.adicionarItem = function (nomeItem, precoItem) {
        this.itens.push({ nome: nomeItem, preco: precoItem });
    };
    Carrinho.prototype.calcularTotal = function () {
        return this.itens.reduce(function (total, item) { return total + item.preco; }, 0);
    };
    Carrinho.prototype.obterItens = function () {
        return this.itens;
    };
    return Carrinho;
}());
var Pagamento = /** @class */ (function () {
    function Pagamento() {
        this.status = "Pendente";
    }
    Pagamento.prototype.processarPagamento = function (precoTotal) {
        if (precoTotal > 0) {
            this.status = "Pago";
            console.log("Pagamento processado com sucesso.");
        }
        else {
            console.log("Não é possível processar o pagamento. O total é zero.");
        }
    };
    Pagamento.prototype.obterStatus = function () {
        return this.status;
    };
    return Pagamento;
}());
var Envio = /** @class */ (function () {
    function Envio() {
        this.status = "Não enviado";
    }
    Envio.prototype.atualizarStatus = function (novoStatus) {
        this.status = novoStatus;
    };
    Envio.prototype.obterStatus = function () {
        return this.status;
    };
    return Envio;
}());
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.carrinho = new Carrinho();
        this.pagamento = new Pagamento();
        this.envio = new Envio();
    }
    Pedido.prototype.adicionarItem = function (nomeItem, precoItem) {
        this.carrinho.adicionarItem(nomeItem, precoItem);
    };
    Pedido.prototype.calcularTotal = function () {
        return this.carrinho.calcularTotal();
    };
    Pedido.prototype.processarPagamento = function () {
        var total = this.calcularTotal();
        this.pagamento.processarPagamento(total);
    };
    Pedido.prototype.atualizarStatusEnvio = function (status) {
        this.envio.atualizarStatus(status);
    };
    Pedido.prototype.exibirResumoPedido = function () {
        console.log("Resumo do Pedido:");
        console.log("Itens:", this.carrinho.obterItens());
        console.log("Preço Total:", this.calcularTotal());
        console.log("Status do Pagamento:", this.pagamento.obterStatus());
        console.log("Status do Envio:", this.envio.obterStatus());
    };
    return Pedido;
}());
// Exemplo de uso
var pedido = new Pedido();
pedido.adicionarItem("Notebook", 1200);
pedido.adicionarItem("Mouse", 25);
pedido.calcularTotal();
pedido.processarPagamento();
pedido.atualizarStatusEnvio("Enviado");
pedido.exibirResumoPedido();
