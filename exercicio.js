let n = 5;
let symbol = '*';
// 1
console.log('exercicio 1');
let inputLine = '';
for (let i = 0; i < n; i += 1) {
  inputLine = inputLine + symbol;
}
for (let i = 0; i < n; i += 1) {
  console.log(inputLine);
}

// 2
console.log('exercicio 2');
inputLine = '';

for (let i = 0; i <= n; i += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
}

// 3
console.log('exercicio 3');
inputLine = '';
let inputPosition = n;

for (let i = 0; i < n; i += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}

// 4
console.log('exercicio 4');
inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let i = 0; i <= midOfMatrix; i += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1;
}
// 5
console.log('exercicio 5');
n = 7;
let middle = (n + 1) / 2;
controlLeft = middle;
controlRight = middle;
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}