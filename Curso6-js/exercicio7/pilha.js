let opc;
const cartas = [0, 11, 23, 77];
while (opc !== 3) {
	opc = parseInt(
		prompt(`Cartas no baralho: ${cartas}\n
    1 - Adicionar uma carta
    2 - Puxar uma carta
    3 - Sair`)
	);
	if (opc === 1) {
		const carta = parseInt(prompt("Qual carta deseja adicionar ?"));
		cartas.unshift(carta);
		alert(`Carta ${carta} adicionada.`);
	} else if (opc === 2) {
		const carta = cartas.shift();
		alert(`Carta ${carta} puxada.`);
	} else {
		alert("Opção inválida.");
	}
}
alert(`Programa encerrado, cartas atuais no baralho: ${cartas}`);
