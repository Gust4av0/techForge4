//1 - Produtos
var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    return ItemLoja;
}());
var item = new ItemLoja(1, "Sabão", 6);
console.log(item);
