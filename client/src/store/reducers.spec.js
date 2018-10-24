import campaignsReducer from './reducers/campaigns';
import rootReducer from './reducers/root';

import {
  GET_CAMPAIGNS,
  SET_CAMPAIGNS,
  ADD_CAMPAIGN
} from './actions/types/campaigns'
import { ERROR } from './actions/types/root'

const campaigns = [ { id: 1 }, { id: 2 } ];
const message = 'Something went wrong';

describe("Store's reducers", () => {   
  let initialState;

  describe("'campaigns'", () => {
    beforeEach(() => {
      initialState = {
        list: [],
        isLoading: false
      };
    })

    test('should return the initial state if no state provided', () => {
      expect(campaignsReducer(undefined, {})).toEqual(initialState);
    });

    test("should set 'isLoading=true' when an action of type 'GET_CAMPAIGNS' has been dispatched", () => {
      expect(
        campaignsReducer(
          initialState,
          { type: GET_CAMPAIGNS }
        )).toEqual({ 
        ...initialState,
        isLoading: true
      });
    });

    test("should set 'isLoading=false' when an action of type 'SET_CAMPAIGNS' has been dispatched", () => {
      expect(
        campaignsReducer(
          initialState,
          { type: SET_CAMPAIGNS, payload: { campaigns: [] }}
        )).toEqual({ 
        ...initialState,
        isLoading: false
      });
    });

    test("should set campaigns list with a payload from an action of type 'SET_CAMPAIGNS'", () => {
      expect(
        campaignsReducer(
          initialState,
          { type: SET_CAMPAIGNS, payload: { campaigns }}
        )).toEqual({ 
        ...initialState,
        list: campaigns
      });
    });

    test("should add to campaigns list a payload from an action of type 'ADD_CAMPAIGN'", () => {
      const firstState = campaignsReducer(
        initialState,
        { type: ADD_CAMPAIGN, payload: { campaign: campaigns[0] }}
      );

      expect(firstState).toEqual({ 
        ...initialState,
        list: [ campaigns[0] ]
      });

      const secondState = campaignsReducer(
        firstState,
        { type: ADD_CAMPAIGN, payload: { campaign: campaigns[1] }}
      );

      expect(secondState).toEqual({ 
        ...firstState,
        list: campaigns
      });
    });
  });

  describe("'root'", () => {
    beforeEach(() => {
      initialState = {
        hasErrorOccured: false,
        errorMessage: ''
      };
    })

    test('should return the initial state if no state provided', () => {
      expect(rootReducer(undefined, {})).toEqual(initialState);
    });

    test("should set 'hasErrorOccured=true' when an action of type 'ERROR' has been dispatched", () => {
      expect(
        rootReducer(
          initialState,
          { type: ERROR, payload: { message: '' } }
        )).toEqual({ 
        ...initialState,
        hasErrorOccured: true
      });
    });

    test("should set an 'errorMessage' when an action of type 'ERROR' has been dispatched", () => {
      expect(
        rootReducer(
          initialState,
          { type: ERROR, payload: { message } }
        )).toEqual({ 
        ...initialState,
        hasErrorOccured: true,
        errorMessage: message
      });
    });
  }); 
});