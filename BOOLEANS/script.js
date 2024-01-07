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

/* 
 3 - VALIDAÇÃO DE SENHA
 * Crie uma função que aceite uma senha como argumento. A senha deve ter no mínimo 8 caracteres
 e conter pelo menos uma letra maiúscula, uma letra minúsucula e um número. 
*/

function validarSenha(senha) {
    // validar se a senha tem pelo menos 8 caracteres
    if(senha.length < 8) {
        return false;
    }

    // verificar se a senha tem pelo menos uma letra maiúscula
    if(!/[A-Z]/.test(senha)) {
        return false;
    }

    // verificar se a senha tem pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
        return false;
    }

    //verificar se a senha contém pelo menos um número
    if(!/\d/.test(senha)) {
        return false;
    }

    //se todas as condições forem atendidas, senha é válida
    return true;
    
}

console.log(validarSenha("Senha1234"));
console.log(validarSenha("abc123"));
console.log(validarSenha("Senha")); 
console.log(validarSenha("12345678"));

/* 
 4 - DIA DE SEMANA
 * Crie uma função que aceite um número representando o dia da semana (1 para Domingo,
 2 para Segunda-feira, etc.) e retorne verdadeiro se for um dia útil (Segunda a Sexta)
 e falso se for um fim de semana. 
*/

function diaDaSemana(dia) {
    if(dia == String && dia > 7) return false;
    
    if (dia === 1 || dia === 6) return false;

    if (/[2-5]/.test(dia)) return true;
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(2));
console.log(diaDaSemana(4));
console.log(diaDaSemana(6));


