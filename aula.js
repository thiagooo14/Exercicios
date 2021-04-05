// Objeto é um tipo de dado que permite armazenar entradas com tipo, chave - valor
// pra declarar objetos, declaramos pareciso com uma variavel, exemplo
// a chave tambêm é chamada de Propriedade
let singer = {
  // dentro do objetos passamos a Chave seguido de dois pontos(:) e o valor
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  // os valores podem ser string, number arrays, entre outros
  age: 77,
  bestAlbund: ['Travessia', 'Clube da Esuina', 'Minas'],
  // podemos tambêm passar um objeto dentro do objeto
  bornInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
  },
};

// uma das maneiras de acessar o valor de uma propriedade é usando a notação por ponto
// ela é mais utilizada quando queremos acessar o valor de uma propriedade, ou atualizar o valor
console.log(
  'O cantor ' +
    singer.name +
    ' ' +
    singer.lastName +
    ' possui ' +
    singer.age +
    'anos.'
);

// outra forma de acessar a propriedade é atravez de chaves
console.log(
  'O cantor ' +
    singer['name'] +
    ' ' +
    singer['lastName'] +
    ' possui ' +
    singer['age'] +
    'anos.'
);

//   a utilização de chavez é utilizada pra criar novas propriedades

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

// para ter acesso do objeto dentro do objeto podemos fazer da seguinte maneira

console.log(
  'O Cantor' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state
);

// FOR IN
// caso queiramos, por exemplo, fazer um laço que percorra o objeto pizza
let pizzas = {
  sabor: 'Palmito',
  preco: 39.9,
  bordaCatupiry: true,
};

// podemos utilizar for in, a estrutura, iremos criar uma variavel indice, e declaramos aonde iremos varrer, por exemplo.

for (let key in pizzas) {
  console.log(pizzas[key]);
}

// ele tambêm funciona com arrays
let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
}

// Entretanto, é importante ressaltar que existe uma diferença entre o For/in e o For/of , que vimos anteriormente.
// O For/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção,
// e não nos valores das propriedades.

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
  console.log(position);
} //resultado: 0, 1, 2;

for (let value of food) {
  console.log(value);
}
//resultado: hamburguer, bife, acarajé;
// ou seja o valor do for IN é o index referente, ja no FOR OF é o valor da posição
