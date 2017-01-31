import React, {Component} from 'react' ;
// import { Link } from 'react-router' ;

import Image from '../image/Image';

class Imagegrid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {images} = this.props;
        const imagelist = images.map(image => (
            <div className="image thumb" key={image.id}><Image image={image} isThumbnail={true} /></div>
        ));
        return <div className="image-grid">{imagelist}</div>;
    }

}

export default Imagegrid ;