const imoveis = [];
let opc;
while (opc !== 3) {
	opc = parseInt(
		prompt(`Imoveis cadastrados: ${imoveis.length}
    
    1 - Cadastrar imovel
    2 - Mostrar todos imoveis cadastrados
    3 - Encerrar`)
	);
	switch (opc) {
		case 1:
			const nome = prompt("Qual o nome do propietario ?");
			const quartos = parseInt(prompt("Quantidade de quartos ?"));
			const banheiros = parseInt(prompt("Quantidade de banheiros?"));
			const garagem = Boolean(prompt("Tem banheiros ? 1 - sim / 2 - não"));
			imoveis.push({
				nome: nome,
				quartos: quartos,
				banheiros: banheiros,
				garagem: garagem,
			});
			break;
		case 2:
			let lista_imoveis = "";
			imoveis.forEach((element) => {
				lista_imoveis += `Propietario: ${element.nome}, banheiros: ${element.banheiros}, quartos: ${element.quartos}, garagem: ${element.garagem} \n`;
			});
			alert(lista_imoveis);
			break;
		case 3:
			alert("Encerrando programa.");
			break;
		default:
			alert("Opção inválida.");
	}
}
