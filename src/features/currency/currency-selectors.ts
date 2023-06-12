import { RootState } from '../../app/store';
import { RatesObject } from '../../types/currency';

export const selectSymbols = (state: RootState) => state.currency.symbols;
export const selectRates = (state: RootState) => {
  const { rates } = state.currency;
  const preparedRates: RatesObject[] = [];

  for (const ratesKey in rates) {
    preparedRates.push({ currency: ratesKey, rate: rates[ratesKey] });
  }

  return preparedRates;
};

interface ResultProps {
  to: string;
  amount: number;
}

export const selectResult = ({ to, amount }: ResultProps) => {
  return (state: RootState) => {
    const { rates } = state.currency;
    const result = rates ? rates[to] * amount : 1;

    return result.toFixed(2);
  };
};
