//OBJETO MATH

/*
 1 - ELEVANDO AO QUADRADO:
 * Crie uma funcao que receba um número como parâmetro e use o objeto `Math`
 para elevar esse número ao quadrado 
*/

const x = 4;

function numberSquared(num) {
    return Math.pow(num, 2);
}

console.log(numberSquared(x));

/* 
 2 - NÚMEROS ALEATÓRIOS COM RESTRIÇÃO:
 * Implemente uma função que fere um número aleatório entre dois valores dados
 (mínimo e máximo), mas excluindo o valor máximo.
*/

function randomNumber() {
    return Math.round(Math.random() * 10);
}

console.log(randomNumber());

/* 
 3 - ARREDONDAMENTO PARA NÚMEROS INTEIROS POSITIVOS:
 * Desenvolva uma função que receba um número decimal e use o objeto `Math` para
 arredondá-lo para o número inteiro mais próximo, mas apenas se for positivo.
*/

function positiveInteger(num) {
    if(num > 0) {
        return Math.round(num);
    }

    return num;
}

console.log(positiveInteger(3.1));
console.log(positiveInteger(5.7));
console.log(positiveInteger(9.8));

/* 
 4 - GERAÇÃO DE NÚMEROS ALEATÓRIOS DE PONTO FLUTUANTE:
 * Crie uma função que gere um número aleatório de ponto flutuante entre 0(inclusive) e 1(exclusivo).
*/

function generateNumber() {
    return Math.random();
}

console.log(generateNumber());

/* 
 5 - CONVERSÃO DE RADIANOS PARA GRAUS:
 * Escreva uma função que aceite um ângulo em radianos como parâmetro e uso o
 objeto `Math` para converteê-lo para graus.

 fórmula => rad * 180 / PI
*/

function convertRadToDeg(rad) {
    return Math.round((rad * 180) / Math.PI);
}

console.log(convertRadToDeg(0.01745));