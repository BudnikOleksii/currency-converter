import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './AmountInput.module.css';
import { useDebouncedCallback } from 'use-debounce';
import { AMOUNT_PARAM, DEFAULT_AMOUNT } from '../../../constants';

export const AmountInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultAmount = searchParams.get(AMOUNT_PARAM) || DEFAULT_AMOUNT;

  const [amount, setAmount] = useState(defaultAmount);

  const debouncedHandleChange = useDebouncedCallback((value) => {
    setSearchParams((prevParams) => {
      prevParams.set(AMOUNT_PARAM, value || DEFAULT_AMOUNT);

      return prevParams;
    });
  }, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (Number(value) < 0) {
      return;
    }

    setAmount(value || DEFAULT_AMOUNT);
    debouncedHandleChange(value);
  };

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, [debouncedHandleChange]);

  return (
    <label>
      <input
        className={styles.input}
        type="number"
        id="amount"
        value={amount}
        minLength={1}
        onChange={handleChange}
      />
    </label>
  );
};
