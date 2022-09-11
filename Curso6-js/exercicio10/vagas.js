const vagas = [];
let opc;
while (opc !== 6) {
	opc = input(`Oque deseja fazer ?
    1 - Listar vagas disponiveis
    2 - Criar uma nova vaga
    3 - Visualizar uma vaga
    4 - Inscrever um candidato em uma vaga
    5 - Excluir uma vaga
    6 - Encerrar programa`);
	switch (opc) {
		case 1:
			alert(Listar(vagas));
			break;
		case 2:
			CreateNew(vagas);
			break;
		case 3:
			Visualizar(vagas);
			break;
		case 4:
			Subscription(vagas);
			break;
		case 5:
			excluir(vagas);
			break;
		case 6:
			alert("Encerrando o programa, obrigado.");
			break;
		default:
			alert("Opção inválida.");
	}
}

function input(mensagem, valor = 0) {
	if (valor != 0) {
		return prompt(mensagem);
	} else {
		return parseInt(prompt(mensagem));
	}
}

function Listar(lista) {
	let result = "";
	lista.forEach((valor, indice) => {
		result += `${indice + 1}° vaga: ${valor.nome}, total candidatos: ${
			valor.candidatos.length >= 0 ? valor.candidatos.length : 0
		}\n`;
	});
	return result ? result : "Não há vagas.";
}
function CreateNew(lista) {
	let name = input("Qual será o nome da vaga ?", 1);
	let description = input("Descrição da vaga:", 1);
	let date = input("Data limite da vaga:", 1);
	let resp = input(`Deseja confirmar a listagem da vaga ? 1- sim,  2- não
    ${name}
    ${description}
    ${date}`);
	if (resp == 1) {
		lista.push({
			nome: name,
			descrição: description,
			Data: date,
			candidatos: [],
		});
	}
}
function Visualizar(lista) {
	let indice = input("Qual o indice da vaga que deseja visualizar ?");
	let item = lista[indice];
	alert(`Vaga ${item.nome}: 
    Descrição: ${item.descrição}
    Data limite: ${item.Data}
    Quantidade de candidatos: ${item.candidatos.length}
    Candidatos: ${item.candidatos}`);
}
function Subscription(lista) {
	let candidato = input("Qual o nome do candidato ?", 1);
	let indice = input("Qual o indice da vaga a ser inscrito ?");
	let vaga = lista[indice];
	let resp =
		input(`Deseja inscrever o candidato ${candidato} na vaga ${vaga.nome} de descrição ${vaga.descrição} ?
    1 - sim
    2 - não`);
	if (resp === 1) {
		vaga.candidatos.push(candidato);
		alert(`${candidato} inscrito com sucesso.`);
	}
}
function excluir(lista) {
	let indice = input("Qual a vaga deseja excluir ?");
	let vaga = lista[indice];
	let resp =
		input(`Deseja realmente excluir a vaga ${vaga.nome} com ${vaga.candidatos.length} candidatos ?
    1 - sim
    2 - não`);
	if (resp === 1) {
		lista.splice(indice, 1);
	}
}
