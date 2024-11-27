//4 - Sistema de Biblioteca com Checagem de Disponibilidade:

//Crie uma interface Livro com as propriedades titulo (string), autor (string) e disponivel (boolean).
//Crie uma classe Biblioteca que contenha um array de livros que implementem Livro.
//Implemente um método buscarLivrosDisponiveis() que retorne um array com todos os livros cuja propriedade disponivel seja true. 
//Dica: pesquisar pelo método filter https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

interface Livro {
    titulo: string; 
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    livros: Livro[];
    constructor(){
        this.livros = [];
    }

    adicionarLivro (livro: Livro){
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel)
    }
}

const teste = new Biblioteca;
teste.adicionarLivro({titulo: "teste", autor: "teste", disponivel: true});
teste.adicionarLivro({titulo: "1234", autor: "teste", disponivel: false});
console.log(teste.buscarLivrosDisponiveis());