import { isAxiosError } from "axios"
import api from "../config/axios"
import { toast } from "sonner"


export async function postLogin(formData) {
    try {
        const { data } = await api.post('/auth/login', formData);
        localStorage.setItem('AUTH_TOKEN', data);
        return data;
    } catch (error) {
        if (isAxiosError(error)) {
            const msg = error.response?.data?.error || 'Error desconocido';
            toast.error(msg);
            throw error; // opcional, si quieres que el handler externo lo reciba también
        }
    }
}