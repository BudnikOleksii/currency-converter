import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { convertCurrency, getRates } from '../../../api/currency';

export const ExchangeResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   getRates()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch(console.log);
  // }, []);

  return <div>Results</div>;
};
