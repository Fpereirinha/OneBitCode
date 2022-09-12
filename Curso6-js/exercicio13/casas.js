function saveHouse() {
	let area = document.querySelector('input[name="area"]').value;
	let bairro = document.querySelector('input[name="bairro"]').value;
	let cidade = document.querySelector('input[name="cidade"]').value;
	let numero = document.querySelector('input[name="numero"]').value;

	let newValue = document.createElement("li");
	newValue.innerText = `Area: ${area}, Numero: ${numero}, Bairro ${bairro}, Cidade: ${cidade}`;
	let remove = document.createElement("button");
	remove.type = "button";
	remove.innerText = "Remover";
	remove.setAttribute("onclick", "removeHouse(this)");
	newValue.appendChild(remove);
	document.getElementById("house-list").appendChild(newValue);
}
function removeHouse(elemento) {
	let RemoveLi = elemento.parentNode;
	document.getElementById("house-list").removeChild(RemoveLi);
}
