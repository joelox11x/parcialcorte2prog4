let empleados = JSON.parse(localStorage.getItem("empleados")) || [];

document.addEventListener("DOMContentLoaded", () => {
  Vista.mostrarEmpleados(empleados);

  document.querySelector(".btn-primary").addEventListener("click", agregarEmpleado);
});

function agregarEmpleado() {
  const cc = prompt("Cédula del empleado:");
  const nombre = prompt("Nombre completo:");
  const direccion = prompt("Dirección:");
  const email = prompt("Correo electrónico:");
  const telefono = prompt("Teléfono:");
  const sueldoBase = prompt("Sueldo base:");
  const tipoEmpleado = prompt("Tipo de empleado (Fijo o Contrato):");
  const tipoBonificacion = prompt("Bonificación (A, B, C, D):");

  if (!cc || !nombre || !sueldoBase) {
    alert("Faltan datos obligatorios.");
    return;
  }

  const nuevo = new Empleado(cc, nombre, direccion, email, telefono, sueldoBase, tipoEmpleado, tipoBonificacion);
  empleados.push(nuevo);
  localStorage.setItem("empleados", JSON.stringify(empleados));
  Vista.mostrarEmpleados(empleados);
}
