import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import API from '../api';
import * as actions from './actions';
import saga from './sagas';
import {
  GET_CAMPAIGNS,
  SET_CAMPAIGNS,
  GET_CAMPAIGN_BY_ID,
  ADD_CAMPAIGN
} from './actions/types/campaigns'
import { ERROR } from './actions/types/root'

jest.mock('../api');

const campaign = { id: 1 };
const campaigns = [ { id: 1 }, { id: 2 } ];
const message = 'Something went wrong';

describe("Store's action creators", () => {  
  let sagaMiddleware;
  let mockStore;
  let store;

  beforeEach(() => {
    sagaMiddleware = createSagaMiddleware();
    mockStore = configureMockStore([sagaMiddleware]);    
    store = mockStore({});    
    sagaMiddleware.run(saga);   
  });

  test("'getCampaigns()' resolves in 'GET_CAMPAIGNS'->'SET_CAMPAIGNS' actions upon successful requests", async () => {
    API.getCampaigns.mockImplementationOnce(() => Promise.resolve(campaigns));

    const expectedActions = [
      { type: GET_CAMPAIGNS },
      { type: SET_CAMPAIGNS, payload: { campaigns } }
    ];    

    await store.dispatch(actions.getCampaigns());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("'getCampaigns()' resolves in 'GET_CAMPAIGNS'->'ERROR' actions upon requests ended with errors", async () => {
    API.getCampaigns.mockImplementationOnce(() => Promise.reject(new Error(message)));

    const expectedActions = [
      { type: GET_CAMPAIGNS },
      { type: ERROR, payload: { message } }
    ];    

    await store.dispatch(actions.getCampaigns());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("'getCampaignById()' resolves in 'GET_CAMPAIGN_BY_ID'->'ADD_CAMPAIGN' actions upon successful requests", async () => {
    API.getCampaignById.mockImplementationOnce(() => Promise.resolve(campaign));

    const expectedActions = [
      { type: GET_CAMPAIGN_BY_ID, payload: campaign },
      { type: ADD_CAMPAIGN, payload: { campaign } }
    ];    

    await store.dispatch(actions.getCampaignById(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("'getCampaignById()' resolves in 'GET_CAMPAIGN_BY_ID'->'ERROR' actions upon requests ended with errors", async () => {
    API.getCampaignById.mockImplementationOnce(() => Promise.reject(new Error(message)));

    const expectedActions = [
      { type: GET_CAMPAIGN_BY_ID, payload: campaign },
      { type: ERROR, payload: { message } }
    ];    

    await store.dispatch(actions.getCampaignById(1));
    expect(store.getActions()).toEqual(expectedActions);
  });   
});