import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useSearchParams } from 'react-router-dom';
import { SwitchButton } from './SwitchButton';
import { CurrencyTypes } from '../../../types/currency';
import { baseCurrencies } from '../../../constants';

describe('SwitchButton', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<SwitchButton />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it('switches currencies on click', () => {
    let testLocation;
    function LocationTestHelper() {
      const [searchParams] = useSearchParams();
      testLocation = searchParams.toString();

      return <SwitchButton />;
    }

    const { getByRole } = render(
      <MemoryRouter
        initialEntries={[
          `/?${CurrencyTypes.from}=${baseCurrencies.from}&${CurrencyTypes.to}=${baseCurrencies.to}`,
        ]}
      >
        <LocationTestHelper />
      </MemoryRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByRole('button'));

    expect(testLocation).toBe(
      `${CurrencyTypes.from}=${baseCurrencies.to}&${CurrencyTypes.to}=${baseCurrencies.from}`
    );
  });
});
