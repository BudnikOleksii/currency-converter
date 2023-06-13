import { render, screen } from '@testing-library/react';
import { AboutContent } from './AboutContent';

describe('AboutContent', () => {
  it('renders correctly', () => {
    render(<AboutContent />);

    expect(screen.getByText('Currency App')).toBeInTheDocument();
    expect(screen.getByText('This application offers you two main features:')).toBeInTheDocument();

    const linkElement = screen.getByText('exchangeratesapi.io');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://exchangeratesapi.io/');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
