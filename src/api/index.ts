import axios from 'redaxios';
import config from '@/config';

axios.defaults.baseURL = config.API_HOST;
axios.defaults.auth = `Bearer ${config.API_KEY}`;

export default axios;
