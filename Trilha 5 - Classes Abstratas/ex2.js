// 2. Inventário de Itens
// Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Crie duas subclasses WarehouseInventory e StoreInventory.
// WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
// StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
// Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.
var Inventario = /** @class */ (function () {
    function Inventario() {
        this.itens = {};
    }
    return Inventario;
}());
var InventarioArmazem = /** @class */ (function (_super) {
    __extends(InventarioArmazem, _super);
    function InventarioArmazem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventarioArmazem.prototype.addItem = function (item, qtd) {
        if (this.itens[item]) {
            this.itens[item] = +qtd;
        }
        else {
            this.itens[item] = qtd;
        }
    };
    InventarioArmazem.prototype.removerItem = function (item) {
        if (this.itens[item]) {
            delete this.itens[item];
            console.log("O item ".concat(item, " foi removido do invent\u00E1rio com sucesso!"));
        }
        else {
            console.log("O item ".concat(item, " n\u00E3o foi encontrado no invent\u00E1rio!"));
        }
    };
    InventarioArmazem.prototype.obterInventario = function () {
        return this.itens;
    };
    return InventarioArmazem;
}(Inventario));
var InventarioLoja = /** @class */ (function (_super) {
    __extends(InventarioLoja, _super);
    function InventarioLoja() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.LIMITE_MAXIMO = 10;
        return _this;
    }
    InventarioLoja.prototype.addItem = function (item, quantidade) {
        if (this.itens[item]) { // Se o item já existe no inventário
            var novaQuantidade = this.itens[item] + quantidade; // Calcula a nova quantidade
            if (novaQuantidade > this.LIMITE_MAXIMO) { // Se ultrapassar o limite máximo
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(quantidade, " unidades de \"").concat(item, "\". Limite m\u00E1ximo por item \u00E9 ").concat(this.LIMITE_MAXIMO, "."));
                this.itens[item] = this.LIMITE_MAXIMO; // Define a quantidade no limite máximo
            }
            else {
                this.itens[item] = novaQuantidade; // Se não ultrapassar, adiciona a quantidade
            }
        }
        else { // Se o item não existe no inventário
            if (quantidade > this.LIMITE_MAXIMO) { // Se a quantidade inicial exceder o limite
                console.log("N\u00E3o \u00E9 poss\u00EDvel adicionar ".concat(quantidade, " unidades de \"").concat(item, "\". Limite m\u00E1ximo por item \u00E9 ").concat(this.LIMITE_MAXIMO, ".\n            "));
                this.itens[item] = this.LIMITE_MAXIMO; // Define a quantidade no limite máximo
            }
            else {
                this.itens[item] = quantidade; // Se não exceder o limite, adiciona normalmente
            }
        }
    };
    InventarioLoja.prototype.removerItem = function (item) {
        if (this.itens[item]) {
            delete this.itens[item];
            console.log("O item ".concat(item, " foi removido com sucesso!"));
        }
        else {
            console.log("O item ".concat(item, " n\u00E3o foi encontrado no Invent\u00E1rio!"));
        }
    };
    InventarioLoja.prototype.obterInventario = function () {
        return this.itens;
    };
    return InventarioLoja;
}(Inventario));
// const armazem = new InventarioArmazem;
// armazem.addItem("Grelha de Carne", 5);
// armazem.addItem("Faca", 7);
// console.log(armazem.obterInventario());
// armazem.removerItem("Faca");
// console.log(armazem.obterInventario());
var loja = new InventarioLoja();
loja.addItem("Cerveja", 7);
loja.addItem("Cerveja", 4);
loja.addItem("Paçoca", 6);
loja.addItem("Cachaça", 12);
loja.removerItem("Cachaça");
console.log(loja.obterInventario());
