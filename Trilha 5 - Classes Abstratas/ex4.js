// 4. Sistema de Votação
// Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.
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
// Crie duas subclasses: Election e Poll.
// Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
// Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).
var VotoSistema = /** @class */ (function () {
    function VotoSistema() {
        this.votos = new Map();
    }
    return VotoSistema;
}());
var Eleicao = /** @class */ (function (_super) {
    __extends(Eleicao, _super);
    function Eleicao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eleicao.prototype.voteAqui = function (candidato) {
        var votos = this.votos.get(candidato) || 0; //Votos atuais ou 0
        this.votos.set(candidato, votos + 1); //adiciona o voto
    };
    Eleicao.prototype.getResultado = function () {
        var resultado = {};
        this.votos.forEach(function (votos, candidato) {
            resultado[candidato] = votos;
        });
        return resultado;
    };
    return Eleicao;
}(VotoSistema));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poll.prototype.voteAqui = function (candidato) {
        var votos = this.votos.get(candidato) || 0; //Votos atuais ou 0
        this.votos.set(candidato, votos + 1); //adiciona o voto
    };
    // Retorna uma lista de candidatos em ordem de votos (do mais votado para o menos votado)
    Poll.prototype.getResultado = function () {
        return Array.from(this.votos.entries())
            .map(function (_a) {
            var candidato = _a[0], votos = _a[1];
            return ({ candidato: candidato, votos: votos });
        })
            .sort(function (a, b) { return b.votos - a.votos; }); // Ordena por número de votos
    };
    return Poll;
}(VotoSistema));
var eleicao = new Eleicao();
eleicao.voteAqui("Lula pinguço");
eleicao.voteAqui("Bolso imbroxavel");
eleicao.voteAqui("Pablo Boçal");
console.log("Resultados da Eleição:", eleicao.getResultado());
var enquete = new Poll();
enquete.voteAqui("Escala 6x1");
enquete.voteAqui("Fundo Eleitoral");
enquete.voteAqui("Propina");
enquete.voteAqui("Fundo Eleitoral");
console.log("Resultados da Enquete:", enquete.getResultado());
