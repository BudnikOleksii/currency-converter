import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects';
import { RatesResponse, SymbolsResponse } from '../../types/currency';
import { getRates, getSymbols } from '../../api/currency';
import {
  ratesLoadingStart,
  ratesSuccess,
  symbolsLoadingStart,
  symbolsSuccess,
} from '../../features/currency/currency-slice';

export function* symbolsWorker(): Generator<StrictEffect, void, SymbolsResponse> {
  try {
    const { symbols } = yield call(getSymbols);

    yield put(symbolsSuccess(symbols));
  } catch (error) {
    // yield put(setError(error as IError));
  } finally {
    // yield put(finishAction(coursesLoadingStart.type));
  }
}

export function* ratesWorker(
  action: ReturnType<typeof ratesLoadingStart>
): Generator<StrictEffect, void, RatesResponse> {
  try {
    const { rates } = yield call(getRates, action.payload.cbase);

    yield put(ratesSuccess(rates));
  } catch (error) {
    // yield put(setError(error as IError));
  } finally {
    // yield put(finishAction(courseLoadingStart.type));
  }
}

function* currencySaga() {
  yield takeEvery(symbolsLoadingStart.type, symbolsWorker);
  yield takeEvery(ratesLoadingStart.type, ratesWorker);
}

export default currencySaga;
