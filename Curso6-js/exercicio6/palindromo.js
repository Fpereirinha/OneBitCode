const palavra = prompt("Digite a palavra para verificação");
const palavra_reversa = palavra.split("").reverse().join("");
if (palavra == palavra_reversa) {
  alert("É um palindromo !");
} else {
  alert(
    `Não é um palindromo, a palavra ${palavra} revertida é ${palavra_reversa}.`
  );
}
