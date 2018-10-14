import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../api';
import actionTypes from '../actions/types';

function* getCampaigns() {
  try {
    const campaigns = yield call(API.getCampaigns);
    yield put({ type: actionTypes.SET_CAMPAIGNS, payload: { campaigns }});
  } catch (e) {
    yield put({ type: actionTypes.ERROR, message: e.message});
  }
}

export default function* () {
  yield takeLatest(actionTypes.GET_CAMPAIGNS, getCampaigns);
}