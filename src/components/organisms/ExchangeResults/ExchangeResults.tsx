import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { convertCurrency, getRates, getSymbols } from '../../../api/currency';

export const ExchangeResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   getSymbols()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch(console.log);
  // }, []);

  return <div>Results</div>;
};
