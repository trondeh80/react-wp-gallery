import React, { Component } from 'react' ;
import { Link } from 'react-router' ;

class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {image, isThumbnail} = this.props;
        const imageDef = <img src={isThumbnail ? image.thumbnail : image.full} />;
        return <div className="image-card">
            <div className="image-container">
                {isThumbnail  ? <Link to={`/image/${image.id}`}>{imageDef}</Link> : {imageDef}}
            </div>
            {/*<div className="action"></div>*/}
        </div>
    }
}

export default Image;