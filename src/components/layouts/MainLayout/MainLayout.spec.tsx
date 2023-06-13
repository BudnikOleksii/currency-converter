import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MainLayout } from './MainLayout';
import { mockStore, renderWithProvider } from '../../../helpers';
import { vi } from 'vitest';
import { mockState } from '../../../mock-data';

vi.mock('../../molecules/NotificationsBlock', () => ({
  NotificationsBlock: () => <div data-testid="NotificationsBlock">NotificationsBlock</div>,
}));
vi.mock('../../organisms/Navigation', () => ({
  Navigation: () => <div data-testid="Navigation">Navigation</div>,
}));

vi.mock('react-hot-toast');

describe('MainLayout', () => {
  it('renders correctly and calls symbolsLoadingStart on mount', async () => {
    const store = mockStore(mockState);

    renderWithProvider(
      store,
      <MemoryRouter initialEntries={['/child']}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/child" element={<div>Child route</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('NotificationsBlock')).toBeInTheDocument();
    expect(screen.getByTestId('Navigation')).toBeInTheDocument();

    expect(screen.getByText('Child route')).toBeInTheDocument();
  });

  it('displays error toast when an error is present', async () => {
    const error = { message: 'Error message' };
    const store = mockStore({
      actionsInfo: { error },
    });

    renderWithProvider(
      store,
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(error.message);
    });
  });
});
