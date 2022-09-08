let nome = prompt("Digite seu nome");
let sobrenome = prompt("Digite seu sobrenome");
let area = prompt("Digite sua area de estudos");
let idade = prompt("Digite seu ano de nascimento");
document.getElementById("resultados").innerHTML = `Seu nome é ${
  nome + " " + sobrenome
} sua area de estudos é ${area} e sua idade é ${2022 - idade}`;
