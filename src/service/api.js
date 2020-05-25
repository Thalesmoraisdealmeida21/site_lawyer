  
import axios from 'axios'
import env from './../environment/environment-prod'
const api = axios.create({
    baseURL: env.api
})

export default api;