class Usuario {
  constructor(id, nombre, correo, telefono, fotoURL, rol) {
    if (new.target === Usuario) {
      throw new Error("No se puede instanciar una clase abstracta 'Usuario'");
    }

    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.telefono = telefono;
    this.fotoURL = fotoURL;
    this.rol = rol; // "INSTITUCIONAL" o "ADMIN"
  }

  autenticarse() {
    throw new Error("El método abstracto 'autenticarse()' debe ser implementado");
  }

  editarPerfil(nuevoNombre, nuevoTelefono, nuevaFotoURL) {
    this.nombre = nuevoNombre || this.nombre;
    this.telefono = nuevoTelefono || this.telefono;
    this.fotoURL = nuevaFotoURL || this.fotoURL;
  }
}

class UsuarioInstitucional extends Usuario {
  constructor(id, nombre, correo, telefono, fotoURL) {
    super(id, nombre, correo, telefono, fotoURL, "INSTITUCIONAL");
  }

  autenticarse() {
    // Lógica simple de autenticación (solo ejemplo)
    return true;
  }
}

class Administrador extends Usuario {
  constructor(id, nombre, correo, telefono, fotoURL) {
    super(id, nombre, correo, telefono, fotoURL, "ADMIN");
  }

  autenticarse() {
    // Validación especial si quisieras
    return true;
  }

  gestionarEspacio() {
    // Lógica para gestionar espacios
  }

  gestionarReserva() {
    // Lógica para gestionar reservas
  }

  generarReporte() {
    // Lógica para generar reportes
    return { reporte: "Reporte generado" };
  }
}

module.exports = {
  UsuarioInstitucional,
  Administrador,
};
