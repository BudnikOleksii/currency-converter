import React from 'react';
import { Container } from '../../atoms/Container';
import styles from './Page.module.css';

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
};
