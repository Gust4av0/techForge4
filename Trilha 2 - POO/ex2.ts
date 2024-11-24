//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(tituloLivro: string, autorLivro: string, paginasLivro: number, livroLido: boolean){
        this.titulo = tituloLivro;
        this.autor = autorLivro;
        this.paginas = paginasLivro;
        this.lido = livroLido;
    }
    marcarLivroLido(){
        this.lido = true;
        console.log("Livro marcado como Lido!!!")
    }
}


let livro1 = new Livro("Hábitos Atômicos", "James Clear", 300, false);
livro1.marcarLivroLido();