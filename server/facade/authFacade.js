// src/api/authFacade.js
import apiClient from "./apiClient";
const { admin, db } = require('../Config/firebaseAdmin');

const registerUser = async ({ nombre, correo, telefono, fotoURL }) => {
  return await apiClient.post("/register", { nombre, correo, telefono, fotoURL });
};


export default {
  registerUser,
};