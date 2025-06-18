🧭 AlquiLALO – Plataforma de Reservas Inteligentes

AlquiLALO es una aplicación full stack construida con React + Express que permite reservar espacios para clases, eventos o reuniones. Aplica patrones Cliente-Servidor, Facade y Singleton. Incluye animaciones AOS, carruseles, y diseño responsive.

🚀 Estructura del Proyecto

alquilalo/
├── client/ # Frontend (React)
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ ├── index.js
│ └── package.json
│
├── server/ # Backend (por definir)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── facades/
│ ├── singleton/
│ └── server.js
│
├── README.md
└── .gitignore

🧩 Librerías utilizadas

Frontend (React)

react, react-dom
react-router-dom
aos (animaciones al hacer scroll)
react-slick + slick-carousel (testimonios en carrusel)

Backend (Por definir)

⚙️ Instalación y ejecución

1. Clona el repositorio o descarga como ZIP

git clone https://github.com/usuario/alquilalo.git
cd alquilalo

⚠️ Si descargaste como ZIP, descomprime y navega al directorio raíz.

2. Instala dependencias del frontend

cd client
npm install

-Si las siguientes librerías no están incluidas, puedes instalarlas manualmente:

npm install aos react-slick slick-carousel react-router-dom

3. Instala dependencias del backend

cd ../server
npm install

4. Ejecuta el proyecto

Opción 1 – Solo cliente (React)

cd client
npm start

Opción 2 – Cliente y servidor por separado

# Terminal 1
cd server
npm run dev  # o npm start

# Terminal 2
cd client
npm start

💡 Requisitos

Node.js v18 o superior
npm v9 o superior

Navegador moderno (Chrome, Edge, Firefox)

📌 Notas
La carpeta node_modules no se incluye en el ZIP ni en GitHub.

Recuerda correr npm install después de clonar.

El proyecto es totalmente responsive y usa animaciones AOS para una mejor experiencia visual.

📬 Contacto

Desarrollado por el equipo 1
AlquiLALO.

