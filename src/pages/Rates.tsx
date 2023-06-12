import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Page } from '../components/templates/Page';
import { CurrencyContainer } from '../components/atoms/CurrencyContainer';
import { CurrencySelect } from '../components/molecules/CurrencySelect';
import { CurrencyBlock } from '../components/organisms/CurrencyBlock';
import { CurrencyTable } from '../components/organisms/CurrencyTable';
import { ratesLoadingStart, symbolsLoadingStart } from '../features/currency/currency-slice';
import { selectIsActionInProcess } from '../features/actions-info/actions-info-selector';
import { selectRates } from '../features/currency/currency-selectors';
import { CurrencyTypes } from '../types/currency';
import { backgrounds, baseCurrencies, colors } from '../constants';
import { Loader } from '../components/atoms/Loader';

const Rates = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currencyFrom = searchParams.get(CurrencyTypes.from) || baseCurrencies.from;

  const rates = useAppSelector(selectRates);
  const isLoading = useAppSelector(selectIsActionInProcess(ratesLoadingStart.type));

  useEffect(() => {
    dispatch(symbolsLoadingStart());
    setSearchParams((prevParams) => {
      prevParams.set(CurrencyTypes.from, currencyFrom);

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
          <CurrencySelect currencyType={CurrencyTypes.from} />
        </CurrencyContainer>

        {isLoading && <Loader />}

        {!isLoading && rates && rates.length > 0 && <CurrencyTable rates={rates} />}
      </CurrencyBlock>
    </Page>
  );
};

export default Rates;
