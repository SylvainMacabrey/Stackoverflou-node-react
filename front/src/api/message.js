import axios from "axios";

const URL = 'http://localhost:9000';

export const saveMessage = (data)=>{
    const token = window.localStorage.getItem('stackoverflou-token');

    if(token) {
        return axios.post(`${URL}/api/message/save`, data, {headers: {authorization: token}})
                    .then((response)=>{
                        return response.data
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
    } else {
        return {status: 404, data: {msg: "token not found"}}
    }
}

export const getMessageByTopic = (topic_id)=>{
    return axios.get(`${URL}/api/message/by_topic/${topic_id}`)
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const getMessageByUser = (user_id)=>{
    const token = window.localStorage.getItem("stackoverflou-token");
    return axios.get(`${URL}/api/message/by_user/${user_id}`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const deleteMessage = (id)=>{
    const token = window.localStorage.getItem("stackoverflou-token");
    return axios.delete(`${URL}/api/message/delete/${id}`, {headers: {authorization: token}})
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const updateMessage = (data, id)=>{
    const token = window.localStorage.getItem('stackoverflou-token');

    if(token) {
        return axios.put(`${URL}/api/message/update/${id}`, data, {headers: {authorization: token}})
                    .then((response)=>{
                        return response.data
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
    } else {
        return {status: 404, data: {msg: "token not found"}}
    }
}

export const getMessageById = (message_id)=>{
    return axios.get(`${URL}/api/message/${message_id}`)
            .then((response)=>{
                return response.data
            })
            .catch((err)=>{
                console.log(err)
            })
}

