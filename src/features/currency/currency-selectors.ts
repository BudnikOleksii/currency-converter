import { RootState } from '../../app/store';

export const selectSymbols = (state: RootState) => state.currency.symbols;
export const selectRates = (state: RootState) => state.currency.rates;
