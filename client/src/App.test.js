import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

const store = {
  getState: jest.fn().mockImplementation(() => ({
    root: {
      hasErrorOccured: false,
      errorMessage: ''
    },
    campaigns: {
      list: [],
      isLoading: false
    }
  })),
  dispatch: jest.fn(),
  subscribe: jest.fn()
}

describe('<App/>', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
