let nome = String(prompt("Digite seu nome"));

console.log("Seu nome tem " , nome.length , " letras!");

let um = "Programar é legal!";
console.log("Minusculas = " , um.toLowerCase());
console.log("Maiusculas = " , um.toUpperCase());

let dois = "    JavaScript é incrível!    ";
console.log("Frase sem espaços em branco =" , dois.trim());

let tres = "Eu amo programar em JavaScript";
console.log("Palavra programa (-1 se nao tiver a palavra na frase)" , tres.indexOf("programar"));
console.log("Palavra programa (-1 se nao tiver a palavra na frase)" , tres.indexOf("phyton"));

let quatro = "Programação é divertida!";
console.log("Letra na posição 3 = " , quatro.charAt(3));
console.log("Letra na posição 10 = " , quatro.charAt(10));

let cinco = "Eu adoro JavaScript!";
console.log(cinco.slice(3, 8));

let seis = "Eu amo programar!";
let novaFrase = seis.replace("programar", "aprender");
console.log(novaFrase);

let sete = "Eu amo JavaScript!";
let palavras = sete.split(" ");
console.log(palavras);
