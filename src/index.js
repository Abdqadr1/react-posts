import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import PostContextProvider from './context/postContext';

//for create redux store
// const store = createStore(rootReducer);

ReactDOM.render(
  <PostContextProvider>
    <App />
  </PostContextProvider>
  // {/* <Provider store={store}>
  //   for redux  store
  // </Provider>, */}
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
