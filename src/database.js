import axios from 'axios';

const baseUrl = "https://localhost:7092/api"
  export const index = async(endpoint) => {
  	try {
			const response = await axios.get(`${baseUrl}/${endpoint}`);
			return response.data;
		} catch (error) {
			console.error('Erro ao buscar dados do servidor:', error);
			throw error;
		}
  }

	export const getEvent = async (endpoint, id) => {
		try {
			const response = await axios.get(`${baseUrl}/${endpoint}/${id}`);
			return response.data;
		} catch (error) {
			console.error('Erro ao buscar dados do servidor por ID:', error);
			throw error;
		}
	};

	export const postEvent = async(endpoint, data) => {
		try {
			const response = await axios.post(`${baseUrl}/${endpoint}`, data);
			
			return response.data;
		} catch (error) {
			console.error('Erro ao enviar dados para o servidor:', data);
			throw error;
		}
    }

	export const updateEvent = async(endpoint, data, id) => {
		try {
			const response = await axios.put(`${baseUrl}/${endpoint}/${id}`, data);
			
			return response.data;
		} catch (error) {
			console.error('Erro ao enviar dados para o servidor:', data);
			throw error;
		}
    }

	export const deleteEvent = async (endpoint, id) => {
		try {
		  const response = await axios.delete(`${baseUrl}/${endpoint}/${id}`);
		  return response.data;
		} catch (error) {
		  console.error('Erro ao excluir o evento:', error);
		  throw error;
		}
	  };

