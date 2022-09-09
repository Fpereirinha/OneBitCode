let numero = parseInt(prompt("Digite o número para calcularmos a tabuada"));
const tabuada = (x) => {
  let result = "";
  for (let index = 1; index <= 20; index++) {
    result += `${x} * ${index} = ${x * index}\n`;
  }
  return result;
};

alert(tabuada(numero));
