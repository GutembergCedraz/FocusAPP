import axios from 'axios'

const base_url = "https://apiprojectfocus.herokuapp.com";

export const api = axios.create({
    baseURL: base_url,
})