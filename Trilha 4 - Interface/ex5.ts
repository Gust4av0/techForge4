//5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:

//Crie uma interface LivroBiblioteca com as propriedades titulo (string), autor (string), genero (string) e disponivel (boolean).
//Crie uma classe BibliotecaGestao que contenha um array de livros implementando a interface LivroBiblioteca.
//Implemente os seguintes métodos:
//filtrarPorGenero(genero: string): LivroBiblioteca[] - retorna um array de livros que pertencem ao gênero especificado.
//buscarPorAutor(autor: string): LivroBiblioteca[] - retorna todos os livros escritos por um autor específico.
//obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] - retorna uma lista de todos os livros disponíveis, ordenada alfabeticamente pelo título.

interface LivroBiblioteca {
    titulo: string; 
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];
    constructor(){
        this.livros = [];
    }

    adicionarLivro (livro: LivroBiblioteca){
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[]{
        return this.livros
        .filter(livro => livro.disponivel)
        .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }

}

const primeiroLivro = new BibliotecaGestao;
primeiroLivro.adicionarLivro({titulo: "Hábitos Atômicos", autor: "James Clear", genero: "Desenvolvimento Pessoal", disponivel: true});
primeiroLivro.adicionarLivro({titulo: "+ Esperto que o Diabo", autor: "Napolleon Hill", genero: "Auto Ajuda", disponivel: true});
primeiroLivro.adicionarLivro({titulo: "Pense e Enriqueça", autor: "Napolleon Hill", genero: "Auto Ajuda", disponivel: true});


//console.log(primeiroLivro.filtrarPorGenero("Auto Ajuda"));
//console.log(primeiroLivro.buscarPorAutor("James Clear"));
console.log(primeiroLivro.obterLivrosDisponiveisOrdenados());




