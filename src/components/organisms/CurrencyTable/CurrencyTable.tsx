import { FC } from 'react';
import { RatesObject } from '../../../types/currency';
import styles from './CurrencyTable.module.css';
import { CurrencyRow } from '../../molecules/CurrencyRow';

type Props = {
  rates: RatesObject[];
};

export const CurrencyTable: FC<Props> = ({ rates }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>

      <tbody>
        {rates.map((rate) => (
          <CurrencyRow key={rate.currency} rate={rate} />
        ))}
      </tbody>
    </table>
  );
};
