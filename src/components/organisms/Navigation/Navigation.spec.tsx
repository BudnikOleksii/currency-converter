import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from './Navigation';
import { PATHS } from '../../../constants';

describe('Navigation', () => {
  it('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Currency converter')).toBeInTheDocument();

    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Rates')).toHaveAttribute('href', PATHS.rates);
    expect(screen.getByText('About')).toHaveAttribute('href', PATHS.about);
  });
});
