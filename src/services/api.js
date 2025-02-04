import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com/products?limit=1"
})

export const getProducts = async () => {
    try {
      const response = await api.get();
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return [];
    }
  };