<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
>>>>>>> 5b8548def178c371abb536610edae710ef9e42cf

//style
import "./App.css";

//redux
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import mainReducer from './reducers/mainReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(mainReducer,composeEnhancer(applyMiddleware(thunk)));

//DOM
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
<<<<<<< HEAD
  </React.StrictMode>,
  document.getElementById('root')
);
=======
  </Provider>,
  document.getElementById("root")
);
>>>>>>> 5b8548def178c371abb536610edae710ef9e42cf
