import {useContext, useEffect} from 'react';
import { AuthContext } from '../auth.context';
import {login,register,logout,getprofile} from '../services/auth.api';


export const useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user,setUser, loading , setloading} = context


const handleLogin = async ({email,password})=>{
    setloading(true)
    try{
    const data = await login ({email,password})
    setUser(data.user)
    } catch(error){}
     finally{
     setloading(false)
    }
}

const handleRegister = async ({username,email,password})=>{
    setloading(true)
    try{
    const data = await register ({username,email,password})
    setUser(data.user)
    } catch(error){ 
    } finally{
    setloading(false)
    }
}
const handleLogout = async ()=>{
    setloading(true)
    try{
    const data = await logout ()
    setUser(null)
    }catch(error){
    }finally{
    setloading(false)
    }
}


useEffect(()=>{
   const getAndSetUser = async ()=>{
  try{
    const data = await getprofile()
    setUser(data.user)
  }catch(error){
    setUser(null)
    console.log("User not logged in")
  }finally{
    setloading(false)
  }
}
    getAndSetUser()

},[])

return {user, loading, handleRegister , handleLogin, handleLogout}
}
