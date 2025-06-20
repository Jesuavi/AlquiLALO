// src/api/apiClient.js

const API_BASE_URL = "http://localhost:5000/api"; 

//Crea una instancia y valida si ya existe una instancia.
class ApiClient {
  constructor() {
    if (!ApiClient.instance) {
      ApiClient.instance = this;
    }
    return ApiClient.instance;
  }

// Este método post es una función genérica para hacer peticiones HTTP POST a la API.
  async post(endpoint, data) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error en la petición");
    }
    return response.json();
  }

//Este método get hace peticiones HTTP GET a la API, con manejo similar de errores.
  async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error en la petición");
    }
    return response.json();
  }
}

const instance = new ApiClient();
Object.freeze(instance);

export default instance;