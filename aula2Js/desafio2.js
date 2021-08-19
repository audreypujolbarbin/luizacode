class Pessoa {
    calcImc() {
        let result = ((this.peso / (this.altura * this.altura)).toFixed(2));
        return result
    }

    calcAnoNascimento() {
        let result = (2021 - this.idade);
        return result
    }
}

let pessoaA = new Pessoa();
pessoaA.nome = "Tiago";
pessoaA.idade = 33;
pessoaA.altura = 1.75;
pessoaA.peso = 90;

console.log(pessoaA.calcImc(), pessoaA.calcAnoNascimento());

let pessoaB = new Pessoa();
pessoaB.nome = "Marcio";
pessoaB.idade = 58;
pessoaB.altura = 1.70;
pessoaB.peso = 90;

console.log(pessoaB.calcImc(), pessoaB.calcAnoNascimento());