import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CurrencyContainer } from './CurrencyContainer';

describe('CurrencyContainer', () => {
  test('renders CurrencyContainer and child element', () => {
    render(
      <CurrencyContainer background="#fff" color="#000">
        <div>Mock content</div>
      </CurrencyContainer>
    );

    const contentElement = screen.getByText('Mock content');
    expect(contentElement).toBeInTheDocument();
  });
});
