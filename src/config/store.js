import {
	createStore,
	combineReducers
} from 'redux';
import {routerReducer} from 'react-router-redux';

import middleware from './middleware';

/*
import reducers from './reducers';
*/

const store = createStore(combineReducers({
//		...reducers,
		routing: routerReducer
	}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

export default store;
