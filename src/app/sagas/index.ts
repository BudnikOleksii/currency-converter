import { all } from 'redux-saga/effects';
import currencySaga from './currency';

export default function* IndexSaga() {
  yield all([currencySaga()]);
}
