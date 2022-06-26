import axios from 'axios';

const URL = 'http://localhost:9000';

export const saveUser = (data)=>{
    return axios.post(`${URL}/api/user/save`, data)
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const loginUser = (data)=>{
    return axios.post(`${URL}/api/user/login`, data)
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const checkToken = (token)=>{
    return axios.get(`${URL}/api/auth/checkToken`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const updateUser = (data, id)=>{
    const token = window.localStorage.getItem("stackoverflou-token");
    return axios.put(`${URL}/api/user/update/${id}`, data, {headers: {authorization: token}})
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}

export const getUserInfos = (id)=>{
    const token = window.localStorage.getItem("stackoverflou-token");
    return axios.get(`${URL}/api/user/${id}`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data;
            })
            .catch((err)=>{
                console.log(err);
            })
}