import { FC, ReactNode } from 'react';
import { formatDate } from '../../../helpers';
import styles from './CurrencyBlock.module.css';

type Props = {
  children: ReactNode;
};

export const CurrencyBlock: FC<Props> = ({ children }) => {
  const date = formatDate(new Date());

  return (
    <section className={styles.currency_block}>
      <div className={styles.heading_block}>
        <div>{date}</div>
        <h2 className={styles.heading}>Currency</h2>
      </div>

      {children}
    </section>
  );
};
