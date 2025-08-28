const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
  const perguntas = [
    {
        enunciado: "Quem foi o campeão olímpico em Tóquio no ano de 2021?",
        alternativas: [
            {
                texto:"Italo Ferreira",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Gabriel Medina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado: "Quem foi campeão pela libertadores em 2024?",
        alternativas: [
            {
                texto:"Flamengo",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Palmeiras",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi campeão do brasileiro sub 20?",
        alternativas: [
            {
                texto:"Palmeiras",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Vasco",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem ganhou a partida de ontem do brasileiro série A?",
        alternativas: [
            {
                texto:"Coritians",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Atlético Pr",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
    {
        enunciado: "Quem foi campeão do mundial de clubes de 2025?",
        alternativas: [
            {
                texto:"Chelsea",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Paris Saint-Ggermain",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]
let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();
