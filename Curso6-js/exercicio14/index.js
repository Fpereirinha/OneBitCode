function save() {
	let new_element = document.createElement("li");
	let tipo = document.querySelector("input[name='tipo']").value;
	let area = document.querySelector("input[name ='area']").value;
	let alugada = document.querySelector("select[name='alugado']").value;
	let remove = document.createElement("button");
	remove.innerText = "Remover";
	remove.setAttribute("onclick", "remove(this)");
	remove.type = "button";
	new_element.innerText = `Tipo ${tipo}, area ${area}, alugada ${alugada}`;
	new_element.appendChild(remove);
	if (alugada == "sim") {
		new_element.classList.add("alugada");
	}
	document.getElementById("lista").appendChild(new_element);
	tipo.textContent = "";
}
function remove(elemento) {
	let remover = elemento.parentNode;
	document.getElementById("lista").removeChild(remover);
}
