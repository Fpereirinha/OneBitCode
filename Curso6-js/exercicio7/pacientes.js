const pacientes = ["Pedro", "Lucas", "Thiago"];
let opc;
while (opc !== 3) {
  let menu = "";
  pacientes.forEach((elemento, index) => {
    menu += `${index + 1}° ${elemento}\n`;
  });
  opc = parseInt(
    prompt(`${menu}
    1 - Consultar paciente
    2 - Novo paciente
    3 - Encerrar`)
  );
  if (opc === 1) {
    const consultado = pacientes.shift();
    alert(`Paciente ${consultado} atendido.`);
  } else if (opc === 2) {
    const new_paciente = prompt("Qual nome do paciente a ser adicionado ?");
    pacientes.push(new_paciente);
    alert(`Paciente ${new_paciente} adicionado a fila.`);
  }
}
