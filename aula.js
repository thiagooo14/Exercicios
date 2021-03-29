// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16"
// A resolução do problema acontece em 3 etapas:
// Interpretação;
// Criação do algoritmo;
// Codificação do algoritmo.
// Portanto, primeiro vamos interpretar o que está sendo pedido, e essa etapa é crucial para solucionar o problema. Se interpretarmos errado, o algoritmo e consequentemente o código estará errado.
// Analisando o enunciado, sabemos que:
// devemos utilizar o array fruits ;
// o termo " percorra " indica uma estrutura de repetição, ou loop;
// " somando todos os valores " mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// o termo " caso " indica uma estrutura condicional, ou if ;
// " imprima o valor final " indica um console.log ;


let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (const fruit of fruits) {
    soma += fruit
}

if (soma > 15) {
    console.log(soma);
} else {
    console.log("valor menor que 16");
}
