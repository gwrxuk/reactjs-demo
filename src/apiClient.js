import axios from 'axios';

const BASE_URI = 'http://localhost:5000/api';

const client = axios.create({
    baseURL: BASE_URI,
    json: true
})

class APIClient{
    constructor(accessToken){
        this.accessToken = accessToken
    }

    login(data){
        return this.perform("post", "/login", data);
    }

    fetch(){
        return this.perform("post", "/data", {});
    }

    async perform(method, resource, data){
        return client({
            method,
            url: resource,
            data,
            headers:{
                Authorization: `Bearer ${this.accessToken}`
            }
        }).then(resp=>{
            return resp.data ? resp.data : [];
        })
    }
}

export default APIClient;