import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndPoints';


const makeRequest = async ({ url , method }:any, dynamicConfig?:any) => {
    try {
        const response = await axios({
            baseURL: BACKEND_URL,
            url,
            method,
            ...dynamicConfig,
        });

        return response.data;
    } catch (error: any) {
        console.log(error);
    }
};

export default makeRequest;