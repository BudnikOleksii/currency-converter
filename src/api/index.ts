import axios from 'axios';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATES_API_KEY;
// const API_KEY = 'test';
const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.exchangeratesapi.io';
const API_URL = BASE_URL + '/v1';

export const ENDPOINTS = {
  symbols: '/symbols',
  convert: '/convert?',
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

export default $api;
