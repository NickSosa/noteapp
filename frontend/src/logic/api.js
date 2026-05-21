import axios from "axios"

const api = axios.create({
    baseURL: ""
})

export const getNotes = async () => {
    try {
        const response = await api.get('/api/note')
        return response.data
    } catch (error) {
        throw Error(error.message)
    }
}

export const getCategories = async () => {
    try {
        const response = await api.get('/api/category')
        return response.data
    } catch (error) {
        throw Error(error.message)
    }
}
//packages