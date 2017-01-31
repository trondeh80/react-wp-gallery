import React, {Component} from 'react' ;
import Imagegrid from '../../components/imagegrid/Imagegrid' ;
import * as dispatchers from '../../dispatchers/' ;
import {connect} from 'react-redux' ;

class IndexPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestImages();
    }

    render() {
        const {images, isFetching, children} = this.props;
        return <div className="gallery">
            <Imagegrid isFetching={isFetching} images={images}/>
            {children}
        </div>;
    }

}

const mapStateToProps = state => ({
    isFetching: state.app.isFetching,
    images: state.app.images
});

const methodProps = {
    requestImages: dispatchers.requestImages
};

export default connect(mapStateToProps, methodProps)(IndexPage) ;