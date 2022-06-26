import axios from 'axios';

const URL = 'http://localhost:9000';

export const getTopics = ()=>{
    return axios.get(`${URL}/api/topic/all`)
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const saveTopic = (data)=>{
    const token = window.localStorage.getItem("stackoverflou-token");

    if(token !== null) {
        return axios.post(`${URL}/api/topic/save`, data, {headers: {authorization: token}})
                        .then((response)=>{
                            return response.data
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
    } else {
        return {status: 401, data: {msg: "not token found"}}
    }
}

export const getTopic = (id)=>{
    return axios.get(`${URL}/api/topic/${id}`)
                .then((response)=>{
                    return response.data;
                })
                .catch((err)=>{
                    console.log(err)
                })
}