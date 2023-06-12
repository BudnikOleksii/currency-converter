import styles from './SwitchButton.module.css';
import { baseCurrencies, colors } from '../../../constants';
import { useSearchParams } from 'react-router-dom';
import { CurrencyTypes } from '../../../types/currency';

export const SwitchButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = () => {
    const currencyFrom = searchParams.get(CurrencyTypes.from) || baseCurrencies.from;
    const currencyTo = searchParams.get(CurrencyTypes.to) || baseCurrencies.to;

    setSearchParams((prevParams) => {
      prevParams.set(CurrencyTypes.from, currencyTo);
      prevParams.set(CurrencyTypes.to, currencyFrom);

      return prevParams;
    });
  };

  return (
    <button type="button" className={styles.button} onClick={handleSwitch}>
      <svg
        width="75px"
        height="75px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 4V20M7 20L3 16M7 20L11 16M17 20V4M17 4L13 8M17 4L21 8"
          stroke={colors.mainLight}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
