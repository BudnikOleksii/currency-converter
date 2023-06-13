import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loader />);

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toBeInTheDocument();
  });
});
