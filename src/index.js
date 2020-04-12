import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './base/Main';
import './assets/scss/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// REDUX
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/index';


// SET REDUX STORE
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

// SET DEFAULT AXIOS
axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

if (process.env.REACT_APP_USE_TOKEN === 'true') {
    var token = window.localStorage.getItem('token');
    axios.defaults.headers[process.env.REACT_APP_TOKEN_HEADER_NAME] = token;
}

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);


// serviceWorker.unregister(); // UNCOMMENT TO REMOVE PWA || COMMENT THE REGISTER
// serviceWorker.register(); // UNCOMMENT FOR PWA