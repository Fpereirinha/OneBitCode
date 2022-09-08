const value = parseFloat(prompt("Digite o valor em metros"));
const type = parseFloat(
  prompt(`Digite qual a medida desejada para conversão:\n
1 - Milimetros\n
2 - Centimetros\n
3 - Decimetros\n
4 - Decametro\n
5 - Hectometro\n
6 - Quilometro`)
);
let convertido;
switch (type) {
  case 1:
    convertido = `Valor de ${value} para milimetros é ${value * 1000}mm`;
    break;
  case 2:
    convertido = `Valor de ${value} para centimetros é ${value * 100}cm`;
    break;
  case 3:
    convertido = `Valor de ${value} para decimetros é ${value * 10}dm`;
    break;
  case 4:
    convertido = `Valor de ${value} para decametros é ${value / 10}dam`;
    break;
  case 5:
    convertido = `Valor de ${value} para hectometros é ${value / 100}hm`;
    break;
  case 6:
    convertido = `Valor de ${value} para quilometros é ${value / 1000}km`;
    break;
  default:
    convertido = "Medida inválida";
}
alert(convertido);
