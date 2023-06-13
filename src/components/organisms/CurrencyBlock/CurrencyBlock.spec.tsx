import { render, screen } from '@testing-library/react';
import { CurrencyBlock } from './CurrencyBlock';
import { formatDate } from '../../../helpers';

describe('CurrencyBlock', () => {
  it('renders children and formatted date correctly', () => {
    const mockChildren = <div>Mock Child</div>;
    const date = formatDate(new Date());

    render(<CurrencyBlock>{mockChildren}</CurrencyBlock>);

    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText('Mock Child')).toBeInTheDocument();
  });
});
