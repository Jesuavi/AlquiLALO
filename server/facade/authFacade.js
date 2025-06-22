// src/api/authFacade.js
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const registerUser = async ({ nombre, apellido, fechaNacimiento, email, password, telefono, rol }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, {
    displayName: `${nombre} ${apellido}`
  });

  await setDoc(doc(db, "usuarios", user.uid), {
    nombre,
    apellido,
    fechaNacimiento,
    correo: email,
    telefono,
    rol,
    fotoURL: user.photoURL || ""
  });

  return user;
};

export default {
  registerUser,
};
