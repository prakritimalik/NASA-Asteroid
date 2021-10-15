import axios from 'axios';


const KEY = 'nIxHZePdlgGwr3Fag7t1baPn2SQpUzQiIaDdfAbv';

export default axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1',
    params: {
        api_key: KEY
    }
});