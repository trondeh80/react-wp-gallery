import React from 'react' ;
import {Router, Route, IndexRoute} from 'react-router' ;

import Root from './containers/root/Root' ;
import IndexPage from './containers/index-page/IndexPage' ;
import Image from './components/image/Image' ;
import ImageFull from './components/image-full/ImageFull' ;

export default (
    <Router>
        <Route path="/" component={IndexPage}>
            <Route path="image/:id" component={ImageFull}/>
        </Route>
    </Router>
);