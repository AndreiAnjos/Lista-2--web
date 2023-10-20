let numero = prompt('insira seu numero');
let resto = numero % 2;
if (resto == 0) {
  console.log('seu numero e par');
} else if (resto == 1) {
  console.log('seu numero e impar');
} else {
  console.log('valor invalido');
}
