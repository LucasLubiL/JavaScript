let num;
let vet = [];
let i = 0;
let sum = 0;
let mediana = 0;
let meno = 9999999;
let maio = -9999999;
let par = 0;
let impar = 0;
let mult;

while((num = Number(prompt("Digite um numero"))) != 0) {

	vet[i] = num;
	i++;

	if(num < meno) {
		meno = num;
	}

	if(num > maio) {
		maio = num;
	}

	if(num%2==0) {
		par++;
	} else {
		impar++;
	}

	sum += num;

}

let media = sum/i;
vet.sort((a, b) => a - b);

if(i%2!=0) {

	let cont = Math.floor(i-1)/2;
	mediana = vet[cont];

} else {

	let cont1 = (i/2) - 1;
	let cont2 = i/2;
	mediana = (vet[cont1] + vet[cont2])/2;

}

console.log("Maior numero = ", maio);
console.log("Menor numero = ", meno);
console.log("Mediana = ", mediana);
console.log("Média = ", media);
console.log("Par = " , par);
console.log("Impar = ", impar);

for(let k = 0 ; k < i; k++) {
    
    let aux = vet[k];
    mult = aux;
    
	for(let p = 1 ; p < aux; p++) {

        mult = mult * p;

	}
	
	console.log("Fatorial  de numero ", aux , " = " , mult);
	
}