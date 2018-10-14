import { combineReducers } from 'redux';
import root from './root';
import campaigns from './campaigns';

export default combineReducers({
  root,
  campaigns
});