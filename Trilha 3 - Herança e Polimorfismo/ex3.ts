//Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.

class Pagamento {
    processar(){};
}

class PagamentoCartao extends Pagamento{
    private numeroCartao: string;
    constructor(numeroCartao: string){
        super();
        this.numeroCartao = numeroCartao;
    }

    validarCartao(){
        return this.numeroCartao.length === 16;
    }
    processar(){
        if(this.validarCartao()){
            console.log("Pagamento processado com sucesso");
        }else {
            console.log("Número do cartão inválido");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    gerarCodigoBoleto(){
        return Math.floor(Math.random() * 1000000000);
    }
    processar(){
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Boleto gerado com sucesso! Código: ${codigoBoleto}`);
    }
}


function processarPagamentos(pagamentos: Pagamento[]){
    pagamentos.forEach(Pagamento => {
        Pagamento.processar();
    })
}

const cartao = new  PagamentoCartao("1234567891234567");
cartao.processar();

const boleto = new PagamentoBoleto();
boleto.processar();

processarPagamentos([cartao, boleto]);
