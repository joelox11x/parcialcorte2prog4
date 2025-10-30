
const Vista = {
  tabla: document.getElementById("tablaEmpleados"),

  mostrarEmpleados(empleados) {
    this.tabla.innerHTML = "";

    empleados.forEach((emp, i) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${i + 1}</td>
        <td>${emp.cc}</td>
        <td>${emp.nombre}</td>
        <td>${emp.direccion}</td>
        <td>${emp.email}</td>
        <td>${emp.telefono}</td>
        <td>$${emp.sueldoBase.toLocaleString()}</td>
        <td>${emp.tipoEmpleado}</td>
        <td>${emp.tipoBonificacion}</td>
        <td>$${emp.saldoTotal.toLocaleString()}</td>
      `;
      this.tabla.appendChild(fila);
    });

    // Total general de la nómina
    const totalNomina = empleados.reduce((suma, e) => suma + e.saldoTotal, 0);
    const filaTotal = document.createElement("tr");
    filaTotal.classList.add("table-success", "fw-bold");
    filaTotal.innerHTML = `
      <td colspan="9" class="text-end">TOTAL NÓMINA:</td>
      <td>$${totalNomina.toLocaleString()}</td>
    `;
    this.tabla.appendChild(filaTotal);
  }
};
