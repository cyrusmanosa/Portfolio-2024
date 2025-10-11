import axios from "axios"

export const LoginEmail = async (email, name, company) => {
    try{
        const rsp = axios.post(import.meta.env.VITE_LOGIN_EMAIL,{
            email: email,
            name: name,
            companyname: company
        });

        if (rsp.status !== 200){
            console.error('Error Status:', rsp.status);
        }else{
            return rsp.data
        }
    }catch(error){
        console.log("Login error: ",error)
        console.error('Error Status:', error.response?.status);
    }
}