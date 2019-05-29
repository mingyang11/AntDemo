import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { Provider } from 'react-redux';
import createStore from './redux/store/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
