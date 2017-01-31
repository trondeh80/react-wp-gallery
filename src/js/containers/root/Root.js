import React from 'react' ;
import App from '../app/App' ;

const Root = (props) => (
    <div className="root-gallery">
        <App>
            {props.children}
        </App>
    </div>
);

export default Root ;

