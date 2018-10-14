import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../api';
import * as actionTypes from '../actions/types';

function* getCampaigns() {
  try {
    const campaigns = yield call(API.getCampaigns);
    yield put({ type: actionTypes.campaigns.SET_CAMPAIGNS, payload: { campaigns }});
  } catch (e) {
    const { message } = e;
    yield put({ type: actionTypes.root.ERROR, payload: { message }});
  }
}

export default function* () {
  yield takeLatest(actionTypes.campaigns.GET_CAMPAIGNS, getCampaigns);
}