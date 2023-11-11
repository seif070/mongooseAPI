import axios from 'axios'

export const postauthUser=async(value)=>{
    const addinguser=await axios .post('http://localhost:5002/auth/register',{...value})
}

export const fetchAutUser=async()=>{
    const token=localStorage.getItem('token')
    const {data}=await axios.get('http://localhost5200/auth/uraccount',{Headers:{authorization:token}});
}