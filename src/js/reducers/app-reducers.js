import * as actions from '../actions';

const initialState = {
    selectedGallery: -1,
    images: [],
    isFetching: false,
    selectedImage: -1
};

export default function (state = initialState, action) {

    switch (action.type) {
        case actions.GET_IMAGES :
            return {...state, isFetching: true};
            break;

        case actions.GET_IMAGES_SUCCESS:
            return {...state, isFetching: false, images: action.images} ;
            break;

        default:
            return state;
    }

}