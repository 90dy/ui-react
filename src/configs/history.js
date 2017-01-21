import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import store from './store';

// Create an enhanced history that syncs navigation events with the store
export default syncHistoryWithStore(browserHistory, store);
