import axios from "axios";
const baseUrl = 'http://localhost:3002/tasks/';

const getAll = async () => {
    try{
        const response = await axios.get(baseUrl);
        return {
            success: true, 
            data: response.data
        }
    }catch(error){
        console.error('No se puede cargar las tareas! ', error);
        return {
            success: false, 
            error: error.message || 'Error al cargar las tareas'
        };
    }
  }

const postCreate = async (newObject) => {
    try{
        const response = await axios.post(baseUrl, newObject);
        if(response.status === 200){
            return {
                success: true, 
                message: 'The task was saved successfully',
                data: response.data
            }
        }
    }catch(error){
        console.error('No se pudo crear la tarea: ', error);
        return {
            success: false, 
            error: error.message || 'Error al crear la tarea'
        };
    }
}

const setDelete = (id) => {
    try{
        const response = axios.delete(`/tasks/${id}`);
        return {
            success: true, 
            data: response.data
        }
    }catch(error){
        console.error('Error al eliminar la tarea: ', error);
        return {
            success: false, 
            error: error.message || 'Error al eliminar la tarea'
        };
    }
}
export default {getAll, postCreate, setDelete}