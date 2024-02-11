/* 1 - MANIPULAÇAO BASICA DE ARRAYS
    - Crie um array com cinco números e exiba no console.
    - Adicione um elemento ao final do array.
    - Remova o terceiro elemento do array.
    - Verifique se um número específico está presente no array.
*/

let names = ["John", "Carl", "Josh", "Peterson"];
console.log(names);

let addName = names.push("Roberta");
console.log(names);

let removeEl = names.splice(3, 1);
console.log(names);

let checkName = names.includes("Larissa");
console.log(checkName);

/* 2 - ITERAÇÃO E MODIFICAÇÃO
    - Utilize um loop para dobrar cada elemento de um array de números.
    - Crie um novo array com base em outro, filtrando apenas os números pares.
    - Some todos os elementos de um array.
*/

let numbers = [2, 10, 28, 36, 137];

let doubleNumbers = numbers.forEach((el) => {
    console.log(`O dobro do número ${el} é: ${el * 2}`);
});

console.log(numbers);

// filtrando apenas numeros pares
let emptyArr = [];

let pairNumbers = numbers.forEach((el) => {
    if(el % 2 === 0) {
        emptyArr.push(el);
    };
});

console.log(emptyArr);

// somar todos os valores do array
let sum = 0;

for(let i = 0; i <= numbers.length; i++) {
    console.log(sum);
    sum = sum + numbers[i];
};
