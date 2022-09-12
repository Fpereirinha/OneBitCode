class naves {
	constructor(name, num) {
		this.name = name;
		this.num_tripulantes = num;
		this.engatada = false;
		this.portas_abertas = false;
	}
	engatar() {
		this.engatada = true;
		this.portas_abertas = true;
	}
}
const lista_naves = [];
let opc;
while (opc !== 3) {
	opc = menu();
	switch (opc) {
		case 1:
			let new_nave = new naves(
				input("Qual o nome da nave ?"),
				input("Quantos tripulantes ela tem ?")
			);
			new_nave.engatar();
			lista_naves.push(new_nave);
			break;
		case 2:
			alert(Listar());
			break;
		case 3:
			alert("Encerrando o programa.");
			break;
		default:
			alert("Opção inválida.");
	}
}

function Listar() {
	let naves_string = "";
	if (lista_naves.length > 0) {
		lista_naves.forEach((element, index) => {
			naves_string += `${index + 1}° nave
            Nome: ${element.name}
            Numero de tripulantes: ${element.num_tripulantes}
            Encontra-se engatada ? ${
							element.engatada ? "Sim" : "Não"
						} // Portas abertas ? ${
				element.portas_abertas ? "Aberta" : "Fechada"
			}\n`;
		});
	} else {
		naves_string = "Não há naves.";
	}
	return naves_string;
}

function menu() {
	return parseInt(
		input(`Qual a opção desejada ?
    1 - Realizar engate
    2 - Listar naves
    3 - Sair do programa`)
	);
}

function input(mensagem) {
	return prompt(mensagem);
}
