// 3. Gerenciador de Favoritos
// Implemente uma classe abstrata FavoriteManager que gerencia listas de itens favoritos. Ela deve ter métodos abstratos addFavorite(item: string): void e getFavorites(): string[].

// Crie duas subclasses: MoviesFavoriteManager e BooksFavoriteManager.
// MoviesFavoriteManager deve gerenciar uma lista de filmes favoritos sem itens duplicados e retornar a lista em ordem alfabética. Dica: pesquisar pelo método sort para arrays em JavaScript
// BooksFavoriteManager deve gerenciar uma lista de livros favoritos, mas sempre que um novo item é adicionado, ele deve ser inserido no início da lista. 

abstract class GerenciadorFavorito {
    protected itensFavoritos: string[] = [];
    abstract adicionarFavorito(item: string): void;
    abstract getFavoritos(): string[]
}

class FilmeFavoritoGerenciador extends GerenciadorFavorito{
    adicionarFavorito(item: string): void {
        if(!this.itensFavoritos.includes(item)){
            this.itensFavoritos.push(item);
            this.itensFavoritos.sort();
        }
    }

    getFavoritos(): string[] {
        return this.itensFavoritos;
    }
}

class LivroFavoritoGerenciador extends GerenciadorFavorito{
    adicionarFavorito(item: string): void {
        this.itensFavoritos.unshift(item); //unshit serve para adicionar no começo da lista
    }

    getFavoritos(): string[] {
        return this.itensFavoritos;
    }
}

const filmes = new FilmeFavoritoGerenciador();
filmes.adicionarFavorito("Rambo 1");
filmes.adicionarFavorito("Rocky Balboa 1");
filmes.adicionarFavorito("Chamas da Vingança");
filmes.adicionarFavorito("Rambo 1");
console.log("Filmes Favoritos:", filmes.getFavoritos());

const livros = new LivroFavoritoGerenciador();
livros.adicionarFavorito("Cartas de um Diabo a seu Aprendiz");
livros.adicionarFavorito("A Revolução dos Bichos");
livros.adicionarFavorito("A Mentalidade Conservadora");
console.log("Livros Favoritos:", livros.getFavoritos());