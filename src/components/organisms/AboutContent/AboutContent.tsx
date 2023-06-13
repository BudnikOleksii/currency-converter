import styles from './AboutContent.module.css';

export const AboutContent = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.header}>Currency App</h1>
      <p className={styles.text}>This application offers you two main features:</p>
      <ul className={styles.list}>
        <li>
          <strong>Currency Converter:</strong> Convert any amount from one currency to another.
        </li>
        <li>
          <strong>Check Rates:</strong> Get the latest exchange rates for any currency.
        </li>
      </ul>
      <p className={styles.text}>
        We use the free plan of the{' '}
        <a
          href="https://exchangeratesapi.io/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          exchangeratesapi.io
        </a>{' '}
        service to get real-time exchange rates.
      </p>
    </article>
  );
};
