import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rates, Symbols } from '../../types/currency';
import { Maybe } from '../../types/helper-types';

interface CurrencyState {
  symbols: string[];
  rates: Maybe<Rates>;
}

const initialState: CurrencyState = {
  symbols: ['USD', 'EUR', 'UAH'],
  rates: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    symbolsLoadingStart: (state) => {},
    symbolsSuccess: (state, action: PayloadAction<Symbols>) => {
      state.symbols = Object.keys(action.payload);
    },
    ratesLoadingStart: (state, action: PayloadAction<{ base: Maybe<string> }>) => {},
    ratesSuccess: (state, action: PayloadAction<Rates>) => {
      state.rates = action.payload;
    },
  },
});

export const { symbolsLoadingStart, symbolsSuccess, ratesLoadingStart, ratesSuccess } =
  currencySlice.actions;

export default currencySlice.reducer;
