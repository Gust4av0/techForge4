//Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.
var Livro = /** @class */ (function () {
    function Livro(tituloLivro, autorLivro, paginasLivro, livroLido) {
        this.titulo = tituloLivro;
        this.autor = autorLivro;
        this.paginas = paginasLivro;
        this.lido = livroLido;
    }
    Livro.prototype.marcarLivroLido = function () {
        this.lido = true;
        console.log("Livro marcado como Lido!!!");
    };
    return Livro;
}());
var livro1 = new Livro("Hábitos Atômicos", "James Clear", 300, false);
livro1.marcarLivroLido();
