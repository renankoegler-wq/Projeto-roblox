

// Declarações de arrays

const nomeItem = [];
const precoItem = [];
const raridadeItem = [];
const estoque = [];
let disponivel = [];

// Biblioteca instalada, usamos principalmente para "ler"

const prompt = require('prompt-sync')();

// Etapa 1: Template de cadastro de itens

console.log ('=== TEMPLATE DE CADASTRO === \n\n')
console.log ('=== FICHA DO ITEM ===\n')
console.log ('Nome: Espada das Sombras\n')
console.log('Preço: R$ 250\n')
console.log('Raridade: Raro\n')
console.log('Estoque: 12 unidades\n\n')


// Etapa 3: Repetir 5 vezes o cadastro de itens

for (let i = 0; i < 5; i++) {
    

   console.log(`=== Cadastro do Item ${i + 1} ===`)

 // Etapa 2: Validar informações importantes
   
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
 console.log('\n\n')
if (precoItem[i] > 0 && estoque[i] > 0) {
    disponivel[i] = true;
}
else {
    disponivel[i] = false
}




// Etapa 1: Exibindo no console o item cadastrado



console.log('=== FICHA DO ITEM === ');
console.log(`Nome:  ${nomeItem[i]} `);
console.log(`Preço: R$ ${precoItem[i]}  `);
console.log(`Raridade: ${raridadeItem[i]}  `);

console.log(`Estoque: ${estoque[i]} \n`);
if (disponivel[i] == true) {
    console.log('Disponível');
}
else {
    console.log('Indisponível \n\n');
}

// Etapa 3: Item em promoção da semana

if (i % 2 - 1 === 0) {
    
        console.log('Item em SUPER promoção da semana!\n\n');
}



    
console.log(`Item ${i+1} cadastrado`);
}

resposta = prompt('deseja testar uma venda? ');

// Etapa 4: Venda de itens

if (resposta == 'sim') {
    resposta = prompt('qual número do cadastro do produto? ');
    resposta = resposta-1
    console.log('testando vendas.');
    console.log(`Estoque: ${estoque[resposta]} atual \n`);
    while (estoque[resposta] > 0)
    {
        console.log(`estoque atual: ${estoque[resposta]} `)
        estoque[resposta] = estoque[resposta]-2
    }

    console.log('estoque acabado!')
}

resposta = prompt('você deseja utilizar o catálogo? ')

// Etapa 5: Catálogo de itens

if (resposta == 'sim') {
    for (let itemAtual of nomeItem) {
        console.log (`item atual: ${itemAtual}`)
        prompt('aperte enter para ir para o proximo item')
    }        

    console.log('você chegou ao fim do catálogo!')
}
