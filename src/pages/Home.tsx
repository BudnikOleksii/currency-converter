import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { ratesLoadingStart } from '../features/currency/currency-slice';
import { Page } from '../components/templates/Page';
import { CurrencyBlock } from '../components/organisms/CurrencyBlock';
import { AMOUNT_PARAM, backgrounds, baseCurrencies, colors, DEFAULT_AMOUNT } from '../constants';
import { CurrencyContainer } from '../components/atoms/CurrencyContainer';
import { AmountInput } from '../components/molecules/AmountInput';
import { CurrencySelect } from '../components/molecules/CurrencySelect';
import { SwitchButton } from '../components/atoms/SwitchButton';
import { ExchangeResults } from '../components/organisms/ExchangeResults';
import { CurrencyTypes } from '../types/currency';

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currencyFrom = searchParams.get(CurrencyTypes.from) || baseCurrencies.from;

  useEffect(() => {
    const currencyTo = searchParams.get(CurrencyTypes.to) || baseCurrencies.to;
    const amount = searchParams.get(AMOUNT_PARAM) || DEFAULT_AMOUNT;

    setSearchParams((prevParams) => {
      prevParams.set(CurrencyTypes.from, currencyFrom);
      prevParams.set(CurrencyTypes.to, currencyTo);
      prevParams.set(AMOUNT_PARAM, amount);

      return prevParams;
    });
  }, []);

  useEffect(() => {
    dispatch(ratesLoadingStart({ base: currencyFrom }));
  }, [currencyFrom]);

  return (
    <Page>
      <CurrencyBlock>
        <CurrencyContainer background={backgrounds.gradient} color={colors.white}>
          <AmountInput />
          <CurrencySelect currencyType={CurrencyTypes.from} />
        </CurrencyContainer>

        <SwitchButton />

        <CurrencyContainer background={backgrounds.white} color={colors.main}>
          <ExchangeResults />
          <CurrencySelect currencyType={CurrencyTypes.to} />
        </CurrencyContainer>
      </CurrencyBlock>
    </Page>
  );
};

export default Home;
