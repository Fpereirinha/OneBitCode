function save() {
	event.preventDefault();
	let name = document.querySelector('input[name="name"]').value;
	let opc = document.querySelector("option:checked").value;
	alert(`Sou o ${name} e gosto de ${opc}`);
}
