let city;
let count = 0;
let city_list = [];

while (true) {
  if (
    prompt(
      count == 0
        ? "Você já visitou alguma cidade ?"
        : "Qual a outra cidade visitada?"
    ) == "Não"
  ) {
    break;
  }
  cidade = prompt("Qual cidade ?");
  city_list.push(cidade);
  count++;
  if (prompt("Quer continuar ?") == "Não") {
    break;
  }
}

alert(`Programa finalizado com ${count} cidades visitadas e foram elas: `);

city_list.forEach((cidade, index) => {
  alert(`${index + 1}° ${cidade}`);
});
