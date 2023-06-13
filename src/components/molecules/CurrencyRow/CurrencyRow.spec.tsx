import { render, screen } from '@testing-library/react';
import { CurrencyRow } from './CurrencyRow';
import { RatesObject } from '../../../types/currency';

describe('CurrencyRow', () => {
  it('renders the currency and rate correctly', () => {
    const mockRate: RatesObject = {
      currency: 'USD',
      rate: '1.2',
    };

    render(<CurrencyRow rate={mockRate} />);

    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('1.2')).toBeInTheDocument();
  });
});
