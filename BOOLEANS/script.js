// EXERCÍCIOS BOOLEANOS

/* 
 1 - VERDADEIRO OU FALSO
 * Declare duas variáveis, atribua valores a elas e cria uma expressão que avalie
 como verdadeira e outra que avalie como falsa. 
*/

let maiorQue = 5 > 3;
let menorQue = 10 < 3;

console.log(maiorQue, menorQue);

/* 
 2 - IDADE E PERMISSÃO
 * Crie uma função que receba a idade de uma pessoa como argumento e retorne 
 verdadeiro se a pessoa tiver 18 anos ou mais, e falso caso contrário. 
*/

function maiorIdade(idade) {
    if(idade >= 18) {
        return `Você pode entrar na festa! Aproveite!`;
    } else {
        return `Você não tem idade para entrar na festa!`;
    }
}

console.log(maiorIdade(16));

