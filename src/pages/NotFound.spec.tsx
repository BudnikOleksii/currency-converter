import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './NotFound';

describe('NotFound Page', () => {
  test('renders NotFound page', () => {
    render(<NotFound />);

    const contentElement = screen.getByText('Page not found');
    expect(contentElement).toBeInTheDocument();
  });
});
