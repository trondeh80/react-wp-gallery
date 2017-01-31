// Fetch our styles:
import '../less/main.less';

// import our react code
import React from 'react' ;
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import { Router, browserHistory } from 'react-router' ;
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configure-store';
import routes from './routes' ;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store) ;

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={history}/>
    </Provider>, document.getElementById('root')
);

