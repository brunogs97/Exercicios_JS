/*
-> EXERCÍCIO 1: MAIÚSCULAS E MINÚSCULAS
 1 - Crie uma string e converta todas as letras para maiúsculas.
 2 - Crie outra string e converta todas a letras para minúsculas.
 3 - Misture maiúsculas e minúsculas em uma terceira string
*/

let paragraphOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let paragraphTwo = "sunt in culpa qui officia deserunt mollit anim id est laborum."
let uppercaseString = paragraphOne.toUpperCase();
let lowercaseString = paragraphTwo.toLowerCase();

console.log(uppercaseString,"\n",lowercaseString);
console.log(`${uppercaseString} ${lowercaseString}`);

/*
-> EXERCÍCIO 2: TAMANHO E SUBSTRING
 1 - Crie uma string e imprima seu comprimento.
 2 - imprima os primeiros 5 caracteres da string.
 3 - Imprima os últimos 3 caracteres da string.
*/

let lengthString = paragraphOne.length;

console.log(lengthString);
console.log(paragraphOne.slice(0, 6)); // o índice 6 não será incluso
console.log(paragraphTwo.slice(-4)); // a contagem será a partir do final

/*
-> EXERCÍCIO 3: SUBSTITUIÇÃO E CONCATENAÇÃO
 1 - Crie uma string e substitua uma palavra específica por outra.
 2 - Crie duas strings e as concatene para formar uma nova string.
*/

let pattern = /Lorem/gi;
let replaceString = paragraphOne.replace(pattern, "Bruno");
let concatenatedString = paragraphOne.concat(paragraphTwo);

console.log(replaceString, "\n", concatenatedString);

/*
-> EXERCÍCIO 4: BUSCA E EXTRAÇÃO 
 1 - Crie uma string e verifique se uma palavra específica está presente nela.
 2 - Encontre a posição da primeira ocorrência de uma determinada letra na string.
 3 - Extraia uma parte específica da string.
*/

let searchWord = paragraphOne.search("Lorem"); // 0 = true -1 = false
let idxLetter = paragraphTwo.indexOf("o"); // índice da primeira ocorrência
let sliceString = paragraphOne.slice(5, 14); // extrair uma pedaço específico do parágrafo

console.log(searchWord);
console.log(idxLetter);
console.log(sliceString);

/*
-> EXERCÍCIO 5: DIVISÃO E JOIN 
 1 - Crie uma string com várias palavras e divida-a em uma array de palavras.
 2 - Junte as palavras de um array em uma única string.
 3 - Crie uma string com espaços em branco no início e no final, e remova esses espaços.
 4 - Crie uma string com data no formato "dd/mm/yyyy" e converta para o formato "dd-mm-yyyy".
*/

let newString = "branco, carro, céu, casa, chocolate";
let trimmedString = "    Olá, Mundo    ";
let dataOriginal = "13/12/2024";
let partes = dataOriginal.split("/");
let dia = partes[0];
let mes = partes[1];
let ano = partes[2];

let arr = newString.split(", "); // dividir as palavras em um array

console.log(arr);
console.log(arr.join("")); // juntar as palavras em uma única string
console.log(trimmedString.trim()); // remover espaços em branco no início e no final
console.log(`${dia} - ${mes} - ${ano}`);
