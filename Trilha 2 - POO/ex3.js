//Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.valorEmEstoque = function () {
        var total = this.preco * this.quantidade;
        console.log("Valor total em estoque: " + total);
    };
    return Produto;
}());
var produto1 = new Produto("Cerveja Patagônia", 8, 50);
produto1.valorEmEstoque();
