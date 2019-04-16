import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers'
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const router = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();