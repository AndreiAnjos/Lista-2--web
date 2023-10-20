let numero = prompt('insira seu ano');
if ((numero % 4)==0) {
  console.log('seu ano e bisexto');
}  if ((numero % 100)==0) {
  console.log('seu ano e divisivel por 100');
}  if ((numero % 400)==0) {
  console.log('seu ano e divisivel por 400');
} 
else {
  console.log('este ano não e bisexto nem divisivel por 100 ou 400');
}
