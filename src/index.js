import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/configureStore'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
