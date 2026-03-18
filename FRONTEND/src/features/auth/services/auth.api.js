import axios from "axios"
const api= axios.create({
    baseURL:'http://localhost:8000',
    withCredentials:true
})

export async function register({ username, email, password}){ 
    try{
        const response = await api.post('/api/auth/register',{username, email, password})
       return response.data
    } catch(err){
        console.log(err)
    }
    }

export async function login({email,password}){
    try{
        const response = await api.post('/api/auth/login',{email, password})
        return response.data
    } catch(err){
        console.log(err)

    }
}

export async function logout(){ 
    try{
        const response = await api.get('http://localhost:8000/api/auth/logout',)
       return response.data
    } catch(err){
        console.log(err)
    }
    }

export async function getprofile(){
    try{
        const response = await api.get('/api/auth/getprofile')
        return response.data
    } catch(err){
        console.log(err)
    }
}




