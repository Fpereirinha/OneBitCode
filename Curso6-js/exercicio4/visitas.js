let city;
let count = 0;
let city_list = [];

while (true) {
  if (prompt("ja visitou alguma cidade ?") == "Sim") {
    cidade = prompt("Qual cidade ?");
    city_list.push(cidade);
    count += 1;
  } else {
    break;
  }
  if (prompt("Quer continuar ?") == "Não") {
    break;
  }
}

alert(`Programa finalizado com ${count} cidades visitadas e foram elas: `);

city_list.forEach((cidade, index) => {
  alert(`${index + 1}° ${cidade}`);
});
