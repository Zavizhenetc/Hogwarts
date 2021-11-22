import axios from 'axios';

export const axiosHarryInstance = axios.create({
    baseURL: 'https://hp-api.herokuapp.com/api/',
});
