/*1:*/ const name = 'thiago';
/*2:*/ const birthCity = 'Florianópolis';
/*3:*/ let birthYear = 1991;
/*4:*/ console.log(name, birthCity, birthYear);
/*5:*/ birthYear = 2020;
console.log(birthYear);
// /*6:*/ birthCity = NY
// console.log(birthCity);
/*7:*/
let base = 5;
let altura = 8;
/*8:*/
let area = base * altura;
console.log('a area é: ' + area);
/*9:*/
let perimetro = base * 2 + altura * 2;
console.log(perimetro);
/*9:*/ let nota = 80;
/*10:*/
if (nota >= 80) {
  console.log('parabéns, você foi aprovada(o)!');
} else if (nota >= 60 && nota < 80) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)');
}
