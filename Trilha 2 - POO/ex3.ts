//Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).

class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    valorEmEstoque(){
        const total = this.preco * this.quantidade;
        console.log("Valor total em estoque: " + total);
    }
}

const produto1 = new Produto("Cerveja Patagônia", 8, 50);
produto1.valorEmEstoque();
