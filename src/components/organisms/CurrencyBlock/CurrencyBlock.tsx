import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CurrencyContainer } from '../../atoms/CurrencyContainer';
import {
  AMOUNT_PARAM,
  backgrounds,
  baseCurrencies,
  colors,
  DEFAULT_AMOUNT,
} from '../../../constants';
import { formatDate } from '../../../helpers';
import { CurrencySelect } from '../../molecules/CurrencySelect';
import { CurrencyTypes } from '../../../types/currency';
import { ExchangeResults } from '../ExchangeResults';
import { AmountInput } from '../../molecules/AmountInput';
import { SwitchButton } from '../../atoms/SwitchButton';
import styles from './CurrencyBlock.module.css';

export const CurrencyBlock = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const date = formatDate(new Date());

  useEffect(() => {
    const currencyTo = searchParams.get(CurrencyTypes.to) || baseCurrencies.to;
    const amount = searchParams.get(AMOUNT_PARAM) || DEFAULT_AMOUNT;

    setSearchParams((prevParams) => {
      prevParams.set(CurrencyTypes.to, currencyTo);
      prevParams.set(AMOUNT_PARAM, amount);

      return prevParams;
    });
  }, []);

  return (
    <section className={styles.currency_block}>
      <div className={styles.heading_block}>
        <div>{date}</div>
        <h2 className={styles.heading}>Currency</h2>
      </div>

      <CurrencyContainer background={backgrounds.gradient} color={colors.white}>
        <AmountInput />
        <CurrencySelect currencyType={CurrencyTypes.from} />
      </CurrencyContainer>

      <SwitchButton />

      <CurrencyContainer background={backgrounds.white} color={colors.main}>
        <ExchangeResults />
        <CurrencySelect currencyType={CurrencyTypes.to} />
      </CurrencyContainer>
    </section>
  );
};
