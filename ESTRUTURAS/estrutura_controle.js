// ESTRUTURA DE CONTROLE IF...ELSE

/* 
 1 - VERIFICAÇÃO DE IDADE:
 *Escreva um programa que solicita a idade do usuário e imprime se ele é maior ou menor de idade.
*/

let idade = 26;
let verificaIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade";

console.log(verificaIdade);

/* 
 2 - CLASSIFICAÇÃO DE NÚMEROS:
 *Desenvolva uma função que recebe dois números como parâmetros e imprime se o primeiro
 é maior, menor ou igual ao segundo.
*/

function classificaNumero(num1, num2) {
    if(num1 > num2) {
        return `O primeiro número é maior: ${num1} é maior que o ${num2}.`
    } else if(num2 > num1) {
        return `O segundo número é maior: ${num2} é maior que o ${num1}.`
    } else {
        return `Os números são iguais: ${num1} é igual o ${num2}.`
    }
}

console.log(classificaNumero(3, 7));
console.log(classificaNumero(10, 5));
console.log(classificaNumero(7, 7));

/* 
 3 - VERIFICAÇÃO DE NÚMEROS PARES:
 *Crie um programa que solicita um número ao usuário e verifica se é par
 ou ímpar. Imprima uma mensagem correspondente.
*/

function parOuImpar(num) {
    if(num % 2 === 0) {
        return `O número ${num} é par.`;
    } else {
        return `O número ${num} é ímpar.`;
    };
}

console.log(parOuImpar(264));
console.log(parOuImpar(337));

/* 
 4 - CATEGORIZAÇÃO DE NOTAS:
 *Implemente um programa que solicita uma nota de 0 a 10 e imprime a categoria correspondente 
 (A, B, C ou D) de acordo com a escala de notas.
*/

function categoriaNotas(nota) {
    if(nota < 0 || nota > 10) {
        return `Nota inválida.`
    }

    if(nota < 3) {
        return `O seu resultado é "D".`
    } else if(nota <= 5) {
        return `O seu resultado é "C".`
    } else if(nota <= 7) {
        return `O seu resultado é "B".`
    } else {
        return `O seu resultado é "A".`
    }
}

console.log(categoriaNotas(2));
console.log(categoriaNotas(5));
console.log(categoriaNotas(9));
console.log(categoriaNotas(-2));
console.log(categoriaNotas(42));

/* 
 5 - MAIOR DE TRÊS NÚMEROS:
 *Escreva um programa que recebe três números como entrada e imprime o maior deles.
*/

function maiorNumero(num) {
    let maiorNum = Math.max(...num);

    return maiorNum;
}

console.log(maiorNumero([10, 8, 4]));

/* 
 6 - CLASSIFICAÇÃO DE TRIÂNGULOS:
 *Crie um programa que recebe os comprimentos dos lados de um triângulo e imprime
 se é equilátero, isóceles ou escaleno.
*/

function verificaTriangulo (a, b, c) {
    if(a === b && b === c) {
        return `Pelos comprimetos apresentado, é um triângulo EQUILÁTERO.`
    } else if(a === b || a === c || b === c) {
        return `Pelos comprimetos apresentado, é um triângulo ISÓCELES.`
    } else {
        return `Pelos comprimetos apresentado, é um triângulo ESCALENO.`
    };
}

console.log(verificaTriangulo(2, 4, 4));
console.log(verificaTriangulo(5, 5, 5));
console.log(verificaTriangulo(2, 4, 10));
