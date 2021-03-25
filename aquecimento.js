let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// 1
let menuServices = menu[1];

console.log(menuServices);

// 2
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// 3
menu.push('Contato');

console.log(menu);

// for
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
  console.log(groceryList[index]);
}

// for of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (const name of names) {
    console.log(name);
}
