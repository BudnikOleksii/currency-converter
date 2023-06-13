import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import About from './About';

vi.mock('../components/organisms/AboutContent', () => ({
  AboutContent: () => <div data-testid="AboutContent">Mock About Content</div>,
}));

describe('About Page', () => {
  test('renders About page', () => {
    render(<About />);

    const contentElement = screen.getByTestId('AboutContent');
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.textContent).toBe('Mock About Content');
  });
});
