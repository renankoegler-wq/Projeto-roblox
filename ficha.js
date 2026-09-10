

const nomeItem = [];
const precoItem = [];
const raridadeItem = [];
const estoque = [];
let disponivel = [];


const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    
if (i+1 == 0) {
    console.log(`=== Cadastro do Item ${i + 1} ===`);
}
else {
    console.log(`=== Cadastro do Item ${i + 1} ===`)
}

    
 nomeItem[i] = prompt('Qual o nome do Item? : ');
 precoItem[i] = Number(prompt('Qual é o preço do Item?: '));
if (precoItem[i] < 0) {
    console.log('O item está em um valor inválido');

}
if (precoItem[i] < 100) {
    raridadeItem[i] = 'comum';
}
else if (precoItem[i] < 500) {
    raridadeItem[i] = 'raro';
}

else {
    raridadeItem[i] = 'lendário';
}
let emDestaque = precoItem[i] > 500 ? true : false

 estoque[i] = Number(prompt('Qual é o estoque do Item?: '));
if (precoItem[i] > 0 && estoque[i] > 0) {
    disponivel[i] = true;
}
else {
    disponivel[i] = false
}







console.log('=== FICHA DO ITEM === + \n');
console.log(`Nome:  ${nomeItem[i]} \n`);
console.log(`Preço: R$ ${precoItem[i]}  \n`);
console.log(`Raridade: ${raridadeItem[i]}  \n`);

console.log(`Estoque: ${estoque[i]} \n`);
if (disponivel[i] == true) {
    console.log('Disponível')
}
else {
    console.log('Indisponível \n\n')
}
if (i % 2 - 1 === 0) {
    
        console.log('Item em SUPER promoção da semana!\n\n')
}



    
console.log(`Item ${i+1} cadastrado`)
}



















