import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import {
  setError,
  finishAction,
  registerAction,
} from '../../features/actions-info/actions-info-slice';
import { symbolsWorker, ratesWorker } from './currency';
import { getRates, getSymbols } from '../../api/currency';
import {
  symbolsLoadingStart,
  symbolsSuccess,
  ratesLoadingStart,
  ratesSuccess,
} from '../../features/currency/currency-slice';
import { mockRates, mockSymbols } from '../../mock-data';

describe('currencySaga', () => {
  const error = { name: 'name', code: 'Error', message: 'Message' };

  it('handles symbolsWorker saga', () => {
    const payload = Object.fromEntries(mockSymbols.map((symbol) => [symbol, symbol]));

    return expectSaga(symbolsWorker)
      .put(registerAction(symbolsLoadingStart.type))
      .provide([[call(getSymbols), { symbols: payload }]])
      .call(getSymbols)
      .put(symbolsSuccess(payload))
      .put(finishAction(symbolsLoadingStart.type))
      .run();
  });

  it('handles ratesWorker saga', () => {
    const base = 'USD';

    return expectSaga(ratesWorker, ratesLoadingStart({ base }))
      .put(registerAction(ratesLoadingStart.type))
      .provide([[call(getRates, base), { rates: mockRates }]])
      .call(getRates, base)
      .put(ratesSuccess(mockRates))
      .put(finishAction(ratesLoadingStart.type))
      .run();
  });

  it('handles error in symbolsWorker', () => {
    return expectSaga(symbolsWorker)
      .put(registerAction(symbolsLoadingStart.type))
      .provide([[call(getSymbols), throwError(error)]])
      .call(getSymbols)
      .put(setError(error))
      .put(finishAction(symbolsLoadingStart.type))
      .run();
  });

  it('handles error in ratesWorker', () => {
    const base = 'USD';

    return expectSaga(ratesWorker, ratesLoadingStart({ base }))
      .put(registerAction(ratesLoadingStart.type))
      .provide([[call(getRates, base), throwError(error)]])
      .call(getRates, base)
      .put(setError(error))
      .put(finishAction(ratesLoadingStart.type))
      .run();
  });
});
