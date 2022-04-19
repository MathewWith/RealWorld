import axios from 'axios';
// import {StorageKeys} from '../models/storageKeys';

export default function setRequestInterceptor() { axios.interceptors.request.use( (config: any) => {
    const token = localStorage.getItem('JWT')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  return config
}) 
}