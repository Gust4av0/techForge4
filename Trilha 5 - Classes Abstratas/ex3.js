// 3. Gerenciador de Favoritos
// Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].
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
// Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
// MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
// BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 
var GerenciadorFavorito = /** @class */ (function () {
    function GerenciadorFavorito() {
        this.itensFavoritos = [];
    }
    return GerenciadorFavorito;
}());
var FilmeFavoritoGerenciador = /** @class */ (function (_super) {
    __extends(FilmeFavoritoGerenciador, _super);
    function FilmeFavoritoGerenciador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilmeFavoritoGerenciador.prototype.adicionarFavorito = function (item) {
        if (!this.itensFavoritos.includes(item)) {
            this.itensFavoritos.push(item);
            this.itensFavoritos.sort();
        }
    };
    FilmeFavoritoGerenciador.prototype.getFavoritos = function () {
        return this.itensFavoritos;
    };
    return FilmeFavoritoGerenciador;
}(GerenciadorFavorito));
var LivroFavoritoGerenciador = /** @class */ (function (_super) {
    __extends(LivroFavoritoGerenciador, _super);
    function LivroFavoritoGerenciador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LivroFavoritoGerenciador.prototype.adicionarFavorito = function (item) {
        this.itensFavoritos.unshift(item); //unshit serve para adicionar no começo da lista
    };
    LivroFavoritoGerenciador.prototype.getFavoritos = function () {
        return this.itensFavoritos;
    };
    return LivroFavoritoGerenciador;
}(GerenciadorFavorito));
var filmes = new FilmeFavoritoGerenciador();
filmes.adicionarFavorito("Rambo 1");
filmes.adicionarFavorito("Rocky Balboa 1");
filmes.adicionarFavorito("Chamas da Vingança");
filmes.adicionarFavorito("Rambo 1");
console.log("Filmes Favoritos:", filmes.getFavoritos());
var livros = new LivroFavoritoGerenciador();
livros.adicionarFavorito("Cartas de um Diabo a seu Aprendiz");
livros.adicionarFavorito("A Revolução dos Bichos");
livros.adicionarFavorito("A Mentalidade Conservadora");
console.log("Livros Favoritos:", livros.getFavoritos());
