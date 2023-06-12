import axios from 'axios';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATES_API_KEY;
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'http://api.exchangeratesapi.io';
const API_URL = PROXY_URL + BASE_URL + '/v1';

export const ENDPOINTS = {
  symbols: '/symbols',
  convert: '/convert?', // Subscription Plan does not support this API Function
  latest: '/latest',
};

const $api = axios.create({
  baseURL: API_URL,
});

$api.defaults.params = {};

$api.interceptors.request.use((config) => {
  const params = new URLSearchParams(config.params);
  params.append('access_key', API_KEY);
  config.params = params;

  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config.data;
  },
  async (error) => {
    throw error.response.data.error;
  }
);

export default $api;
