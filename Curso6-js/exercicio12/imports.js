class Spaceship {
	constructor(nome, quantidade_tripulantes) {
		this.nome = nome;
		this.quantidade = quantidade_tripulantes;
		this.velocidade = 0;
	}
	static get desaceleração() {
		return 1 - 0.17;
	}
	speedUp(aceleracao) {
		this.velocidade += aceleracao * Spaceship.desaceleração;
	}
}
class WarSpaceShip extends Spaceship {
	constructor(nome, quantidade_tripulantes, armas) {
		super(nome, quantidade_tripulantes);
		this.armas = armas;
	}
}
class TransportSpaceShip extends Spaceship {
	constructor(nome, quantidade_tripulantes, lugares) {
		super(nome, quantidade_tripulantes);
		this.lugares = lugares;
	}
}
function menu() {
	return parseInt(
		input(`Oque deseja fazer ?
    1 - Acelarar nave
    2 - Trocar a nave
    3 - Imprimir e sair`)
	);
}
function input(mensagem) {
	return prompt(mensagem);
}
function criar_nave(especificacao) {
	let nave_nome;
	if (especificacao === 1) {
		nave_nome = input(`Sem naves atualmente, vamos listar uma.
        Qual será o nome ?`);
	} else {
		nave_nome = input(`Listando uma nova nave, qual será seu nome ?`);
	}

	let tripulantes = parseInt(input("Qual a quantidade de tripulantes ?"));
	let tipo = parseInt(
		input("Qual sera o tipo da nave ? 1- guerra 2- transporte")
	);
	while (tipo !== 1 && tipo !== 2) {
		tipo = parseInt(
			input(`Escolha um tipo correto !!!
        1 - guerra
        2 - transporte`)
		);
	}
	if (tipo === 1) {
		let armas = parseInt(input("Qual a quantidade de armas ?"));
		return new WarSpaceShip(nave_nome, tripulantes, armas);
	} else {
		let lugares = parseInt(input("Qual a quantidade de lugares ?"));
		return new TransportSpaceShip(nave_nome, tripulantes, lugares);
	}
}
export { WarSpaceShip, TransportSpaceShip, Spaceship, input, criar_nave, menu };
