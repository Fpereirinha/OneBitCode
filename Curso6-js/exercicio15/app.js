class App {
	addProp() {
		event.preventDefault();
		let tipo = document.querySelector("select[name='kind']").value;
		let area = document.querySelector("input[name='area']").value;
		let alugado = document.querySelector("input[name='rented']").checked;
		let prop = new Prop(tipo, area, alugado);
		this.addList(prop);
		this.clean();
	}
	addList(params) {
		let newelement = document.createElement("li");
		let infos = ` Tipo: ${params.tipo} area: ${params.area} `;
		if (params.alugada) {
			let rented = this.createMark();
			newelement.appendChild(rented);
		}
		newelement.innerHTML += infos;
		let remove = this.createRemove();
		newelement.appendChild(remove);
		document.getElementById("lista").appendChild(newelement);
	}
	createMark() {
		let rented = document.createElement("span");
		rented.style.color = "white";
		rented.style.backgroundColor = "red";
		rented.innerText = "RENTED";
		return rented;
	}
	createRemove() {
		let removebutton = document.createElement("button");
		removebutton.type = "button";
		removebutton.setAttribute("onclick", "app.remove(this)");
		removebutton.innerText = "Remover";
		return removebutton;
	}
	clean() {
		document.querySelector("input[name='area']").value = "";
		document.querySelector("input[name='rented']").checked = false;
	}
	remove(elemento) {
		let removeElement = elemento.parentNode;
		document.getElementById("lista").removeChild(removeElement);
	}
}
