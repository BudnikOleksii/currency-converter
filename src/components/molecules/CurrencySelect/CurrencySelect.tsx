import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { baseCurrencies, selectStyles } from '../../../constants';
import { SelectStyles } from '../../../types/styles';
import styles from './CurrencySelect.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectSymbols } from '../../../features/currency/currency-selectors';

type Props = {
  currencyType: keyof SelectStyles;
};

export const CurrencySelect: FC<Props> = ({ currencyType }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const symbols = useAppSelector(selectSymbols);
  const baseCurrency = baseCurrencies[currencyType];

  const [selectedCurrency, setSelectedCurrency] = useState(
    searchParams.get(currencyType) || baseCurrency
  );

  useEffect(() => {
    setSelectedCurrency(searchParams.get(currencyType) || baseCurrency);
  }, [searchParams]);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    setSelectedCurrency(value);
    setSearchParams((prevParams) => {
      prevParams.set(currencyType, value);

      return prevParams;
    });
  };

  return (
    <label htmlFor={currencyType}>
      <select
        id={currencyType}
        value={selectedCurrency}
        onChange={handleSelect}
        className={styles.select}
        style={selectStyles[currencyType]}
      >
        {symbols.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
    </label>
  );
};
