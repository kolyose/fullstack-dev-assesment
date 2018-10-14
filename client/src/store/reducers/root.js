import { root as actionTypes } from '../actions/types';

const initialState = {
  hasErrorOccured: false,
  errorMessage: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR: {
      const { message } = action.payload;
      return {
        ...state,
        hasErrorOccured: true,
        errorMessage: message
      }
    }
    default: {
      return state;
    }
  }
}