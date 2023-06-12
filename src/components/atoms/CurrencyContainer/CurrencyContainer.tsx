import { FC, ReactNode } from 'react';
import styles from './CurrencyContainer.module.css';

type Props = {
  background: string;
  color: string;
  children: ReactNode;
};

export const CurrencyContainer: FC<Props> = ({ background, color, children }) => {
  return (
    <div className={styles.container} style={{ background, color }}>
      {children}
    </div>
  );
};
