//3 - Cadastro e Busca de Produtos em uma Loja:
var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.adicionarProdutos = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigoNumero) {
        return this.produtos.find(function (produtos) { return produtos.codigo === codigoNumero; });
    };
    return Loja;
}());
var produto1 = new Loja();
produto1.adicionarProdutos({ codigo: 1, nome: "Produto A" });
produto1.buscarProdutoPorCodigo(1);
