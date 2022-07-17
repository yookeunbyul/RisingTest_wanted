import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//reducer 반영
import { Provider } from "react-redux";
// store 생성
import { createStore } from "redux";
import RootReducer from './store/reducers';

const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

