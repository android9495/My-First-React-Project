import Axios from "axios";
import {Configs} from "../configs";

export const query = ({uri, method, ...other}) => {
    if(!uri) return null;
    return new Promise((resolve, reject) => {
        Axios({
            url: Configs.API_URL + uri,
            method: method ? method : 'POST',
            ...other
        }).then(response => {
            if(response.data.status === 201){
                reject('Error');
                return;
            }
            resolve(response.data);
        })
            .catch(error => {
                if(error.response.status === 401){
                    reject({
                        message: 'Access Token Not Valid'
                    })
                }else reject(error.response);
            })
    })
}

export const queryLogin = (email,password) => query({
    uri: '/api/login',
    data: {
        email,
        password
    }
});

export const queryRegister = (email,password) => query({
    uri: '/api/register',
    data: {
        email,
        password
    }
});