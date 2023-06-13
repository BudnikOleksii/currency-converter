import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from './Container';

describe('Container', () => {
  test('renders Container and child element', () => {
    render(
      <Container>
        <div>Mock content</div>
      </Container>
    );

    const contentElement = screen.getByText('Mock content');
    expect(contentElement).toBeInTheDocument();
  });
});
