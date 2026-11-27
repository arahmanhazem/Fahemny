import axios from 'axios';
//el file dah basically ezay el frontend beykalem el backend

const api = axios.create({ baseURL: 'http://localhost:5000/api'
 });
//dah bey save address el backend aashan lama neegy negeeb course manektebsh el address kolo tany 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
// el interceptors dol bey run automatically abl kol request baad ma had bey log in 
//el backend beyedy token akeno id so the backend ye2dar ye3raf who is asking
export default api;