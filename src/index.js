import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';

import {
	store,
	routes,
	history
} from './config';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>{routes}</Router>
	</Provider>,
	document.getElementById('root')
);

