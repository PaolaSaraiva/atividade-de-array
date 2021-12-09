/**

Crie uma página html contendo 4 campos do tipo numérico. 

a. Adicione um botão com a função de armazenar os números digitados em um vetor na memória; 
b. Adicione um botão que reorganize e exiba o vetor ao contrário. Ex.: [0,3,4,9] -> [9,4,3,0] 
c. Adicione um botão que ordene em ordem crescente e exiba o vetor ordenado. Ex.: [23,7,33,1] -> [1,7,23,33] 

Obs.: Não será permitido o uso de funções prontas da linguagem, tais como o método sort().

 */

// Fazer um vetor original
let vetororiginal = [];

const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");
const numero3 = document.querySelector("#numero3");
const numero4 = document.querySelector("#numero4");
const vetor = document.querySelector("#vetor");

function limparvetor() {
  vetororiginal = [];
}

function armazenarnumeros() {
  limparvetor();
  const valornumero1 = Number(numero1.value);
  const valornumero2 = Number(numero2.value);
  const valornumero3 = Number(numero3.value);
  const valornumero4 = Number(numero4.value);
  vetororiginal.push(valornumero1);
  vetororiginal.push(valornumero2);
  vetororiginal.push(valornumero3);
  vetororiginal.push(valornumero4);
  vetor.innerHTML = vetororiginal;
}
function aocontrario() {
  let aocontrario = [];
  aocontrario.push(vetororiginal[3]);
  aocontrario.push(vetororiginal[2]);
  aocontrario.push(vetororiginal[1]);
  aocontrario.push(vetororiginal[0]);
  vetororiginal = aocontrario;
  vetor.innerHTML = aocontrario;
}
function crescente() {
  let crescente = [];
  let min;
  for (let i = 0; i < vetororiginal.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < vetororiginal.length; j++) {
      if (vetororiginal[j] < vetororiginal[min]) {
        min = j;
      }
    }
    trocar(vetororiginal, min, i);
  }
  vetor.innerHTML = vetororiginal;
}
function trocar(array, xp, yp) {
  let aux = array[xp];
  array[xp] = array[yp];
  array[yp] = aux;
}
