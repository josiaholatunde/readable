import axios from 'axios'

let apiBaseUri;
if (process.env.NODE_ENV === 'production') {
    apiBaseUri = process.env.API_BASE_URL
} else {
    apiBaseUri = process.env.REACT_APP_API_BASE_URL
}

const axiosDefaultInstance = axios.create({
    baseURL: apiBaseUri,
    timeout: 10000,
    headers: {
        //initialize default application headers here
        'Authorization': 'aswertyy',
        'X-Custom-Header': 'foobar', 
    }
  });

  export default axiosDefaultInstance