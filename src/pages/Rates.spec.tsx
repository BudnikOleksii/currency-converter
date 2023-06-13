import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Rates from './Rates';
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

const mockDispatch = vi.fn();
const mockAppSelector = vi.fn();
vi.mock('../app/hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => mockAppSelector,
}));

describe('Rates page', () => {
  test('renders Rates page and calls ratesLoadingStart on mount', async () => {
    // mockAppSelector.mockReturnValueOnce([1, 2]);
    render(
      <MemoryRouter initialEntries={['/rates']}>
        <Routes>
          <Route path="/rates" element={<Rates />} />
        </Routes>
      </MemoryRouter>
    );

    const currencyContainers = screen.getAllByText('CurrencyContainer');
    const currencySelect = screen.getAllByText('CurrencySelect');

    expect(currencyContainers).toHaveLength(1);
    expect(currencySelect).toHaveLength(1);
    expect(screen.getByTestId('CurrencyBlock')).toBeInTheDocument();
    expect(screen.getByTestId('AmountInput')).toBeInTheDocument();

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(ratesLoadingStart({ base: 'USD' }));
    });
  });
});
