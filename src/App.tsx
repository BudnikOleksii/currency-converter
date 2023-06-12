import { Route, Routes } from 'react-router-dom';
import { PATHS } from './constants';
import { MainLayout } from './components/layouts/MainLayout';
import Home from './pages/Home';
import Rates from './pages/Rates';
import About from './pages/About';
import NotFound from './pages/NotFound';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATHS.rates} element={<Rates />} />
          <Route path={PATHS.about} element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
