//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.
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
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.processar = function () { };
    ;
    return Pagamento;
}());
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        return this.numeroCartao.length === 16;
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento processado com sucesso");
        }
        else {
            console.log("Número do cartão inválido");
        }
    };
    return PagamentoCartao;
}(Pagamento));
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PagamentoBoleto.prototype.gerarCodigoBoleto = function () {
        return Math.floor(Math.random() * 1000000000);
    };
    PagamentoBoleto.prototype.processar = function () {
        var codigoBoleto = this.gerarCodigoBoleto();
        console.log("Boleto gerado com sucesso! C\u00F3digo: ".concat(codigoBoleto));
    };
    return PagamentoBoleto;
}(Pagamento));
function processarPagamentos(pagamentos) {
    pagamentos.forEach(function (Pagamento) {
        Pagamento.processar();
    });
}
var cartao = new PagamentoCartao("1234567891234567");
cartao.processar();
var boleto = new PagamentoBoleto();
boleto.processar();
processarPagamentos([cartao, boleto]);
