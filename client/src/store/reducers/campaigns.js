import actionTypes from '../actions/types';

const initialState = {
  list: [],
  isLoading: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAMPAIGNS: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionTypes.SET_CAMPAIGNS: {
      const { campaigns } = action.payload;
      return {
        ...state,
        isLoading: false,
        list: campaigns
      }
    }
    default: {
      return state;
    }
  }
}