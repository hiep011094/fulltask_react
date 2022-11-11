import ACTIONS from "./index"
import axios from "axios"

export const dispatchLogin = () =>{
    return {
        type : ACTIONS.LOGIN
    }
}

export const fetchUser = async (token) =>{
    axios.defaults.baseURL = 'https://react-mern123.herokuapp.com'
    const res = await axios.get('/api/v1/user/infor',{
        headers: {Authorization: token}
    })

    return res
}

export const dispatchGetUser = (res) =>{
    return {
        type: ACTIONS.GET_USER,
        payload:{
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}