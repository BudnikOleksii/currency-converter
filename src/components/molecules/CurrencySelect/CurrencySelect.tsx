import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { baseCurrencies, selectStyles } from '../../../constants';
import { SelectStyles } from '../../../types/styles';
import styles from './CurrencySelect.module.css';

const currencySymbols = ['USD', 'EUR', 'UAH', 'AUH', 'ROM'];

type Props = {
  currencyType: keyof SelectStyles;
};

export const CurrencySelect: FC<Props> = ({ currencyType }) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
        {currencySymbols.map((symbol) => (
          <option key={symbol} value={symbol}>
            {symbol}
          </option>
        ))}
      </select>
    </label>
  );
};
