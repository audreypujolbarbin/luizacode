//Desafio proposto
//2 objetos - pessoa a e pessoa b, receber valores (nome, peso, altura, idade)
//criar uma função para IMC e ano de nascimento

const pessoaA = {
    nomeA: "Tiago",
    peso_aproximadoA: 90,
    alturaA: 1.75,
    idade_anosA: 33,
    imcA: function(){
        let result = ((this.peso_aproximadoA / (this.alturaA * this.alturaA)).toFixed(2));
        return(result)
    }, 
    anoNascimentoA: function(){
        let anoNascimentoA = (2021 - this.idade_anosA);
        return (anoNascimentoA)
    }
};

console.log(pessoaA.imcA(),pessoaA.anoNascimentoA())


const pessoaB = {
    nomeB: "Marcio",
    peso_aproximadoB: 90,
    alturaB: 1.70,
    idade_anosB: 58,
    imcB: function(){
        let result = ((this.peso_aproximadoB / (this.alturaB * this.alturaB)).toFixed(2));
        return(result)
    }, 
    anoNascimentoB: function(){
        let anoNascimentoB = (2021 - this.idade_anosB);
        return (anoNascimentoB)
    }
};

console.log(pessoaB.imcB(),pessoaB.anoNascimentoB())