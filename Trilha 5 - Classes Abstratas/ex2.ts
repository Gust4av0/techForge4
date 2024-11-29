// 2. Inventário de Itens
// Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript

// Crie duas subclasses WarehouseInventory e StoreInventory.
// WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
// StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
// Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

abstract class Inventario {

    protected itens: Record<string, number> = {};

    abstract addItem(item: string, qtd: number): void;
    abstract removerItem(item: string): void; 
    abstract obterInventario(): Record<string, number>;
}

class InventarioArmazem extends Inventario{
    addItem(item: string, qtd: number){
        if(this.itens[item]){
            this.itens[item] =+ qtd;
        }else {
            this.itens[item] = qtd;
        }
    }
    removerItem(item: string){
        if(this.itens[item]){
            delete this.itens[item];
            console.log(`O item ${item} foi removido do inventário com sucesso!`)
        }else {
            console.log(`O item ${item} não foi encontrado no inventário!`)
        }
    }
    obterInventario(): Record<string, number>{
        return this.itens;
    }
}
class InventarioLoja extends Inventario{
    private readonly LIMITE_MAXIMO = 10;
    addItem(item: string, quantidade: number): void {
    if (this.itens[item]) {  // Se o item já existe no inventário
        const novaQuantidade = this.itens[item] + quantidade; // Calcula a nova quantidade
        if (novaQuantidade > this.LIMITE_MAXIMO) { // Se ultrapassar o limite máximo
            console.log(
                `Não é possível adicionar ${quantidade} unidades de "${item}". Limite máximo por item é ${this.LIMITE_MAXIMO}.`
            );
            this.itens[item] = this.LIMITE_MAXIMO; // Define a quantidade no limite máximo
        } else {
            this.itens[item] = novaQuantidade; // Se não ultrapassar, adiciona a quantidade
        }
    } else { // Se o item não existe no inventário
        if (quantidade > this.LIMITE_MAXIMO) { // Se a quantidade inicial exceder o limite
            console.log(
                `Não é possível adicionar ${quantidade} unidades de "${item}". Limite máximo por item é ${this.LIMITE_MAXIMO}.
            `);
            this.itens[item] = this.LIMITE_MAXIMO; // Define a quantidade no limite máximo
        } else {
            this.itens[item] = quantidade; // Se não exceder o limite, adiciona normalmente
        }
    }
}
    removerItem(item: string){
        if(this.itens[item]){
            delete this.itens[item];
            console.log(`O item ${item} foi removido com sucesso!`)
        }else {
            console.log(`O item ${item} não foi encontrado no Inventário!`)
        }
    }
    obterInventario(): Record<string, number>{
        return this.itens;
    }
}

// const armazem = new InventarioArmazem;
// armazem.addItem("Grelha de Carne", 5);
// armazem.addItem("Faca", 7);
// console.log(armazem.obterInventario());
// armazem.removerItem("Faca");
// console.log(armazem.obterInventario());

const loja = new InventarioLoja();
loja.addItem("Cerveja", 7);
loja.addItem("Cerveja", 4);
loja.addItem("Paçoca", 6);
loja.addItem("Cachaça", 12);
loja.removerItem("Cachaça");
console.log(loja.obterInventario());
