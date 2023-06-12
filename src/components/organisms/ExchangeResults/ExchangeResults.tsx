import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectResult } from '../../../features/currency/currency-selectors';
import { CurrencyTypes } from '../../../types/currency';
import { AMOUNT_PARAM, baseCurrencies, DEFAULT_AMOUNT } from '../../../constants';
import styles from './ExchangeResults.module.css';

export const ExchangeResults = () => {
  const [searchParams] = useSearchParams();
  const to = searchParams.get(CurrencyTypes.to) || baseCurrencies.to;
  const amount = Number(searchParams.get(AMOUNT_PARAM) || DEFAULT_AMOUNT);

  const results = useAppSelector(selectResult({ to, amount }));

  return <div className={styles.results}>{results}</div>;
};
