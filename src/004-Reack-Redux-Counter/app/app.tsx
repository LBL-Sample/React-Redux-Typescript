/// <reference path="./interfaces/interfaces.d.ts" />

import * as React from 'react';
import {Provider} from 'react-redux';
import * as ReactDom from 'react-dom';

import App from './containers/App';
import configureStore from './store/configureStore';

const initialState = {};
const store = configureStore(initialState);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
