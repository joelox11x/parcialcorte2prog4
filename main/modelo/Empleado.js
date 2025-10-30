
class Empleado {
  constructor(cc, nombre, direccion, email, telefono, sueldoBase, tipoEmpleado, tipoBonificacion) {
    this.cc = cc;
    this.nombre = nombre;
    this.direccion = direccion;
    this.email = email;
    this.telefono = telefono;
    this.sueldoBase = parseFloat(sueldoBase);
    this.tipoEmpleado = tipoEmpleado;
    this.tipoBonificacion = tipoBonificacion;
    this.saldoTotal = this.calcularSaldoTotal();
  }

  calcularSaldoTotal() {
    let adicion = 0;
    switch (this.tipoBonificacion.toUpperCase()) {
      case "A": adicion = 200000; break;
      case "B": adicion = 150000; break;
      case "C": adicion = 100000; break;
      case "D": adicion = 50000; break;
      default: adicion = 0;
    }
    return this.sueldoBase + adicion;
  }
}
