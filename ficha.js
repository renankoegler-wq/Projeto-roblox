let nomeItem = ('Espada das sombras');
let precoItem = (250);
let raridadeItem = ('Raro');
let estoque = (12);
let disponivel = false

console.log('=== FICHA DO ITEM === + \n');
console.log('Nome: ' + nomeItem + '\n');
console.log('Preço: R$ ' + precoItem + '\n');
console.log('Raridade: ' + raridadeItem + '\n');
console.log('Estoque: ' + estoque + '\n');

if (precoItem < 0) {
    console.log('o item está em um valor inválido');
}

if (precoItem < 100) {
    raridadeItem = 'comum';
}

else if (precoItem < 500) {
    raridadeItem = 'raro';
}

else {
    raridadeItem = 'lendário';
}

let emDestaque = precoItem > 500 ? true : false

if (precoItem > 0 && estoque > 0) {
    let disponivel = true;
}

