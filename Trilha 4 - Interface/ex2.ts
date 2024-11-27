//2 - Documentos

//Crie uma interface chamada Documento com as propriedades titulo (string) e conteudo (string).
//Implemente essa interface em uma classe chamada Texto e crie um método exibir() que retorna uma string com o título e o conteúdo formatados da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".

interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    public titulo: string;
    public conteudo: string;

    constructor(titulo: string, conteudo: string){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir(): string{
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`
    }
}

const doc1 = new Texto("Teste", "123456");
console.log(doc1.exibir());