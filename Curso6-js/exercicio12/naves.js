import {
	WarSpaceShip,
	TransportSpaceShip,
	Spaceship,
	input,
	criar_nave,
	menu,
} from "./imports";
const lista = [];
let opc;
let nave_atual;
while (opc != 3) {
	if (lista.length > 0) {
		opc = menu();
		switch (opc) {
			case 1:
				nave_atual.speedUp(
					parseInt(input("Qual a velocidade que deseja acelerar ?"))
				);
				alert("Nave acelerada.");
				break;
			case 2:
				lista.push(criar_nave(0));
				nave_atual = lista[lista.length - 1];
				break;
			case 3:
				alert(
					`Nave ${nave_atual.nome} - Velocidade: ${nave_atual.velocidade} - Tripulantes: ${nave_atual.quantidade}`
				);
				break;
			default:
				alert("Opção inválida");
		}
	} else {
		lista.push(criar_nave(1));
		nave_atual = lista[0];
	}
}
