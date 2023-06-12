import { FC } from 'react';
import { RatesObject } from '../../../types/currency';

type Props = {
  rate: RatesObject;
};

export const CurrencyRow: FC<Props> = ({ rate }) => {
  return (
    <tr>
      <td>{rate.currency}</td>
      <td>{rate.rate}</td>
    </tr>
  );
};
