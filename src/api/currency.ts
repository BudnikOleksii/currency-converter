import $api, { ENDPOINTS } from './index';
import { Maybe } from '../types/helper-types';

// Subscription Plan does not support this API Function
export const convertCurrency = (params: URLSearchParams) => {
  return $api.get(ENDPOINTS.convert, { params });
};

export const getSymbols = () => {
  return $api.get(ENDPOINTS.symbols);
};

// base_currency_access_restricted, Subscription Plan does not support this API Function
// In this add c to base to avoid errors
export const getRates = (cbase: Maybe<string>) => {
  return $api.get(ENDPOINTS.latest, { params: { cbase } });
};
