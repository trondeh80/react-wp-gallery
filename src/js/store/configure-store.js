import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk' ;
import { browserHistory } from 'react-router' ;
import { routerMiddleware } from 'react-router-redux' ;
import rootReducer from '../reducers/' ;

export default function configureStore(initialState) {

    const middleware = [
        thunk,
        routerMiddleware(browserHistory)
    ] ;

    if (process.env.NODE_ENV !== 'production') {
        /* eslint-disable global-require */
        middleware.push(require('redux-logger')()) ;
        /* eslint-enable global-require */
    }

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )) ;

}