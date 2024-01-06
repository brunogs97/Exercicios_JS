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
