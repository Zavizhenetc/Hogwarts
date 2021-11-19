import axios from 'axios';

export const axiosHarryInstance = axios.create({
    baseURL: 'http://hp-api.herokuapp.com/api/',
});
