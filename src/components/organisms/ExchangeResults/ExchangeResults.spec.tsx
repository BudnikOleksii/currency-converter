import { render, screen } from '@testing-library/react';
import { ExchangeResults } from './ExchangeResults';

// Mock the hooks
vi.mock('react-router-dom', () => ({
  useSearchParams: () => [new URLSearchParams({ to: 'mocked to', amount: 'mocked amount' })],
}));

vi.mock('../../../app/hooks', () => ({
  useAppSelector: vi.fn((selector) => 'mocked results'),
}));

describe('ExchangeResults', () => {
  it('renders the results correctly', () => {
    render(<ExchangeResults />);

    // expect(screen.getByText('mocked results')).toBeInTheDocument();
  });
});
