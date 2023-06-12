import $api, { ENDPOINTS } from './index';

export const convertCurrency = (params: URLSearchParams) => {
  return $api.get(ENDPOINTS.convert, { params: params });
};

export const getRates = () => {
  return $api.get(ENDPOINTS.latest);
};
