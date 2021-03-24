// ao declarar uma variavel, precisamos começar com uma letra minuscula
let age = 20;
// variavel com duas ou mais palavras, se utiliza camelCase,
//  onde a primeira letra das proximas palavras começa em maiusculo
let fullName = 'Thiago Tavares';
// se a variavel é declarada com let, podemos reatribuir o valor, chamando ela e passando um novo valor pra ela
age = 30;
// para evitar mudança, devemos declarar a variavel com const!

console.log(age);
console.log(fullName);

// as variaveis tem alguns tipos, são elas:
let movie = 'Avengers'; //string literal
let score = 10; //number literal
let isValid = true; // boolean (true or false)
let name; //undefined
let color = null; //redefinição
// se quisermos saber qual é o tipo da variavel podemos fazer: console.log(typeof name);
// Podemos tambêm fazer operações matematicas com o JS usando o "+" para soma, "-" para subtração,
// "*" multiplicação, "/" para divisão e "**" para esponeciação, podemos tambê incrementar ou decrementar
// usando respectivamente o "++" e "--"

//  no JavaScript temos condicionais, são elas
// if - se
// else - senão

let trybe = 16.42;

if (trybe >= 14 && trybe < 14.41) {
  console.log('Esquenta');
} else if (trybe >= 16.3 && trybe < 17.5) {
  console.log('Aula ao vivo');
} else if (trybe >= 19.4 && trybe < 20) {
  console.log('Fechamento');
} else {
  console.log('Fora dos momentos sincronos');
}

// outra maneira de usar condições é o switch -- case
let trafficLigth = "vermelho";

switch (trafficLigth) {
    case "vermelho":
        console.log("pares");
        break;
    case "amarelo":
        console.log("atenção");
        break;
    case "verde":
        console.log("siga");
        break;
    
    default:
        console.log("valor não indentificado");
}
