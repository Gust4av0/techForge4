// 4. Sistema de Votação
// Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object.

// Crie duas subclasses: Election e Poll.
// Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto.
// Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).

abstract class VotoSistema{
    protected votos: Map<string, number> = new Map();
    abstract voteAqui(candidato: string): void;
    abstract getResultado(): object;
}

class Eleicao extends VotoSistema{
    voteAqui(candidato: string): void {
        const votos = this.votos.get(candidato) || 0; //Votos atuais ou 0
        this.votos.set(candidato, votos + 1); //adiciona o voto
    }
    getResultado(): object {
        const resultado: { [candidato: string]: number } = {};
        this.votos.forEach((votos, candidato) => {
            resultado[candidato] = votos;
        });
        return resultado;
    }
}


class Poll extends VotoSistema{
    voteAqui(candidato: string): void {
        const votos = this.votos.get(candidato) || 0; //Votos atuais ou 0
        this.votos.set(candidato, votos + 1); //adiciona o voto
    }
        // Retorna uma lista de candidatos em ordem de votos (do mais votado para o menos votado)
        getResultado(): { candidato: string; votos: number }[] {
            return Array.from(this.votos.entries())
                .map(([candidato, votos]) => ({ candidato, votos }))
                .sort((a, b) => b.votos - a.votos); // Ordena por número de votos
        }
}
const eleicao = new Eleicao();
eleicao.voteAqui("Lula pinguço");
eleicao.voteAqui("Bolso imbroxavel");
eleicao.voteAqui("Pablo Boçal");
console.log("Resultados da Eleição:", eleicao.getResultado());

const enquete = new Poll();
enquete.voteAqui("Escala 6x1");
enquete.voteAqui("Fundo Eleitoral");
enquete.voteAqui("Propina");
enquete.voteAqui("Fundo Eleitoral");
console.log("Resultados da Enquete:", enquete.getResultado());