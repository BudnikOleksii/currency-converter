import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

export const mockStore = configureMockStore();

export const renderWithProvider = (store: ReturnType<typeof mockStore>, ui: React.ReactElement) => {
  render(<Provider store={store}>{ui}</Provider>);
};
