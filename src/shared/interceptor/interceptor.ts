import axios from 'axios';

export default function setRequestInterceptor() { axios.interceptors.request.use( (config: any) => {
    const token = localStorage.getItem("JWT")
    if (token) {
      config.headers.Authorization = `Token ${token}`
    }
  return config
}) 
}

//как повесить интер на обработку статуса 403