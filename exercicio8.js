let numero1 = prompt('insira o primeiro numero');
let numero2 = prompt('insira o segundo numero');

let resto = numero1 % numero2;
if (resto == 0) {
  console.log('o primeiro numero digitado e divisivel pelo segundo');
} else if (resto != 0 && /\d/.test(numero1 % numero2)) {
  console.log('o primeiro numero digitado não  divisivel pelo segundo');
} else {
  console.log('valor invalido');
}
