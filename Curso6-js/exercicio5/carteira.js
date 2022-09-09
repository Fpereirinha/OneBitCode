let saldo = parseFloat(prompt("Qual o saldo inicial ?"));
let resp;
let value;

do {
  resp = prompt(`Oque deseja fazer ?\n
    1- Adicionar
    2- Subtrair
    3- Sair`);
  if (resp == 1) {
    value = parseFloat(prompt("Qual valor a ser adicionado ?"));
    saldo += value;
    alert(`Saldo atual: ${saldo}`);
  } else if (resp == 2) {
    value = parseFloat(prompt("Qual valor a ser subtraido ?"));
    if (value <= saldo) {
      saldo -= value;
      alert(`Saldo atual: ${saldo}`);
    } else {
      alert("Não foi possivel subtrair, o saldo é menor do que o valor.");
    }
  } else if (resp == 3) {
    alert(`Programa encerrado, valor atual do saldo ${saldo}`);
  } else {
    alert("Opção inválida.");
  }
} while (resp != 3);
