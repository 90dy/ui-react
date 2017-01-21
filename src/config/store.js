import {
	createStore,
	combineReducers
} from 'redux';
import {routerReducer} from 'react-router-redux';

/*
import reducers from './reducers';
*/

const store = (process.env.NODE_ENV === 'development')
	? createStore(combineReducers({
//		...reducers,
		routing: routerReducer
	}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	: createStore(combineReducers({
//		...reducers,
		routing: routerReducer
	}));

export default store;
