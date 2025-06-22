const { UsuarioInstitucional, Administrador } = require("../models/Usuario");

class AuthFacade {
  constructor() {
    // Simulación de base de datos en memoria 
    this.usuarios = new Map(); // key = correo, value = instancia de Usuario
  }

  registrarUsuario(tipo, id, nombre, correo, telefono, fotoURL) {
    let nuevoUsuario;
    if (tipo === "INSTITUCIONAL") {
      nuevoUsuario = new UsuarioInstitucional(id, nombre, correo, telefono, fotoURL);
    } else if (tipo === "ADMIN") {
      nuevoUsuario = new Administrador(id, nombre, correo, telefono, fotoURL);
    } else {
      throw new Error("Tipo de usuario no válido");
    }

    this.usuarios.set(correo, nuevoUsuario);
    return nuevoUsuario;
  }

  obtenerUsuario(correo) {
    return this.usuarios.get(correo) || null;
  }
}

module.exports = new AuthFacade();
