//5 - Gestão de Bibliotecas com Filtro Avançado de Autores e Livros Disponíveis:
var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao() {
        this.livros = [];
    }
    BibliotecaGestao.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero === genero; });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor === autor; });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var primeiroLivro = new BibliotecaGestao;
primeiroLivro.adicionarLivro({ titulo: "Hábitos Atômicos", autor: "James Clear", genero: "Desenvolvimento Pessoal", disponivel: true });
primeiroLivro.adicionarLivro({ titulo: "+ Esperto que o Diabo", autor: "Napolleon Hill", genero: "Auto Ajuda", disponivel: true });
primeiroLivro.adicionarLivro({ titulo: "Pense e Enriqueça", autor: "Napolleon Hill", genero: "Auto Ajuda", disponivel: true });
//console.log(primeiroLivro.filtrarPorGenero("Auto Ajuda"));
//console.log(primeiroLivro.buscarPorAutor("James Clear"));
console.log(primeiroLivro.obterLivrosDisponiveisOrdenados());
