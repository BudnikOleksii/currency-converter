import { render, screen } from '@testing-library/react';
import { Page } from './Page';

describe('Page', () => {
  it('renders its children correctly', () => {
    render(
      <Page>
        <div>Test child</div>
      </Page>
    );

    expect(screen.getByText('Test child')).toBeInTheDocument();
  });
});
