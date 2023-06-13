import { selectSymbols, selectRates, selectResult } from './currency-selectors';
import { mockRates, mockState } from '../../mock-data';

describe('currencySelectors', () => {
  describe('selectSymbols', () => {
    it('returns symbols', () => {
      const symbols = selectSymbols(mockState);

      expect(symbols).toEqual(mockState.currency.symbols);
    });
  });

  describe('selectRates', () => {
    it('returns rates as array of objects', () => {
      const amount = 1;
      const rates = selectRates(amount)(mockState);

      const expectedRates = Object.keys(mockRates).map((key) => ({
        currency: key,
        rate: (mockRates[key] * amount).toFixed(2),
      }));

      expect(rates).toEqual(expectedRates);
    });
  });

  describe('selectResult', () => {
    it('returns the result of a currency conversion', () => {
      const to = 'EUR';
      const amount = 100;
      const result = selectResult({ to, amount })(mockState);

      const expectedResult = (mockRates[to] * amount).toFixed(2);

      expect(result).toEqual(expectedResult);
    });
  });
});
