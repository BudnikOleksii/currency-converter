import { useEffect } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { ratesLoadingStart, symbolsLoadingStart } from '../../../features/currency/currency-slice';
import { Container } from '../../atoms/Container';
import { baseCurrencies, PATHS } from '../../../constants';
import { CurrencyTypes } from '../../../types/currency';

import styles from './MainLayout.module.css';

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currencyFrom = searchParams.get(CurrencyTypes.from) || baseCurrencies.from;

  useEffect(() => {
    dispatch(symbolsLoadingStart());
    setSearchParams((prevParams) => {
      prevParams.set(CurrencyTypes.from, currencyFrom);

      return prevParams;
    });
  }, []);

  useEffect(() => {
    dispatch(ratesLoadingStart({ cbase: currencyFrom }));
  }, [currencyFrom]);

  return (
    <>
      <div className={styles.layout}>
        <Container>
          <nav className={styles.nav}>
            <h1 className={styles.heading}>Currency converter</h1>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to={PATHS.rates} className={styles.link}>
              Rates
            </Link>
            <Link to={PATHS.about} className={styles.link}>
              About
            </Link>
          </nav>
        </Container>
      </div>

      <Outlet />
    </>
  );
};
