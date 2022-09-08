let person1_name = prompt("Digite o nome do personagem 1 (atacante)");
let person1_damage = prompt("Digite o dano do personagem 1");
let person2_name = prompt("Digite o nome do personagem 2 (defensor)");
let person2_life = prompt("Digite a vida do personagem 2");
let person2_defense = prompt("Digite a defesa do personagem 2");
let person2_shield = prompt(
  "O personagem possui escudo ? 1 para sim, 2 para não."
);
let damage = 0;
if (person1_damage > person2_defense) {
  damage =
    person2_shield == 2
      ? person1_damage - person2_defense
      : (person1_damage - person2_defense) / 2;
}
person2_life -= damage;
alert(
  `O ${person1_name} causou ${damage} de dano ao personagem 2.\nA vida atualizada do ${person2_name} é ${person2_life}`
);
