let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1
console.log('exercicio 1');
console.log('Bem-vinda, ' + info.personagem);

// 2
console.log('exercicio 2');
info['recorrente'] = 'Sim';
console.log(info);

// 3
console.log('exercicio 3');
for (let key in info) {
  console.log(key);
}

// 4
console.log('exercicio 4');
for (let key in info) {
  console.log(info[key]);
}

// 5
console.log('exercicio 5');

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    info[properties] === info.recorrente &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

// 1
console.log('exercicio função 1');

function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false
