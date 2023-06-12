import currencyReducer, { symbolsSuccess, ratesSuccess } from './currency-slice';
import { mockRates, mockSymbols } from '../../mock-data';

describe('currencySlice', () => {
  describe('reducers', () => {
    it('should handle symbolsSuccess', () => {
      const initialState = { symbols: [], rates: null };
      const payload = Object.fromEntries(mockSymbols.map((symbol) => [symbol, symbol]));
      const action = { type: symbolsSuccess.type, payload };

      const state = currencyReducer(initialState, action);

      expect(state.symbols).toEqual(mockSymbols);
    });

    it('should handle ratesSuccess', () => {
      const initialState = { symbols: [], rates: null };
      const action = { type: ratesSuccess.type, payload: mockRates };

      const state = currencyReducer(initialState, action);

      expect(state.rates).toEqual(mockRates);
    });
  });
});
