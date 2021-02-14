import axios from 'redaxios';
import config from '@/config';

axios.defaults.baseURL = config.API_HOST;
axios.defaults.params = {
	api_key: config.API_KEY
};

export default axios;
