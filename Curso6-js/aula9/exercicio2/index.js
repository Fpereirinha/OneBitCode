let speed1 = prompt("velocidade 1:");
let speed2 = prompt("velocidade 2:");
if (speed1 == speed2) {
  alert("Velocidades iguais");
} else {
  alert(
    speed1 > speed2
      ? "Velocidade 1 maior que velocidade 2"
      : "Velocidade 2 maior que velocidade 1"
  );
}
