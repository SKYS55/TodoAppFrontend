import { isAxiosError } from "axios"
import api from "../config/axios"



export async function postLogin(formData) {
    try {
        const { data } = await api.post(`/auth/login`, formData)
        localStorage.setItem('AUTH_TOKEN', data)
        navigate('/admin')
    } catch (error) {
        if (isAxiosError(error) && error.message) {
            toast.error(error.response?.data.error)
        }
    }
}