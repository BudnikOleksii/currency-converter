import { Container } from '../../atoms/Container';
import { Link, Outlet } from 'react-router-dom';
import { PATHS } from '../../../constants';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Container>
          <nav className={styles.nav}>
            <h1 className={styles.heading}>Currency converter</h1>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to={PATHS.rates} className={styles.link}>
              Rates
            </Link>
            <Link to={PATHS.about} className={styles.link}>
              About
            </Link>
          </nav>
        </Container>
      </div>

      <Outlet />
    </>
  );
};
