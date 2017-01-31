import { combineReducers } from 'redux' ;
import { routerReducer as routing } from 'react-router-redux' ;

import app from './app-reducers' ;

export default combineReducers({
    app,
    routing
}) ;