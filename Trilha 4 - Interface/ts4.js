//4 - Sistema de Biblioteca com Checagem de Disponibilidade:
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var teste = new Biblioteca;
teste.adicionarLivro({ titulo: "teste", autor: "teste", disponivel: true });
teste.adicionarLivro({ titulo: "1234", autor: "teste", disponivel: false });
console.log(teste.buscarLivrosDisponiveis());
