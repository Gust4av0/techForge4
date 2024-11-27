//3 - Cadastro e Busca de Produtos em uma Loja:

//Crie uma interface chamada ProdutoLoja com as propriedades codigo (número) e nome (string).
//Crie uma classe Loja que tenha um array de produtos que implemente a interface ProdutoLoja.
//Implemente um método buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined que recebe um código de produto e retorna o produto correspondente, caso exista; caso contrário, retorne undefined


interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    public produtos: ProdutoLoja[];

    constructor(){
        this.produtos = [];
    }

    adicionarProdutos(produto: ProdutoLoja): void{
        this.produtos.push(produto);
    }
    buscarProdutoPorCodigo(codigoNumero: number): ProdutoLoja | undefined{
        return this.produtos.find(produtos => produtos.codigo === codigoNumero);
    }
}


const produto1 = new Loja();
produto1.adicionarProdutos({ codigo: 1, nome: "Produto A" });
produto1.buscarProdutoPorCodigo(1);
