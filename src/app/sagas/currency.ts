import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects';
import { RatesResponse, SymbolsResponse } from '../../types/currency';
import { getRates, getSymbols } from '../../api/currency';
import {
  ratesLoadingStart,
  ratesSuccess,
  symbolsLoadingStart,
  symbolsSuccess,
} from '../../features/currency/currency-slice';
import {
  finishAction,
  registerAction,
  setError,
} from '../../features/actions-info/actions-info-slice';
import { ErrorResponse } from '../../types/helper-types';

export function* symbolsWorker(): Generator<StrictEffect, void, SymbolsResponse> {
  try {
    yield put(registerAction(symbolsLoadingStart.type));

    const { symbols } = yield call(getSymbols);

    yield put(symbolsSuccess(symbols));
  } catch (error) {
    yield put(setError(error as ErrorResponse));
  } finally {
    yield put(finishAction(symbolsLoadingStart.type));
  }
}

export function* ratesWorker(
  action: ReturnType<typeof ratesLoadingStart>
): Generator<StrictEffect, void, RatesResponse> {
  try {
    yield put(registerAction(ratesLoadingStart.type));

    const { rates } = yield call(getRates, action.payload.base);

    yield put(ratesSuccess(rates));
  } catch (error) {
    yield put(setError(error as ErrorResponse));
  } finally {
    yield put(finishAction(ratesLoadingStart.type));
  }
}

function* currencySaga() {
  yield takeEvery(symbolsLoadingStart.type, symbolsWorker);
  yield takeEvery(ratesLoadingStart.type, ratesWorker);
}

export default currencySaga;
