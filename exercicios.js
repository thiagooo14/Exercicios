let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1
console.log('exercicio 1');
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// 2
console.log('exercicio 2');
let total = 0;
for (let index = 0; index < numbers.length; index += 1) {
  const element = numbers[index];
  total += element;
}
console.log(total);

// 3
console.log('exercicio 3');
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
  const element = numbers[index];
  soma += element;
}
let media = soma / numbers.length;
console.log(media);

// 4
console.log('exercicio 4');
if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// 5
console.log('exercicio 5');
let maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);

// 6
console.log('exercicio 6');
totalImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers % 2 !== 0) {
    totalImpar += 1;
  }
}

if (totalImpar > 0) {
  console.log(totalImpar);
} else {
  console.log('nenhum valor ímpar encontrado');
}

// 7
console.log('exercicio 7');
let menor = 8000;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

// 8
console.log('exercicio 8');
let arr = [];
for (let index = 1; index <= 25; index += 1) {
  arr.push(index);
}
console.log(arr);
// 9
console.log('exercicio 9');
for (let index = 0; index < arr.length; index += 1) {
  console.log(arr[index] / 2);
}
// bonus 1
console.log('exercicio bonus 1');
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//   bonus 2
console.log('exercicio bonus 2');
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

// bonus 3
console.log('exercicio bonus 3');
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
  if (numbers[index + 1]) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
