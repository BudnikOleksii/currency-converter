import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Home from './Home';
import { ratesLoadingStart } from '../features/currency/currency-slice';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
vi.mock('../components/organisms/CurrencyBlock', () => ({
  CurrencyBlock: ({ children }: Props) => <div data-testid="CurrencyBlock">{children}</div>,
}));
vi.mock('../components/atoms/CurrencyContainer', () => ({
  CurrencyContainer: ({ children }: Props) => <div>CurrencyContainer{children}</div>,
}));
vi.mock('../components/molecules/AmountInput', () => ({
  AmountInput: () => <div data-testid="AmountInput">AmountInput</div>,
}));
vi.mock('../components/molecules/CurrencySelect', () => ({
  CurrencySelect: () => <div>CurrencySelect</div>,
}));
vi.mock('../components/atoms/SwitchButton', () => ({
  SwitchButton: () => <div data-testid="SwitchButton">SwitchButton</div>,
}));
vi.mock('../components/organisms/ExchangeResults', () => ({
  ExchangeResults: () => <div data-testid="ExchangeResults">ExchangeResults</div>,
}));

const mockDispatch = vi.fn();
vi.mock('../app/hooks', () => ({
  useAppDispatch: () => mockDispatch,
}));

describe('Home Page', () => {
  test('renders Home page and calls ratesLoadingStart on mount', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );

    const currencyContainers = screen.getAllByText('CurrencyContainer');
    const currencySelect = screen.getAllByText('CurrencySelect');

    expect(currencyContainers).toHaveLength(2);
    expect(currencySelect).toHaveLength(2);
    expect(screen.getByTestId('CurrencyBlock')).toBeInTheDocument();
    expect(screen.getByTestId('AmountInput')).toBeInTheDocument();
    expect(screen.getByTestId('SwitchButton')).toBeInTheDocument();
    expect(screen.getByTestId('ExchangeResults')).toBeInTheDocument();

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(ratesLoadingStart({ base: 'USD' }));
    });
  });
});
