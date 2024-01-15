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

/* 
 6 - VALOR MÍNIMO EM UM ARRAY:
 * Desenvolva uma função que receba um array de números e utilize o objeto `Math`
 para encontrar o valor mínimo presente no array.
*/

function lowerValue(arr) {
    if(arr.length === 0) return undefined;

    let minValue = Math.min(...arr); // utilizar o operador spread(...) para armazenar os valores
    return minValue;
}

console.log(lowerValue([4, 10, 9, 1, 7]));
console.log(lowerValue([]));

/* 
 7 - FATORIAL:
 * Implemente uma função que calcule o fatorial de um número.
*/

function calcFactorial(num) {
    if(num < 0) {
        return `Número negativo, fatorial não definido.`;
    } else if(num === 0 || num === 1) {
        return 1; // o fatorial de 0 e 1 é 1
    } else {
        let result = 1;
        for(let i = 2; i <= num; i++) {
            result *= i;
        }

        return result;
    }
}

console.log(calcFactorial(5));
console.log(calcFactorial(4));
console.log(calcFactorial(2));

/* 
 8 - ARREDONDAMENTO PARA NÚMEROS INTEIROS NEGATIVOS:
 * Crie uma função que aceite um número decimal e use o objeto `Math` para arredondá-lo
 para o número inteiro mais próximo, mas apenas se for negativo.
*/

function negativeInteger(num) {
    if(num >= 0) {
        return num;
    } else {
        return Math.round(num);
    }
}

console.log(negativeInteger(-5.8));
console.log(negativeInteger(-26.4));
console.log(negativeInteger(-1.8));
console.log(negativeInteger(1.8));

/* 
 9 - GERAÇÃO DE NÚMEROS ALEATÓRIOS EM UM INTEVALO PERSONALIZADO:
 * Desenvolva uma função que aceie dois parâmetros, `min` e `max`, e utilize o objeto `Math`
 para gerar um número aleatório entre esses dois valores(inclusive).
*/

function randNumber(min, max) {
    if(min >= max) {
        return `Intervalo inválido.`
    } 

    // fórmula para gerar um número aleatório entre min e max, inclusive.
    const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;  

    return randNumber;
}

let numeroMinimo = 10;
let numeroMaximo = 20;

console.log(randNumber(numeroMinimo, numeroMaximo));