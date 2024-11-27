//2 - Documentos
var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", Conte\u00FAdo: ").concat(this.conteudo);
    };
    return Texto;
}());
var doc1 = new Texto("Teste", "123456");
console.log(doc1.exibir());
