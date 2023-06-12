import { RootState } from '../app/store';
import { mockRates, mockSymbols } from './currency';

export const mockActionType = 'ACTION_TYPE_1';
export const mockActionType2 = 'ACTION_TYPE_2';
export const mockCurrencyState = {
  symbols: mockSymbols,
  rates: mockRates,
};
export const mockActionsState = {
  error: null,
  actions: [mockActionType, mockActionType2],
  successMessage: null,
};

export const mockState: RootState = {
  currency: mockCurrencyState,
  actionsInfo: mockActionsState,
};
