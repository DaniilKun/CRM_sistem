// import axios, { AxiosRequestConfig } from 'axios'

export const API_URL = 'https://fastapi-crm-system.onrender.com/'

// const httpCore = axios.create({
//   // withCredentials: true,
//   baseURL: API_URL,
//   headers: {
//     Accept: 'application/ld+json',
//     'Content-Type': 'application/json; charset=utf-8',
//     'Cache-Control': 'no-cache',
//     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
//     'Access-Control-Allow-Headers':
//       'access-control-allow-headers,access-control-allow-methods,access-control-expose-headers,cache-control,Authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,X-Real-Ip,X-Api-Key,X-Jwt-Token,Accept',
//     'Access-Control-Expose-Headers':
//       'access-control-allow-headers,access-control-allow-methods,access-control-expose-headers,cache-control,Authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,X-Real-Ip,X-Api-Key,X-Jwt-Token,Accept',
//   },
// })

// httpCore.interceptors.request.use((config: AxiosRequestConfig) => {
//   if (!config.headers) return
//   config.headers.Authorization = `Bearer ${localStorage.getItem('userData')}`
//   return config
// })

// export default  {httpCore} 
