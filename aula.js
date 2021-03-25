// Array é uma lista que faz o armazenamento de várias informações em uma mesma estrutura
let pizzas = [
  '4 Queijos',
  'Frango com Catupiry',
  'Marguerita',
  'Palmito',
  'Chocolate',
];
// cada elemento no array recebe um indice que indentifica a posição dela, sendo que o primeiro item é o indice 0

console.log('Menu de sabores: ' + pizzas);

// se quiser adicionar um novo valor no array podemos usar o .push
pizzas.push('Peito de Peru');
console.log(pizzas);
// O método .pop() permite que você remova o último item do array. Agora, se precisar remover o primeiro item da lista, você pode usar o .shift()
pizzas.pop();

// caso queiramos ver o tamanho do nosso array usamos o , .length
console.log(pizzas.length);
// Como podemos observar, é possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0 . Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1

// caso queiramos organizar em ordem alfabetica, utilizamso o .sort
console.log('pizza em orfdem alfabetica: ' + pizzas.sort());

// e caso queiramos chamar certo valor, podemos chamar pelo indice
console.log(pizzas[3]);

// caso queiramos printar individualemtne cada item do array, podemos fazer o console.log para cada item
// ou podemos utilizar um laço de repetição for, por exemplo
for (let index = 0; index < pizzas.length; index++) {
  console.log(pizzas[index]);
}

// pra facilitar, podemos utilizar tambem o for of
for (const pizza of pizzas) {
    console.log(pizza);
}
// O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array.

