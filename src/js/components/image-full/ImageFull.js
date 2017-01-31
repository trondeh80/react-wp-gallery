import React, {Component} from 'react' ;
import ReactDOM from 'react-dom' ;
import Hammer from 'hammerjs' ;
import {Link} from 'react-router' ;
import {connect} from 'react-redux' ;
import {push} from 'react-router-redux' ;

// import * as dispatchers from '../../dispatchers/' ;

class ImageFull extends Component {

    constructor(props) {
        super(props);
        this.previousImage = this.navigateImage.bind(this, -1);
        this.closeImage = this.closeImage.bind(this) ;
        this.nextImage = this.navigateImage.bind(this, 1);
        this.navigateImage = this.navigateImage.bind(this);
        this.state = {image: null};
    }

    componentDidMount() {
        this.hammer = new Hammer(ReactDOM.findDOMNode(this));
        this.hammer.add(new Hammer.Swipe({event: "leftSwipe", direction: Hammer.DIRECTION_LEFT}));
        this.hammer.add(new Hammer.Swipe({event: "rightSwipe", direction: Hammer.DIRECTION_RIGHT}));
        this.hammer.on('panleft panright swipe', ev => {
            // console.log('event: ', ev) ;
            if (ev.type === 'swipe' && ev.direction === Hammer.DIRECTION_LEFT && ev.isFinal) {
                this.previousImage(ev);
            } else if (ev.type === 'swipe' && ev.direction === Hammer.DIRECTION_RIGHT && ev.isFinal) {
                this.nextImage(ev);
            }
        });
    }

    componentWillMount() {
        this.setState({image: this.props.images.find(image => (image.id === Number(this.props.params.id)))});
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.image && nextProps.images) {
            this.setState({image: nextProps.images.find(image => (image.id === Number(this.props.params.id)))});
        }
    }

    navigateImage(dir, event) {
        let index = this.props.images.indexOf(this.state.image);
        const image = dir > 0 ? this.props.images[index === this.props.images.length - 1 ? 0 : ++index] :
            this.props.images[index === 0 ? this.props.images.length - 1 : --index];
        this.props.dispatch(push('/image/' + image.id));
        this.setState({
            image: image
        });
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }

    closeImage(e){
        this.props.dispatch(push('/'));
        e.stopPropagation();
    }

    render() {
        const {image} = this.state;
        if (!image) {
            return <div className="loading spinner icon"><span>Laster inn bilde...</span></div>;
        }
        return <div className="image fullsize dialog overlay" onClick={this.closeImage}>
            <div className="inner">
                <div className="image-container">
                    <img src={image.full} onClick={this.nextImage} />
                    <Link to="/" className="close-image">X</Link>
                    <div className="imagenav previous-image">
                        <button onClick={this.previousImage} className="btn-previous btn">Previous</button>
                    </div>
                    <div className="imagenav next-image">
                        <button onClick={this.nextImage} className="btn-next btn">Next</button>
                    </div>

                </div>
            </div>
        </div>;
    }

}

const mapStateToProps = state => ({
    images: state.app.images,
    isThumbnail: false
});

export default connect(mapStateToProps)(ImageFull) ;