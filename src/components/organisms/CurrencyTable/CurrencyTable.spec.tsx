import { render, screen } from '@testing-library/react';
import { CurrencyTable } from './CurrencyTable';
import { RatesObject } from '../../../types/currency';

vi.mock('../../molecules/CurrencyRow', () => ({
  CurrencyRow: ({ rate }: { rate: RatesObject }) => <tr>{rate.currency}</tr>,
}));

describe('CurrencyTable', () => {
  it('renders a row for each rate', () => {
    const mockRates = [
      { currency: 'USD', rate: '1.2' },
      { currency: 'EUR', rate: '0.9' },
    ];

    render(<CurrencyTable rates={mockRates} />);

    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('Rate')).toBeInTheDocument();

    mockRates.forEach((rate) => {
      expect(screen.getByText(rate.currency)).toBeInTheDocument();
    });
  });
});
