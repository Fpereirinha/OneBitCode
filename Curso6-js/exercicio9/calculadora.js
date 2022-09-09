let opc;
while (opc !== 6) {
	opc = parseInt(
		prompt(`Oque deseja calcular ?
    1 - Area do triangulo
    2 - Area do retangulo
    3 - Area do quadrado
    4 - Area do trapezio
    5 - Area do circulo
    6 - Sair`)
	);
	let resultado;
	switch (opc) {
		case 1:
			resultado = area(
				parseInt(prompt("Qual o valor da base ?")),
				parseInt(prompt("Qual o valor da altura ?")),
				opc
			);
			alert(`O resultado é ${resultado}`);
			break;
		case 2:
			resultado = area(
				parseInt(prompt("Qual o valor da base ?")),
				parseInt(prompt("Qual o valor da altura ?")),
				opc
			);
			alert(`O resultado é ${resultado}`);
			break;
		case 3:
			resultado = area(parseInt(prompt("Qual o valor do lado ?")), "", opc);
			alert(`O resultado é ${resultado}`);
			break;
		case 4:
			resultado = area(
				parseInt(prompt("Qual o valor da base maior?")),
				parseInt(prompt("Qual o valor da base menor?")),
				opc,
				parseInt(prompt("Qual o valor da altura?"))
			);
			alert(`O resultado é ${resultado}`);
			break;
		case 5:
			resultado = area(parseInt(prompt("Qual o valor do raio ?")), "", 5);
			alert(`O resultado é ${resultado}`);
			break;
		case 6:
			alert("Programa encerrado.");
			break;

		default:
			alert("Opção inválida.");
	}
}
function area(value1, value2 = value1, changer = 0, altura = 0) {
	switch (changer) {
		case 1:
			return (value1 * value2) / 2;
		case 2:
			return value1 * value2;
		case 3:
			return value1 ** 2;
		case 4:
			return ((value1 + value2) * altura) / 2;
		case 5:
			return 3.14 * value1 ** 2;
		default:
			return "Valor inválido.";
	}
}
