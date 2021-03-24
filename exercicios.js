let a = 0;
let b = 0;
let c = 0;
// 1:
console.log('exercicio 1');
a = 7;
b = 6;
console.log('adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + a * b);
console.log('Divisão: ' + a / b);
console.log('Módulo: ' + (a % b));
// 2:
console.log('exercicio 2');
a = 45;
b = 5;
if (a > b) {
  console.log('o valor a (' + a + ') é maior que valor b (' + b + ')');
} else {
  console.log('o valor b (' + b + ') é maior que valor a (' + a + ')');
}
// 3:
console.log('exercicio 3');
a = 42;
b = 23;
c = 6;
if (a > b && a > c) {
  console.log(
    'o valor a (' + a + ') é maior que valor b (' + b + ') e c (' + c + ')'
  );
} else if (b > a && b > c) {
  console.log(
    'o valor b (' + b + ') é maior que valor a (' + a + ')e c (' + c + ')'
  );
} else {
  console.log(
    'o valor c (' + c + ') é maior que valor a (' + a + ')e b (' + b + ')'
  );
}
// 4
console.log('exercicio 4');
let numero = -3;

if (numero > 0) {
  console.log('positive');
} else if (numero < 0) {
  console.log('negative');
} else {
  console.log('zero');
}
// 5
console.log('exercicio 5');
a = 90;
b = 45;
c = 45;

let somaDosAngulos = a + b + c;
let checaAnguloPositivo = a > 0 && b > 0 && c > 0;
if (checaAnguloPositivo) {
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('angulo invalido');
}
// 6
console.log('exercicio 6');
let peça = 'rainha';

switch (peça.toLowerCase()) {
  case 'rei':
    console.log('Rei: uma casa para qualquer direção.');
    break;
  case 'rainha':
    console.log('Rainha: Horizontal, Vetical e Diagonal.');
    break;
  case 'bispo':
    console.log('Bispo: Diagonal.');
    break;
  case 'cavalo':
    console.log('Cavalo: "L" pode pular outra peças.');
    break;
  case 'torre':
    console.log('Torre: Horizontal e Vetical.');
    break;
  case 'peão':
    console.log('Peão: apenas uma casa pra frente.');
    break;
  default:
    console.log('peça invalida');
    break;
}

// 7
console.log('exercico 7');
let nota = 42;

if (nota > 100 || nota < 0) {
  console.log('Nota invalida');
} else if (nota >= 90) {
  console.log('A');
} else if (nota >= 80) {
  console.log('B');
} else if (nota >= 70) {
  console.log('C');
} else if (nota >= 60) {
  console.log('D');
} else if (nota >= 50) {
  console.log('E');
} else {
  console.log('F');
}

// 8
console.log('exercicio 8');
a = 1;
b = 2;
c = 3;
let temPar = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  temPar = true;
}
console.log(temPar);
// 9
console.log('exercicio 9');
a = 1;
b = 5;
c = 3;
let temImpar = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  temImpar = true;
}
console.log(temImpar);

// 10
console.log('exercicio 10');
let valorCusto = 1;
let valorVenda = 3;
if (valorCusto >= 0 && valorVenda >= 0) {
  let valorCustoTotal = valorCusto * 1.2;
  let lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log('ERRO: não utilize numero negativo');
}
